import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
    return (
        <section className="header">
            <Button text={showAdd ? 'Finish' : 'Add'} onClick={showAddToggle} />
            <h1 className="header-title">
                Todo Lists
            </h1>
            <Button color={'red'} text={"Clear"} onClick={clearTodos} align={'right'} />
        </section>
    )
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
}

export default Header;