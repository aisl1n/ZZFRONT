import Layout from '@/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Commissioner } from 'next/font/google';

const commissioner = Commissioner({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={commissioner.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
