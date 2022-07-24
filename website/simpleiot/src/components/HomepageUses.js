import React from 'react';
import clsx from 'clsx';
import styles from './HomepageUses.module.css';

const FeatureList = [
    {
        title: 'Medical Devices',
        img: require('../../static/img/Medical-Devices@2x.png').default,
    },
    {
        title: 'Industrial Automation',
        img: require('../../static/img/Industrial-Automation@2x.png').default,
    },
    {
        title: 'Smart Homes',
        img: require('../../static/img/Smart-Homes@2x.png').default,
    },
    {
        title: 'Transportation and Logistics',
        img: require('../../static/img/Transportation-and-Logistics@2x.png').default,
    },
    {
        title: 'Consumer Goods',
        img: require('../../static/img/Consumer-Goods@2x.png').default,
    },
];

function Feature({ img, title }) {
    return (
        // <div className={clsx('col col--2')}>
        <div>
            <div className="text--center">
                <img className={styles.usesImg} alt={title} src={img} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default function HomepageUses() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text--center">
                    <h2>Uses</h2>
                </div>
            </div>
            <section className={styles.uses}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
