import React from 'react'
import All from "../All.jsx";
import Layout from "../Layout.jsx";

// export { default as DashboardCounterAll} from "./All.jsx";

export const counter_routes = {
    path: 'counter',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <All />,
        }
    ]
};