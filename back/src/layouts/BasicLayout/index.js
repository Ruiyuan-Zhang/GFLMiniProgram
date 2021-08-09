import { Layout, Image, message } from 'antd';
import SlideMenu from '@/components/SlideMenu';
import user from '@/assets/user.png'
import {fetchUser} from '@/common/user'
import styles from './index.less';
import { useCallback } from 'react';


const { Header, Footer, Sider, Content } = Layout;

//@connect 这种语法糖写法在函数式组件不能用
const Index = ({ children }) => {
  return (
    <Layout className={styles.index}>
      <SlideMenu/>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.userInfo}
            onClick={()=>{
              message.info("sorry, we don't have user manager module now.")
            }}
          >
            <img className={styles.img} src={user}></img>
            <div className={styles.name}>{fetchUser().user_name||'admin'}</div>
          </div>
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>
        <a href="https://github.com/zju-zry/GFLMiniProgram" target='_blank'>≧◔◡◔≦ zhangruiyuan@zju.edu.cn ≧◔◡◔≦</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
