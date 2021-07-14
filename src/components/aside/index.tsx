import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Item, ListBox } from '@adobe/react-spectrum'

interface ListItem {
  path: string
  meta?: { name: string }
}

interface Asideprops {
  routes: ListItem[]
}

export function Aside(props: Asideprops) {
  const location = useLocation()
  const history = useHistory()
  const [menuPath, setMenuPath] = useState<string[]>([location.pathname])

  useEffect(() => {
    history.push(menuPath[0])
  }, [menuPath])

  function change(set: Set<string>) {
    setMenuPath(Array.from(set))
  }

  return (
    <ListBox
      aria-label="aside"
      width="100%"
      items={props.routes.filter(item => item.meta)}
      selectionMode="single"
      selectedKeys={menuPath}
      onSelectionChange={change}
    >
      {(item) => <Item key={item.path}>{item?.meta?.name}</Item>}
    </ListBox>
  )
}
