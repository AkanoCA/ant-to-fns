import React from 'react';
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  Checkbox,
} from 'antd';

import moment from 'moment';

import { CaretDownOutlined } from '@ant-design/icons';
import Calendar from './assets/Calendar.jsx';



import './style.less';

const Option = { Select };


class FNSForm extends React.Component {

  render() {

    return (

      <Form layout="vertical" className='fns-content'>
        <Form.Item label="Имя" className='fns-form-item' >
          <Input className='fns-input' />
        </Form.Item>

        <Form.Item label="Фамилия" className='fns-form-item' >
          <Input disabled value="Иванов" className='fns-input' />
        </Form.Item>

        <Form.Item label="Индекс" className='fns-form-item'>
          <InputNumber className="fns-input-number"
            min="0"
            max="999999"
          />
        </Form.Item>

        <Form.Item label="Выбрать что-то" className='fns-form-item'>
          <Select className='fns-form-select'
            placeholder="Выберите что-нибудь"
            defaultValue="1"
            dropdownClassName='fns-select-dropdown'
            suffixIcon={<CaretDownOutlined />}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Выберите дату" className='fns-form-item'>
          <DatePicker locale={'ru_RU'}
            className="fns-picker"
            dropdownClassName="fns-picker-dropdown"
            format="DD.MM.YYYY"
            allowClear={false}
            disabledDate={current => current <= (Date.now() - 100 * 60 * 60 * 24)}
            defaultValue={moment(Date.now())}
            suffixIcon={<Calendar />} />
        </Form.Item>

        <Form.Item className='fns-form-item'>
          <Checkbox className='fns-checkbox-wrapper'>Бессрочно</Checkbox>
        </Form.Item>

        <Form.Item className='fns-form-item'>
          <Button type="primary" className="fns-button">ПОДТВЕРДИТЬ</Button>
        </Form.Item>
      </Form>

    )
  }
}


export default FNSForm;