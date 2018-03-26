import * as React from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import Home from './home';
import Login from './login';
import Contas from './contas';
import Categorias from './categorias';
import Transacoes from './transacoes';
import ErrorsRouter from './error';

const { Header, Content, Footer } = Layout;


class AppShell extends React.Component {

    render() {

        return (
            <BrowserRouter>

                <Layout className="layout">
                    <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">
                            <NavLink to='/'>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to='/login'>Login</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/contas'>Contas</NavLink>
                        </Menu.Item> 
                        <Menu.Item key="4">
                            <NavLink to='/categorias'>Categorias</NavLink>
                        </Menu.Item> 
                        <Menu.Item key="5">
                            <NavLink to='/transacoes'>Transações</NavLink>
                        </Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Switch>
                            <Route exact path="/" component={Home}  />
                            <Route exact path="/login" component={Login} />
                            <Route path="/contas" component={Contas} />
                            <Route path="/categorias" component={Categorias} />
                            <Route path="/transacoes" component={Transacoes} />
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