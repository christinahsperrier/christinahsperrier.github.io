"use client"

import { NavDropdown } from "react-bootstrap";

export default function Dropdown(){
    return <>
        <NavDropdown title="Portfolio">
            <NavDropdown.Item href="/portfolio/writing" className="tab-item">
                Writing
            </NavDropdown.Item>
            <NavDropdown.Item href="/portfolio/multimedia" className="tab-item">
                Multimedia
            </NavDropdown.Item>
        </NavDropdown>
    </>
}