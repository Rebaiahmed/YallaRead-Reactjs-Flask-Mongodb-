import React, { Component } from 'react';
import { Link } from 'react-router'
import { Layout, Drawer, Navigation ,Content,Header ,Button} from 'react-mdl';
import firebase from 'firebase';
import { browserHistory,hashHistory } from 'react-router'
import {provider, auth} from '../client';
import axios from 'axios' ;



class Navbar extends Component {





  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.login = this.login.bind(this);
  }


componentDidMount()
{
  console.log(JSON.stringify(this.props));
}


login = () => {

       auth().signInWithPopup(provider)
       .then(function(data){

                //this.setState({user: data.user.uid});

              axios.post('http://127.0.0.1:5000/signin', {
                uid : data.user.uid ,
               displayName :data.user.displayName,
               photoUrl :data.user.photoUrl,
               email :data.user.email,
               phoneNumber :data.user.phoneNumber,
             })
             .then(function (response) {
               console.log("response" + response.data.result.user);
               localStorage.setItem('iUser', response.data.result.user);
               //this.context.router.transitionTo('/');
               browserHistory.push('/Dashboard');
             })
             .catch(function (error) {
               console.log(error);
             });



       }).catch(function(err){
         console.log("err"  + err);
       })
  }







  render() {
    return (

<div>
        <Header title={<span><span style={{ color: '#ddd' }}></span><strong>YallaRead</strong></span>}>
            <Navigation>
                <a href="#"><Link to='/Home'>  <Button raised accent ripple> Acceuil </Button></Link></a>
                <a href="#"><Link to='/Books'><Button raised accent ripple> Toutes Livres </Button> </Link></a>
                <a href="#"> <Button raised accent ripple onClick={this.login} >Login Avec Facebook </Button> </a>
            </Navigation>
        </Header>


</div>

    );
  }
}

export default  Navbar;
