import React from 'react';
import { Typography, Link } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <>
            <Typography variant="h6" style={{ fontFamily: 'Indie Flower, cursive' }}>
                Email: charanp@gmail.com
            </Typography>
            <Typography variant="h6" style={{ fontFamily: 'Indie Flower, cursive' }}>
                Code:
                <Link
                    href="https://github.com/harip"
                    target="_blank"
                    rel="noopener"
                >
                    https://github.com/harip
                </Link>
            </Typography>
        </>
    );
};

export default Contact;