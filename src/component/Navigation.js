import React, { useState,useContext } from 'react'
import SearchBox from "./SearchBox";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import '../App.css';
import CarContext from '../Context/CarContext.js';


const NavBar = () => {
    const context = useContext(CarContext);
    const { cars, pageSize, currentPage, searchQuery, filteredCar, setSearchQuery } = context;
    const handleSearch = query => {
        setSearchQuery(query);
    };
    const carCount = cars.length;
    console.log(currentPage);
    console.log(pageSize);
   
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="d-flex justify-content-center align-items-center">
                        <a class="navbar-brand">Show Room </a>
                        <div>
                            {currentPage * pageSize > carCount ? (
                                `${carCount} of ${carCount}`
                            ) : (
                                `${currentPage * pageSize} of ${carCount}`
                            )}
                        </div>
                    </div>
                   

                    <form class="d-flex justify-content-between">
                        <SearchBox value={searchQuery} onChange={handleSearch} />
                        <Button style={{
                            padding : "1px 30px",
                            fontSize : "13px"}}  variant="contained" startIcon={<SearchIcon />}>
                            Search
                        </Button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;