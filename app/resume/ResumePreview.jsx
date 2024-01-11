"use client"

import { useState } from "react";
// @ts-ignore
import config from '../config.json'

export default function(){
    
    const [loading, setLoading] = useState(true);

    return <>
        <div style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "128%",
            backgroundColor: "#313131"
        }}>
            { loading ? <>
                <div className="text-center pt-5 w-100 top-0 position-absolute">
                    <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </> : <></> }
            <iframe src={`https://drive.google.com/file/d/${config.resume_gdrive_id}/preview`} title="Resume Preview" allow="autoplay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                visibility: loading ? "hidden" : "visible"
            }} onLoad={() => setLoading(false)}></iframe>
        </div>
    </>
}