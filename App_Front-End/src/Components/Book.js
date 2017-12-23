import React, { Component } from 'react';
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton,Snackbar } from 'react-mdl';

import {auth  } from '../client';

import axios from 'axios' ;

class Book extends Component {




  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
  this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
  this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
    this.state = { isSnackbarActive: false,auth : false,user :{}, msg :'',
  contained :false};
  }




//*********************************//

componentWillMount() {
  let { book} = this.props ;
  auth().onAuthStateChanged(user => {

    if (user) {

      //window.localStorage.setItem(storageKey, user.uid);
      this.setState({auth : true});
    } else {

      //window.localStorage.removeItem(storageKey);
      this.setState({auth:false});
    }
  });

//*****************GET USER INFORMATION***********************//
//console.log("Proifle" +    localStorage.getItem('iUser'));
//***here we will get profile information

axios.get(`http://127.0.0.1:5000/users/profile`,
  {
  params: {
    uid: localStorage.getItem('iUser')
  }
}).then((data)=>{
  console.log("data user " + JSON.stringify(data.data.result.user));
let  user = JSON.parse(data.data.result.user);
   console.log("user" + user.books);
   console.log("book contained" + user.books.indexOf(book.id));
   if( user.books.indexOf(book.id)==-1)
   {
    this.setState({contained :false})
   }else{
       this.setState({contained :true})
   }
  //this.setState({user:data.result.user})
  //console.log('boks' + this.state.user.books);

}).catch(function (err) {
   console.log("err" + JSON.stringify(err));
})
//***********************//






}



//***************Check if the Book is Added to my library

Check()
{


  axios.get(`http://127.0.0.1:5000/users/profile`,
    {
    params: {
      uid: localStorage.getItem('iUser')
    }
  }).then(function(data){
    console.log("data user " + JSON.stringify(data));
 let user = data.result.user ;

    //console.log('boks' + this.state.user.books);

  }).catch(function (err) {
     console.log("err" + JSON.stringify(err));
  })
  //***********************//

}











//*************************************//







AddToMyLibrary = () => {
const { auth} = this.state ;
let { book} = this.props ;
const {user} = this.state ;

//*****GET CURRENT USER**************//
if(auth==false){
  this.handleShowSnackbar("Vous n'etes Pas Authentifiée")
}
//****if there is no User thenn dipslay msg error
else{

     var idUser = localStorage.getItem('iUser') ;
     var idBook = book.id ;

            axios.get('http://127.0.0.1:5000/users/AddBook',
            {
              params:
              {
            idbook :idBook,
            iduser :idUser
               }
           })
           .then((data)=> {
            // console.log("data server" + JSON.stringify(response));
             this.handleShowSnackbar("Le Livre est Ajouté a votre Bibliothéque")
             //this.context.router.transitionTo('/');
             /*localStorage.setItem('iUser', response.data);
             browserHistory.push('/Dashboard');*/
           })
           .catch(function (error) {
             console.log(error);

           });



}
//****else added book to library

}



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



/*
<FABButton colored ripple>
<Icon name="check_circle" />
</FABButton>
</Cell>*/


  render() {
    let { book} = this.props ;
    let imgsrc = book.image ;
    const {  isSnackbarActive,contained } = this.state;
     const {auth , msg , user} = this.state ;
 let button = null;

 console.log("contained" + contained);
if(contained==true){
  button =<FABButton colored ripple onClick={this.AddToMyLibrary}>
  <Icon name="check_circle" />
  </FABButton>
}else{
  button =<FABButton colored ripple onClick={this.AddToMyLibrary}>
  <Icon name="add" />
  </FABButton>
}



    return (
      <div>
      <Card shadow={0} style={{width: '220px', width :'512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + imgsrc + ') center / cover' }}>{book.title}</CardTitle>
    <CardText>
        { book.description}
    </CardText>

    <CardText>
      { book.author}
    </CardText>
    <CardActions border>

    <Grid className="demo-grid-1">

           <Cell col={10}>
           { button }
           </Cell>



           <Cell col={2}>
             <Tooltip label={<span>Share your content<br />via social media</span>}>
             <Icon name="share" />
             </Tooltip>
           </Cell>

       </Grid>




    </CardActions>

</Card>
<br />
<br />
<br />

<Snackbar
         active={isSnackbarActive}
         onClick={this.handleClickActionSnackbar}
         onTimeout={this.handleTimeoutSnackbar}
         action="Undo">{ msg}.</Snackbar>
</div>
    );
  }
}

export default  Book;
