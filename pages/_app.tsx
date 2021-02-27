// Vendor
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

// Internal
import { Container as Navigation } from '@root/components/Navigation/Container';
import { Footer } from '@root/components/Footer';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps, router: _router }: AppProps) {
  return (
    <RecoilRoot>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
