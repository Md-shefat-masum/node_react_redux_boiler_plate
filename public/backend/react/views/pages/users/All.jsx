import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import dataStoreSlice from './config/store';


function All() {
    const data_store = useSelector((state) => state[setup.prefix]);
    const { add } = dataStoreSlice.actions;
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(store, dataStoreSlice);
        axios.get('/api/v1/users')
            .then(res => {
                console.log(res.data);
                dispatch(add(res.data));
            })
    }, []);

    return (
        <>
            <ul>
                {
                    data_store?.all.map(i => {
                        return <li key={i._id}>{i.username}</li>
                    })
                }
            </ul>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <div className="dashboard_table">
                        <div className="theader">
                            <div className="col"><input type="checkbox" /></div>
                            <div className="col">ID</div>
                            <div className="col"></div>
                        </div>
                        <div className="tbody">

                        </div>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        </>
    )
}

export default All