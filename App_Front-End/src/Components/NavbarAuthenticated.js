import React, { Component } from 'react';
import { Link } from 'react-router'
import { Layout, Drawer, Navigation ,Content,Header, MenuItem, Menu ,IconButton,Button,Icon} from 'react-mdl';

import {provider, auth} from '../client';

import { browserHistory,hashHistory } from 'react-router'



class NavbarAuth  extends Component {






  constructor(props) {
    super(props);
    this.state = { user :null };
  }



  componentDidMount()
  {
    //console.log( "authenticatedd navbar" +JSON.stringify(this.props));
  }



  logout = () => {

  console.log("clicked logout");
  auth().signOut().then(function() {
    // Sign-out successful.
    browserHistory.push('/Books')
  }, function(error) {
    // An error happened.
  });

  }




  render() {
    return (
  <div>
        <Header title={<span><span style={{ color: '#ddd' }}></span><strong>YallaRead</strong></span>}>
            <Navigation>
                <a href="#"> <Link to='/Home'> <Button raised accent ripple>Acceuil </Button></Link></a>
                <a href="#"><Link to='/Books'><Button raised accent ripple>Touts Livres </Button> </Link></a>

  <a href="#"><Link to='/Dashboard'><Button raised accent ripple>Tableau de Bord </Button> </Link></a>

    <a href="#"><Link to='/Notifications'><Button raised accent ripple>Notifications</Button> </Link></a>
    <a href="#"><Link to='/Profile'><Button raised accent ripple>Profile</Button> </Link></a>



     <a href="#"> <Button onClick={this.logout} raised colored>Logout</Button> </a>




                <a href="#">
                <Link to='/MyLibrary'> <Button raised accent ripple> Ma Bibliothéque
                 <Icon name="library_books" />
                 </Button>
                 </Link>
                  </a>
            </Navigation>
        </Header>

</div>

    );
  }
}

export default  NavbarAuth;
