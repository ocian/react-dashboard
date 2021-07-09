import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Aside } from './components/aside'
import { LayoutDashboard } from './components/layout'
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
  {
    path: '/form_demo',
    component: views.form_demo,
    meta: { name: 'Form Demo' },
  },
]

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutDashboard slotAside={<Aside routes={routes} />}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route {...{ path, exact, component }} key={path} />
          ))}
        </Switch>
      </LayoutDashboard>
    </BrowserRouter>
  )
}
