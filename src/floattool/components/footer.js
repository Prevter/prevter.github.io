import * as React from 'react';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <footer>
            <Typography
                variant="p"
                noWrap
                component="p"
                href="/"
                sx={{
                    fontFamily: 'roboto',
                    fontWeight: 100,
                    color: 'primary',
                    textDecoration: 'none',
                    textAlign: 'center',
                    mt: 2,
                    mb: 2,
                }}>
                By <a href="/" style={{
                    color: '#42a5f5',
                    textDecoration: 'none',
                }}>Prevter</a> © {new Date().getFullYear()}.
            </Typography>
        </footer >
    );
}

export default Footer;