import React from 'react'
import {Link} from 'react-router-dom'

export default class Index extends React.Component {
    render() {
        return (
            <section>
                <h1 className='title'>App</h1>
                <ul>
                    <li>
                        <Link to='/home'>首页</Link>
                    </li>
                </ul>
            </section>
        )
    }
}
