import { Flex, Radio, RadioGroup, View } from '@adobe/react-spectrum'
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  TableView,
} from '@react-spectrum/table'
import { useState } from 'react'

type LoadingState =
  | 'loading'
  | 'sorting'
  | 'loadingMore'
  | 'error'
  | 'idle'
  | 'filtering'

export default function ViewTable() {
  const [selectionMode, setSelectionMode] =
    useState<'multiple' | 'none' | 'single'>('none')
  const [maxHeight, setMaxHeight] = useState<'' | 'size-5000'>('')
  const [loadingState, setLoadingState] = useState<LoadingState>()
  const [disallowEmptySelection, setDisallowEmptySelection] =
    useState<'1' | '0'>('0')

  const columns = [
    { name: 'Id', uid: 'id' },
    { name: '姓名', uid: 'name' },
    { name: '日期', uid: 'date' },
  ]

  const rows = [
    { id: 1, name: 'Game', date: '2020/6/7' },
    { id: 2, name: 'Log', date: '2020/3/7' },
    { id: 3, name: 'Video', date: '2020/6/4' },
    { id: 11, name: 'Game', date: '2020/6/7' },
    { id: 21, name: 'Log', date: '2020/3/7' },
    { id: 31, name: 'Video', date: '2020/6/4' },
    { id: 12, name: 'Game', date: '2020/6/7' },
    { id: 22, name: 'Log', date: '2020/3/7' },
    { id: 32, name: 'Video', date: '2020/6/4' },
    { id: 13, name: 'Game', date: '2020/6/7' },
    { id: 23, name: 'Log', date: '2020/3/7' },
    { id: 33, name: 'Video', date: '2020/6/4' },
  ]

  return (
    <div>
      <Flex>
        <View width="size-2000">
          <RadioGroup
            label="选择模式"
            value={selectionMode}
            onChange={(value: 'multiple' | 'none' | 'single') =>
              setSelectionMode(value)
            }
          >
            <Radio value="multiple">多选</Radio>
            <Radio value="single">单选</Radio>
            <Radio value="none">不选</Radio>
          </RadioGroup>
          <RadioGroup
            label="最少要选一个"
            value={disallowEmptySelection}
            onChange={(value: '1' | '0') => setDisallowEmptySelection(value)}
          >
            <Radio value="1">要这样</Radio>
            <Radio value="0">别这样</Radio>
          </RadioGroup>
          <RadioGroup
            label="要不要固定高度"
            value={maxHeight}
            onChange={(value: '' | 'size-5000') => setMaxHeight(value)}
          >
            <Radio value="size-5000">固定(超出部分滚动)</Radio>
            <Radio value="">不固定</Radio>
          </RadioGroup>
          <RadioGroup
            label="加载中"
            value={loadingState}
            onChange={(value: LoadingState) => setLoadingState(value)}
          >
            {[
              'loading',
              'sorting',
              'loadingMore',
              'error',
              'idle',
              'filtering',
              '',
            ].map((status) => (
              <Radio value={status} key={status}>
                {status}
              </Radio>
            ))}
          </RadioGroup>
        </View>
        <Flex
          width="calc(100% - size-2000)"
          height={maxHeight}
          direction="column"
        >
          <TableView
            aria-label="一个表格"
            selectionMode={selectionMode}
            disallowEmptySelection={!!+disallowEmptySelection}
            disabledKeys={[2]}
          >
            <TableHeader columns={columns}>
              {(column) => <Column key={column.uid}>{column.name}</Column>}
            </TableHeader>
            <TableBody items={rows} loadingState={loadingState}>
              {(item) => (
                <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>
              )}
            </TableBody>
          </TableView>
        </Flex>
      </Flex>
    </div>
  )
}
