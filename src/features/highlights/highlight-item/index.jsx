import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CountUp, { useCountUp } from 'react-countup';

HighlightItem.propTypes = {
    item: PropTypes.object,
};

function HighlightItem(props) {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 5000,
      });

    const {item} = props;

    return (
        <div className='highlight-card'>
            
                
                <div className='h5 sub-title'><CountUp  end={item.count} enableScrollSpy/><span>+</span></div>
                <p className='h7 title'>{item.title}</p>
        
        </div>
    );
}

export default HighlightItem;