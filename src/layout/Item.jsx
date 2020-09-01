/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Item = ({ children, flex, align, padding }) => {
    return (
        <div className="flex-item" css={css`
        flex: ${flex};
        text-align: ${align};
        padding: ${padding};
        `} >
            { children }
        </div>
    )
}

Item.defaultProps = {
    align: 'left',
    padding: 'unset'
}

Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    align: PropTypes.oneOf([
        'left', 
        'right', 
        'justify',
        'center'
    ]),
    padding: PropTypes.string
}

export default Item;