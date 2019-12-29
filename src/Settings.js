import React, { Component } from "react";


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: props.name,
            names: [],
            displayForm: true,
            
        };
    
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleName(e) {
    
    this.setState({ name: e.currentTarget.value });
}

handleSubmit(e) {
    
    let { name, names } = this.state;
    
    e.preventDefault();
    //this.props.handleSave(name);
    this.setState({ 
        displayForm: false,
        names: [...names, name],
        name: ""
    });

}

render() {

    let { name, names } = this.state;

    return (
        <>
            <section className="settings">

                <h2>Enter Player Name:</h2>

                <form 
                    className="form" 
                    onSubmit={ this.handleSubmit }>
                
                    <input
                        className="form-input"
                        type="text"
                        onChange={ this.handleName }
                        value={ name }
                        placeholder="e.g. Harry Potter"
                    />
                        
                    <button 
                    type="submit" 
                    className="button"
                    >Add</button>
                    
                </form>
                { names ? (
                    <ul className="list-group list-group-flush">
                        { names.map((value, index) => (
                            <li 
                                className="list-group-item"
                                key={ index }
                            >{ value }</li>
                        )) }
                    </ul>
                    
                ) : <p>Add a name in the box above.</p>
                }
            </section>
        </>
    ); }
}
export default Settings;