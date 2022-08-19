import { Routes, Route } from 'react-router-dom';

import { Typography, Container, Paper, Card, CardContent } from '@mui/material';

import Header from './components/header';
import Footer from './components/footer';

import { Home, Benchmarks, Table, FAQ, Tools } from './pages';

import './static/styles.css';

function changeHead() {
    console.log("changing head");

    let head = document.head;

    head.querySelector("meta[name=description]")
        .setAttribute("content", "Utility to create any float for your CS:GO skins.");

    head.querySelector("meta[name=theme-color]")
        .setAttribute("content", "#F24941");

    head.querySelector("link[rel=icon]")
        .setAttribute("href", "/floattool/favicon.ico");

    head.querySelector("link[rel=apple-touch-icon]")
        .setAttribute("href", "/floattool/apple-touch-icon.ico");

    head.querySelector("link[rel=manifest]")
        .setAttribute("href", "/floattool/manifest.json");

    let fav32 = document.createElement("link");
    fav32.setAttribute("rel", "icon");
    fav32.setAttribute("type", "image/png");
    fav32.setAttribute("sizes", "32x32");
    fav32.setAttribute("href", "/floattool/favicon-32x32.png");
    head.appendChild(fav32);

    let fav16 = document.createElement("link");
    fav16.setAttribute("rel", "icon");
    fav16.setAttribute("type", "image/png");
    fav16.setAttribute("sizes", "16x16");
    fav16.setAttribute("href", "/floattool/favicon-16x16.png");
    head.appendChild(fav16);
    
    let maskIcon = document.createElement("link");
    maskIcon.setAttribute("rel", "mask-icon");
    maskIcon.setAttribute("href", "/floattool/safari-pinned-tab.svg");
    maskIcon.setAttribute("color", "#5bbad5");
    head.appendChild(maskIcon);

    let shortcutIcon = document.createElement("link");
    shortcutIcon.setAttribute("rel", "shortcut icon");
    shortcutIcon.setAttribute("href", "/floattool/favicon.ico");
    head.appendChild(shortcutIcon);

    let msapplicationTileColor = document.createElement("meta");
    msapplicationTileColor.setAttribute("name", "msapplication-TileColor");
    msapplicationTileColor.setAttribute("content", "#da532c");

    let msapplicationConfig = document.createElement("meta");
    msapplicationConfig.setAttribute("name", "msapplication-config");
    msapplicationConfig.setAttribute("content", "/floattool/browserconfig.xml");
    head.appendChild(msapplicationTileColor);
    head.appendChild(msapplicationConfig);
}

let changedHead = false;

export default function FloatTool() {
    document.title = "FloatTool";

    if (!changedHead) {
        changeHead();
        changedHead = true;
    }

    return (
        <div>
            <Paper elevation={1} style={{ paddingBottom: '12px' }}>
                <Header />
                <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<Home />} />
                    {/* <Route path="tutorial" element={<Table />} /> */}
                    <Route path="faq" element={<FAQ />} />
                    <Route path="table" element={<Table />} />
                    <Route path="benchmarks" element={<Benchmarks />} />
                    {/* <Route path="themes" element={<Table />} /> */}
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