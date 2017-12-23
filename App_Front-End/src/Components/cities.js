import React, { Component } from 'react';


class Cities extends Component {






  constructor(props) {
    super(props);
    this.state = { categories :[] };
  }








  render() {
    return (



      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Villes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
           <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">Tunis</span>
          </label>
            </td>
          </tr>


        </tbody>
      </table>

    );
  }
}

export default  Cities;
