import * as React from 'react';
import { Card, Container, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
    {
        question: "Can I get banned on Steam?",
        answer: "No. The app only parses open data and doesn't require your account."
    },
    {
        question: "How does it know what float will i get?",
        answer: (
            <Typography>
                First step is to get wear values from Steam marketplace.
                Next step is to try all combinations possible.
                <br />The main reason why this works is this formula:
                <p>
                    OutputWear = (MaximumOutcomeWear - MinimumOutcomeWear) * AverageInputWear + MinimumOutcomeWear
                </p>
                So everything you need to know is average float of your ingridients, and wear range of skin you want to craft.
            </Typography>)
    },
    {
        question: "I haven't got the float I wanted",
        answer: (
            <Typography>
                The main thing you have to know is that floats in CS:GO can't be very precise.
                They use IEEE754 32-bit floating point format.
                <br />
                This means there is a limit of how precise floats can be. But also makes some round floats like 0.25, 0.5, 0.75 and more.
                <p>
                    For the reason why it sometimes misscalculates those numbers is simple:<br />
                    No one actually knows how CS:GO makes floats from contracts. We only know the math.
                    So there are always would be a chance to get a float that is not exactly what you want.
                </p>
            </Typography>)
    }
];


export default function FAQ() {
    return (
        <Container maxWidth="md">
            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        FAQ
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        Answers to most asked questions
                    </Typography>
                </CardContent>
            </Card>
            {
                questions.map((question, index) => {
                    return (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{question.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {question.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                })
            }

            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Haven't found what you're looking for?
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        Ask a question on our <Typography variant="a" component="a" href="https://discord.gg/56sjpspu" color="#42a5f5">Discord</Typography> server, or in private message Prevter#4666.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}