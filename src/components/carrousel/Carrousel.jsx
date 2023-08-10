import React from 'react';
import '../navbarmain/navbarmain.css';
import './carrousel.css';
import { Carousel } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Carrousel = ({ data }) => {
    const imagesPerSlide = 4;
    const totalSlides = Math.ceil(data.length / imagesPerSlide);

    const generateSlides = () => {
        const slides = [];
        for (let i = 0; i < totalSlides; i++) {
            const startIndex = i * imagesPerSlide;
            const slideImages = data.slice(startIndex, startIndex + imagesPerSlide);
            slides.push(
                <Carousel.Item key={i}>
                    <div className="row my-3 my-md-4 justify-content-center">
                        {slideImages.map((item, index) => (
                            <div className="col-md-3 position-relative" key={index}>
                                <img
                                    className="d-block"
                                    src={item.imageUrl}
                                    alt={`Slide ${i + 1}`}                                    
                                    height={280}
                                    width={400}
                                    
                                    style={{ maxHeight: '300px', maxWidth: '440px' }} // Establecer el máximo alto
                                />
                                <div className="overlay-text">
                                    <h5 className="mb-0 text-white text-center text-uppercase">{item.title}</h5>
                                    <p className="mb-0 text-white text-center">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>

            );
        }
        return slides;
    };

    return (
        <div className="carousel-container">
            <Carousel>{generateSlides()}</Carousel>
        </div>
    );
};

export default Carrousel;