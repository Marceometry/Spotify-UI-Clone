import AppContainer from '../components/AppContainer'
import { SearchContextProvider } from '../contexts/SearchContext'
import { PlayerContextProvider } from '../contexts/PlayerContext'

import Router from 'next/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import '../css/global.css'

Nprogress.configure({
  showSpinner: false,
  trickleSpeed: 300
})

Router.events.on('routeChangeStart', () => {
  Nprogress.start()
})

Router.events.on('routeChangeComplete', () => {
  Nprogress.done()
})

Router.events.on('routeChangeError', () => {
  Nprogress.done()
})

export default function MyApp({ Component, pageProps }) {  
  return (
    <PlayerContextProvider>
      <SearchContextProvider>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </SearchContextProvider>
    </PlayerContextProvider>
  )
}