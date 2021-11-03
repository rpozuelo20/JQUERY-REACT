import React, { Component } from 'react'
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import Router from '../Router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router/>
      </div>
    )
  }
}
