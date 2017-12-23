import React, { Component } from 'react';

import Book from '../Components/Book'
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton ,Textfield,ProgressBar,Spinner,Checkbox,RadioGroup,Radio,Snackbar } from 'react-mdl';
import  _ from 'lodash' ;
import Categories from '../Components/Categories' ;
import Cities from '../Components/cities' ;

import DatePicker from 'react-date-picker';

import axios from 'axios' ;


class Demande extends Component {





  constructor(props) {
    super(props);
    this.state = {  startDate : new Date(), endDate : new Date() , books :[],
    ville :'',isSnackbarActive: false };

    this.CreateExchange = this.CreateExchange.bind(this);
    //*************************************************************//
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
    //************************************************************//
  }


  //*************************/:
   componentDidMount() {

//**********GET THE BOOKS THROUGHT REST API GET METHOD************//


  }




//**********************************//












//************ONCHANGE*************************//
  onChange1 = (date) =>
  {
    this.setState({ startDate:date })
  }



  //************ONCHANGE2*************************//
    onChange2 = (date) =>
    {
      this.setState({ endDate:date })
    }



    onChange3 = (e) =>
    {
      console.log("cliked" + e.target.value);
      this.setState({ ville : e.target.value })
    }




//**************CREATE EXCHANGE***************//

CreateExchange =(e,id) =>{

  console.log("exchange" + e + " " + id);

  let { ville , startDate, endDate} = this.state ;
  //***********GET user Id******************//
  let idUser =  localStorage.getItem('iUser') ;

console.log("clicked" + ville + " " + startDate + " " + endDate
+" " + idUser + "book" + id);
 this.handleShowSnackbar("Votre Demande est Crée")

axios.post('http://127.0.0.1:5000/CreateDemande',
{

idbook :id,
iduser :idUser,
ville : ville,
startDate : startDate,
endDate :endDate
   
})
.then(function (response) {
 console.log("data server" + JSON.stringify(response));
 this.handleShowSnackbar("Votre Demande est Crée")

 //browserHistory.push('/Dashboard');
})
.catch(function (error) {
 console.log(error);

});

}




//*******************************************//

handleShowSnackbar(msg) {
    this.setState({
      msg : msg,
      isSnackbarActive: true,
      btnBgColor: '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16)
    });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  handleClickActionSnackbar() {
    this.setState({
      btnBgColor: ''
    });
  }
//***************************************************/:







  render() {

const { wait,books } = this.state ;
//const items = [{name: "item1", id: 1}, {name: "item2", id: 2}, {name: "item3", id: 3}] ;

  const {  isSnackbarActive } = this.state;
const numbers = [1, 2, 3, 4, 5];
const listItems = books.map((book) =>
<div key={book.id}>
  <Book book={book} />

</div>

);



    return (
      <div>


<Grid className="demo-grid-2">


<Cell col={4}>
</Cell>


<Cell col={4}>

       <Textfield
            onChange={event => {this.setState({searchquery: event.target.value})}}
           label="Expandable Input"
           expandable
           expandableIcon="search"
           onKeyDown={this.Search}
       />
</Cell>

<Cell col={4}>
</Cell>



</Grid>


      <Grid className="demo-grid-2" >
             <Cell col={8}>

             {wait==true ? (
       <Spinner singleColor />
     ) :







      (

        <div>

<Grid>

<Cell col={4}>


<Card shadow={0} style={{width: '220px', width :'312px', margin: 'auto'}}>
<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51EgaP7iWAL._SX341_BO1,204,203,200_.jpg) center / cover' }}>Zeus: A Journey Through Greece in the Footsteps of a God</CardTitle>
<CardText>
Lusty, lightning-tempered, polyamorous Zeus was the most powerful and charismatic of the Greek gods, and the progenitor of some of the most enduring stories of world mythology
</CardText>

<CardText>
Stone, Tom
</CardText>
<CardActions border>

<Grid className="demo-grid-1">

     <Cell col={10}>
     <FABButton colored ripple
     onClick={(e) => this.CreateExchange(e, '5a31cff270a1851a46ca2109')}>
     <Icon name="exit_to_app" />
     </FABButton>
     </Cell>





 </Grid>




</CardActions>

</Card>


</Cell>


<br/>
<br/>
<br/>

<Cell col={2}>

</Cell>



<Cell col={4}>

<Card shadow={0} style={{width: '220px', width :'312px', margin: 'auto'}}>
<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.gr-assets.com/books/1368812217l/17152735.jpg) center / cover' }}>Python Cookbook</CardTitle>
<CardText>
Demonstrates the programming language s strength as a Web development tool, covering syntax,
data types, built-ins, the Python standard module
library, and real-world examples.
</CardText>

<CardText>
David Ascher
</CardText>
<CardActions border>

<Grid className="demo-grid-1">

     <Cell col={10}>
     <FABButton colored ripple
      onClick={(e) => this.CreateExchange(e, '5a29dba403600245bd37c385')}>
     <Icon name="exit_to_app" />
     </FABButton>
     </Cell>





 </Grid>




</CardActions>

</Card>

</Cell>



</Grid>




<Grid className="demo-grid-1">
<Cell col={4}>

<Card shadow={0} style={{width: '220px', width :'312px', margin: 'auto'}}>
<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.gr-assets.com/books/1386922999l/19425704.jpg) center / cover' }}>The Cleaner - John Milton #1 (John Milton Series)</CardTitle>
<CardText>
It’s impossible not to think of Lee Child’s super-selling Jack Reacher.
</CardText>

<CardText>
Audible Narration
</CardText>
<CardActions border>

<Grid className="demo-grid-1">

     <Cell col={10}>
     <FABButton colored ripple
       onClick={(e) => this.CreateExchange(e, '5a31d56970a1851a46ca210a')}>
     <Icon name="exit_to_app" />
     </FABButton>
     </Cell>




 </Grid>




</CardActions>

</Card>



</Cell>

 </Grid>







        </div>






     )}


