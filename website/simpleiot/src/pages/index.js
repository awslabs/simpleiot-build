import React from 'react';
import clsx from 'clsx';
// import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageValue from '../components/HomepageValue';
import HomepageBenefits from '../components/HomepageBenefits';
import HomepageUses from '../components/HomepageUses';
import HomepageStarterKit from '../components/HomepageStarterKit';
import EduKit3d from '../components/edukit3d'

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
