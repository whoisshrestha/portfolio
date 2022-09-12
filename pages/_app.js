import Navbar from '../components/Navbar'
import '../styles/globals.css'
import './index'

function MyApp({ Component, pageProps }) {
  return <>
  <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen&display=swap" rel="stylesheet"/>
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@901&f[]=supreme@800&display=swap" rel="stylesheet"/>
  <Component {...pageProps}
   /></>
}

export default MyApp
