import React, { Component } from 'react';

import { Tabs , Tab } from 'react-mdl';

class Dashboard extends Component {


  constructor(props) {
         super(props)
         this.state = { activeTab: 2,
         accepted :[],
         rejected : [] ,
       waiting :[],
     current :[],
   finished :[]};
     }



//********function to get data exchanges accpeted

Get_Exchnages_Accepted()
{

}



//*********GET Exchanges Rejectec
Get_Exchnages_Rejected()
{

}




//*********GET Exchanges Waiting
Get_Exchnages_Waiting()
{

}




//*********GET Exchanges Currently
Get_Exchnages_Current()
{

}



//*********GET Exchanges Finished
Get_Exchanges_Finished()
{

}





  render() {
    return (
      <div className="demo-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                 <Tab>Demandes Reçues</Tab>
                 <Tab>Demandes Envoyées</Tab>
                 <Tab>Demandes En Cours</Tab>
                  <Tab>Demandes Terminées</Tab>
                    <Tab>Demandes Rejetées</Tab>
             </Tabs>
             <section>
                 <div className="content"> Aucun élément trouvé. {this.state.activeTab}</div>
             </section>
         </div>
    );
  }
}

export default  Dashboard ;
