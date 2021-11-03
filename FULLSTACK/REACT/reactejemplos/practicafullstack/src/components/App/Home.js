import React, { Component } from 'react';
import atlmad from './../../assets/img/PrImg_4121.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container p-0 border">
                    <h1 className="container text-center bg-light border display-3">HOME</h1>
                    <img src={atlmad} className="w-100"/>
                </div>
            </div>
        )
    }
}
