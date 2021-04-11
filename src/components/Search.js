import React from 'react';

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input 
                    onChange={props.handleFormSubmit}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an Employee"
                    id="search"
                />
            </div>
        </form>
    )
}


export default Search;