import React from "react"

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: 'About Page' }
    }

    render() {
        return (
            <div>
                <p>{this.state.title}</p>
            </div>
        );
    }
}