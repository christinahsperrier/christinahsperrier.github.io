import PhotoCarousel from '@/components/PhotoCarousel'
// @ts-ignore
import config from '../../config.json'

const social_media = (
    title,
    type,
    image,
    media
) => {
    return <>
        <div className="masonry-item">
            <div className="card overflow-hidden masonry-content">
                <img src={`/multimedia/${image}`} alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="card-subtitle m-0 color-1">{type}</h6>
                        <a href={`/multimedia/${media}`} className="d-flex align-items-center view-story ms-2" target="_blank" rel="noopener noreferrer">
                            <span className="me-1">View media</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const photography = (
    title,
    description,
    images
) => {
    return <>
        <h4 className="color-1 my-2">{title}</h4>
        <p className="color-1">{description}</p>
        <div className="d-flex justify-content-center mb-4">
            <PhotoCarousel photos={images} />
        </div>
    </>
}

export default function Multimedia(){
    return <>
        <h2 className="color-1 my-3 fw-bold">Social Media</h2>
            <div className="portfolio-grid">
                {config.social_media.map(social => social_media(social.title, social.type, social.image, social.media))}
            </div>
            <h2 className="color-1 my-3 mt-4 fw-bold">Photography</h2>
            {config.photography.map(photos => photography(photos.title, photos.description, photos.images))}
            <h6 className="text-center color-1 mt-5 m-auto lh-base" style={{maxWidth: '850px'}}>
                Created for:&nbsp;
                {config.multimedia_created_for.map((pub, i) => <>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.pub}</a>
                    {i !== config.appears_in.length - 1 ? <>,&nbsp; </> : ''}
                </>)}
            </h6>
    </>
}