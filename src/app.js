import React from 'react'
import ReactDom from 'react-dom'
import './css/common.css'
import pic5 from './assets/images/pic5.jpg'


ReactDom.render(
    <div>
        <h4>React, is a mvvm structure</h4>
        <img src='{pic5}'/>
    </div>,
    document.getElementById('app')
)