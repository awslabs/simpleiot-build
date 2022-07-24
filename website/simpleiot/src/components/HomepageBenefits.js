import React from 'react'
import './HomepageBenefits.css';

export default function HomepageBenefits() {
    return (
        <section id="benefits">
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <h2>Benefits</h2>
                    </div>
                    <div className="col benefits">

                        <dl>
                            <dt>Accelerate time to market</dt>
                            <dd>SimpleIoT does the undifferentiated heavy lifting for you, all in one click.</dd>
                            <dt>Own your own data</dt>
                            <dd>With SimpleIoT, you host your own infrastructure and data. Stop paying to access your own data!</dd>
                            <dt>End to end security</dt>
                            <dd>SimpleIoT is designed with AWS security best practices end-to-end.</dd>
                            <dt>Scalable</dt>
                            <dd>SimpleIoT scales seamlessly from one device to millions, no additional configuration needed.</dd>
                            <dt>Pay-as-you-go</dt>
                            <dd>SimpleIoT leverages the latest AWS Serverless and IoT services - only pay for what you use!</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

