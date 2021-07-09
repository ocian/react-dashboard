import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Item, ListBox } from '@adobe/react-spectrum'

interface Asideprops {
  routes: { path: string; meta: { name: string } }[]
}

export function Aside(props: Asideprops) {
  const location = useLocation()

  useEffect(() => {
    console.log(location.pathname)
  }, [location.pathname])

  return (
    <ListBox aria-label="aside">
      {props.routes.map(({ path, meta: { name } }) => (
        <Item key={path} aria-label={name}>
          <Link to={path}>{name}</Link>
        </Item>
      ))}
    </ListBox>
  )
}
