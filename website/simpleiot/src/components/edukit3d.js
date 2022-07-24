import React from 'react'
import {Helmet} from "react-helmet";

export default function EduKit3d() {
    return (
        <div id="edukit-outer">
            <Helmet>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <script noModule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
            </Helmet>
            <model-viewer id="edukit-content" bounds="tight" auto-rotate seamless-poster
                          src="img/EduKit.glb" ar ar-modes="webxr scene-viewer quick-look"
                          camera-controls environment-image="neutral" shadow-intensity="1"
                            slot="poster">
                <div className="progress-bar hide" slot="poster">
                    <div className="update-bar"></div>
                </div>
            </model-viewer>
        </div>
    )
}

