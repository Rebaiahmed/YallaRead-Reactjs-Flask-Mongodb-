import React, { Component } from 'react';


import { DatePicker } from 'react-mdl-datepicker';
import moment from 'moment';
import { MDLSelectField } from 'react-mdl-select';
import { GoogleMap, Marker } from "react-google-maps"

import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton ,Textfield, Tabs,Tab ,RadioGroup , Radio,
DataTable , TableHeader} from 'react-mdl';


class PreferenceBooks extends Component {




  constructor(props) {
    super(props);
    this.state = {  user :{},activeTab:0, dates :[
      {
      code :1 , name : "Une Semaine"
    },
    {
    code :2 , name : "Deux Semaine"
  },  {
    code :3 , name : "1 Mois"
  },
  {
  code :4 , name : "Deux Mois"
},
{
code :5, name : "Trois Mois"
}



  ] };
  }










  render() {
    return (
      <div>
        <h4> Préferences de Lecture </h4>


        <Grid className="demo-grid-2">
             <Cell col={2}></Cell>
             <Cell col={10}>

             <form action="#">



     <Grid className="demo-grid-2">
               <div className="mdl-textfield mdl-js-textfield">

               <MDLSelectField
             label="Durée d'echange Maximale"
             value={this.state.date}
             autocomplete
             floatingLabel
             onChange={() => {}}
             items={this.state.dates}
             keyField="code"
             valueField="name"
           />
               </div>

     </Grid>

     <br />


     <Grid className="demo-grid-2">
            <div className="mdl-textfield mdl-js-textfield">
            <Textfield
            onChange={() => {}}
            label="Photo de Votre Bibliothéque"
            floatingLabel
            style={{width: '200px'}}
          />
            </div>

     </Grid>





     <Grid className="demo-grid-2">
            <div className="mdl-textfield mdl-js-textfield">
            <h4> Préference de Lecture </h4>
            <DataTable
    selectable
    shadow={0}
    rowKeyColumn="id"
    rows={[
        {id: 1001, BookCategory: 'Science',  price: 2.90},
        {id: 1002, BookCategory: 'Religion', quantity: 50, price: 1.25},
        {id: 1003, BookCategory: 'Amour', quantity: 10, price: 2.35}
    ]}
>
    <TableHeader name="material" tooltip="">Livre</TableHeader>


</DataTable>

            </div>

     </Grid>




     <Grid className="demo-grid-2">
            <div className="mdl-textfield mdl-js-textfield">
            <Textfield
      onChange={() => {}}
      label="A Propos de Vous..."
      rows={3}
      style={{width: '200px'}}
  />
            </div>

     </Grid>



     <Grid className="demo-grid-2">
            <div className="mdl-textfield mdl-js-textfield">
            <Textfield
      onChange={() => {}}
      label="Livres Favoris..."
      rows={4}
      style={{width: '400px'}}
    />
            </div>

     </Grid>











               <CardActions border>
             <Button raised accent ripple>Enregisterer</Button>
                  </CardActions>


             </form>






             </Cell>
         </Grid>


      </div>
    );
  }
}

export default  PreferenceBooks ;
