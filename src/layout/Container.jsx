/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Container = ({ children, direction, flexWrap, justifyContent, alignItem, alignContent }) => {
    const containerStyles = css`
        display: flex;
        flex-direction: ${direction};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        align-item: ${alignItem};
        align-content: ${alignContent};
    `;

    return(
    <div className="flex-container" css={containerStyles}>{ children }</div>
    );
}

Container.defaultProps = {
    direction: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItem: "stretch",
    alignContent: "stretch"
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
    alignItem: PropTypes.oneOf([
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
    ])
}

export default Container;