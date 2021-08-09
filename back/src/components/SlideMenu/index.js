import React from 'react';
import { history } from 'umi';
import { Layout, Menu, Image } from 'antd';
import logo from '@/assets/logo.png'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

import styles from './index.less';

const index = () => {
  const menu = [
    {
      key: 'rwgl',
      title: '任务管理',
      ks: [
        {
          key: 'fbxrw',
          title: '发布新任务',
          url: '/taskSubmit',
        },
        {
          key: 'flgl',
          title: '分类管理',
          url: '/Category',
        },
        {
          key: 'jxz',
          title: '进行中',
          url: '/training',
        },
        {
          key: 'ywc',
          title: '已完成',
          url: '/',
        },
      ],
    },
    {
      key: 'xtgl',
      title: '系统管理',
      ks: [],
    },
    {
      key: 'yhgl',
      title: '用户管理',
      ks: [],
    },
  ];

  const handleRoute = ({ keyPath }) => {
    const pathname = menu
      .filter((x) => x.key === keyPath[1])[0]
      .ks.filter((x) => x.key === keyPath[0])[0].url;
    history.push({ pathname });
  };

  return (
    <Sider className={styles.sider} width={200}>
      <div className={styles.logo} >
        <Image className={styles.img} src={logo}>
        </Image>
        <div className={styles.title}>联邦学习「移动」</div>
      </div>
      <Menu
        defaultOpenKeys={menu.map(({ key }) => key)}
        mode="inline"
        theme="dark"
        onClick={handleRoute}
      >
        {menu.map(({ key, title, ks }) => (
          <SubMenu key={key} title={title}>
            {ks.map(({ key, title }) => (
              <Menu.Item key={key}>{title}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default index;
