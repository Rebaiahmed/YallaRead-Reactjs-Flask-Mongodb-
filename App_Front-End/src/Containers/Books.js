import React, { Component } from 'react';

import Book from '../Components/Book'
import { Card , CardTitle , CardText , CardActions , CardMenu, Button , IconButton,
Tooltip , Icon, Grid , Cell ,FABButton ,Textfield,ProgressBar,Spinner,Checkbox } from 'react-mdl';
import  _ from 'lodash' ;


import Categories from '../Components/Categories' ;
import Cities from '../Components/cities' ;

import axios from 'axios' ;


class Books extends Component {





  constructor(props) {
    super(props);
    this.state = {  books :[] , searchquery :'', wait :false,checked1:false , checked2:false   };
    this.Search = this.Search.bind(this);
    this.SearchByCategory = this.SearchByCategory.bind(this);

//*******************************************//
    this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
  }


  //*************************/:
   componentDidMount() {

//**********GET THE BOOKS THROUGHT REST API GET METHOD************//
    axios.get(`http://127.0.0.1:5000/books`)
         .then(res => {
            console.log("resres" + JSON.stringify(res.data.result));
            this.setState({wait : false})
          this.setState({books:res.data.result});
          //console.log("mybooks" + this.state.books.length);
         },err=>{
           console.log("err" + err);
         });

  }








GetBooks ()
{
  ///here we will fetch the list of books ***** and intilize state
}


SearchByISBN()
{
  ///here we will make requet to server to get data searched by ISBN
}


SearchByAuthor()
{

  //*********here we will search books by athors
}

SearchByCategory()
{
  //here we wil search book by caregory
}



SearchByCity()
{
  //****here we will search books by city
}


//****************************//
Search(e)
{

  if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here
           let { searchquery} = this.state ;
           console.log("searcquery" + searchquery);
           //******MAKE THE REQUEST TO SERVER***************//
           axios.get(`http://127.0.0.1:5000/search`,
             {
             params: {
               query: searchquery
             }
           })
                .then(res => {
                   console.log("res search" + res);
                     this.setState({wait : false})
                   //this.setState({books:res.res});
                },err=>{
                  console.log("err search" + err);
                });


        }


}


//********************//
SearchByCategory(value)
{
console.log("value" + value);
}


//**********************************//

handleChange1 () {
  console.log("chcnged");


   this.setState({
     checked1: !this.state.checked1,
     wait : !this.state.wait
   });


//*******Make A call to GET DATA BY CATEGORY="Religion"

axios.get(`http://127.0.0.1:5000/books/category`,
  {
  params: {
    category: "Computers"
  }
}).then((data) =>{
 console.log("data" + JSON.stringify(data));
 this.setState({
   checked1: !this.state.checked1,
   wait : !this.state.wait
 })
 let data1 =[];
 data1[0] = data.data.result
 this.setState({books :data1})
}).catch(function (err) {
  console.log("err" + err);
})




 }


//********************************//
handleChange2 (){
  console.log("chcnged");
   this.setState({
     checked2: !this.state.checked2,
     wait : !this.state.wait
   });



   axios.get(`http://127.0.0.1:5000/books/category`,
     {
     params: {
       category: "Littérature"
     }
   })
        .then(res => {
           console.log("res search" + res);
             this.setState({wait : false})
           //this.setState({books:res.res});
        },err=>{
          console.log("err search" + err);
        });

//****Some Thing Here ****************//


 }


 //**************************//
 handleChange3(){
   console.log("chcnged");
    this.setState({
      checked2: !this.state.checked2,
      wait : !this.state.wait
    });



    axios.get(`http://127.0.0.1:5000/books/category`,
      {
      params: {
        category: "Science_Fiction"
      }
    })
         .then(res => {
            console.log("res search" + res);
              this.setState({wait : false})
            //this.setState({books:res.res});
         },err=>{
           console.log("err search" + err);
         });

  }


//**************renderBooks**********************//
renderBooks()
{
return(
  <Cell col={8}>

<Book />


  </Cell>
)

}



//*************renderWaitingMsg****************//
renderProgressBar()
{
  return(
    <ProgressBar indeterminate />
  )
}

//*******************************//
toggleChange = () => {
  console.log("chekc");
   this.setState({
     checked1: !this.state.isChecked,
   });
 }



  render() {

const { wait,books } = this.state ;
//const items = [{name: "item1", id: 1}, {name: "item2", id: 2}, {name: "item3", id: 3}] ;


const numbers = [1, 2, 3, 4, 5];
const listItems = books.map((book) =>
<div key={book.id}>
  <Book book={book} />

</div>

);



    return (
      <div>


<Grid className="demo-grid-2">


<Cell col={4}>
</Cell>


<Cell col={4}>

       <Textfield
            onChange={event => {this.setState({searchquery: event.target.value})}}
           label="Expandable Input"
           expandable
           expandableIcon="search"
           onKeyDown={this.Search}
       />
</Cell>

<Cell col={4}>
</Cell>



</Grid>


      <Grid className="demo-grid-2" >
             <Cell col={8}>

             {wait==true ? (
       <Spinner singleColor />
     ) :







      (

        <div>

<Grid>
{this.state.books.length}
 <ul>{listItems}</ul>

</Grid>

        </div>






     )}


             </Cell>


             <Cell col={4}>



             <table class="mdl-data-table mdl-js-data-table">


               <thead>
                 <tr>
                  <th className="mdl-data-table__cell--non-numeric">Catégories</th>
                 </tr>
               </thead>



               <tbody>

               <tr>
                 <td className="mdl-data-table__cell--non-numeric">
                 <Checkbox label="Computers" ripple
                  onChange={this.handleChange1}   />

                 </td>
               </tr>


               <tr>
                 <td className="mdl-data-table__cell--non-numeric">
                 <Checkbox label="Littérature" ripple
                  onChange={this.handleChange2}  />

                 </td>
               </tr>


               <tr>
                 <td className="mdl-data-table__cell--non-numeric">
                 <Checkbox label="SCience && Fiction" ripple
                  onChange={this.handleChange3}  />

                 </td>
               </tr>








               </tbody>
             </table>


























           <br />
           <br />



             </Cell>

         </Grid>


      </div>
    );
  }
}

export default Books;
