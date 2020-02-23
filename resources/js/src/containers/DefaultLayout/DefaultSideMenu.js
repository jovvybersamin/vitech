import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import { Icon, Menu, } from "antd";
import { Link, withRouter, NavLink } from "react-router-dom";

const SubMenu = Menu.SubMenu;

const DefaultSideMenu = ({ page, location }) => {

    const [key, setKey] = useState('dashboard');

    useEffect(() => {
        setKey(page);
    }, [page])

    const handleClick = e => {
        setKey(e.key);
    };

    return (
        <Menu theme="light" onClick={handleClick} mode="inline" selectedKeys={[key]}>
            <Menu.Item key="dashboard">
                <Icon type="pie-chart" />
                <span>Dashboard</span>
                <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="customers.list">
                <Icon type="desktop" />
                <span>Customers</span>
                <Link to="/customers" />
            </Menu.Item>
            <Menu.Item key="employees.list">
                <Icon type="desktop" />
                <span>Employees</span>
                <Link to="/employees" />
            </Menu.Item>
            <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        <span>Admin</span>
                    </span>
                }
            >
                <Menu.Item key="users.list">
                    <Icon type="desktop" />
                    <span>Users</span>
                    <Link to="/users" />
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default withRouter(connect(mapStateToProps)(DefaultSideMenu));
