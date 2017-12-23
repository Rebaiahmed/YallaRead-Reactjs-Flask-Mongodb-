import React, { Component } from 'react';

import { DatePicker } from 'react-mdl-datepicker';
import moment from 'moment';
import { MDLSelectField } from 'react-mdl-select';
import { GoogleMap, Marker } from "react-google-maps"

import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Snackbar ,Cell ,FABButton ,Textfield, Tabs,Tab ,RadioGroup , Radio} from 'react-mdl';

import axios from 'axios' ;

const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>





class ProfileInformation extends Component {


  constructor(props) {
    super(props);
    this.state = {  user :{},activeTab:0, cities :[{
      code :1 ,name :"Bizerte"}, {
        code :2 ,name :"Tunis"}
    ] , prenom :'' , nom :'',datenaissance : new Date(),adresse :'',isSnackbarActive: false};

//*******************************//
this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);

this.onChangeName = this.onChangeName.bind(this);
this.onChangePrenom = this.onChangePrenom.bind(this);
this.onChangeAdresse = this.onChangeAdresse.bind(this);

  }


//***********ComponentDidMount**********//

componentWillMount()
{

  console.log("Proifle" +    localStorage.getItem('iUser'));
  //***here we will get profile information

  axios.get(`http://127.0.0.1:5000/users/profile`,
    {
    params: {
      uid: localStorage.getItem('iUser')
    }
  }).then(function(data){
    console.log("data" + JSON.stringify(data));

    this.setState({user:data.data.result.user})

  }).catch(function (err) {
     console.log("err" + JSON.stringify(err));
  })
}

//***************************************//

handleShowSnackbar() {
   this.setState({
     isSnackbarActive: true,
     btnBgColor: '#' +
       Math.floor(Math.random() * 0xFFFFFF).toString(16)
   });
 }



 //***************************************//
 handleTimeoutSnackbar() {
   this.setState({ isSnackbarActive: false });
 }


 //***************************************//
 handleClickActionSnackbar() {
   this.setState({
     btnBgColor: ''
   });
 }


//****************************************************//
onChangeName(event) {
        this.setState({nom: event.target.value});
    }

    onChangePrenom(event) {
            this.setState({prenom: event.target.value});
        }


onChangeAdresse(event)
{
    this.setState({adresse: event.target.value});
}









//*************FUNCTION TO MODIFY PROFILE**********************//

modifyProfile = () =>{

  console.log("clicked to modify profile");
  let idUser =  localStorage.getItem('iUser') ;
let { nom,prenom,datenaissance, ville, adresse} = this.state ;
console.log("data ville"+ ville);
            axios.post('http://127.0.0.1:5000/users/profilemodify', {
            iduser :idUser,
            firstName : nom ,
            lastname : prenom ,
            birthday : datenaissance,
            ville : "Bizerte" ,
            adresse : adresse
           })
           .then(function (response) {
             console.log(response);
             //this.context.router.transitionTo('/');
             this.handleShowSnackbar();
           })
           .catch(function (error) {
             console.log(error);
           });


}


  render() {

    const { user} = this.state ;
     const {  isSnackbarActive } = this.state;
    return (
      <div>
       <h4> Mes Informations Personnels </h4>

       <Grid className="demo-grid-2">
            <Cell col={2}></Cell>
            <Cell col={10}>




   <Grid className="demo-grid-2">
              <div className="mdl-textfield mdl-js-textfield">
              <Textfield
              onChange={this.onChangePrenom}
              label="Prénom..."
              floatingLabel
              style={{width: '200px'}}
              value={this.state.prenom}

            />
              </div>

  </Grid>

<br />


<Grid className="demo-grid-2">
           <div className="mdl-textfield mdl-js-textfield">
           <Textfield
           label="Nom..."
           floatingLabel
           style={{width: '200px'}}
           onChange={this.onChangeName}
           value={this.state.nom}
         />
           </div>

</Grid>










<Grid className="demo-grid-2">
           <div className="mdl-textfield mdl-js-textfield">
           <RadioGroup name="demo" value="Homme">
       <Radio value="Homme" ripple>Homme</Radio>
       <Radio value="Femme">Femme</Radio>
   </RadioGroup>

           </div>

</Grid>




<Grid className="demo-grid-2">
           <div className="mdl-textfield mdl-js-textfield">
           <MDLSelectField
         label="Ville"
         value={this.state.ville}
         autocomplete
         floatingLabel
          onChange={() => {}}
         items={this.state.cities}
         keyField="code"
         valueField="name"
       />
           </div>

</Grid>


<Grid className="demo-grid-2">
           <div className="mdl-textfield mdl-js-textfield">
           <Textfield
           onChange={this.onChangeAdresse}
           label="Adresse..."
           floatingLabel
           style={{width: '200px'}}
           value ={this.state.adresse}
         />
           </div>

</Grid>





              <CardActions border>
            <Button raised accent type="submit" ripple onClick={this.modifyProfile}>Modifier Votre Profile</Button>
                 </CardActions>









            </Cell>
        </Grid>

        <Snackbar
                active={isSnackbarActive}
                onClick={this.handleClickActionSnackbar}
                onTimeout={this.handleTimeoutSnackbar}
                action="Undo">Button color changed.</Snackbar>


      </div>
    );
  }
}

export default  ProfileInformation;
