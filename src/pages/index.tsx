import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { ToastProvider } from 'oasis-toast';

import styles from './index.module.css';
import ToastTrigger from '../components/HomepageFeatures/Demo';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-[#0c0a0a4d]">
    <div className="container mx-auto text-center py-24">
      <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
      <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

      {/* <div className="py-3">
        <Link
          className="bg-slate-950 rounded-md text-white px-4 py-2"
          to="/docs/intro"
        >
          Docusaurus Tutorial - 5min ⏱️
        </Link>
      </div> */}
      <ToastTrigger/>
    </div>
  </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ToastProvider>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      
      </main>
    </Layout>
        </ToastProvider>
  );
}
