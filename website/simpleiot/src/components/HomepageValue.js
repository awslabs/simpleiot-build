import React from 'react';
import './HomepageValue.css'

export default function HomepageValue() {
    return (
        <section id="value">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <ul>
                            <li className="title">
                                <h2>Features</h2>
                            </li>
                            <li>100% open-source</li>
                            <li>No external dependencies</li>
                            <li>Scale from 1 device to millions</li>
                            <li>Firmware generation</li>
                            <li>Time-based data</li>
                            <li>Realtime updates</li>
                        </ul>
                    </div>
                    <div className="col col--6">
                        <ul>
                            <li className="title">
                                <h2>Built on AWS</h2>
                            </li>
                            <li>Install in your own AWS account</li>
                            <li>Integrate with:</li>
                            <ul>
                                <li>Amazon Sagemaker</li>
                                <li>AWS Lake Formation</li>
                                <li>Amazon Managed Grafana</li>
                                <li>Amazon Location</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}