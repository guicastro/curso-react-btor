import * as React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const { Header, Sider, Content } = Layout;

class MasterPage extends React.Component {

    state = {
        collapsed: false,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {

        return (
        <Layout style={{ height: "100%" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        style={{ marginLeft: "18px" }}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, overflowY: "scroll", background: '#fff', minHeight: 280 }}>
                    {this.props.children}
              </Content>
            </Layout>
        </Layout>
        )
    }
}

export default MasterPage;