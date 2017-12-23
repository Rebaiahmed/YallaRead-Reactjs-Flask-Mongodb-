import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//***********import necesary component ***********//
import Navbar from './Components/Navbar'
import NavbarAuth from './Components/NavbarAuthenticated'
import FooterComponent from './Components/Footer'
import { browserHistory,hashHistory } from 'react-router'
import { Layout , Content  } from 'react-mdl';

import {provider, auth , storageKey } from './client';
import axios from 'axios' ;

class App extends Component {



  constructor(props) {
    super(props);
    this.state = { user :null,auth : false };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }



//*************************/:
componentDidMount() {

  auth().onAuthStateChanged(user => {
    console.log("we rer heher");
    if (user) {
      console.log("there is a user");
      window.localStorage.setItem(storageKey, user.uid);
      this.setState({auth : true});
    } else {
      console.log("no user");
      window.localStorage.removeItem(storageKey);
      this.setState({auth:false});
    }
  });
}



//****************Define the LOgin Function *****************//

login = () => {


   auth().signInWithPopup(provider)
   .then(function(data){
          console.log("data" + JSON.stringify(data.user.uid));
            //this.setState({user: data.user.uid});

          axios.post('http://127.0.0.1:5000/signin', {
            uid : data.user.uid ,
           displayName :data.user.displayName,
           photoUrl :data.user.photoUrl,
           email :data.user.email,
           phoneNumber :data.user.phoneNumber,
         })
         .then(function (response) {
           console.log("data server" + JSON.stringify(response));
           //this.context.router.transitionTo('/');
           /*localStorage.setItem('iUser', response.data);
           browserHistory.push('/Dashboard');*/
         })
         .catch(function (error) {
           console.log(error);
         });



   }).catch(function(err){
     console.log("err"  + err);
   })
  //this.setState({user: result.user});*/
}



//****************Define LogOut Function***********************//
logout = () => {

console.log("clicked logout");
browserHistory.push('/Dashboard');
//Alert.alert("hshshshshshsh")

}






  render() {


    let { auth} = this.state ;



    let navbar = null;
       if (auth==true) {
         navbar = <NavbarAuth login ={this.login} />
       } else {
         navbar = <Navbar logout ={this.logout} />
       }

    return (
      <div className="demo-big-content">
      <Layout>
 { navbar }



       <Content>
                  <div className="page-content" />
                    {this.props.children}
  </Content>

       <FooterComponent/>
       </Layout>
      </div>
    );
  }
}

export default App;
