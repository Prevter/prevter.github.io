import { Routes, Route } from 'react-router-dom';

import { Typography, Container, Paper, Card, CardContent } from '@mui/material';

import Header from './components/header';
import Footer from './components/footer';

import { Home, Benchmarks, Table, FAQ, Tools, Themes, Tutorial } from './pages';

import './static/styles.css';

export default function FloatTool() {
    return (
        <div>
            <Paper elevation={1} style={{ paddingBottom: '12px' }}>
                <Header />
                <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="tutorial" element={<Tutorial />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="table" element={<Table />} />
                    <Route path="benchmarks" element={<Benchmarks />} />
                    <Route path="themes" element={<Themes />} />
                    <Route path="tools" element={<Tools />} />
                </Routes>
            </Paper>
            <Footer />
        </div>
    );
}

function NotFoundPage() {
    // cool 404 page with a link to the home page using MUI components
    return (
        <Container maxWidth="md">
            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h4" component="h2" style={{ padding: '10px' }}>
                        404 - Page not found
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'} style={{ padding: '10px' }}>
                        The page you are looking for does not exist.
                        <br />
                        <Typography variant="a" component="a" href="/floattool" style={{
                            textDecoration: 'none',
                            color: '#42a5f5',
                        }}>
                            Go to the home page
                        </Typography>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};