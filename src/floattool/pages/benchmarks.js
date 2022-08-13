import * as React from 'react';
import { Card, Container, CardContent, Typography, Skeleton } from "@mui/material";

import BenchmarkBar from '../components/benchmark-bar';

export default function Benchmarks() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/floattool/load`)
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
        <Container maxWidth="md">
            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        Benchmarks
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        Here you can find the benchmarks that were run using FloatTool
                    </Typography>
                </CardContent>
            </Card>
            <p>
                {loading && <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>}
                {error && (
                    <div style={{ textAlign: 'center' }}>{`Error: ${error}`}</div>
                )}
                <Container maxWidth="md">
                    {data &&
                        data.items.map((item) => (
                            <BenchmarkBar benchmark={item} percent={item.multithread / data.items[0].multithread * 100} />
                        ))
                    }
                </Container>
            </p>
        </Container>
    );
}