import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './nav';

export default class Splash extends Component {
    render() {
        return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-4'></div>
                        <div className='col-xs-4'>
                            <Link to='/app'>
                                <button id='singlebutton' name='singlebutton' className='btn btn-success'>
                                    play
                                </button>
                            </Link>
                            <iframe  src='https://www.youtube.com/embed/tOrI6uqS-vk' frameBorder='0' allowFullScreen></iframe>
                        </div>  
                        <div className='col-xs-4'></div>
                    </div>
                </div>
                )
    }
}