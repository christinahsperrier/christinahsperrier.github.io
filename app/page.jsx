import { ArrowRightCircleFill } from 'react-bootstrap-icons'
// @ts-ignore
import config from './config.json'
import styles from "./page.module.scss"

export default function Home() {
  return <>
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col col-12">
          <h1 className="display-1 fw-bold color-1 text-start mt-3 mb-3">Christina Perrier</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-lg-7 col-xl-7 d-flex flex-column justify-content-start mb-3">
          {config.homepage_titles.map((title, i) => <>
            <h3 className="display-5 text-primary">{title}
            {i !== config.homepage_titles.length - 1 ? ',' : '.'}
            </h3>
          </>)}
          <a href="/portfolio/writing" className="w-fit-content my-3 mx-md-0">
            <button className="btn btn-outline-custom p-0">
              <h4 className="d-flex align-items-center m-0">
                <span className="me-3 fw-bold">View Portfolio</span>
                <ArrowRightCircleFill size={24} />
              </h4>
            </button>
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-start col col-lg-5 col-xl-5">
          <img src="/headshot.jpg" alt={'Christina Perrier Headshot'} className="position-relative w-100 rounded mb-3" />
        </div>
      </div>
    </div>
  </>
}
