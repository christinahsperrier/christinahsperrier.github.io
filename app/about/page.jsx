import Tracks from '@/components/Tracks'
// @ts-ignore
import config from '../config.json'
import { text_font } from '@/fonts'

export default function About(){
    const musicCarouselStyle = {
        borderRadius: '12px'
    }
    return <>
        <div className="pt-3">
            <div className="row">
                <div className="col col-12">
                    <h1 className="display-4 color-1 text-center text-md-start mb-4">About Me</h1>
                </div>
            </div>
            <div className="row">
                <div className={`${text_font.className} col col-12 col-lg-12`}>
                    {config.about.paragraphs.map(p => <p className="color-1 fw-normal about-text" dangerouslySetInnerHTML={{__html: p}} />)}
                </div>
            </div>
            {/* <div className="row">
                <div className="col col-12 col-lg-6">
                <Tracks />
                </div>
                <div className="col col-12 col-lg-6">
                <h4 className="color-1 fw-bold text-center d-flex align-items-center justify-content-center mt-4">
                    <span className="px-2">recent reads</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-book mt-1" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                </h4>
                <div id="readingCarousel" className="carousel slide m-auto">
                    <div className="carousel-inner rounded overflow-hidden border-custom">
                    <div className="carousel-item active">
                        <img src="/images/books/1.png" className="d-block w-100" alt="lapvona" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/2.png" className="d-block w-100" alt="a certain hunger" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/3.png" className="d-block w-100" alt="homesick for another world" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/4.png" className="d-block w-100" alt="crying in h mart book" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/5.png" className="d-block w-100" alt="the woman destroyed book" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/6.png" className="d-block w-100" alt="tender is the flesh book" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/7.png" className="d-block w-100" alt="eileen book" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books/8.png" className="d-block w-100" alt="no exit book" />
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#readingCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#readingCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </div> */}
        </div>
    </>
}