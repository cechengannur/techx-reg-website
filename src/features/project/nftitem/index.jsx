import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

import ProjectItem from '../project-item';
import '../../../scss/components/form.scss'
import Button from '../../../components/button';


Project.propTypes = {
    data: PropTypes.array,
};

function Project(props) {
    const {data} = props;

    const [visible , setVisible] = useState(16);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [searchTerm, setSearchTerm] = useState("");

    const [datas, setDatas] = useState(data)


    const categoryFilter = (catItem)=>{
        console.log(catItem)
        const result = data.filter((val) => {
            return val.category === catItem
        });

        setDatas(result);
    }
    return (
        <section className="tf-section tf-project home-2 nft-item">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="widget widget-search" data-aos="fade-in" data-aos-duration="800">
                            <form action="#">
                                <input type="text" placeholder="Search" required="" onChange={event => {
                                    setSearchTerm(event.target.value);
                                }} />
                                <button><i className="fal fa-search"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-8 z-index">
                        <div className="seclect-box" data-aos="fade-in" data-aos-duration="800">
                            <Dropdown>
                                
                                <Dropdown.Toggle id="dropdown-basic">
                                    Categories       
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#delete_client" onClick={() => setDatas(data)}>All</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client" onClick={() => categoryFilter('#application')}>Applications</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#delete_client" onClick={() => categoryFilter('#game')}>Games</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client" onClick={() => categoryFilter('#competition')}>Competitions</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client" onClick={() => categoryFilter('#workshop')}>Workshops</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client" onClick={() => categoryFilter('#conclaves')}>Conclaves</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client" onClick={() => categoryFilter('#hackathons')}>Hackathons</li>
                                </Dropdown.Item>
                                
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                Default sorting   
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#delete_client">Sort by Categories</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client">Sort by Latest</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client">Sort by Date</li>
                                </Dropdown.Item>
                                
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </div>
                    </div>

                    {
                        datas.filter((item) =>{
                            if(searchTerm === ""){
                                return item
                            }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())){
                                return item
                            }

                        }).slice(0,visible).map(item => (
                            <div key={item.id} className="col-md-3">
                                <ProjectItem item={item} />
                            </div>
                        ))
                    }
                    {
                        visible < datas.length && 
                        <div className="col-md-12">
                            <div className="btn-about center m-t16" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                                <Button title='Load More' path='#' onClick={showMoreItems} />
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default Project;