import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Container from '../../layout/Container';
import Item from '../../layout/Item';
import { withTheme } from 'emotion-theming';
import Button from '../Button/ButtonClass';

const StyledH1 = styled.h1`
    text-align: center;
    
    color: ${props => props.theme.color.primary.black};
    font-size: 3.6rem;
    font-family: 'Homemade Apple', sans-serif;
    text-transform: lowercase;
`;

class Header extends React.Component {
    render() {
        const { theme, showAddToggle, showAdd, clearTodos } = this.props;

        return (
            <section className="header-component">
                <Container alignItems="flex-start">
                    <Item flex={1}>
                        <Button text={showAdd ? 'Finish' : 'Add'} onClick={showAddToggle} />
                    </Item>
                    
                    <Item flex={2}>
                        <StyledH1 theme={theme}>
                            Todo Lists
                        </StyledH1>
                    </Item>
                    
                    <Item flex={1} align="right">
                        <Button color={'red'} text={"Clear"} onClick={clearTodos} align={'right'} />
                    </Item>
                </Container>
            </section>
        )
    }

    static propTypes = {
        showAddToggle: PropTypes.func.isRequired,
        showAdd: PropTypes.bool.isRequired,
        clearTodos: PropTypes.func.isRequired
    }
}

export default withTheme(Header);