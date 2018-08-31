import React, { Component } from 'react';

class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            localEmail: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
       // let { localEmail } = this.state;
        event.preventDefault();
        console.log('form is submitted. Value is', this.state.email);
        let storageEmail = localStorage.getItem("Email");
        this.setState(
            {
                localEmail: storageEmail
            }
        )
        //console.log('Email from Local', localEmail);
    }


    handleChange(event) {
        const value = event.target.value;
        console.log('email was changed', value);
        this.setState({ email: value })
        localStorage.setItem("Email", value);
    }

    render() {
        const { email } = this.state;
        let { localEmail } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                />
                <button>
                    Save
                </button>
                <div>
                <input type="text"
                    placeholder="Email"
                    value={localEmail}
                    onChange={this.handleSubmit}
                />
                </div>

            </form>
        );
    }
}

export default RegForm;