import { PropsWithChildren } from 'react'
import styles from './dashboard.module.scss'
import { Provider, defaultTheme, Flex, View } from '@adobe/react-spectrum'

interface DashboardProps {
  slotAside?: React.ReactNode
}

export function Dashboard(props: PropsWithChildren<DashboardProps>) {
  return (
    <Provider theme={defaultTheme}>
      <Flex direction="row" gap="size-100" height="calc(100vh - size-100 - size-100)">
        <View
          width="size-2000"
          height="100%"
          overflow="auto"
          paddingX="size-100"
        >
          {props.slotAside}
        </View>
        <View
          backgroundColor="static-white"
          width="calc(100% - size-2000)"
          height="100%"
          overflow="auto"
          paddingX="size-100"
        >
          {props.children}
        </View>
      </Flex>
    </Provider>
  )
}
