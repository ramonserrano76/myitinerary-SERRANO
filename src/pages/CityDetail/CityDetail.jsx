import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCityDetail } from '../../redux/citySlice.js';
import './CityDetail.css';
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
                                                    <img className="haze-globe" src="https://s3-alpha-sig.figma.com/img/40e8/af22/6680fab018e33727f841a658c73bb356?Expires=1694995200&Signature=mzwLM1~M39lYkAKH64mKvIGEk91rh9b-lk1q4ZbA8T6LkBN0NPaWb3mfNDJmJAkNKy6JSA1RVcG2I0j8I348IAJSKklTOAPCqZoXBoWqYObMlN-3hpmStuwzfOxDstNHbLNjxdYS-nYxGtDHzYXQ1YCuQI2rjrTJfjZXHTxPqFcUgchAROelbkE8-jcRWwiPF32hwoMv2t1q93WfuCxnWqDj8UBScgbAcks4zDbIinA~PygeTTzBRNmq8GcxSE~f9u9FZqot-R8LXvogYM0qy20Yb-2k-d20LaM1~uJiKr3OUKTgo7Tmq9UqvYYJRYtxyG~xmIx8xvMv6WX7xh8aHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Currency" />
                                                    <div className="div">Currency: USD</div>
                                                </div>
                                                <div className="card" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgb(165, 148, 249) 0%, rgb(98, 71, 170) 100%)' }}>
                                                    <img className="haze-globe" alt="Haze globe" src="https://s3-alpha-sig.figma.com/img/a9fb/5400/1164022845917163cc8bc3b495b8ddf6?Expires=1694995200&Signature=ES1nz4UI1~SediNjfCXHGHoCjGnboLqKPDjJfD8ytDl3ieIriQsHMpg6kfcAzilrCCfF4AJiBAr2zdqIjAbWoISA66auox5~hsaj3TU1rRcOlB0hErJqPmr9vbGzPS2LIN3mcdKRkr4Y1jCkR-9DRXIOISPq1StbROYXq0Dn0tSLXDLRVYF828zD~kwWa1f2tanhBqLQMlFGT8TAyA6LUSFB7WxgBgbSXgn2NF5hO0L5shhp2Y08N3a5VHRf6u6mBnkSI1aGJVXn2DHkKRvfPoP5ewsKc5S~wBBz~6h~ly2rKdRisIuttvWWOlxh~OEsKdZZxpsNvhyB-xOg-k7CLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                    <div className="div">Country: {cityData.title}</div>
                                                </div>
                                                <div className="card" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgb(205, 193, 255) 0%, rgb(205, 193, 255) 100%)' }}>
                                                    <img className="haze-globe" alt="" src="https://s3-alpha-sig.figma.com/img/d9f5/23f0/5042d77c49eb31ac4e94202fe3e96c21?Expires=1694995200&Signature=hPu5ItX3AbI0qWhAqPeuIWxUhudOcd736BMtd3Lui92P3S8OKhnl8DFLk5Vvo2aG950lwvYsdrqLVB1ytlSf-fvrWDMdSg6XM24GsBZDbg9slC0TpP2wfWpopVMeG87VKffj2DZMm3CsZBhF9Fq1QiG523SSPCwz8BmPaCGlDYeWGSnUkxAJH5pze1r6IOrE8QqS5LG0TiLfLT0cVWtK~RQmm5hk7F440Nbb52LePxMQTppuQ0heVT1nWOEuiigUWwbpNO993wtRrKL7TOlW3qZooqywo6wEwkWVAwzDuPnt1OHI9eBDWffDb1HxkV2gpji-TcDZfFv30OjXBKSpwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
                                                        <img className="ellipse" alt="Ellipse" src="https://s3-alpha-sig.figma.com/img/ab7b/ad44/daa5b5c90c1af56a42ce53e8788e3d24?Expires=1694995200&Signature=WndfA7MvJDFzDAxsjhuO-uQrkFjbVstrEsR9SH2rZiY5T1FkS1JrBBrjPuuJlxPKMFITDQELaEHyPTh1eDZR8NI8q~dGbp577LDRjduMcMKulC2-cxwPckefcTJkzryuztA5yGtytj-kuYGymySdnwGvMo06DIEYDBaI8-QxRvO0Y428AHREl7xZeA97gWidhdwnclwAmaIkGXKNl6RtyJyfj2Bhn-QFzHkYH3nQUsDUac2gSeQTMr1miKPRKjZ7IbLLreuRq8Cfwzw6HIhy4f5waEDit2~z9soJSbn3mnqYvyXmue-WR7dcNDvrVbBmHZ8NovpQsHPwFzgOF8upAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
                                                    <img className="ellipse-2" alt="Ellipse" src="https://s3-alpha-sig.figma.com/img/f5d1/c2d1/2f72cc0c526bbe4b0e7aae7a9b3e5e23?Expires=1694995200&Signature=NElcwkT96d4wo4K1GL3Gx9IHT2swoNx6S~ReJEPsdBzH0xOUIaSn7QPgC-B~MaHtcz6Ll0zIfpGFMXjWA2L-VNfCkCdzXFMyPL80hzNu9YCecziqYZxQVIXSzAQt6h7Xjx3HvizpK7v6WWBYQ2V7ovAApKRgC84b7BOf7HB7XP8qw17Irr5~PsaF4PJrUXSHLWeyGI-YsVbJy07JkawVLHZ5vR-IGP-CiLzvMopu15M7DNkJH72od2w0nQHoZowmjy8U8W7ZOmDgTP0KQwFmIe-QsZN1L9ep8T6eQz-ilIJ9HGmyVvEhQ9Y-FLMOW-XwYSmRpAiMfVoVC7p0Viumig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                                </div>
                                                <div className="col">
                                                    <div className="row-4">
                                                        <div className="frame-5">
                                                            <img className="ellipse-3" alt="Ellipse" src="https://s3-alpha-sig.figma.com/img/f5d1/c2d1/2f72cc0c526bbe4b0e7aae7a9b3e5e23?Expires=1694995200&Signature=NElcwkT96d4wo4K1GL3Gx9IHT2swoNx6S~ReJEPsdBzH0xOUIaSn7QPgC-B~MaHtcz6Ll0zIfpGFMXjWA2L-VNfCkCdzXFMyPL80hzNu9YCecziqYZxQVIXSzAQt6h7Xjx3HvizpK7v6WWBYQ2V7ovAApKRgC84b7BOf7HB7XP8qw17Irr5~PsaF4PJrUXSHLWeyGI-YsVbJy07JkawVLHZ5vR-IGP-CiLzvMopu15M7DNkJH72od2w0nQHoZowmjy8U8W7ZOmDgTP0KQwFmIe-QsZN1L9ep8T6eQz-ilIJ9HGmyVvEhQ9Y-FLMOW-XwYSmRpAiMfVoVC7p0Viumig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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