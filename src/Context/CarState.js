import React, { useState, useEffect } from "react";
import CarContext from "./CarContext";
import { getCars } from '../raw-data';

const CarState = (props) => {
    const [cars, setCars] = useState([]);
    const [pageSize, setPageSize] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCars, setFilteredCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const carsData = getCars();
        setCars(carsData);
    }, []); 
    console.log(searchQuery);
    const updateCars = (car) => {
        const AllCars = [...cars];
        const index = AllCars.indexOf(car);
        AllCars[index] = car;
        setCars(AllCars);
    }

    const updatePage = (newPage) => {
        setCurrentPage(newPage);
    }

    const filteredCar = (updatedCars) => {
        setFilteredCars(updatedCars);
        console.log(updateCars);
    }

    return (
        <CarContext.Provider value={{ cars, pageSize, searchQuery, currentPage, setSearchQuery, updateCars, filteredCar, updatePage }}>
            {props.children}
        </CarContext.Provider>
    );
}

export default CarState;
