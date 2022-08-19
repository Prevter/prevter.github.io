import * as React from 'react';
import { Card, Container, CardContent, Typography, Skeleton, Grid, CardMedia, Backdrop, CardActions, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const themesFolderHost = 'https://raw.githubusercontent.com/Prevter/FloatTool/gh-pages/Themes';

let currentImage = "";

function Table() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        fetch(`${themesFolderHost}/themes.json`)
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
                            Themes
                        </Typography>
                        <Typography variant="p" component="h4" fontWeight={'regular'} marginBottom={1}>
                            Custom themes to change your experience with the app.
                        </Typography>
                        <Card elevation={4} >
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    How to install?
                                </Typography>
                                <Typography variant="p" component="h4" fontWeight={'regular'}>
                                    Open settings, click on "Open themes folder" button and move files to that place.
                                </Typography>
                                <Typography variant="p" component="h4" fontWeight={'regular'}>
                                    Then relaunch settings window and select your theme.
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </Container>
            <p>
                {loading && <Container maxWidth="md">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" />
                        </Grid>
                    </Grid>
                </Container>}
                {error && (
                    <div style={{ textAlign: 'center' }}>{`Error: ${error}`}</div>
                )}

                <Grid container spacing={1}>
                    {
                        data &&
                        // eslint-disable-next-line array-callback-return
                        data.map((item, index) => {
                            return (
                                <Grid item xs={12} md={6}>
                                    <Card elevation={2}>
                                        <CardMedia>
                                            <img src={`${themesFolderHost}/${item.preview}`}
                                                alt={item.name} width="100%"
                                                onClick={() => { currentImage = `${themesFolderHost}/${item.preview}`; handleClickOpen(); }}
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            {item.description}
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size="small" color="secondary"
                                                onClick={() => {
                                                    const link = document.createElement("a");
                                                    link.setAttribute("download", item.download);
                                                    console.log(link);
                                                    fetch(`${themesFolderHost}/${item.download}`)
                                                        .then((response) => {
                                                            if (!response.ok) {
                                                                throw new Error(
                                                                    `This is an HTTP error: The status is ${response.status}`
                                                                );
                                                            }
                                                            return response.text();
                                                        })
                                                        .then((text) => {
                                                            link.setAttribute("href", URL.createObjectURL(new Blob([text])));
                                                            link.click();
                                                        })
                                                }}>
                                                Download
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </p>
            <ImagePopup open={open} handleClose={handleClose} />
        </Container>
    );
}

function ImagePopup(params) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={params.open}
            onClick={params.handleClose}
        >
            <img src={currentImage} style={{ width: fullScreen ? '95%' : '80%' }} alt="Enlarged" />
        </Backdrop>
    );
}

export default Table