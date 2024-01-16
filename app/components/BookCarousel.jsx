"use client"

import { Carousel } from "react-bootstrap"

export default function PhotoCarousel({
    books
}){

    return <>
        <Carousel indicators={false}>
            {books.map(book => <Carousel.Item>
                <img src={`/books/${book}`} alt={book} className="d-block w-100 media-img" />
            </Carousel.Item>)}
        </Carousel>
    </>
}