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
  form_demo: loadable(
    () =>
      import(
        /* webpackPrefetch: true, webpackChunkName: 'page.form_demo' */ './form_demo'
      )
  ),
  table_demo: loadable(
    () =>
      import(
        /* webpackPrefetch: true, webpackChunkName: 'page.table_demo' */ './table_demo'
      )
  ),
}
