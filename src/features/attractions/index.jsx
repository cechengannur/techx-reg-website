import {React , useEffect} from 'react';
import PageTitle from '../../components/pagetitle';
import GDImageViewer from '../image-viewer';
import '../image-viewer/styles.css';

const Attractions = () => {

 const required_fields_object = {   
        gkey: process.env.REACT_APP_GOOGLE_API_KEY,
        dirId: process.env.REACT_APP_GOOGLE_DRIVE_ATTRACTIONS_DIRECTORY_ID,
        name: "Attractions",
        options: [{
        
            style: {
                //   width: '100%',
                //   backgroundColor: 'white',
            },
        
            // behavior when image is clicked
            // if on click is empty (no modal or newWindow)
            // current tab will show full image
            // if modal true, image opens as overlay
            // on current tab
            // if new window is true, new tab is launched
            // with image url
        
            onClick: {
                modal: true,
                newWindow: true
            },
            
            //Use name of <FILE_NAME>.<EXTENSION> (image.png) to 
            // specify which images not to render
        
        
        
        
            // if set true, hover over opacity effect
            // will be set
        
            hover: true
        }
        ]
    }


    return (
        <div >
            <PageTitle title='Attractions' />
            <div className='grid-container'>
                <GDImageViewer  data={required_fields_object} />
            </div>
            

        </div>
    );
  }

export default Attractions;