import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ showAddToggle }) => {
    return (
        <section className="header">
            <button onClick={showAddToggle} className="header-btn main-black-color">
                Add
            </button>
            <h1 className="header-title">
                Todo Lists
            </h1>
            <button className="header-btn main-red-color">
                Clear
            </button>
        </section>
    )
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired
}

export default Header;