import React from 'react';
import PropTypes from 'prop-types';

const Frame = ({ imgSrc }) => {
    return (
        <div className="frame">
            <div className="frame-header">
            </div>
            <div className="frame-content">
                <img src={imgSrc} alt='' style={{ width: '100%', height: '544px', objectFit: 'cover' }} />
            </div>
        </div>
    );
};

Frame.propTypes = {
    
    imgSrc: PropTypes.string, // Debes proporcionar la fuente de la imagen como una URL
};

export default Frame;
