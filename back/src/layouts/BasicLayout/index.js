import SlideMenu from '@/components/SlideMenu';
import styles from './index.less';

const Index = ({ children }) => {
  return (
    <div className={styles.index}>
      <div className={styles.left}>{/* <SlideMenu /> */}</div>
      shsl??
      <div>{children}</div>
    </div>
  );
};

export default Index;
