import React, { Component, Suspense } from "react";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Icon, Layout } from "antd";
import { Switch, Route, Redirect } from 'react-router-dom';

import DefaultSideMenu from "./DefaultSideMenu";
import GlobalRightHeader from "../../components/GlobalHeader/RightContent";
import Loading from './../../components/Loading/index';
import NoMatch from './../../components/routing/NoMatch';

import routes from './../../routes';


const { Header, Footer, Sider, Content } = Layout;


class DefaultLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({
            collapsed: collapsed
        });
    };

    onToggle = () => {
        this.setState(prev => ({
            collapsed: !prev.collapsed
        }));
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    theme={"light"}
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo h-10 bg-blue-800 m-2" />

                    <DefaultSideMenu />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            style={{ cursor: 'pointer' }}
                            onClick={this.onToggle}
                        />
                        <div className="float-right px-3">
                            <GlobalRightHeader />
                        </div>
                    </Header>

                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                {routes.map(({ name, exact, path, component: Component }) => {
                                    return Component ? (
                                        <Route
                                            key={name}
                                            exact={exact}
                                            path={path}
                                            name={name}
                                            render={props => (
                                                <Component {...props} />
                                            )}
                                        />
                                    ) : (null);
                                })}

                                <Route component={NoMatch} />
                                <Redirect from="/" to="/dashboard" />
                            </Switch>
                        </Suspense>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}


DefaultLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};


const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(DefaultLayout);
