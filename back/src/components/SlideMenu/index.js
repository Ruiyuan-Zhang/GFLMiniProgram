import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

import styles from './index.less';

const index = () => {
  return (
  <Sider className={styles.sider} width={200} >
    <div className={styles.logo} />
    <Menu defaultOpenKeys={['rwgl','xtgl','yhgl']} mode="inline" theme="dark">
        <SubMenu key="rwgl" title="任务管理">
            <Menu.Item key="fbxrw">发布新任务</Menu.Item>
            <Menu.Item key="flgl">分类管理</Menu.Item>
            <Menu.Item key="jxz">进行中</Menu.Item>
            <Menu.Item key="ywc">已完成</Menu.Item>
        </SubMenu>
        <SubMenu key="xtgl" title="系统管理"></SubMenu>
        <SubMenu key="yhgl" title="用户管理"></SubMenu>
      </Menu>
  </Sider>
  );
};

export default index;
