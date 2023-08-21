import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
    return (
        <>
            <div className="app_body">
                <div className="left">
                    <div className="logo">
                        <a href="#/">Dashboard</a>
                    </div>
                    <nav>
                        <ul>
                            
                            <li>
                                <div className="nav_link">
                                    <div className="drop_down_title">
                                        <span class="material-symbols-outlined icon fill">
                                            supervisor_account
                                        </span>
                                        <span class="text">
                                            Users
                                        </span>
                                    </div>
                                    <div className="more">
                                        <span className="material-symbols-outlined fill">keyboard_arrow_down</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="nav_link">
                                            <Link to={'/user'}>
                                                <span class="material-symbols-outlined icon">
                                                    trip_origin
                                                </span>
                                                <span class="text">
                                                    All
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="nav_link">
                                            <Link to={'/user'}>
                                                <span class="material-symbols-outlined icon">
                                                    trip_origin
                                                </span>
                                                <span class="text">
                                                    Create
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
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