import React from "react";

const DashboardMain = React.lazy(() => import("./views/Dashboard/Main"));
const CustomerList = React.lazy(() => import("./views/Customers/List"));
const CustomerDetail = React.lazy(() => import("./views/Customers/Detail"));
const EmployeesList = React.lazy(() => import("./views/Employees/List"));
const EmployeeDetail = React.lazy(() => import("./views/Employees/Detail"));
const UserList = React.lazy(() => import("./views/Users/List"));
const PageNotFound = React.lazy(() => import('./views/Pages/404/404'));


const routes = [
    { path: '/dashboard', name: 'Dashboard', component: DashboardMain },
    { path: '/customers/:id/edit', exact: true, name: 'Customer Edit', component: CustomerDetail },
    { path: '/customers/create', exact: true, name: 'Customer Create', component: CustomerDetail },
    { path: '/customers', exact: true, name: 'Customers', component: CustomerList },
    { path: '/employees/:id/edit', exact: true, name: 'Employee Edit', component: EmployeeDetail },
    { path: '/employees/create', exact: true, name: 'Employee Create', component: EmployeeDetail },
    { path: '/employees', exact: true, name: 'Employees', component: EmployeesList },
    { path: '/users', exact: true, name: 'Users', component: UserList },
    { path: '/404', exact: true, name: '404', component: PageNotFound }
]

export default routes;
