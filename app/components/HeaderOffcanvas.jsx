"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { PenFill, HouseFill, CardImage, InfoCircleFill, Linkedin, List } from "react-bootstrap-icons";
import { Roboto_Mono } from 'next/font/google'
import MuckRack from "./MuckRack";
// @ts-ignore
import config from '../config.json'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
  })

export default function HeaderOffcanvas(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = () => setShow(prev => !prev);

    return <>
        <Button className={`d-${props.breakpoint}-none`} variant=""  onClick={handleToggle} aria-label="Menu Bar">
            <List width="1.6em" height="1.5em" />
        </Button>
        <Offcanvas show={show} onHide={handleClose} className={`d-${props.breakpoint}-none`} responsive={props.breakpoint} placement="end">
            <Offcanvas.Header closeButton className="pb-0 px-4">
                <Offcanvas.Title className={`${roboto_mono.className} text-white fw-bold`}>
                    <Image src="/logo.png" alt={config.name} width={52} height={52} />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0 p-4">
                <hr />
                <Nav as="nav" className="flex-row flex-wrap">
                    {[
                        {"name": "Home", "link": "/", "icon": <HouseFill /> },
                        {"name": "About", "link": "/about", "icon": <InfoCircleFill /> },
                        {"name": "Writing", "link": "/portfolio/writing", "icon": <PenFill /> },
                        {"name": "Multimedia", "link": "/portfolio/multimedia", "icon": <CardImage /> },
                    ].map((val, i) => <>
                        <Nav.Item className="col-6" key={i}>
                            <Nav.Link as={Link} href={val.link} className="d-inline-flex align-items-center gap-2 px-0 text-reset fw-normal" onClick={handleClose}>
                                {val.icon}{val.name}
                            </Nav.Link>
                        </Nav.Item>
                    </>)}
                </Nav>
                <hr />
                <Nav as="ul" className="flex-row flex-wrap">
                    {[
                        {"name": "LinkedIn", "link": config.linkedin, "icon": <Linkedin />},
                        {"name": "Muck Rack", "link": config.muckrack, "icon": <MuckRack />},
                    ].map((val, i) => <>
                        <Nav.Item className="col-6" key={i}>
                            <Nav.Link as={Link} target="_blank" rel="noopener noreferrer" href={''+val.link} 
                                className="d-inline-flex align-items-center gap-2 px-0 text-reset fw-normal" onClick={handleClose}>
                                {val.icon}{val.name}
                            </Nav.Link>
                        </Nav.Item>
                    </>)}
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}