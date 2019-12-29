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
        this.handleCreateTeams = this.handleCreateTeams.bind(this);
        this.handleReshuffle = this.handleReshuffle.bind(this);
        this.handleReset = this.handleReset.bind(this);
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
            names: [...names, name],
            name: ""
        }) : 

        this.setState({ 
            names: [...names],
            name: ""
        });

}

shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let n = Math.floor(Math.random() * (i + 1));
        [array[i], array[n]] = [array[n], array[i]];
    }
}

handleCreateTeams(e) {
    
    let { names } = this.state;
    
    e.preventDefault();
    //this.props.handleSave(name);

    this.setState({ 
        displayForm: false,
        shuffledNames: this.shuffleArray(names),
    }) 
    
}

handleReshuffle(e) {
    
    let { names } = this.state;
    
    e.preventDefault();
    //this.props.handleSave(name);

    this.setState({ 
        displayForm: false,
        shuffledNames: this.shuffleArray(names),
    }) 
    
}

handleReset(e) {
    
    let { names, displayForm } = this.state;
    
    e.preventDefault();
    //this.props.handleSave(name);

    this.setState({ 
        displayForm: true,
        names: [],
    }) 
    
}

render() {
    
    let { names, displayForm } = this.state;
    
    return (
        
            displayForm ?
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
                        value={ this.state.name }
                        placeholder=" e.g. Luke Skywalker"
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
                    )) : <p className="instructions">Add each player by typing their name in the box above. You can add any number of players to the list. <br/> When you are done, click 'Create Teams' to split the players into two random teams.</p>
                }
                </ul>     
                
                <button 
                    className="button-create"
                    onClick={ this.handleCreateTeams }
                >Create Teams</button>

            </section>
            </>
            :
            
            <section className="team-sheet">
                <div className="team-card">
                    <h2>Team A</h2>
                    <ul className="list-group">
                        { names.filter((value, i) => (
                            i % 2 === 0 ?
                            <li 
                                className="list-group-item"
                                key={ i }
                            >{ value }</li>
                        :
                        null ))
                        }
                    </ul>    
                </div>

                {/* <div className="team-card">
                    <h2>Team B</h2>
                    <ul className="list-group">
                        { names.filter((value, i) => (
                            i % 2 !== 0 ?
                            <li 
                                className="list-group-item"
                                key={ i }
                            >{ value }</li>
                        :
                        null ))}
                    </ul>    
                </div> */}
                <button 
                    className="button-reshuffle"
                    onClick={ this.handleReshuffle }
                >Reshuffle Teams</button>

                <button 
                    className="button-create"
                    onClick={ this.handleReset }
                >Create New Teams</button>

            </section>
            
    ); }
}
export default Settings;