//using react router to redirect to external link
import { Route, Routes } from 'react-router-dom';
import {React , Component, useEffect} from 'react';
import PageTitle from '../components/pagetitle';
import Table from 'react-bootstrap/Table';
// import axios from 'axios';

export default class Preitems extends Component {


  constructor(props) {
     super(props)
     this.state = {
      error: null,
      isLoaded: false,
      items: []
     }
  }

  componentDidMount() {
    const url = "https://api.steinhq.com/v1/storages/63b7b656eced9b09e9b0c5f7/Sheet1"; 
    fetch(url)
    .then(response => response.json())
    // .then(content => content) // This can be optional if you don't map the response
    .then(results => {
       console.log(results)
       this.setState({
        isLoaded: true,
        items: results
      });
    })
  }


  renderTableHeader() {
    if (!this.state.items.length) return null
    const header = Object.keys(this.state.items[0]) // Earlier, you're getting error here
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
     return this.state.items.map((items, index) => {
        const {title, date ,institution, contact} = items //destructuring
        return (
           <tr key={title}>
              <td>{index+1}</td>
              <td>{title}</td>
              <td>{date}</td>
              <td>{institution}</td>
              <td><a href={contact} target="_blank">{contact}</a></td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <PageTitle title="Pre-Events"/>
           <Table className="pre-event" bordered>
            <thead>
              <tr>
               <th>SN</th>
              {this.renderTableHeader()}
              </tr>
            </thead>
            <tbody>
            {this.renderTableData()}
            </tbody>
          </Table>
        </div>
     )
  }
}