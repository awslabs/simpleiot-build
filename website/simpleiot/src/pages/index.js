import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageValue from '@site/src/components/HomepageValue';
import HomepageBenefits from '@site/src/components/HomepageBenefits';
import HomepageUses from '@site/src/components/HomepageUses';
import HomepageStarterKit from '@site/src/components/HomepageStarterKit';
import EduKit3d from '@site/src/components/edukit3d'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 hero-content">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg download"
                to="https://github.com/awslabs/simpleiot">
                Download
              </Link>
            </div>
          </div>
          <div className="col col--6 hero-sketch">
            <div id="edukit-container">
              <EduKit3d />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <BrowserOnly>
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageBenefits />
        <HomepageUses />
        <HomepageValue />
        <HomepageStarterKit />
      </main>
    </Layout>
    // </BrowserOnly>
  );
}
