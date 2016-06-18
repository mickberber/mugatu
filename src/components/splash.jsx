import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './nav';

export default class Splash extends Component {
    render() {
        return (
                <div>
                    <div className='form-group'>
                        <label className='col-md-4 control-label' for='singlebutton'></label>
                        <div className='col-md-4 center-block'>
                            <Link to='/app'>
                                <button id='singlebutton' name='singlebutton' className='btn btn-success center-block'>
                                    play
                                </button>
                            </Link>
                        </div>  
                    </div>
                </div>
                )
    }
}