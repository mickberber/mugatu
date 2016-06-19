import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './nav';


/* Simple Splash page */

export default class Splash extends Component {
    render() {
        return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-2'></div>
                        <div className='col-xs-8'>
                            <Link to='/app'><img src='./../assets/pap.png' style={{height: '400px', width: '800px'}}/></Link>
                        </div>  
                        <div className='col-xs-2'></div>
                    </div>
                </div>
                )
    }
}