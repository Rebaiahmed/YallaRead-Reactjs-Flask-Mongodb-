import React, { Component } from 'react';
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton ,Textfield, Tabs,Tab } from 'react-mdl';
import ProfileInformation from '../Components/ProfileInformation';
import PreferenceBooks from '../Components/PreferenceBooks' ;
import axios from 'axios' ;






class Profile extends Component {





  constructor(props) {
    super(props);
    this.state = {  user :{},activeTab:0 };
  }



//***************************//


componentWillMount()
{


  //***here we will get profile information

  axios.get(`http://127.0.0.1:5000/users/profile`,
    {
    params: {
      uid: localStorage.getItem('iUser')
    }
  }).then(function(data){
    console.log("data" + JSON.stringify(data));

    this.setState({user:data.result.user})

  }).catch(function (err) {
     console.log("err" + JSON.stringify(err));
  })
}





ComponentDidMount()
{

}





ModifyPorifle =() =>
{
  console.log("ehere we wil modify profile");
}







  render() {


     let content = null;
    let idTab = this.state.activeTab  ;
    const { user} = this.state ;
    if(this.state.activeTab==0){
   content = <ProfileInformation />
    }else{
  content = <PreferenceBooks />
        }

    return (
      <Card shadow={0} style={{width: '1024px', margin: 'auto'}}>
    <CardTitle>Welcome Mr { user.displayName }</CardTitle>
    <div className="demo-tabs">
                  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                      <Tab>Mon Profile</Tab>
                      <Tab>Préference de Lecture</Tab>

                  </Tabs>
                  <section>
                { content }
                  </section>
    </div>



</Card>
    );
  }
}

export default Profile ;
