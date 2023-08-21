import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import dataStoreSlice from './config/store';


function All() {
    const data_store = useSelector((state) => state[setup.prefix]);
    const { add } = dataStoreSlice.actions;
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('/api/v1/users')
            .then(res => {
                dispatch(add(res.data));
            })
    }, []);

    return (
        <>
            <div className="card list_card">
                <div className="card-header px-0">
                    <h4 className="heading">
                        All Users
                    </h4>
                    <div className="search">
                        <form action="#"><input placeholder="search..." type="search" className="form-control border" /></form>
                    </div>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/user/create" className="btn rounded-pill btn-outline-secondary">
                            <i className="material-symbols-outlined fill">edit</i>
                            Create
                        </a>
                        <div className="table_actions">
                            <a href="#" className="btn p-2 btn-outline-secondary"><i className="material-symbols-outlined fill">tune</i></a>
                            <ul>
                                <li>
                                    <a href="">
                                        <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                        Export All
                                    </a>
                                </li>

                                <li>
                                    <a href="#/user/import" className="">
                                        <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                        Import
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="display data that has been deactivated" className="d-flex">
                                        <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                        Deactivated data
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="table-responsive card-body text-nowrap">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th><input type="checkbox" className="form-check-input" /></th>
                                <th aria-label="id" className="cursor_n_resize">
                                    ID
                                    <span className=''>
                                        <i className="material-symbols-outlined fill">arrow_drop_down</i>
                                    </span>
                                </th>
                                <th className="cursor_n_resize">
                                    Photo
                                </th>
                                <th className="cursor_n_resize">
                                    Name
                                </th>
                                <th className="cursor_n_resize">
                                    Email
                                </th>
                                <th className="cursor_n_resize">
                                    Mobile NO
                                </th>
                                <th className="cursor_n_resize">
                                    Status
                                </th>
                                <th aria-label="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            {
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((i, index) => {
                                    return (
                                        <tr>
                                            <td><input type="checkbox" className="form-check-input" /></td>
                                            <td>1</td>
                                            <td>
                                                <img src="/images/1.jpg" alt="Avatar" className="rounded-circle" style={{ height: '40px', width: '40px' }} />
                                            </td>
                                            <td>
                                                <span className="cursor_pointer">
                                                    super admin
                                                </span>
                                            </td>
                                            <td>superadmin@gmail.com</td>
                                            <td>
                                                016123
                                            </td>
                                            <td>
                                                <span className="">active</span>

                                            </td>
                                            <td>
                                                <div className="table_actions">
                                                    <a href="#" className="btn btn-sm btn-outline-secondary">
                                                        <span class="material-symbols-outlined fill">
                                                            settings
                                                        </span>
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="">
                                                                <span class="material-symbols-outlined">
                                                                    visibility
                                                                </span>
                                                                Quick View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#/user/details/1" className="">
                                                                <span class="material-symbols-outlined">
                                                                    mystery
                                                                </span>
                                                                Details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#/user/edit/1" className="">
                                                                <span class="material-symbols-outlined">
                                                                    edit_square
                                                                </span>
                                                                Edit
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                                Deactive
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <div className="card-footer py-1">
                    <div className="d-inline-block">
                        <ul className="pagination pagination-sm">
                            <li className="page-item pagination-prev-nav disabled">
                                <a href="#" aria-label="Previous" tabindex="-1" className="page-link">
                                    <span><i className="fa fa-angle-left"></i> Previous</span>
                                </a>
                            </li>
                            <li className="page-item pagination-page-nav active">
                                <a href="#" className="page-link">
                                    1
                                </a>
                            </li>
                            <li className="page-item pagination-page-nav">
                                <a href="#" className="page-link">
                                    2
                                </a>
                            </li>
                            <li className="page-item pagination-next-nav">
                                <a href="#" aria-label="Next" className="page-link">
                                    <span>Next <i className="fa fa-angle-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="show-limit d-inline-block">
                        <span>Limit:</span>
                        <select>
                            <option value="10">
                                10
                            </option>
                            <option value="5">
                                5
                            </option>
                            <option value="25">
                                25
                            </option>
                            <option value="50">
                                50
                            </option>
                            <option value="100">
                                100
                            </option>
                        </select>
                    </div>
                    <div className="show-limit d-inline-block"><span>Total:</span> <span>6</span></div>
                </div>
            </div>
        </>
    )
}

export default All