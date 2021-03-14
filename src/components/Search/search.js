import React from "react";
import "./search.css";

function Search () {
    console.log(props.searchValue)
    return (
        <form>
            <div>
                <label htmlFor ="employee">Employee Name:</label>
                <input
                    value = {props.searchValue}
                    onChange = {props.handleInputChange}
                    name = "search"
                    type = "text"
                    className = "form-control"
                    placeholder = "Type in an employee name"
                    id = "search"
                />
                <button type = "submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
};

export default Search;