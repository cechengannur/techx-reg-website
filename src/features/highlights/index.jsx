import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

Highlights.propTypes = {
    data: PropTypes.array,
};

function Highlights(props) {

    const {data} = props;

    return (
        <section className="tf-section highlights">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h4 className="title">Highlights</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
