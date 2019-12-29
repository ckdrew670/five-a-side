import React, { Component } from "react";


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: props.name,
            displayForm: true,
            
        };
    
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleName(e) {
    
    this.setState({ name: e.currentTarget.value });
}

handleSubmit(e) {
    
    let { name } = this.state;
    
    e.preventDefault();
    this.props.handleSave(name);
    this.setState({ displayForm: false });

}

render() {

    let { name } = this.state;

    return (
        <>
            <section className="settings">

                <h2>Enter Player Name:</h2>

                <form 
                    className="form" 
                    onSubmit={ this.handleSubmit }>
                
                    <input
                        className="form-input"
                        onChange={ this.handleName }
                        value={ name }
                        placeholder="e.g. Harry Potter"
                    />
                        
                    <button 
                    type="submit" 
                    className="button"
                    >Add</button>
                    
                </form>
                
            </section>
        </>
    ); }
}
export default Settings;