import React from 'react';

import ruRU from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';

import moment from 'moment';
import 'moment/locale/ru'

import './App.less'
import FNSForm from './components/FNSForm'
import AntForm from './components/AntForm'

moment.locale('ru');


class Page extends React.Component {
  constructor() {
    super()

    this.state = {
      locale: ruRU,
    };
  }

  render() {
    const { locale } = this.state;
    return (
      <ConfigProvider locale={locale}>
        <div className='container'>
          <div className='container__item'>
            <AntForm />
          </div>
          <div className='container__item'>
            <FNSForm />
          </div>
        </div>
      </ConfigProvider >
    )
  }

}

function App() {
  return (
    <Page />
  )
}

export default App;

