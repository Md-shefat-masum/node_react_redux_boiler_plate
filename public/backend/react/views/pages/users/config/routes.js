import React from 'react'
import All from "../All.jsx";
import Layout from "../Layout.jsx";
import setup from './setup.js';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: setup.prefix,
    element: <Layout />,
    children: [
        {
            path: '',
            element: <All />,
        }
    ]
};