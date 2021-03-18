import React from "react";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.attachment = React.createRef();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.save = this.save.bind(this);
    }

    handleOnChange(event) {
        const el = event.target;
        this.setState({
            [el.name]: el.value
        });
    }

    save(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        this.state.attachment = this.attachment.current.files[0];
        Object.keys(this.state).forEach(key => {
            fd[key] = this.state[key];
        });
        console.log(fd);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.save} id="contact-form" name="contact-form">
                    <div className="form-group">
                        <input name="name" type="text" autoComplete="off" value={this.state.name} onChange={this.handleOnChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input name="attachment" type="file" ref={this.attachment} className="form-control" />
                    </div>
                    <div className="form-group">
                        <textarea rows="3" name="message" value={this.state.message} onChange={this.handleOnChange} className="form-control" minLength="50" maxLength="2000" >
                        </textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" >
                        Contact
                    </button>
                </form>
                <p> State {JSON.stringify(this.state)}</p>
                <p>attachment: {JSON.stringify(this.attachment.current?.files[0]?.name)}</p>
            </div>
        );
    }
}