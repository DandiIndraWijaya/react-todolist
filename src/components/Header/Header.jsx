/** @jsx jsx */
// import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useTheme } from 'emotion-theming';
// import styles from './header.module.css';
import * as styles from './header.styles';

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
    const theme = useTheme();

    return (
        // <section className={styles.header}>
        //     <Button text={showAdd ? 'Finish' : 'Add'} onClick={showAddToggle} />
        //     <h1 className={styles.headerTitle}>
        //         Todo Lists
        //     </h1>
        //     <Button color={'red'} text={"Clear"} onClick={clearTodos} align={'right'} />
        // </section>
        <section css={styles.header}>
            <Button text={showAdd ? 'Finish' : 'Add'} onClick={showAddToggle} />
            <h1 css={styles.headerTitle(theme)}>
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