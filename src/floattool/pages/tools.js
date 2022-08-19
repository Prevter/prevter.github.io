import * as React from 'react';
import { Card, Container, CardContent, Typography, Grid, TextField } from "@mui/material";

function getIEEE754(x) {
    var float = new Float32Array(1);
    float[0] = x;
    return float[0];
}

function CombinationCalculator() {
    // create 10 inputs for each combination
    const [inputs, setInputs] = React.useState(
        [
            '0.37281695008278',
            '0.18730621039867',
            '0.37467443943024',
            '0.21176333725452',
            '0.26935261487961',
            '0.28138923645020',
            '0.25680887699127',
            '0.19612702727318',
            '0.26228189468384',
            '0.15504698455334'
        ]
    );

    const [range, setRange] = React.useState(['0.06', '0.8']);
    const [desired, setDesired] = React.useState('0.25');

    const [average, setAverage] = React.useState(0.2567567527294159);
    const [needAverage, setNeedAverage] = React.useState(0.25675675396755115);
    const [result, setResult] = React.useState(0.25);

    React.useEffect(() => {
        let minVal = getIEEE754(range[0]);
        let maxVal = getIEEE754(range[1]);
        let desiredVal = getIEEE754(desired);

        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += parseFloat(inputs[i]);
        }

        sum = getIEEE754(sum / 10);
        setAverage(sum);

        setResult(getIEEE754((maxVal - minVal) * sum + minVal));

        setNeedAverage((desiredVal - minVal) / (maxVal - minVal));

        console.log(sum);
    }, [inputs, range, desired]);

    return (
        <CardContent>
            <Typography variant="h5" component="h2" marginBottom={1}>
                Combination Calculator
            </Typography>
            <Grid container xs={12} spacing={1.5}>
                {
                    inputs.map((input, index) => {
                        return (
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label={`Input ${index + 1}`}
                                    value={input}
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        const newInputs = [...inputs];
                                        newInputs[index] = e.target.value;
                                        setInputs(newInputs);
                                    }}
                                />
                            </Grid>
                        );
                    })
                }

                <Grid item xs={6}>
                    <TextField
                        label={`Minimum wear`}
                        value={range[0]}
                        fullWidth
                        onChange={(e) => {
                            const newRange = [...range];
                            newRange[0] = e.target.value;
                            setRange(newRange);
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label={`Maximum wear`}
                        value={range[1]}
                        fullWidth
                        onChange={(e) => {
                            const newRange = [...range];
                            newRange[1] = e.target.value;
                            setRange(newRange);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={`Desired wear`}
                        value={desired}
                        fullWidth
                        onChange={(e) => {
                            setDesired(e.target.value);
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label={`Current average wear`}
                        value={average}
                        fullWidth
                        variant="filled"
                        readOnly
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={`Current result`}
                        value={result}
                        fullWidth
                        variant="filled"
                        readOnly
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={`Needed average wear`}
                        value={needAverage}
                        fullWidth
                        variant="filled"
                        readOnly
                    />
                </Grid>
            </Grid>


        </CardContent>
    )
}

function IEEEConverter() {
    const [input, setInput] = React.useState('0.250000000');
    const [result, setResult] = React.useState('0.25');

    React.useEffect(() => {
        setResult(getIEEE754(input));
    }, [input]);

    return (
        <CardContent>
            <Typography variant="h5" component="h2" marginBottom={1}>
                IEEE754 Converter
            </Typography>
            <Grid container xs={12} spacing={1.5}>
                <Grid item xs={12}>
                    <TextField
                        label={`Float`}
                        value={input}
                        fullWidth
                        autoComplete='off'
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={`IEEE754`}
                        value={result}
                        fullWidth
                        variant="filled"
                        readOnly
                    />
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default function Tools() {
    return (
        <Container maxWidth="md">
            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        Utilities
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        A collection of useful utilities to help with floats
                    </Typography>
                </CardContent>
            </Card>

            <Grid container spacing={3} marginTop="0">

                <Grid item xs={12} md={6}>
                    <Card elevation={2}>
                        <CombinationCalculator />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={2}>
                        <IEEEConverter />
                    </Card>
                </Grid>

            </Grid>

        </Container >
    );
}