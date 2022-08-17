import * as React from 'react';
import { Card, Container, CardContent, Typography, Skeleton, Grid } from "@mui/material";

import Grid2 from '@mui/material/Unstable_Grid2';

import CollectionCard from '../components/collection-card';

const exceptions = ["The Blacksite Collection"];

function Table() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Prevter/FloatTool/master/FloatTool/Assets/SkinList.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "SyntaxError")
                    setError("Failed to parse the response as JSON.");
                else
                    setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });;
    }, []);

    return (
        <Container maxWidth="lg">
            <Container maxWidth="md">
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Drop table
                        </Typography>
                        <Typography variant="p" component="h4" fontWeight={'regular'}>
                            Using this table you can check chances for each wear range in each collection.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <p>
                {loading && <Container maxWidth="md">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4} xl={4}>
                            <Skeleton variant="rectangular" />
                        </Grid>
                        <Grid item xs={12} md={4} xl={4}>
                            <Skeleton variant="rectangular" />
                        </Grid>
                        <Grid item xs={12} md={4} xl={4}>
                            <Skeleton variant="rectangular" />
                        </Grid>
                    </Grid>
                </Container>}
                {error && (
                    <div style={{ textAlign: 'center' }}>{`Error: ${error}`}</div>
                )}

                <Grid2 container spacing={0.5}>
                    {
                        data &&
                        // eslint-disable-next-line array-callback-return
                        data.map((item, index) => {
                            if (!exceptions.includes(item.Name)) {
                                return (
                                    <Grid2 xs={12} md={6} lg={4} xl={3}>
                                        <CollectionCard collection={item} />
                                    </Grid2>
                                )
                            }
                        })
                    }
                </Grid2>
            </p>
        </Container>
    );
}

export default Table