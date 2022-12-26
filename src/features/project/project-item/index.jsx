import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

ProjectItem.propTypes = {
    item: PropTypes.object,
};

function ProjectItem(props) {

    const {item} = props;

    return (
        <Link to={`/event-details/${item.id}`}><div className="img-box">
            <img src={item.img} alt="crybox" target="_blank" rel="noreferrer"/>
            <div className="content">
                <Link to={`/event-details/${item.id}`}>{item.title}</Link>
            </div>
        </div></Link>
    );
}

export default ProjectItem;