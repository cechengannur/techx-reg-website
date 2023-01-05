//using react router to redirect to external link
import { Route, Routes } from 'react-router-dom';
import {React , useEffect} from 'react';
import PageTitle from '../components/pagetitle';


const RedirectPage = (props) => {
    useEffect(() => {
      window.location.replace(props.url)
    }, [])


    return (
        <div>
          <PageTitle title='Redirecting...' />
        </div>
    );
  }

export default RedirectPage;