import React from 'react';

import Paper from '../components/Paper/Paper';
import Container from '../layout/Container';

const About = () => {
    return (
        <Paper>
            <Container
            direction="column"
            justifyContent="space-between"
            height="100%"
            >
                <h1>This is about page</h1>
            </Container>
        </Paper>
    )
}

export default About;