import React, { Component } from 'react';
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton,Snackbar } from 'react-mdl';

class Home extends Component {





  render() {
    return (
      <div>
<br />
<br/>
<br/>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?w=940&h=650&auto=compress&cs=tinysrgb) center / cover'}}>Welcome</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
              <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
      </Card>






      </div>
    );
  }
}

export default Home;
