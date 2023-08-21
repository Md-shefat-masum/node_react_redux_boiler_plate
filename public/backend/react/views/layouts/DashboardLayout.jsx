import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import updateNavActive from './hooks/updateNavActive';
import SingleLink from './components/SingleLink';
import DropDownLink from './components/DropDownLink';

function DashboardLayout() {
    const rlocation = useLocation();
    useEffect(() => {
        updateNavActive();
    }, [rlocation]);

    return (
        <>
            <div className="app_body">
                <div className="left">
                    <div className="logo">
                        <a href="#/">Admin Panel</a>
                    </div>
                    <nav>
                        <ul>
                            <SingleLink to={'/'} text={'Dashboard'} icon={'monitoring'}></SingleLink>

                            <li>
                                <DropDownLink text={'Users'} icon={'manage_accounts'}></DropDownLink>
                                <ul>
                                    <SingleLink to={'/user'} text={'all'} icon={'trip_origin'}></SingleLink>
                                    <SingleLink to={'/user/create'} text={'create'} icon={'trip_origin'}></SingleLink>
                                </ul>
                            </li>

                            <li>
                                <DropDownLink text={'Blogs'} icon={'data_table'}></DropDownLink>
                                <ul>
                                    <SingleLink to={'/blog'} text={'all'} icon={'trip_origin'}></SingleLink>
                                    <SingleLink to={'/blog/create'} text={'create'} icon={'trip_origin'}></SingleLink>
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