import Image from 'next/image'
import styles from "./page.module.scss"

export default function Home() {
  return <>
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col col-12">
          <h1 className="display-1 fw-bold color-1 text-center text-md-start mb-2">Christina Perrier</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-lg-7 col-xl-7 d-flex flex-column justify-content-start pt-lg-1 pt-xl-4">
          <div className="d-flex flex-column">
            {/* <!-- Row 1 --> */}
            <div className={`position-absolute start-0 ${styles.home_bg_1} w-100 z-n1 ${styles.home_banner}`}></div>
            <div className={`w-100 ${styles.home_banner} d-flex align-items-center ${styles.home_bg_1}`}>
              <h2 className={`${styles.home_color_1} m-0 display-5`}>Curious Creative</h2>
            </div>
            {/* <!-- Row 2 --> */}
            <div className="d-flex flex-column">
              <div className={`position-absolute z-n1 ${styles.home_banner}`}>
                <div className={`${styles.home_banner_rel} ${styles.home_bg_2} ${styles.home_banner}`}></div>
              </div>
              <div className={`position-absolute start-0 ${styles.home_bg_3} w-100 z-n2 ${styles.home_banner}`}></div>
            </div>
            <div className={`d-flex ${styles.home_banner} align-items-center`}>
              <div className={`flex-grow-1 ${styles.home_bg_2} ${styles.home_banner}`}></div>
              <h1 className={`${styles.home_color_2} ${styles.home_bg_3} m-0 ps-2-5 display-5`}>Dynamic Storyteller</h1>
            </div>
            {/* <!-- Row 3 --> */}
            <div className="d-flex flex-column">
              <div className={`position-absolute z-n1 ${styles.home_banner}`}>
                <div className={`${styles.home_banner_rel} ${styles.home_bg_3} ${styles.home_banner}`}></div>
              </div>
              <div className={`position-absolute start-0 ${styles.home_bg_4} w-100 z-n2 ${styles.home_banner}`}></div>
            </div>
            <div className={`d-flex ${styles.home_banner} align-items-center`}>
              <div className={`h-100 ${styles.home_bg_3} d-flex align-items-center`}>
                <h1 className={`${styles.home_color_3} m-0 pe-2-5 display-5`}>Innovative Thinker</h1>
              </div>
              <div className={`flex-grow-1 ${styles.home_bg_4} ${styles.home_banner}`}></div>
            </div>
            {/* <!-- Row 4 --> */}
            <div className="d-flex">
              <div className={`position-absolute start-0 ${styles.home_bg_5} w-100 z-n1 ${styles.home_banner}`}></div>
            </div>
            <div className={`w-100 ${styles.home_banner} d-flex align-items-center justify-content-end ${styles.home_bg_5}`}>
              <h2 className={`${styles.home_color_1} m-0 display-5`}>Word Virtuoso</h2>
            </div>
            {/* <!-- Row 5 --> */}
            <div className="d-flex flex-column">
              <div className={`position-absolute z-n1 ${styles.home_banner}`}>
                <div className={`${styles.home_banner_rel} ${styles.home_bg_6} ${styles.home_banner}`}></div>
              </div>
              <div className={`position-absolute start-0 ${styles.home_bg_3} w-100 z-n2 ${styles.home_banner}`}></div>
            </div>
            <div className={`d-flex ${styles.home_banner} align-items-center`}>
              <div className={`h-100 ${styles.home_bg_6} d-flex align-items-center justify-content-start`}>
                <h1 className={`${styles.home_color_5} m-0 pe-2-5 display-5`}>Grammar Guru</h1>
              </div>
              <div className={`flex-grow-1 ${styles.home_bg_3} ${styles.home_banner}`}></div>
            </div>
            {/* <!-- Row 6 --> */}
            <div className="d-flex flex-column">
              <div className={`position-absolute z-n1 ${styles.home_banner}`}>
                <div className={`${styles.home_banner_rel} ${styles.home_bg_7} ${styles.home_banner}`}></div>
              </div>
              <div className={`position-absolute start-0 ${styles.home_bg_7} w-100 z-n2 ${styles.home_banner}`}></div>
            </div>
            <div className={`d-flex ${styles.home_banner} align-items-center`}>
              <div className={`flex-grow-1 ${styles.home_bg_7} ${styles.home_banner}`}></div>
              <div className={`h-100 ${styles.home_bg_7} d-flex align-items-center minw-50 justify-content-end`}>
                <h1 className={`${styles.home_color_6} m-0 display-5`}>Culture Addict</h1>
              </div>
            </div>
          </div>
          <a href="/portfolio/writing" className="w-fit-content mb-4 mt-4 m-auto mx-md-0">
            <button className="btn btn-outline-custom p-3">
              <h4 className="d-flex align-items-center m-0">
                <span className="me-2 fw-bold">View Portfolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </h4>
            </button>
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-start col col-lg-5 col-xl-5">
            <img src="/headshot.jpeg" alt={'Christina Perrier Headshot'} className="position-relative w-100 rounded mb-3" />
        </div>
      </div>
    </div>
  </>
}
