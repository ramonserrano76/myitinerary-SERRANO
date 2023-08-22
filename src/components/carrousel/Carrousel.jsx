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
                    <div className="row my-1 my-md-4 mt-4 justify-content-center d-inline-flex">
                        {slideImages.map((item, index) => (
                            <div className="col mb-3 mx-2 position-relative justify-content-center align-items-center d-flex flex-column" key={index}>
                                <img
                                    className="d-block card-image-top"
                                    src={item.imageUrl}
                                    alt={`Slide ${i + 1}`}
                                    height={260}
                                    width={290}

                                // style={{ maxHeight: '300px', maxWidth: '440px' }} // Establecer el máximo alto
                                />
                                <div className="overlay-text">
                                    <p className="mb-0 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                                        <path d="M12 0c-5.25 0-9.5 4.25-9.5 9.5 0 6 8.5 13.5 9.5 14.5 1-1 9.5-8.5 9.5-14.5 0-5.25-4.25-9.5-9.5-9.5zm0 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                    </svg>{item.description}</p>
                                    <h5 className="mb-0 text-white text-center text-uppercase">{item.title}</h5>
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