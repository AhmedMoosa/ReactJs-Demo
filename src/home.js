import React from "react"

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    componentDidMount() {
        this.setState((state) => ({ counter: 5 }));
    }
    clickMe() {
        this.setState((state, props) => (
            { counter: state.counter + (+props.incrementby) }
        ));
        this.props.click('foo ' + this.state.counter);
    }

    render() {
        return (
            <div>
                <h1>pass data up and down</h1>
                <button onClick={() => this.clickMe()} className="btn btn-outline-primary">
                    {this.state.counter > 0 ? <span>{this.state.counter} Clicks</span> : 'Click Me'}
                </button>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}