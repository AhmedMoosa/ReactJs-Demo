import { Link } from 'react-router-dom';
import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <h2> Links </h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </footer >
        );
    }
}