import { CoverView, Text, CoverImage } from "@tarojs/components";
import Taro from '@tarojs/taro'
import './index.less'
import { TabIndexContext } from '../store/tabIndex'
import { useContext, useEffect, useState } from "react";

const tabBar = {
    color: '#a1a7b3',
    selectedColor: '#1492ff',
    backgroundColor: '#ffffff',
    list: [
        {
          pagePath: 'pages/home/index',
          text: 'home',
          iconPath: '../assets/tabIcon/home.png',
          selectedIconPath: '../assets/tabIcon/home_blue.png',
        },
        {
          pagePath: 'pages/category/index',
          text: 'category',
          iconPath: '../assets/tabIcon/category.png',
          selectedIconPath: '../assets/tabIcon/category_blue.png',
        },
        {
          pagePath: 'pages/task/index',
          text: 'task',
          iconPath: '../assets/tabIcon/task.png',
          selectedIconPath: '../assets/tabIcon/task_blue.png',
        },
        {
          pagePath: 'pages/mine/index',
          text: 'mine',
          iconPath: '../assets/tabIcon/user.png',
          selectedIconPath: '../assets/tabIcon/user_blue.png',
        }
    ],
}

const permissions = ['home', 'category','task','mine']

export default () => {

    const { tabIndex, dispatch } = useContext(TabIndexContext)
    const [tabs, setTabs] = useState([])

    const switchTab = (item) => {
        const url = '/' + item.pagePath
        Taro.switchTab({
            url
        })
    }

    useEffect(() => {
        const tabs = []
        permissions.forEach(permission => {
            tabBar.list.forEach((tab) => {
                const {text} = tab
                if(text === permission){
                    tabs.push(tab)
                }
            })
        })
        setTabs(tabs)
    },[])

    return <CoverView className="tab-container">
        {
            tabs.map((tab, index) => {
                return <CoverView className="tab-item" onClick={() => switchTab(tab)}>
                    <CoverImage className="tab-icon" src={tabIndex === tab.text ? tab.selectedIconPath : tab.iconPath} />
                    <Text className={tabIndex === tab.text ? 'tab-text-select' : 'tab-text'}>{tab.text}</Text>
                </CoverView>
            })
        }
    </CoverView>
}