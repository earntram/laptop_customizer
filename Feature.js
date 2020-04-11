import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';

class Feature extends Component {
  render() {
return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
 }
}

export default Feature;
