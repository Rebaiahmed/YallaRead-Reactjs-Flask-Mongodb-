import React, { Component } from 'react';
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton, Textfield } from 'react-mdl';

class Register extends Component {






  constructor(props) {
    super(props);
    this.state = {  books :[] };
  }



  LoginWithFacebook()
  {
    //***here we will login with ffacebook
  }




//**********function to signup***************//


SignUp()
{

}


  render() {
    return (
      <div>
      <Grid className="demo-grid-2">


      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
  <CardText>
<Button raised colored>Se Connecter Avec Facebook  <Icon name="add" /> </Button>
</CardText>

<hr/>


<form action="#">
  <div className="mdl-textfield mdl-js-textfield">
  <Textfield
  onChange={() => {}}
  label="Email..."
  floatingLabel
  style={{width: '200px'}}
/>
  </div>


  <div className="mdl-textfield mdl-js-textfield">
  <Textfield
  onChange={() => {}}
  label="Password..."
  floatingLabel
  style={{width: '200px'}}
/>
  </div>


  <CardActions border>
<Button raised accent ripple>Creér Un Nouveau Compte </Button>
     </CardActions>


</form>

      </Card>





      </Grid>



      </div>
    );
  }
}

export default Register ;
