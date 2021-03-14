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

import './style.less';

const Option = { Select };

class AntForm extends React.Component {

    render() {

        return (

            <Form layout="vertical" >
                <Form.Item label="Имя">
                    <Input />
                </Form.Item>

                <Form.Item label="Фамилия" >
                    <Input disabled value="Иванов" />
                </Form.Item>

                <Form.Item label="Индекс">
                    <InputNumber style={{ width: "50%" }} />
                </Form.Item>

                <Form.Item label="Выбрать что-то">
                    <Select placeholder="Выберите что-нибудь">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Выберите дату">
                    <DatePicker />
                </Form.Item>

                <Form.Item>
                    <Checkbox>Бессрочно</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button>ПОДТВЕРДИТЬ</Button>
                </Form.Item>
            </Form>

        )
    }
}


export default AntForm;