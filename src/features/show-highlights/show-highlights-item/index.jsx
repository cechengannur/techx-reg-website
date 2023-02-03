import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


ShowHighlightsItem.propTypes = {
    item: PropTypes.object,
};

function ShowHighlightsItem(props) {

    const {item} = props;

    return (
        <div className="img-box">
            <img src={item.img} alt="crybox" target="_blank" rel="noreferrer"/>
        </div>
    );
}

export default ShowHighlightsItem;