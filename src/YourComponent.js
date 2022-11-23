import React, { Component } from 'react';


export default class YourComponent extends Component {


  render() {
    return (
      <div style={divStyle}>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.68495763183!2d-99.28369714200089!3d19.391003836877214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1669162757852!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};