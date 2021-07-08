import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loading from './components/loading'
import loadable from '@loadable/component'
// import { delayAsync } from './utils/time'

interface RouteProp {
  path: string
  exact?: boolean
  component: React.ComponentType<any>
  meta: { name: string; hidden?: boolean }
  level?: { p?: string }
}

export const routes: RouteProp[] = [
  {
    path: '/',
    exact: true,
    component: loadable(
      () => import(/* webpackPrefetch: true */ './views/home'),
      // () =>
      //   delayAsync({ delay: 1000 }).then(
      //     () => import(/* webpackPrefetch: true */ './views/home')
      //   ),
      { fallback: <Loading /> }
    ),
    meta: { name: 'HOME' },
  },
  {
    path: '/welcome',
    component: loadable(
      () => import(/* webpackPrefetch: true */ './views/welcome')
    ),
    meta: { name: 'Welcome' },
  },
]

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route {...{ path, exact, component }} key={path} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
