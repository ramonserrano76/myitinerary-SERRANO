import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCityDetail } from '../../redux/citySlice.js';
import './cityDetail.css';
import Accordion from 'react-bootstrap/Accordion';
import Frame from '../../components/frame/Frame.jsx';
import Button from '../../components/button/Button.jsx';

const CityDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { cityData, loading, error } = useSelector((state) => state.cities);

    console.log('cityData:', cityData);

    useEffect(() => {
        dispatch(fetchCityDetail(id));
    }, [dispatch, id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!cityData) {
        return <p>No data available</p>;
    }

    return (
        <>
            <div className="citydetail-con">
                <div className="div-2">
                    <div className="city-detail" style={{ backgroundImage: `url(${cityData.imageUrl})` }}>
                        <div className="frame-2">
                            <div className="container group">
                                <div className="text-wrapper d-flex justify-content-center">{cityData.title}</div>
                                <p className="p d-flex justify-content-center">
                                    {cityData.briefDescription}
                                </p>
                                <Button text="Go Back" variant="default" style={{ backgroundColor: '#ad913e' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="itineraries-container">
                <Accordion>
                    {cityData && cityData.itineraries && cityData.itineraries.map((itinerary) => (
                        <Accordion.Item key={itinerary._id} eventKey={itinerary._id}>
                            <Accordion.Header>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                </svg> {'  '} {itinerary.name}
                            </Accordion.Header>
                            <Accordion.Body>
                                {itinerary.activities.map((activity) => (
                                    <div key={activity._id} className="activity">
                                        <div className="frame-screen">
                                            <div className="text-wrapper-4">Features</div>
                                            <div className="row">
                                                <div className="card">
                                                    <img className="haze-globe" src="https://s3-alpha-sig.figma.com/img/40e8/af22/6680fab018e33727f841a658c73bb356?Expires=1696204800&Signature=o-Ygl2VCGYuQn5Gdk-h3F-Oy2uQIL2dn5wiGWPF1EzDHWfW5Q2AobhslHpJNP9e3ccDoF0OFT4NMe0hPBvacR3glbFOSwKihgTnVU6ajaC4S7ot54bZNGNvGXHVBsC2ObmUhKBYG-PUnZAoPlMJHkzLu649SkmMA4-AkdzwYu7RqbF19Jt51~q4t0Sb-GzeM8GGsc2UIyqKdIPAqmUKlJzbc193cU8CTwgP4lef4heRJE77J8n4c0paZtuI19n6rW0YNwLVSH1bZ7XlIhegDjn4grAdQNbOQ7CT~oU2FHXCydP873E4j3YFUzGQ7xKgdw7rJchNGrqwVjDkQAl1Tng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Currency" />
                                                    <div className="div">Currency: USD</div>
                                                </div>
                                                <div className="card" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgb(165, 148, 249) 0%, rgb(98, 71, 170) 100%)' }}>
                                                    <img className="haze-globe" alt="Haze globe" src="https://s3-alpha-sig.figma.com/img/a9fb/5400/1164022845917163cc8bc3b495b8ddf6?Expires=1696204800&Signature=bqMxA5KpMy5UeZEDW1aFBQUWqCcNfsgz7HQFyOBvOgeIxLHLhy8m8eLNVGbQRzCumhQN5iDajg7KdQm5D2WRVpzFOj5s80xciAnrUTiRAK8QwHmw~QytEkagkQ~Z1b9GfXqOpCjJNnp9~6VMaCObkR7ppe9xfzbqgDFbOE7968Y1~DMs93h8jK3uwTMG~4woFEVilxH8VG-r5lJmfMKZQdDERp6wssvPVrDKW7OcPiulRDWBcIxXnYw3QkwttXSb9iBglTagtY7Owr8SgHzdwvKAFqe2Vaw3peXe-X74O4X6B~TsA7DJOEEyta9qdTF4iqBgIxQalMVbiP1-uzTuVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                    <div className="div">Country: {cityData.title}</div>
                                                </div>
                                                <div className="card" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgb(205, 193, 255) 0%, rgb(205, 193, 255) 100%)' }}>
                                                    <img className="haze-globe" alt="" src="https://s3-alpha-sig.figma.com/img/d9f5/23f0/5042d77c49eb31ac4e94202fe3e96c21?Expires=1696204800&Signature=PuyVCibjdYJGNrtzYoFO-h3Xfr-x6HEDz8qNxkIdso0W-xZIKHpQV6HzJcCjUQ6Q-hr~hP8nztdshGJoeO2CRFre2Sw0SOPdmg7cKIZHO47Oroyb-qhMpzhjMYNtu54EfD1ZFs2bf8iURx1ckHDyUWerTVhM5JocNc2GzZOAg1qVnuU3e955w25FlXY-D~X7Dui~v0MKC1GUUtzf5d74Avd4VWw-V0S3j-tJQhVJMmzeMVBamryBajL3y0dfgNVfATDyz2nnC4~sSUBkEBCMr29wtL92G~oSwf2o9GjYZfIdbKYzp1ANCTQ9VczwgvAACM9iPFbPrvRZ8fZvRNljpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                    <div className="div">Location: {cityData.location}</div>
                                                </div>
                                            </div>
                                            <div className="text-wrapper-5">Itinerary</div>
                                            <div className="itinerarie">
                                                <div className="text-wrapper-5">{activity.name}</div>
                                                <div className="frame-wrapper">
                                                    <Frame imgSrc={cityData.imageUrl} />
                                                </div>
                                            </div>
                                            <div className="div-2">
                                                <div className="hearth">
                                                    <img className="union-stroke" alt="Union stroke" src="https://generation-sessions.s3.amazonaws.com/4b3646deae57bf4fa87ee2bbe1693204/img/union--stroke-@2x.png" />
                                                    <div className="text-wrapper-6">{activity.likes}</div>
                                                </div>
                                            </div>
                                            <div className="row-2">
                                                <div className="div-3">
                                                    <div className="text-wrapper-7">User:</div>
                                                    <div className="frame-3">
                                                        <img className="ellipse" alt="Ellipse" src="https://s3-alpha-sig.figma.com/img/ab7b/ad44/daa5b5c90c1af56a42ce53e8788e3d24?Expires=1696204800&Signature=CPrB0WHHZJqFMIldo6ro~tpz4rGFtGLMVD26zIA-uqcnXADWjKEvuoA1ozeBWiFiWylBdGFHfPAqJJkyuhyM0F6EEuLXKvdz7t-pMEnDCpXFBhtoS7--IaDg~pt7Jb2T7hCwV0Tnbe0OH0TC7ENlZB1vQ2sD8fIxo-whWhJxUJVPqalZK8~buK~I~nS5SFj~7SYHDbkiTRZL8d6xtYgHCX2bL3G1QOrGxB8ayZFMRnSiFUYCqbFLlZvIcufGUs4DSIzBPs0VrMU2079igwr7~ZDnI5rhtnv2gl1s8Rcxp-kXX33j1N0bG8CEhKWuYMRChnl94mAa5YErQ46ftrp69g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                        <div className="text-wrapper-8">Ramón Serrano</div>
                                                    </div>
                                                </div>
                                                <div className="div-3">
                                                    <div className="text-wrapper-7">Hashtags:</div>
                                                    <div className="text-wrapper-8">#{activity.tags[0]}, #{activity.tags[1]}</div>
                                                </div>
                                                <div className="div-3">
                                                    <div className="text-wrapper-7">Duration:</div>
                                                    <div className="text-wrapper-8">{activity.duration}</div>
                                                </div>
                                                <div className="div-3">
                                                    <div className="text-wrapper-7">Price:</div>
                                                    <div className="text-wrapper-8">{activity.price}</div>
                                                </div>
                                            </div>
                                            <div className="comments">
                                                <div className="text-wrapper-10">Coments</div>
                                                <div className="div-wrapper">
                                                    <div className="text-wrapper-11">13</div>
                                                </div>
                                            </div>
                                            <div className="frame-4">
                                                <div className="comment-input img">
                                                    <input type="text" placeholder="Add comment" />
                                                    <button type="submit">Enviar</button>
                                                </div>
                                                <div className="frame-6">
                                                    <img className="ellipse-2" alt="Ellipse" src="https://s3-alpha-sig.figma.com/img/f5d1/c2d1/2f72cc0c526bbe4b0e7aae7a9b3e5e23?Expires=1696204800&Signature=LDF~xjQpprGP7Uug-825X8HR5SK4i7vy-n3B7Ye93Mr4-6wuRsuwX9Tfrew2CiXIW5~TDwvdRc5TV7T5KRtu15jMvQLhs4MMPCUoYSTSf9b-AF4-FrGg92-dwqWjgPE92h2-W0CI5-JEwNDsCe04RJVqON94GL3SzGQigKgV6dfIFWavY3vU-0QixuRo2doo8MQJve1Zj5Gd-i2BQA4HXvBj45y1wjQcg8TZjs1b0jZPALmrf6ZFhsE5-OoGfXSN9tLCoVK3iDXJBeyugsNUanKRsurCVlzvPUV-iFuqKO99q3m-Tqbn-AjyEkOBvFVTT~VK~VQJmyxN2aiIc3TODA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                </div>
                                                <div className="col">
                                                    <div className="row-4">
                                                        <div className="frame-5">
                                                            <img className="ellipse-3" alt="Ellipse" src="https://s3-alpha-sig.figma.com/img/f5d1/c2d1/2f72cc0c526bbe4b0e7aae7a9b3e5e23?Expires=1696204800&Signature=LDF~xjQpprGP7Uug-825X8HR5SK4i7vy-n3B7Ye93Mr4-6wuRsuwX9Tfrew2CiXIW5~TDwvdRc5TV7T5KRtu15jMvQLhs4MMPCUoYSTSf9b-AF4-FrGg92-dwqWjgPE92h2-W0CI5-JEwNDsCe04RJVqON94GL3SzGQigKgV6dfIFWavY3vU-0QixuRo2doo8MQJve1Zj5Gd-i2BQA4HXvBj45y1wjQcg8TZjs1b0jZPALmrf6ZFhsE5-OoGfXSN9tLCoVK3iDXJBeyugsNUanKRsurCVlzvPUV-iFuqKO99q3m-Tqbn-AjyEkOBvFVTT~VK~VQJmyxN2aiIc3TODA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                            <div className="text-wrapper-12">Lucas Silva</div>
                                                        </div>
                                                        <p className="p">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum mauris vitae elit facilisis
                                                            tincidunt. Mauris ultrices ut massa gravida dignissim. Duis euismod rutrum urna rutrum consequat.
                                                            Curabitur eleifend tempor purus. Pellentesque quis vulputate libero. Vivamus bibendum metus eu dolor
                                                            gravida consequat. Donec tortor turpis, luctus at lorem euismod, pharetra lacinia ligula. Nullam non
                                                            rutrum felis. Ut consequat volutpat est et porttitor. Sed ac dui laoreet, dignissim purus a, sollicitudin
                                                            ex. Nunc ac ante quis metus viverra ullamcorper eu non nisi. Duis ultrices tempor tincidunt...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default CityDetail;