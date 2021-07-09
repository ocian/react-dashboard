import { PropsWithChildren } from 'react'
import styles from './dashboard.module.scss'
import { Provider, defaultTheme, Flex, View } from '@adobe/react-spectrum'

interface DashboardProps {
  slotAside?: React.ReactNode
}

export function Dashboard(props: PropsWithChildren<DashboardProps>) {
  return (
    <Provider theme={defaultTheme}>
      <Flex direction="column" gap="size-100">
        <View backgroundColor="celery-600">{props.slotAside}</View>
        <View backgroundColor="blue-600">{props.children}</View>
      </Flex>
    </Provider>
  )
}
