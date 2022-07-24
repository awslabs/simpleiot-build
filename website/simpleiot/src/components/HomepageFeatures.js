import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Accelerate Deployment',
    Svg: require('../../static/img/art_rocket.svg').default,
    description: (
      <>
        Build cloud-connected devices faster.
      </>
    ),
  },
  {
    title: 'Industry Best Practices',
    Svg: require('../../static/img/art_checklist.svg').default,
    description: (
      <>
        Inherit industry best-practices, including end-to-end security.
      </>
    ),
  },
  {
    title: 'Simplify',
    Svg: require('../../static/img/art_target.svg').default,
    description: (
      <>
        Focus on product features, not undifferentiated heavy-lifting.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
