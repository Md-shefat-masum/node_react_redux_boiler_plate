import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
    return (
        <>
            <div className="app_body">
                <div className="left">
                    <div className="logo"></div>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>home</Link></li>
                            <li><Link to={'/counter'}>counter</Link></li>
                            <li><Link to={'/about'}>about</Link></li>
                            <li><Link to={'/contact'}>contact</Link></li>
                            <li><Link to={'/user'}>user</Link></li>
                            <li><Link to={'/blog'}>blog</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="right">
                    <header></header>
                    <main>
                        <Outlet></Outlet>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout