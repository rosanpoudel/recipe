import React from 'react';

import { withRouter } from 'react-router-dom';


function FilterBar({ query }) {

    if (window.location.pathname.match('/RecipeDetail/')) {
        return null;
    }

    function handleSubmit(e) {
        e.preventDefault();
        query(e.target.name.value);
        e.target.name.value = "";
    }

    function handleChange(e) {
        query(e.target.value);
    }


    return (
        <div className="container">
            <div className="wrap">
                {/* filter */}
                <div className="filter-wrapper">
                    <div className="form-group mb-0">
                        <select className="form-control" name="filterRecipe" onChange={handleChange}>
                            <option value="all">All</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="beverages">Beverages</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>
                </div>

                {/* search */}
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="What are you looking for?" required />
                        <button className="btn btn-primary" type="submit" >
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

const FilterNav = withRouter(FilterBar);

export default FilterNav;