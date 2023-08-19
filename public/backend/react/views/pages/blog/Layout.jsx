import React from 'react'
import { Outlet } from 'react-router-dom'
import setup from './config/setup'

function Layout() {
    return (
        <>
            <div className="bread_cumb">
                <h2>{setup.layout_title}</h2>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default Layout