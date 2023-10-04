
const cars = [
        {
            "brand": "Toyota RAV4",
            "Seater": "4",
            "Fuel": "Hybrid",
            "Average": 7.2,
            "Image": "https://example.com/toyota-rav4-image.jpg",
            "Model": "2019",
            "RentPrice": 2250,
            "liked" : false
        },
        {
            "brand": "Honda Civic",
            "Seater": "5",
            "Fuel": "Petrol",
            "Average": 8.5,
            "Image": "https://example.com/honda-civic-image.jpg",
            "Model": "2020",
            "RentPrice": 1200
        },
        {
            "brand": "Ford Explorer",
            "Seater": "7",
            "Fuel": "Petrol",
            "Average": 6.8,
            "Image": "https://example.com/ford-explorer-image.jpg",
            "Model": "2021",
            "RentPrice": 2800
        },
        {
            "brand": "Nissan Altima",
            "Seater": "5",
            "Fuel": "Hybrid",
            "Average": 7.1,
            "Image": "https://example.com/nissan-altima-image.jpg",
            "Model": "2018",
            "RentPrice": 1600
        },
        {
            "brand": "Chevrolet Suburban",
            "Seater": "8",
            "Fuel": "Diesel",
            "Average": 6.3,
            "Image": "https://example.com/chevrolet-suburban-image.jpg",
            "Model": "2022",
            "RentPrice": 2950
        },
        {
            "brand": "Hyundai Sonata",
            "Seater": "5",
            "Fuel": "Petrol",
            "Average": 8.2,
            "Image": "https://example.com/hyundai-sonata-image.jpg",
            "Model": "2018",
            "RentPrice": 1750
        },
        {
            "brand": "Kia Sorento",
            "Seater": "6",
            "Fuel": "Hybrid",
            "Average": 7.8,
            "Image": "https://example.com/kia-sorento-image.jpg",
            "Model": "2023",
            "RentPrice": 1350
        },
        {
            "brand": "BMW X5",
            "Seater": "5",
            "Fuel": "Diesel",
            "Average": 6.7,
            "Image": "https://example.com/bmw-x5-image.jpg",
            "Model": "2020",
            "RentPrice": 2150
        },
        {
            "brand": "Audi A4",
            "Seater": "4",
            "Fuel": "Petrol",
            "Average": 9.1,
            "Image": "https://example.com/audi-a4-image.jpg",
            "Model": "2019",
            "RentPrice": 2400
        },
        {
            "brand": "Mercedes-Benz E-Class",
            "Seater": "5",
            "Fuel": "Hybrid",
            "Average": 8.7,
            "Image": "https://example.com/mercedes-benz-e-class-image.jpg",
            "Model": "2023",
            "RentPrice": 1950
        },
        {
            "brand": "Volkswagen Passat",
            "Seater": "5",
            "Fuel": "Diesel",
            "Average": 6.9,
            "Image": "https://example.com/volkswagen-passat-image.jpg",
            "Model": "2021",
            "RentPrice": 950
        },
        {
            "brand": "Lexus RX",
            "Seater": "5",
            "Fuel": "Hybrid",
            "Average": 7.4,
            "Image": "https://example.com/lexus-rx-image.jpg",
            "Model": "2018",
            "RentPrice": 2850
        },
        {
            "brand": "Tesla Model 3",
            "Seater": "5",
            "Fuel": "Electric",
            "Average": 9.8,
            "Image": "https://example.com/tesla-model-3-image.jpg",
            "Model": "2022",
            "RentPrice": 1100
        },
        {
            "brand": "Subaru Outback",
            "Seater": "5",
            "Fuel": "Petrol",
            "Average": 8.4,
            "Image": "https://example.com/subaru-outback-image.jpg",
            "Model": "2019",
            "RentPrice": 2750
        },
        {
            "brand": "Mazda CX-9",
            "Seater": "7",
            "Fuel": "Petrol",
            "Average": 7.6,
            "Image": "https://example.com/mazda-cx-9-image.jpg",
            "Model": "2020",
            "RentPrice": 1950
        },
        {
            "brand": "Jeep Grand Cherokee",
            "Seater": "5",
            "Fuel": "Diesel",
            "Average": 6.5,
            "Image": "https://example.com/jeep-grand-cherokee-image.jpg",
            "Model": "2022",
            "RentPrice": 2450
        },
        {
            "brand": "Volvo XC90",
            "Seater": "7",
            "Fuel": "Hybrid",
            "Average": 8.9,
            "Image": "https://example.com/volvo-xc90-image.jpg",
            "Model": "2021",
            "RentPrice": 1700
        },
        {
            "brand": "Land Rover Range Rover",
            "Seater": "5",
            "Fuel": "Diesel",
            "Average": 6.6,
            "Image": "https://example.com/land-rover-range-rover-image.jpg",
            "Model": "2019",
            "RentPrice": 2350
        },
        {
            "brand": "Porsche Cayenne",
            "Seater": "5",
            "Fuel": "Hybrid",
            "Average": 8.6,
            "Image": "https://example.com/porsche-cayenne-image.jpg",
            "Model": "2020",
            "RentPrice": 1050
        },
        {
            "brand": "Acura MDX",
            "Seater": "7",
            "Fuel": "Petrol",
            "Average": 7.3,
            "Image": "https://example.com/acura-mdx-image.jpg",
            "Model": "2022",
            "RentPrice": 3000
        },
        {
            "brand": "Infiniti QX60",
            "Seater": "7",
            "Fuel": "Hybrid",
            "RentPrice": 3000,
            "Average": 7.7,
            "Image": "https://example.com/infiniti-qx60-image.jpg",
            "Model": "2021"
        },
        {
            "brand": "GMC Acadia",
            "Seater": "7",
            "Fuel": "Petrol",
            "Average": 7.0,
            "RentPrice": 3000,
            "Image": "https://example.com/gmc-acadia-image.jpg",
            "Model": "2020"
        }
    ]



const carsWithLiked = cars.map(car => ({ ...car, liked: false }));

export function getCars() {
    return carsWithLiked;
}

export function getCar(id) {
    return cars.find(c => c._id === id);
}