import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { views } from './views'

interface RouteProp {
  path: string
  exact?: boolean
  component: React.ComponentType<any>
  meta: { name: string; hidden?: boolean }
  level?: { p?: string }
}

export const routes: RouteProp[] = [
  { path: '/', exact: true, component: views.home, meta: { name: 'HOME' } },
  { path: '/welcome', component: views.welcome, meta: { name: 'Welcome' } },
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
