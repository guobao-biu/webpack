import React from 'react?djkjfk'
import ReactDom from 'react-dom'
import './assets/css/common.css'
import './assets/scss/common.less'
import 'font-awesome/css/font-awesome.min.css'

ReactDom.render(
    <div className='container'>
        <img src={require('./assets/images/pic1.jpg')} alt='' width='500'/>
        <img src={require('./assets/images/pic3.jpg')} alt='' width='500'/>
        <img src={require('./assets/images/pic4.jpg')} alt='' width='500'/>
        <img src={require('./assets/images/pic5.jpg')} alt='' width='500'/>
        <div className='fa fa-rocket'></div>
        <div className='rocket'>React</div>
    <div className='rocket'>React</div>
    </div>,
    document.getElementById('app')
)