import React from "react";
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                { id: 1, text: 'Home', link: '/' },
                { id: 2, text: 'About', link: '/About' },
                { id: 3, text: 'Contact', link: '/Contact' },
                { id: 4, text: 'Todos', link: '/todos' },
            ]
        }
    }

    render() {
        return (
            <header className="app-menu" >
                <div className="logo">
                    <img src={this.props.logo} />
                </div>
                <div>
                    <ul>
                        {
                            this.state.links.map((l) =>
                                <li key={l.id}>
                                    <Link to={l.link}>{l.text}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </header >
        );
    }
}