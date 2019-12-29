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
        this.handleAdd = this.handleAdd.bind(this);
    }

handleName(e) {
    
    this.setState({ name: e.currentTarget.value });
}

handleAdd(e) {
    
    let { name, names } = this.state;
    
    e.preventDefault();
    //this.props.handleSave(name);

    name !== "" ?
        this.setState({ 
            //displayForm: false,
            names: [...names, name],
            name: ""
        }) : 

        this.setState({ 
            //displayForm: false,
            names: [...names],
            name: ""
        });

}

handleCreateTeams(e) {
    
    let { names } = this.state;
    
    e.preventDefault();
    //this.props.handleSave(name);

    
        this.setState({ 
            //displayForm: false,
            names: [...names]
        }) 

}
render() {

    let { name, names } = this.state;

    return (
        <>
            <section className="settings">

                <h2>Enter Player Name:</h2>

                <form 
                    className="form" 
                    onSubmit={ this.handleAdd }>
                
                    <input
                        className="form-input"
                        type="text"
                        onChange={ this.handleName }
                        value={ name }
                        placeholder="e.g. Harry Potter"
                    />
                        
                    <button 
                    type="submit" 
                    className="button-add"
                    >Add</button>
                    
                </form>
                
                <ul className="list-group list-group-flush">
                    { names.length > 0 ? names.map((value, index) => (
                        <li 
                            className="list-group-item"
                            key={ index }
                        >{ value }</li>
                    )) : <p>Add a player in the box above.</p> }
                </ul>     
                
                <button 
                    className="button-create"
                    onClick={ this.handleCreateTeams }
                    >Create Teams</button>
            </section>
        </>
    ); }
}
export default Settings;