import React, { useContext, useState, useEffect } from 'react';
import CarsCard from "./Card.js";
import { paginate } from "../utils/paginate";
import Pagination from './Pagination';
import CarContext from '../Context/CarContext.js';

function ShowRoom() {
    const context = useContext(CarContext);

    const handlePageChange = (page) => {
        context.updatePage(page);
    };

    const handleLiked = (car) => {
        const { cars: allCars,updateCars } = context;
        const cars = [...allCars];
        const index = cars.indexOf(car);
        cars[index].liked = !cars[index].liked;
        console.log(cars[index].liked);
        updateCars(cars);
    };

    const { cars, pageSize, currentPage, searchQuery } = context;

    let filteredCars; 
    if (searchQuery){
        let fc = cars.filter((c) =>
            c.brand.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        if (filteredCars > 6) {
           fc = paginate(filteredCars, currentPage, pageSize);
        }
        filteredCars = fc;
    } else {
        filteredCars = paginate(cars, currentPage, pageSize);
    }
    useEffect(() => {
        context.filteredCar = filteredCars;
    }, [])
    
    return (
        <div className="carWrapper container my-4">
            <div className="row">
                {filteredCars.length === 0 ? (
                    <div>There is no Car To Render</div>
                ) : (
                    filteredCars.map((car, index) => (
                        <div className="col-md-4 my-3" key={index}>
                            <CarsCard CarData={car} onLike={handleLiked} like={car.liked} />
                        </div>
                    ))
                )}
            </div>
            {searchQuery ? <Pagination
                itemsCount={filteredCars.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            /> : <Pagination
                itemsCount={cars.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />}
        </div>
    );
}

export default ShowRoom;
