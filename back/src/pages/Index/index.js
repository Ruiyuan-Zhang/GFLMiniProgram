// @refresh rese
import  request  from '@/utils/request';
import { useEffect } from 'react';
import styles from './index.less';

const Index = () => {

  // 测试一下请求接口
  // useEffect(async ()=>{
  //   const res = await request.post('user')
  //   console.log(res)
  // },[])
  return (
    <div className={styles.index}>
      欢迎
    </div>
  )
};

export default Index;
