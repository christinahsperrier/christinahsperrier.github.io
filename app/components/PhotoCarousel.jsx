"use client"

import { Carousel } from "react-bootstrap"

export default function PhotoCarousel({
    photos
}){

    return <>
        <Carousel>
            {photos.map(photo => <Carousel.Item>
                <img src={`/multimedia/${photo}`} alt={photo} className="d-block w-100 media-img" />
            </Carousel.Item>)}
        </Carousel>
        {/* <div id="coinCarousel" className="carousel slide m-auto">
            <div className="carousel-inner coin-carousel-inner">
                <div className="carousel-item active h-100">
                    <div className="coin-photo-4">
                        <img src="/multimedia/coin/4.JPG" alt="coin concert" className="d-block w-100 media-img" />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/multimedia/coin/2.JPG" alt="coin concert" className="d-block w-100 media-img" />
                </div>
                <div className="carousel-item">
                    <img src="/multimedia/coin/3.JPG" alt="coin concert" className="d-block w-100 media-img" />
                </div>
                <div className="carousel-item">
                    <img src="/multimedia/coin/1.JPG" alt="coin concert" className="d-block w-100 media-img" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#coinCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#coinCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}
    </>
}