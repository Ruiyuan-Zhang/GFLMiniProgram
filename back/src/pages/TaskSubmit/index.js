import styles from './index.less'
import { Steps, Form, Select, Button, Input, Upload, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import {request, requestWrap, addLoading, deleteLoading} from '@/utils/request'
import BasicInfo from './components/BasicInfo'
import DataFormat from './components/DataFormat'
import Submit from './components/Submit'

const { Step } = Steps;

const Index = () => {
  const [si,setStepIndex] = useState(0)
  const [basicInfo,setBasicInfo] = useState({})
  const [dataFormat,setDataFormat] = useState([])

 return (
  <div className={styles.index}>
    <Steps size='small' current={si} >
      <Step title='基本信息'/>
      <Step title='数据格式'/>
      <Step title='提交'/>
    </Steps>
    {si==0&&<BasicInfo
      next={basicInfo=>{
        setBasicInfo(basicInfo)
        setStepIndex(1)
      }}
    />}
    {si==1&&<DataFormat 
      next={dataFormat=>{
      setDataFormat(dataFormat)
      setStepIndex(2)
    }}/>}
    {si==2&&<Submit 
      basicInfo={basicInfo}
      dataFormat={dataFormat}
    />}
    
    
  </div>)
};

export default Index;
