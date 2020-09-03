import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import Container from '../../layout/Container';
import Item from '../../layout/Item';
import Button from '../Button/ButtonClass'

const StyledInput = styled.input`
    background: unset;
    border: unset;
    padding: 0 64px;

    width: 100%;
    outline: unset;
    border-bottom: 1px solid ${props => props.theme.color.primary.red};
    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
`;

class TodoForm extends React.Component{

    state = {
        value: ""
    }

    handleForSubmit  = e => {
            const { addTodo }= this.props;
            const { value } = this.state;
            e.preventDefault();

            if(!value){
                alert("No blank todo!");
                return;
            }

            if(value.length > 40){
                alert("Please create a shorter todo text");
                this.setState({
                    value: ""
                });
                return;
            }

            addTodo(value);
            this.setState({
                value: ""
            });
        };

    handleOnChange = e => {
            this.setState({
                value: e.target.value
            })
        }

    render(){
        const { value } = this.state;
        const { showAdd, theme } = this.props;

        if(showAdd){
            return (
                <section className="todoform-component">
                    <form onSubmit={this.handleForSubmit}>
                        <Container alignItems="flex-start">
                            <Item flex={1} padding="0 0 0 16px">
                                <StyledInput 
                                    value={value} 
                                    onChange={this.handleOnChange} 
                                    type="text"
                                    theme={theme}  
                                />
                            </Item>

                            <Item >
                                <Button text="Add">
                                </Button>
                            </Item>
                        </Container>
                    </form>
                </section>
            )
        }else{
            return null;
        }
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        showAdd: PropTypes.bool.isRequired
    }
}


export default withTheme(TodoForm);