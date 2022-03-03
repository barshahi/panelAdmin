import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class SliderMenu extends Component {
    handleClick = e => {
        console.log('click ', e);
    };
    render() {

        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="منوی 1">
                    <Menu.ItemGroup key="g1" title="دسته بندی 1">
                        <Menu.Item key="1">گزینه 1</Menu.Item>
                        <Menu.Item key="2">گزینه 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="دسته بندی 2">
                        <Menu.Item key="3">گزینه 3</Menu.Item>
                        <Menu.Item key="4">گزینه 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="منوی 2">
                    <Menu.Item key="5">گزینه 5</Menu.Item>
                    <Menu.Item key="6">گزینه 6</Menu.Item>
                    <SubMenu key="sub3" title="زیرمنو">
                        <Menu.Item key="7">گزینه 7</Menu.Item>
                        <Menu.Item key="8">گزینه 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="منوی 3">
                    <Menu.Item key="9">گزینه 9</Menu.Item>
                    <Menu.Item key="10">گزینه 10</Menu.Item>
                    <Menu.Item key="11">گزینه 11</Menu.Item>
                    <Menu.Item key="12">گزینه 12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default SliderMenu
