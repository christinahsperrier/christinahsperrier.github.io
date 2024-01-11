"use client"

// @ts-ignore
import config from '../config.json'
import { Carousel } from "react-bootstrap"
import { MusicNoteBeamed } from "react-bootstrap-icons"

export default function Tracks(){
    const musicCarouselStyle = {
        borderRadius: '12px'
    }
    return <>
        <h4 className="color-1 fw-bold text-center d-flex align-items-center justify-content-center mt-4">
            <span className="px-2">Top tracks</span>
            <MusicNoteBeamed size={28} className="mt-1" />
        </h4>
        <Carousel indicators={false} style={{height: '200px'}}>
            {config.tracks.map((track, i) => <>
                <Carousel.Item style={{height: '200px'}}>
                    <iframe style={musicCarouselStyle} src={track} width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Carousel.Item>
            </>)}
        </Carousel>
        <div id="musicCarousel" className="carousel slide m-auto">
            <div className="carousel-inner">
            {/* <!-- outro freestyle/4ever by steve lacy --> */}
            <div className="carousel-item active">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/5Oi17lFkduMXGUl8yAk6Rm?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <!-- dreams - take 2 fleetwood mac --> */}
            <div className="carousel-item">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/0XrPZPotxZNDkuvauuVO8R?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <!-- tusk - 2015 remaster fleetwood mac --> */}
            <div className="carousel-item">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/0iINibMKtoS8duvexsqnm5?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <!-- complicated mac miller --> */}
            <div className="carousel-item">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/3WfSNAoj2D8C9noPSGZZFM?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <!-- vampire by olivia rodrigo --> */}
            <div className="carousel-item">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/3k79jB4aGmMDUQzEwa46Rz?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <!-- sweet fa peach pit --> */}
            <div className="carousel-item">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/4fY6EU3jUQQISiUR8DLXuM?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <!-- sleeping with the television on billy joel --> */}
            <div className="carousel-item">
                <iframe style={musicCarouselStyle} src="https://open.spotify.com/embed/track/1zQiK0HaNo8mPMo89W8hlK?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            </div>
            {/* <!-- <button className="carousel-control-prev spotify-carousel-control" type="button" data-bs-target="#musicCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button> --> */}
            <button className="carousel-control-next spotify-carousel-control" type="button" data-bs-target="#musicCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
}