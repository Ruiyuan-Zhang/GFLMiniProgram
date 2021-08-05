import { Layout, Menu } from 'antd';
import SlideMenu from '@/components/SlideMenu';
import styles from './index.less';

const { Header, Footer, Sider, Content } = Layout;

//@connect 这种语法糖写法在函数式组件不能用
const Index = ({ children }) => {
  return (
    <Layout className={styles.index}>
      <SlideMenu/>
      <Layout className={styles.layout}>
        <Header className={styles.header}>GFL移动设备训练「管理系统」</Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>
        <a href="https://github.com/zju-zry/GFLMiniProgram" target='_blank'>≧◔◡◔≦ zhangruiyuan@zju.edu.cn ≧◔◡◔≦</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
