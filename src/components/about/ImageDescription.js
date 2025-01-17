import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ImageDescription = ({ imageSrc, description }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt="2rem">
            <img src={imageSrc} alt="Description" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="body1" mt="1rem">
                {description}
            </Typography>
        </Box>
    );
};

ImageDescription.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ImageDescription;