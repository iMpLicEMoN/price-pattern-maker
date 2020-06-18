import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Progress,
  InputNumber,
  Row, Col,
  Form, Button,
  Checkbox, Input,
  DatePicker,
  Switch
} from 'antd';

import {
  FundTwoTone,
  SlidersTwoTone,
  RiseOutlined,
  FallOutlined,
  SaveOutlined
} from '@ant-design/icons';

import { createComponent, useStore } from 'effector-react'
import { setD, setO, setH, setL, setC, panelData } from './Panel.effects'
import { chartData, setBar } from './Chart.effects'


const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 4, offset: 4 },
};


  const Panel = (props, state) => {

    const $panelData = useStore(panelData)

    
    useEffect(() => {

    })

    const onSave = () => {
      setBar($panelData)
    }


    return (
      <Form name="Panel">
        <Form.Item {...formTailLayout} label="Date">
          <DatePicker
            value={moment($panelData.time)}
            onChange={setD}
          />
        </Form.Item>
        <Form.Item {...formTailLayout} label="Open">
          <InputNumber
            value={$panelData.open}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={setO}
          />
        </Form.Item>
        <Form.Item {...formTailLayout} label="High">
          <InputNumber
            value={$panelData.high}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={setH}
          />
        </Form.Item>
        <Form.Item {...formTailLayout} label="Low">
          <InputNumber
            value={$panelData.low}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={setL}
          />
        </Form.Item>
        <Form.Item {...formTailLayout} label="Close">
          <InputNumber
            value={$panelData.close}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={setC}
          />
        </Form.Item>

        {/* <Form.Item {...formTailLayout} label="Stop loss">
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item {...formTailLayout} label="Buy\Sell" >
        <Switch style={{ fontSize: '5em' }}
          checkedChildren={<FallOutlined style={{ fontSize: '2em', color: 'red' }} />}
          unCheckedChildren={<RiseOutlined style={{ fontSize: '2em', color: 'green' }} />}
          defaultChecked />
      </Form.Item> */}

        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={onSave}>
            <SaveOutlined style={{ fontSize: '1.2em' }} />
              Save
            </Button>
        </Form.Item>
      </Form>

    );
  
}

export default Panel;
