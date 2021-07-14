import {
  Checkbox,
  CheckboxGroup,
  Flex,
  Form,
  NumberField,
  Radio,
  RadioGroup,
  TextField,
  View,
  Switch,
  TextArea,
  Slider,
  Picker,
  Item as PickerItem,
} from '@adobe/react-spectrum'
import { useState } from 'react'
import { ComboBox, Item as ComboBoxItem } from '@react-spectrum/combobox'

export default function ViewFormDemo() {
  const [isRequired, setIsRequired] = useState<string>('1')
  const [necessityIndicator, setNecessityIndicator] =
    useState<'label' | 'icon'>('label')
  const [labelPosition, setLabelPosition] = useState<'top' | 'side'>('side')
  const [labelAlign, setLabelAlign] = useState<'start' | 'end'>('end')
  const [isQuiet, setIsQuiet] = useState<'1' | '0'>('0')
  const [isEmphasized, setIsEmphasized] = useState<'1' | '0'>('0')
  const [isDisabled, setIsDisabled] = useState<'1' | '0'>('0')
  const [isReadOnly, setIsReadOnly] = useState<'1' | '0'>('0')
  const [validationState, setValidationState] = useState<'invalid' | 'valid'>(
    '' as any
  )

  return (
    <div>
      <Flex>
        <View>
          <Form labelPosition="side" labelAlign="end">
            <RadioGroup
              label="必选"
              value={isRequired}
              onChange={setIsRequired}
            >
              <Radio value="1">true</Radio>
              <Radio value="0">false</Radio>
            </RadioGroup>
            <RadioGroup
              label="必选提示"
              value={necessityIndicator}
              onChange={(value: 'label' | 'icon') =>
                setNecessityIndicator(value)
              }
            >
              <Radio value="label">文字</Radio>
              <Radio value="icon">图标</Radio>
            </RadioGroup>
            <RadioGroup
              label="标签位置"
              value={labelPosition}
              onChange={(value: 'top' | 'side') => setLabelPosition(value)}
            >
              <Radio value="top">上面</Radio>
              <Radio value="side">左边</Radio>
            </RadioGroup>
            <RadioGroup
              label="标签对齐方向"
              value={labelAlign}
              onChange={(value: 'start' | 'end') => setLabelAlign(value)}
            >
              <Radio value="start">左</Radio>
              <Radio value="end">右</Radio>
            </RadioGroup>
            <RadioGroup
              label="是否去掉边框"
              value={isQuiet}
              onChange={(value: '1' | '0') => setIsQuiet(value)}
            >
              <Radio value="1">是</Radio>
              <Radio value="0">否</Radio>
            </RadioGroup>
            <RadioGroup
              label="选中项颜色高亮"
              value={isEmphasized}
              onChange={(value: '1' | '0') => setIsEmphasized(value)}
            >
              <Radio value="1">是</Radio>
              <Radio value="0">否</Radio>
            </RadioGroup>
            <RadioGroup
              label="是否禁用"
              value={isDisabled}
              onChange={(value: '1' | '0') => setIsDisabled(value)}
            >
              <Radio value="1">禁用</Radio>
              <Radio value="0">启用</Radio>
            </RadioGroup>
            <RadioGroup
              label="是否是只读的"
              value={isReadOnly}
              onChange={(value: '1' | '0') => setIsReadOnly(value)}
            >
              <Radio value="1">只读</Radio>
              <Radio value="0">可以输入</Radio>
            </RadioGroup>
            <RadioGroup
              label="校验状态"
              value={validationState}
              onChange={(value: 'invalid' | 'valid' | '') =>
                setValidationState(value)
              }
            >
              <Radio value="invalid">失败</Radio>
              <Radio value="valid">通过</Radio>
              <Radio value="">不校验</Radio>
            </RadioGroup>
          </Form>
        </View>
        <View>
          <Form
            isRequired={!!+isRequired}
            necessityIndicator={necessityIndicator}
            labelPosition={labelPosition}
            labelAlign={labelAlign}
            isQuiet={!!+isQuiet}
            isEmphasized={!!+isEmphasized}
            isDisabled={!!+isDisabled}
            isReadOnly={!!+isReadOnly}
            validationState={validationState}
          >
            <TextField label="普通内容" placeholder="abc@sunmi.com" />
            <TextField label="必选" isRequired placeholder="1234" />
            <TextField label="可选" isRequired={false} />
            <TextField label="禁用" placeholder="禁止输入" isDisabled />
            <Checkbox>多选框 单个</Checkbox>
            <br />
            <Switch defaultSelected>开关</Switch>
            <RadioGroup label="单选框">
              <Radio value="a">1</Radio>
              <Radio value="b">2</Radio>
              <Radio value="c">3</Radio>
            </RadioGroup>
            <CheckboxGroup label="多选框 多个">
              <Checkbox value="a">1</Checkbox>
              <Checkbox value="b">2</Checkbox>
              <Checkbox value="c">3</Checkbox>
            </CheckboxGroup>
            <NumberField label="数字输入框" defaultValue={15} minValue={0} />
            <TextArea label="文本输入框" />
            <TextField type="tel" label="手机号" />
            <TextField type="email" label="邮箱" />
            <TextField type="url" label="链接" />
            <TextField type="password" label="密码" />
            <TextField type="date" label="日期" />
            <TextField type="datetime-local" label="日期时间" />
            <Picker label="选择框 不带输入">
              <PickerItem key="a">1</PickerItem>
              <PickerItem key="b">2</PickerItem>
              <PickerItem key="c">3</PickerItem>
            </Picker>
            <ComboBox label="选择框 带输入" >
              <ComboBoxItem key="a">1</ComboBoxItem>
              <ComboBoxItem key="b">2</ComboBoxItem>
              <ComboBoxItem key="c">3</ComboBoxItem>
            </ComboBox>
            <Slider label="滑块" defaultValue={12} />
          </Form>
        </View>
      </Flex>
    </div>
  )
}
