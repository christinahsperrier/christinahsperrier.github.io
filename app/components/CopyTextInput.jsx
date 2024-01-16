"use client"

import { Clipboard, ClipboardCheckFill } from 'react-bootstrap-icons';
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from 'react';
// @ts-ignore
import config from '../config.json'

export default function CopyTextInput({
    border,
    focus_ring
}){

    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(config.email);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return <>
        <div className="mw-100 w-sm-50" >
            <InputGroup>
                <Form.Control
                    aria-label="Email"
                    type="text"
                    size="sm"
                    value={config.email}
                    className={`border-${border} focus-ring focus-ring-${focus_ring} rounded-start-5 ps-4 pe-2 bg-footer`}
                    style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem"
                    }}
                    readOnly
                />
                <Button variant={`outline-${border}`} onClick={copy} className="rounded-end-5 ps-3 pe-4" role="button" aria-label="Copy Email to Clipboard">
                    <span className="fs-5 d-flex">
                    {copied ? <ClipboardCheckFill /> : <Clipboard /> }
                    </span>
                </Button>
            </InputGroup>
        </div>
    </>
}