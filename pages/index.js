import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

import Button from '../src/components/Button/Button';

export default function Index() {
    return (
        <div>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js example
                    </Typography>
                    <Button color="primary" variant="contained">Тестовая кнопка</Button>
                </Box>
            </Container>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography>Test accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Test accordion content
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
