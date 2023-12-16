import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';
import Like from './like';


class CarsCard extends Component {

    render() {
        const { CarData : car, onLike, like } = this.props; // Destructure props
        return (
            <div className="my-7">       
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="180"
                        image={require("../images/Ferrari.jpg")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <div className="d-flex justify-content-between">
                                <div className="brand-name">{car.brand}</div>
                                <div className="model"><span className="badge bg-primary">{car.Model}</span></div>
                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <div>{car.Seater} People</div>
                                    <div>{car.Fuel}</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>{car.Average} km/ 1 litre</div>
                                    <div>Automatic</div>
                                </div>
                            </div>
                        </Typography>
                    </CardContent>
                    <div className="d-flex justify-content-between">
                        <Button size="small">$440/ month</Button>
                        <span>
                            <Like onClick={() => onLike(car)} liked={ like } />
                            <button type="button" className="btn btn-primary cardButton">Buy Now</button>
                        </span>
                    </div>
                </Card>

               
            </div>
        );
    }
}

export default CarsCard;
