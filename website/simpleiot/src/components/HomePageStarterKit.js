import React from 'react';
import './HomepageStarterKit.css'
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageStarterKit() {
    return (
        <section id="value">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <h2>SimpleIOT Starter Bundle</h2>
                        <div>
                            <div id="starter-image">
                                <img width="60%" src={useBaseUrl('/img/StarterBundle-med.png')} />
                            </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <br />
                        <br />
                        <ul>
                            <li>All-in-one package. Get started experimenting with a fully-built and connected device in less than 5 minutes.</li>
                            <li>Includes an ESP32-based processor, wiring, and multiple sensors. <a href="https://shop.m5stack.com/collections/m5-controllers/products/aws-iot-edukit-simpleiot-starter-bundle-v1-0
" target="_blank">Purchase a starter kit here.</a> Individual items can also be <a href="/docs/workshops/intro">purchased here.</a></li>
                            <ul>
                                <li>Button press</li>
                                <li>Color LED</li>
                                <li>Continuous Rotary Encoder</li>
                                <li>Temperature</li>
                                <li>Pressure</li>
                                <li>Humidity</li>
                                <li>GPS location</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h3><FontAwesomeIcon icon={faCircleArrowRight} style={{ color: 'orange' }} /> If you already have a Starter Bundle, please visit the <a href="/docs/workshops/intro">Workshops</a> to get started.</h3>
                </div>
            </div>
        </section>
    );
}