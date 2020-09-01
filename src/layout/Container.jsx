/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Container = ({ 
    children, 
    direction, 
    flexWrap, 
    justifyContent,
    alignItems, 
    alignContent, 
    height,
    minHeight
    }) => {
    const containerStyles = css`
        display: flex;
        flex-direction: ${direction};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        align-content: ${alignContent};
        height: ${height};
        width: 100%;
        min-height: ${minHeight};
    `;

    return(
    <div className="flex-container" css={containerStyles}>{ children }</div>
    );
}

Container.defaultProps = {
    direction: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    height: "auto",
    minHeight: "initial"
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    direction: PropTypes.oneOf([
        'row',
        'row-reverse',
        'column',
        'column-reverse'
    ]),
    flexWrap: PropTypes.oneOf([
        'nowrap',
        'wrap',
        'wrap-reverse'
    ]),
    justifyContent: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'left',
        'right'

    ]),
    alignItems: PropTypes.oneOf([
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'first baseline',
        'last baseline',
        'start',
        'end',
        'self-start',
        'self-end'
    ]),
    alignContent: PropTypes.oneOf([
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'spcae-evenly',
        'start',
        'end',
        'baseline',
        'first baseline',
        'last baseline'
    ]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minHeight: PropTypes.string
}

export default Container;