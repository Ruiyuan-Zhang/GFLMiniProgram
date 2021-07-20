import { List, Avatar, Button, Modal, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { requestWrap } from '@/utils/request'
import Upload from '@/components/Upload';
import styles from './index.less';

/**
 * 分类界面的话
 * 点击创建分类
 * 分类界面展示效果为列表
 */

const Index = () => {

  const [data,setData]  = useState([])


  useEffect(async()=>{
    let res = await requestWrap({}).get('/v1/admin/category/list?page=1&limit=5')
    setData(res.data.list)
  },[])

  const addCategory = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className={styles.index}>
      <Button
        className={styles.add}
        type="primary"
        onClick={() => setIsModalVisible(true)}
      >
        添加分类
      </Button>
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ id, name, description, file }) => (
          <List.Item key={id}>
            <List.Item.Meta
              avatar={<Avatar src={`/file/${file}`} />}
              title={<a href="https://ant.design">{name}</a>}
              description={description}
            />
          </List.Item>
        )}
      />
      <Modal
        title="添加一个分类"
        visible={isModalVisible}
        onOk={addCategory}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form>
          <Upload />
          <Form.Item label="名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="描述" name="description">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
