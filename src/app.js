import React from 'react';
import './style.css';
import Header from './layout/header';
import Footer from './layout/footer';
import AppRouter from './router';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        //  this.sayHello = this.sayHello.bind(this);
    }
    sayHello(name) {
        alert('Hello from App, fired & value passed from home is : ' + name);
    }

    componentDidMount() {
        this.setState({
            title: 'Application Demo'
        })
    }

    render() {
        return (
            <Router>
                <div id="app" >
                    <Header logo="/logo192.png" />
                    <div className="app-content">
                        <h1>{this.state.title}</h1>
                        <AppRouter sayHello={this.sayHello}></AppRouter>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}