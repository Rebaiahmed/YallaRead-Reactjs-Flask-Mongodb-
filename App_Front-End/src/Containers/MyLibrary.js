import React, { Component } from 'react';
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton ,Textfield, Tabs,Tab } from 'react-mdl';
import { browserHistory,hashHistory } from 'react-router'
import axios from 'axios' ;








class MyLibrary extends Component {





  constructor(props) {
    super(props);
    this.state = {   };
    this.AddBook = this.AddBook.bind(this);
  }




ComponentDidMount()
{
  //***here we will get profile information
}



AddBook =()=>{
  console.log("clicked clicked");
    browserHistory.push('/Demande')
}







  render() {

    return (
      <div>
    <h1> Ma Biblithéque </h1>




    <Grid className="demo-grid-1">
           <Cell col={4}>
           <Card shadow={0} style={{width: '312px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?w=940&h=650&auto=compress&cs=tinysrgb) center / cover'}}>Welcome</CardTitle>
               <CardText>
                  <h3> Nom Prénom </h3>
                  <hr />

               </CardText>


               <CardText>
                  <p> <b> Note de Confiance </b> : 0 </p>
                  <hr />

               </CardText>


               <CardText>
                  <p> <b>Nombre d echanges Prets </b> : 10  </p>
                  <hr />

               </CardText>

               <CardText>
                  <p> <b> Membre Depuis </b> : date  </p>
                  <hr />

               </CardText>



               <CardText>
                  <p> <b>Age </b> : date  </p>
                  <hr />

               </CardText>


               <CardText>
                  <p> <b>Ville </b> : date  </p>
                  <hr />

               </CardText>


               <CardText>
                  <p><b> Occupation </b> : Etudiant  </p>
                  <hr />

               </CardText>


               <CardText>
                  <p> <b>Emplacment </b> : date  </p>


               </CardText>






           </Card>

           </Cell>



<Cell col={6}>

   <Card shadow={0} style={{width: '812px', margin: 'auto'}}>

               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/545049/pexels-photo-545049.jpeg?w=940&h=650&auto=compress&cs=tinysrgb) center / cover'}}>Welcome</CardTitle>


               <CardActions border>
               <Button raised accent onClick={this.AddBook} >Ajouter un Livre  <Icon name="add" /> </Button>
              </CardActions>


   <CardText>
   <p> Bienvenue à votre bibliothèque, Rebai.
Vous pouvez désormais créer votre bibliothèque en cliquant sur le bouton « Ajouter un livre » au dessus pour ajouter les livres que vous avez chez vous !
Veuillez ajouter au moins un livre pour pouvoir envoyer des demandes d'échange. </p>


   </CardText>



   <CardText>
   <h3><b> Notes & Commentaires des autres membres </b> </h3>
   Vous n'avez encore reçu aucun commentaire.


   </CardText>

   </Card>



</Cell>

       </Grid>


  </div>



    );
  }
}

export default  MyLibrary ;
