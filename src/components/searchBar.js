import React from 'react';

export class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = (event)=>{
        this.setState({term: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" 
                        onChange = {this.onInputChange}
                        value={this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    }
}