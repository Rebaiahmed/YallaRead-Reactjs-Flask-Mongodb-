import React, { Component } from 'react';
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton ,Textfield, Tabs,Tab , TableHeader, Table, DataTable,
Switch} from 'react-mdl';

import { Notification} from 'react-web-notification';

window.React = React;

class Notifications extends Component {





  constructor(props) {
    super(props);
    this.state = { notifications :[] };

  //*******************************//
  this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
  this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
  this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);

  }




  //***********ComponentDidMount**********//

  ComponentDidMount()
  {

//*********GET LIST OF NITIFICATIONS, note_confiance ,
  }




  handlePermissionGranted(){
     console.log('Permission Granted');
     this.setState({
       ignore: false
     });
   }
   handlePermissionDenied(){
     console.log('Permission Denied');
     this.setState({
       ignore: true
     });
   }
   handleNotSupported(){
     console.log('Web Notification not Supported');
     this.setState({
       ignore: true
     });
   }

   handleNotificationOnClick(e, tag){
     console.log(e, 'Notification clicked tag:' + tag);
   }

   handleNotificationOnError(e, tag){
     console.log(e, 'Notification error tag:' + tag);
   }

   handleNotificationOnClose(e, tag){
     console.log(e, 'Notification closed tag:' + tag);
   }

   handleNotificationOnShow(e, tag){
     this.playSound();
     console.log(e, 'Notification shown tag:' + tag);
   }

   playSound(filename){
     document.getElementById('sound').play();
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






  render() {
    return (
      <div>
       <h3>  Mes Notifications </h3>

<Switch ripple id="switch1" defaultChecked>Activer les Notifications</Switch>

       <Grid className="demo-grid-2">
              <Cell col={2}></Cell>
              <Cell col={10}>

              <DataTable

                  shadow={0}
                  rowKeyColumn="id"
                  rows={[
                      {id: 1001, notification: 'notificaton 1', date: 1, price: 2.90},
                      {id: 1002, notification: 'notificaton 2', date: 2, price: 1.25},
                      {id: 1003, notification: 'notificaton 3', date: 3, price: 2.35}
                  ]}
              >
                  <TableHeader name="notification" tooltip="Notification">Notifi</TableHeader>
                  <TableHeader numeric name="date" tooltip="Number of materials">Quantity</TableHeader>
                  <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
              </DataTable>

              </Cell>

          </Grid>

      </div>
    );
  }
}

export default  Notifications ;
