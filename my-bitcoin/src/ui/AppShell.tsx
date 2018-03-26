import * as React from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import {Layout, Menu /*,Breadcrumb*/} from 'antd';
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import ErrorsRouter from './error';

const { Header, Content, Footer } = Layout;

class AppShell extends React.Component {

    render() {

        return (
            <BrowserRouter>

                <Layout className="layout">
                    <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">
                            <NavLink to='/pagina1'>pagina 1</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to='/pagina2'>pagina 2</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/pagina3'>pagina 3</NavLink>
                        </Menu.Item> 
                    </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Switch>
                            <Route exact path="/" />
                            <Route path="/pagina1" component={Page1} />
                            <Route path="/pagina2" component={Page2} />
                            <Redirect to="error/404"  />
                        </Switch>
                        <ErrorsRouter/>
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    ©2018 Created by Guilherme Castro
                    </Footer>
                </Layout>
            </BrowserRouter>
            );

    }
}

export default AppShell;