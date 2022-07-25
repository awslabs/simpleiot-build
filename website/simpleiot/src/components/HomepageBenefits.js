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
                            <dd>SimpleIOT does the undifferentiated heavy lifting for you so you can focus on your application.</dd>
                            <dt>Own your own data</dt>
                            <dd>With SimpleIOT, you host your own infrastructure, code, and data.</dd>
                            <dt>End-to-end security</dt>
                            <dd>Designed with AWS security best-practices.</dd>
                            <dt>Scalable</dt>
                            <dd>Scale seamlessly from one device to millions, with no additional configuration needed.</dd>
                            <dt>Pay-as-you-go</dt>
                            <dd>SimpleIOT leverages the latest AWS Serverless and IOT services - only pay for what you use!</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

