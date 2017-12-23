import React, { Component } from 'react';

const items = [
  'One',
  'Two',
  'Three',
];

class Categories extends Component {






  constructor(props) {
    super(props);
    this.state = { categories :[] , checked :false , category :'' };
  }


  componentWillMount = () => {
    console.log("cities");
     this.selectedCheckboxes = new Set();
   }








  render() {



    return (



      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Catégories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-2">
           <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input"
     checked={this.props.checked1} onChange={this.props.handleChange1}  />
            <span className="mdl-checkbox__label">Biographie & Autobiographie { this.props.checked1 }</span>
          </label>
            </td>
          </tr>




          <tr>
            <td className="mdl-data-table__cell--non-numeric">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
           <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">Biographie & Autobiographie</span>
          </label>
            </td>
          </tr>





          <tr>
            <td className="mdl-data-table__cell--non-numeric">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
           <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">Psychologie</span>
          </label>
            </td>
          </tr>




          <tr>
            <td className="mdl-data-table__cell--non-numeric">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
           <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">Religion</span>
          </label>
            </td>
          </tr>




          <tr>
            <td className="mdl-data-table__cell--non-numeric">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
           <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">Philosophie</span>
          </label>
            </td>
          </tr>

        </tbody>
      </table>

    );
  }
}

export default  Categories;
