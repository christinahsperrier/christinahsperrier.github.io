import Script from 'next/script'
import Image from 'next/image'
import './globals.scss'
import { EnvelopeFill, FileEarmarkPdfFill, Linkedin, UniversalAccessCircle } from 'react-bootstrap-icons'
import MuckRack from './components/MuckRack'
import Link from 'next/link'
import CopyTextInput from './components/CopyTextInput'
import HeaderLink from './components/HeaderLink'
import HeaderOffcanvas from './components/HeaderOffcanvas'
import PortfolioDropdown from './components/PortfolioDropdown'
// @ts-ignore
import config from './config.json'
import { header_font, text_font } from './fonts'

export const metadata = {
  title: 'Christina Perrier - Portfolio Website',
  description: '',
}

export default function RootLayout({ children }) {

  const mobileBreakpoint = "lg"
  const footerBreakpoint = "md"

  return (
    <html lang="en">
      {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA4_CODE}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA4_CODE}');
        `}
      </Script> */}
      <body className={`${header_font.className} vh-100 d-flex flex-column pt-5`}>
        <header className={`navbar navbar-expand-${mobileBreakpoint} fixed-top`}>
          <nav className="container">
            <Link href="/" className={`navbar-brand ${header_font.className}`}>
              <Image src="/logo.png" alt={`${config.name}`} width={52} height={52} />
            </Link>
            <div className={`d-none d-${mobileBreakpoint}-block navbar-collapse`}>
              <ul className="navbar-nav">
                <PortfolioDropdown />
                <li className="nav-item">
                  <HeaderLink label="About" route="/about" />
                </li>
                <li className="nav-item">
                  <HeaderLink label="Resume" route="/resume" />
                </li>
                <div style={{width: "1px"}} className="d-flex align-items-center">
                  <div className="vr">

                  </div>
                </div>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={config.linkedin} className="nav-link d-inline-flex fs-3" tabIndex={0} role="link" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={config.muckrack} className="nav-link d-inline-flex fs-3 rounded-3 overflow-hidden" tabIndex={0} role="link" aria-label="Muck Rack">
                    <MuckRack />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={`mailto:${config.email}`} className="nav-link d-inline-flex fs-3" tabIndex={0} role="link" aria-label="Email">
                    <EnvelopeFill />
                  </Link>
                </li>
              </ul>
            </div>
            <HeaderOffcanvas breakpoint={mobileBreakpoint} />
          </nav>
        </header>
        <main className="flex-grow-1 container" style={{paddingTop: "2.25rem"}}>{children}</main>
        <footer className="mt-5" data-bs-theme="dark">
          <div className="container py-4">
            <div className="row row-gap-3">
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-3 d-flex flex-column`}>
                <div className="row">
                  <div className="col-8 col-md-12">
                    <div className="h3 m-0">{config.name}</div>
                    <div className={`h6 mb-1 mb-sm-3 fw-light ${text_font.className}`}>{config.title}</div>
                  </div>
                  <div className="col-4 d-flex align-items-center align-items-md-start">
                    <span className="h4 d-inline-flex gap-4 ps-1">
                      <Link target="_blank" rel="noopener noreferrer" href={config.linkedin} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="LinkedIn">
                        <Linkedin />
                      </Link>
                      <Link target="_blank" rel="noopener noreferrer" href={config.muckrack} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="MuckRack">
                        <MuckRack />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-4`}>
                <div className="h4">Sitemap</div>
                <div className={`row ${text_font.className}`}>
                  <div className="col col-6 gap-2 d-flex flex-column">
                    <span className="d-flex"><Link href="/" className="text-white fw-light d-inline-flex" tabIndex={0} role="link" aria-label="Home">Home</Link></span>
                    <span className="d-flex"><Link href="/portfolio/writing" className="text-white fw-light d-inline-flex" tabIndex={0} role="link" aria-label="Projects">Writing</Link></span>
                  </div>
                  <div className="col col-6 gap-2 d-flex flex-column">
                    <span className="d-flex"><Link href="/about" className="text-white fw-light d-inline-flex" tabIndex={0} role="link" aria-label="About">About</Link></span>
                    <span className="d-flex"><Link href="/portfolio/multimedia" className="text-white fw-light d-inline-flex" tabIndex={0} role="link" aria-label="Resume">Multimedia</Link></span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-2`}>
                <div className="h4">Resources</div>
                <div className={`row row-gap-2 ${text_font.className}`}>
                  <div className="col col-lg-12">
                    <span>
                      <a href={`https://drive.google.com/uc?export=download&id=${config.resume_gdrive_id}`} 
                        download={`${config.name.split(" ").join("_")}_Resume.pdf`}
                        className="text-white fw-light d-inline-flex align-items-center" tabIndex={0} role="link" aria-label="Download Resume">
                        Resume<FileEarmarkPdfFill className="ms-1" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-3`}>
                <div className="h4">Contact</div>
                <div className="row">
                  <div className="col">
                    <CopyTextInput />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
