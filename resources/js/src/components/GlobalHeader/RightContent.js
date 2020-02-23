import React from "react";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from './../../redux/actions/auth';
import { Avatar, Icon, Menu, Spin, Dropdown } from 'antd';
import { isRequired } from './../ValidateFields/ValidateFields';


const avatarStyles = {
    marginRight: '10px'
}

const GlobalRightHeader = ({ auth, logout }) => {

    if (!auth.user) {
        return null;
    }

    const { name } = auth.user;

    const onMenuClick = ({ key }) => {
        console.log(key);
        if (key === "logout") {
            logout();
        }
    }

    const menuHeaderDropdown = (
        <Menu className="" selectedKeys={[]} onClick={onMenuClick}>
            <Menu.Item key="center">
                <Icon type="user" />
                <span>Account Center</span>
            </Menu.Item>
            <Menu.Item key="settings">
                <Icon type="setting" />
                <span>Account Settings</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">
                <Icon type="logout" />
                <span>Logout</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menuHeaderDropdown} trigger={['click']}>
            <div>
                <Avatar size={64} icon="user" size="small" style={avatarStyles} />
                <a className="ant-dropdown-link text-gray-600" href="#">
                    <span>{name}</span>
                </a>
            </div>
        </Dropdown>
    )
}


GlobalRightHeader.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};


const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps, {
    logout
})(GlobalRightHeader);