             </Cell>


             <Cell col={4}>



             <table class="mdl-data-table mdl-js-data-table">


               <thead>
                 <tr>
                  <th className="mdl-data-table__cell--non-numeric">Période</th>
                 </tr>
               </thead>



               <tbody>

               <tr>
                 <td className="mdl-data-table__cell--non-numeric">
                 <div>
                  <DatePicker
                onChange={this.onChange1}
                value={this.state.startDate}
                          />
                      </div>

                 </td>
               </tr>



               <tr>
                 <td className="mdl-data-table__cell--non-numeric">
                 <div>
                  <DatePicker
                onChange={this.onChange2}
                value={this.state.endDate}
                          />
                      </div>

                 </td>
               </tr>






               </tbody>
             </table>








                          <table class="mdl-data-table mdl-js-data-table">


                            <thead>
                              <tr>
                               <th className="mdl-data-table__cell--non-numeric">Villes</th>
                              </tr>
                            </thead>



                            <tbody>

                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">
                              <RadioGroup container="ul" childContainer="li"
                              name="demo2" value={this.state.ville}   onChange={this.onChange3}>
                               <Radio value="Tunis" ripple>Tunis</Radio>
                                <Radio value="Bizerte">Bizerte</Radio>
                                <Radio value="Manouba">Manouba</Radio>
                               </RadioGroup>

                              </td>
                            </tr>










                            </tbody>
                          </table>




























           <br />
           <br />



             </Cell>

         </Grid>

         <Snackbar
                  active={isSnackbarActive}
                  onClick={this.handleClickActionSnackbar}
                  onTimeout={this.handleTimeoutSnackbar}
                  action="Undo">Votre Demande est Crée Avec Succée.</Snackbar>
      </div>
    );
  }
}

export default Demande;
