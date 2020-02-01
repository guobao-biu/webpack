import React from 'react'
import ReactDom from 'react-dom'
import 'reset-css'
import './assets/css/common.css'
import './assets/scss/common.less'
import 'font-awesome/css/font-awesome.min.css'

// 路由
import RouterConfig from './router'

ReactDom.render(
    <RouterConfig/>,
    document.getElementById('app')
)