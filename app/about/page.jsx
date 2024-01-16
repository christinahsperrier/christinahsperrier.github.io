import Tracks from '@/components/Tracks'
// @ts-ignore
import config from '../config.json'
import { text_font, header_font } from '@/fonts'
import BookCarousel from '@/components/BookCarousel'
import { Book, MusicNoteBeamed } from 'react-bootstrap-icons'

export default function About(){
    return <>
        <div className="pt-3 mx-auto max-w-lg">
            <div className="row">
                <div className="col col-12">
                    <h1 className="display-4 color-1 text-center text-md-start mb-4">About</h1>
                </div>
            </div>
            <div className="row">
                <div className={`${text_font.className} col col-12 col-lg-9`}>
                    {config.about.paragraphs.map(p => <p className="color-1 fw-normal about-text" dangerouslySetInnerHTML={{__html: p}} />)}
                    <h2 className={`my-3 h5 ${header_font.className}`}>
                        <MusicNoteBeamed size={28} className="mb-1" />
                        <span className={`px-2 fw-normal`}>Top Tracks</span>
                    </h2>
                    <iframe style={{borderRadius: '12px'}} src={`https://open.spotify.com/embed/playlist/${config.spotify_playlist}?utm_source=generator&theme=0`} width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="col col-12 col-lg-3">
                    <h2 className={`mb-3 mt-3 mt-lg-0 h5 ${header_font.className}`}>
                        <Book size={28} className="mb-1" />
                        <span className={`px-2 fw-normal`}>Recent Reads</span>
                    </h2>
                    <BookCarousel books={config.books} />
                </div>
            </div>
        </div>
    </>
}