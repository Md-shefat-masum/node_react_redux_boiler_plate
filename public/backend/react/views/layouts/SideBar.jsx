import React from 'react'
import SingleLink from './components/SingleLink'
import DropDownLink from './components/DropDownLink'

function SideBar() {
    return (
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
    )
}

export default SideBar