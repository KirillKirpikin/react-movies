import React, { Component } from "react";

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };
    handleKey = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    hanleFilter = (event) => {
        this.setState(()=>({ type: event.target.dataset.type }), ()=>{
            this.props.searchMovies(this.state.search, this.state.type)
        });   
       
        
        
        
    };

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        className="validate"
                        placeholder="search"
                        id="search"
                        type="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn serch-btn"
                        onClick={() =>
                            this.props.searchMovies(this.state.search, this.state.type)
                        }
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.hanleFilter}
                            checked={this.state.type === 'all'}                            
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.hanleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.hanleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
