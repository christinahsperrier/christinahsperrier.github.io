// @ts-ignore
import config from '../../config.json'

const card = (
    title,
    type,
    image,
    link
) => {
    return <>
        <div className="masonry-item">
            <div className="card overflow-hidden masonry-content p-0">
                <a href={link} className="" target="_blank" rel="noopener noreferrer">
                    <img className="mw-100" src={`/stories/${image}`} alt="..." />
                </a>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="card-subtitle m-0 color-1">{type}</h6>
                        <a href={link} className="d-flex align-items-center view-story ms-2" target="_blank" rel="noopener noreferrer">
                            <span className="me-1">View story</span>
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

export default function Writing(){
    return <>
        <h2 className="color-1 my-3 fw-bold">Editorial</h2>
        <div className="portfolio-grid">
            {config.stories.editorial.map(story => card(story.title, story.type, story.image, story.link))}
        </div>
        <h2 className="color-1 my-3 mt-4 fw-bold">Academic</h2>
        <div className="portfolio-grid">
            {config.stories.academic.map(story => card(story.title, story.type, story.image, story.link))}
        </div>
        <h6 className="text-center color-1 mt-5 m-auto lh-base gap-3" style={{maxWidth: '800px'}}>
            <span className="fw-bold">Like my work? See more on my 
            <a href="https://muckrack.com/christina_perrier" className="d-inline-block" target="_blank" rel="noopener noreferrer">&nbsp;Muck Rack</a>!</span>
            <br />
            <br />
            <span>Appears in:</span>&nbsp;
            {config.appears_in.map((pub, i) => <>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.pub}
                </a>
                {i !== config.appears_in.length - 1 ? <>,&nbsp; </> : ''}
            </>)}
        </h6>
    </>
}