import Loading from '../components/loading'
import loadable from '@loadable/component'
// import { delayAsync } from '../utils/time'

export const views = {
  home: loadable(
    () =>
      import(
        /* webpackPrefetch: true, webpackChunkName: 'page.home' */ './home'
      ),
    // () =>
    //   delayAsync({ delay: 1000 }).then(
    //     () => import(/* webpackPrefetch: true */ './views/home')
    //   ),
    { fallback: <Loading /> }
  ),
  welcome: loadable(
    () =>
      import(
        /* webpackPrefetch: true, webpackChunkName: 'page.welcome' */ './welcome'
      )
  ),
}
