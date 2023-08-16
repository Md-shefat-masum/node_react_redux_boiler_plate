import React from 'react'
import DashboardLayout from '../views/layouts/DashboardLayout.jsx';
import Analytics from '../views/pages/dashboard/Analytics.jsx';
import { counter_routes } from '../views/pages/counter/config/routes.js';
import Error404 from '../views/pages/errors/Error404.jsx';

import user_routes from '../views/pages/users/config/routes.js';
import blog_routes from '../views/pages/blog/config/routes.js';

const router = {
    path: "/",
    element: <DashboardLayout />,
    children: [
        {
            path: '',
            element: <Analytics></Analytics>
        },
        
        counter_routes,
        user_routes,
        blog_routes,
        
        {
            path: '*',
            element: <Error404/>
        },
    ]
};

export default router;