import App from 'next/app'
import type {AppContext, AppProps} from 'next/app'

export default function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps}/>
}

// Disable SSR
MyApp.getInitialProps = async (ctx: AppContext) => {
  return {...await App.getInitialProps(ctx)}
}
