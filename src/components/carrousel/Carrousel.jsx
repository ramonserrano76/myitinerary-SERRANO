import React from 'react';
import '../navbarmain/navbarmain.css';
import './carrousel.css';
import { Carousel } from 'react-bootstrap';

const Carrousel = () => {
    return (
        <div className="container-fluid">
            <Carousel>

                {/* Slide 1 */}

                <Carousel.Item>
                    <div className="row my-3 my-md-4 justify-content-center">
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/17500031/pexels-photo-17500031/free-photo-of-paisaje-montanas-verano-lago.jpeg?auto=compress&cs=tinysrgb&&w=600"
                                alt="Slide 1"
                                width="250"
                                height="250"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/4161812/pexels-photo-4161812.jpeg?auto=compress&cs=tinysrgb&&w=600"
                                alt="Slide 1"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                    <div className="row my-3 my-md-4 justify-content-center">
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/17501083/pexels-photo-17501083/free-photo-of-punto-de-referencia-estados-unidos-valle-religion.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 1"
                                width="250"
                                height="250"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/17498727/pexels-photo-17498727/free-photo-of-punto-de-referencia-turismo-turquia-pavo.jpeg?auto=compress&cs=tinysrgb&&w=600"
                                alt="Slide 1"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                </Carousel.Item>

                {/* Slide 2 */}

                <Carousel.Item>
                    <div className="row my-3 my-md-4 justify-content-center">
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/13558679/pexels-photo-13558679.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 2"
                                width="250"
                                height="250"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/8242968/pexels-photo-8242968.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 2"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                    <div className="row my-3 my-md-4 justify-content-center">
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/13457173/pexels-photo-13457173.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 2"
                                width="250"
                                height="250"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/8242973/pexels-photo-8242973.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 2"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                </Carousel.Item>

                {/* Slide 3 */}

                <Carousel.Item>
                    <div className="row my-3 my-md-4 justify-content-center">
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/id/869741554/es/foto/glaciar-y-lago-%C3%BAnico.jpg?s=612x612&w=0&k=20&c=bPtN4yn_jXZUqx_ezqqfXVw_2xIXm0ykL6MobcQiEKI="
                                alt="Slide 3"
                                width="250"
                                height="250"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/4365100/pexels-photo-4365100.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 3"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                    <div className="row my-3 my-md-4 justify-content-center">
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 3"
                                width="250"
                                height="250"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/723023/pexels-photo-723023.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Slide 3"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};
export default Carrousel;