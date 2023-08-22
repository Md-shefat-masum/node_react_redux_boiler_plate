import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import setup from '../../config/setup';
import dataStoreSlice from '../../config/store';

function CanvasDetails() {
    const data_store = useSelector((state) => state[setup.prefix]);
    const { off_canvas_show } = data_store;
    const { toggle_off_canvas_show } = dataStoreSlice.actions;
    const dispatch = useDispatch();
    
    return (
        <div class={`canvas_backdrop ${off_canvas_show && 'active'}`} onClick={(event) => event.target.classList.contains('canvas_backdrop') && dispatch(toggle_off_canvas_show(false))}>
            <div class="content right">
                <div class="content_header">
                    <h3 class="offcanvas-title">User Details</h3>
                    <i class="fa fa-times"></i>
                </div>
                <div class="cotent_body">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>:</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>first name</td>
                                <td>:</td>
                                <td>super</td>
                            </tr>
                            <tr>
                                <td>last name</td>
                                <td>:</td>
                                <td>admin</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>:</td>
                                <td>superadmin@gmail.com</td>
                            </tr>
                            <tr>
                                <td>mobile number</td>
                                <td>:</td>
                                <td>016123</td>
                            </tr>
                            <tr>
                                <td>created at</td>
                                <td>:</td>
                                <td>6/23/2023, 6:11:07 PM</td>
                            </tr>
                            <tr>
                                <td>photo</td>
                                <td>:</td>
                                <td><img src="/images/1.jpg" style={{ height: "120px" }} alt="user profile" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CanvasDetails