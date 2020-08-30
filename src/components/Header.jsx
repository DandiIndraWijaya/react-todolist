import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ showAddToggle, showAdd }) => {
    return (
        <section className="header">
            <button onClick={showAddToggle} className="header-btn main-black-color">
                {showAdd ? 'Finish' : 'Add'}
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
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
}

export default Header;