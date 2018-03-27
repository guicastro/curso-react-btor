import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import Router from './Router';

const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {

    render() {

        return (<Layout className="layout">
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
                        <Router />
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2018 Created by Guilherme Castro</Footer>
                </Layout>
        );
    }
}

export default AppLayout;