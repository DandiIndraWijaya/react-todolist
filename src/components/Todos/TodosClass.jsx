import React from 'react';
import Todo from '../Todo/TodoClass';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import Container from '../../layout/Container';

const StyledTodoPlaceholderText = styled.div`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    padding: 16px;
    text-align: center;
`;

const StyledAddButtonPlaceHolderText = styled.span`
    font-family: "Bungee", sans-serif;
    font-size: 24px;
`;

class Todos extends React.Component{

    render(){
        const { todos, completeTodo } = this.props;

        return (
            <section className="todos-component">
                <Container direction="column" minHeight="500px">
                    {todos.length > 0 &&
                        todos.map((todo, index) => {
                            return (
                            <Todo 
                            key={index} 
                            text={todo.text}
                            isCompleted={todo.isCompleted}
                            completeTodo={completeTodo} 
                            index={index}  
                            />
                            )
                        })
                    }
                    {todos.length === 0 && (
                        <StyledTodoPlaceholderText>
                            Add todo by clicking{" "}<StyledAddButtonPlaceHolderText>Add</StyledAddButtonPlaceHolderText> button on the top left corner
                        </StyledTodoPlaceholderText>
                    )}
                </Container>
            </section>
        )
    }

    propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
        })),
        completeTodo: PropTypes.func.isRequired
    }
}

export default withTheme(Todos);