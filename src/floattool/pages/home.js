import * as React from 'react';
import {
    Container,
    Typography,
    Button,
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    DialogContent,
    DialogActions,
    Skeleton
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AppScreenshots = [
    require('../static/images/App.png'),
    require('../static/images/App1.png'),
    require('../static/images/App2.png'),
    require('../static/images/App3.png'),
];

let currentImage = AppScreenshots[0];

function Home() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 4, pb: 6 }} className="mainContainer">
            <div className="flexGrid" style={{ paddingBottom: '48px' }}>
                <div className="column">
                    <Typography component="p"
                        variant="h2"
                        align="left"
                        color="text.primary"
                        className="centerOnMobile">
                        FloatTool
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary" component="p" className="centerOnMobile">
                        Utility to create any float for your CS:GO skins.
                    </Typography>
                    <Box sx={{ pt: '8px' }}>
                        <Button variant="contained" color="info" href="https://github.com/Prevter/FloatTool/releases/latest">
                            Download
                        </Button>
                        <Button variant="contained" color="success" href="https://github.com/Prevter/FloatTool" sx={{ ml: 1 }}>
                            Source code
                        </Button>
                    </Box>
                </div>
                <div className="column2">
                    <img src={AppScreenshots[0]} alt="FloatTool" width={'100%'} onClick={() => { currentImage = AppScreenshots[0]; handleClickOpen(); }} />
                </div>
            </div>
            <Grid container spacing={1}>
                <Grid item sm={4}>
                    <Card elevation={3} sx={{ minHeight: 326 }}>
                        <CardMedia
                            component="img"
                            image={AppScreenshots[1]}
                            alt="FloatTool screenshot 1"
                            onClick={() => { currentImage = AppScreenshots[1]; handleClickOpen(); }}
                        />
                        <CardContent>
                            <Typography component="p"
                                variant="h5"
                                align="left"
                                color="text.primary">
                                Automatization
                            </Typography>
                            <Typography variant="body1" align="left" color="text.secondary" component="p">
                                You don't have to do anything! <br />
                                Just enter settings and app will find everything for you.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card elevation={3} sx={{ minHeight: 326 }}>
                        <CardMedia
                            component="img"
                            image={AppScreenshots[2]}
                            alt="FloatTool benchmark window"
                            onClick={() => { currentImage = AppScreenshots[2]; handleClickOpen(); }}
                        />
                        <CardContent>
                            <Typography component="p"
                                variant="h5"
                                align="left"
                                color="text.primary">
                                Speed
                            </Typography>
                            <Typography variant="body1" align="left" color="text.secondary" component="p">
                                The program has a built-in benchmark. <br />
                                For example AMD Ryzen 5 5600H have about 42,000,000 combinations per second.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card elevation={3} sx={{ minHeight: 326 }}>
                        {/* 
                        TODO: Make new screenshot
                        <CardMedia
                            component="img"
                            image={AppScreenshots[3]}
                            alt="FloatTool screenshot 2"
                            onClick={() => { currentImage = AppScreenshots[3]; handleClickOpen(); }}
                        /> 
                        */}
                        <Skeleton variant="rectangular" width={380} height={180} animation="wave" />
                        <CardContent>
                            <Typography component="p"
                                variant="h5"
                                align="left"
                                color="text.primary">
                                Convenience
                            </Typography>
                            <Typography variant="body1" align="left" color="text.secondary" component="p">
                                After finding combination, you only have to buy skins from marketplace and make a craft.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <ImagePopup open={open} handleClose={handleClose} />
        </Container >
    );
}

function ImagePopup(params) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            open={params.open}
            onClose={params.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            fullScreen={fullScreen}
            maxWidth='md'>
            <DialogContent>
                <img src={currentImage} style={{ width: '100%' }} />
            </DialogContent>
            <DialogActions>
                <Button onClick={params.handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Home