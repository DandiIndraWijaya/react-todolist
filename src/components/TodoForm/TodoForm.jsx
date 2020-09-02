/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import * as styles from './todoform.styles';
import { useTheme } from 'emotion-theming';
import Container from '../../layout/Container';
import Item from '../../layout/Item';
import Button from '../Button/ButtonNoJSX';

const TodoForm = ({ addTodo, showAdd }) => {
    const theme = useTheme();
    const [value, setValue] = useState("");

    const handleForSubmit  = e => {
        e.preventDefault();

        if(!value){
            alert("No blank todo!");
            return;
        }

        if(value.length > 40){
            alert("Please create a shorter todo text");
            setValue("");
            return;
        }

        addTodo(value);
        setValue("");
    };

    if(showAdd){
        

        return (
            <section className="todoform-component" >
                <form onSubmit={handleForSubmit}>
                    <Container alignItems="flex-start">
                        <Item flex={1} padding="0 0 0 16px">
                            <input
                            value={value} 
                            onChange={e => setValue(e.target.value)} 
                            type="text" 
                            css={styles.addInput(theme)}>
                            </input>
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

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
}

export default TodoForm;

