import {View} from '@tarojs/components'
import { type } from 'os'
import {useCallback, useEffect, useState} from 'react'
import {AtAvatar, AtInput, AtIcon} from 'taro-ui'
import './index.less'

const Item = ({index, img, dataFormats, handleLocalDataChange}) => {
    const fileName = dataFormats.filter(({type})=>type=='image')[0].englishName
    let initData = {}
    initData[fileName] = img
    const [data, setData] = useState(initData)
    const [ifInput, setIfInput] = useState(true)
    const [ifNeedBack, setIfNeedBack] = useState(false)
    const setInput = () =>{
        // 只要用户曾点击了展开，那之后要想回到原始状态就需要使用下面这个变量进行切换回去
        setIfNeedBack(true)
        setIfInput(!ifInput)
    } 

    useEffect(()=>{
        handleLocalDataChange({index:index,data:data})
    },[])

    return (
        <View className={'item'+(!ifInput?'':' item-transform')+ ((ifNeedBack&&!ifInput)?' item-transform-back':'')}>
            <View className='index'>{index+1}</View>
            <AtAvatar className='img' image={img} /> 
            <AtIcon className='icon' value={!ifInput?'chevron-down':'chevron-up'} size='15' onClick={setInput}/>
            <View className={ifInput?'input':'no-input'}>
            {
            ifInput?dataFormats.filter(({type})=>type!=='image').map(({name, idstr, type, englishName, tips}) => (
                    <AtInput
                        key={idstr}
                        title={name}
                        name={englishName}
                        type={type}
                        placeholder={tips}
                        value={data[englishName]}
                        onChange={v=>{
                            let nd = data
                            nd[englishName] = v 
                            setData(nd)
                            handleLocalDataChange({index:index,data:nd})
                        }}
                    />
                )):<View>
                    {dataFormats.filter(({type})=>type!=='image').map(({englishName})=>data[englishName]||'-').join('；')}
                </View>
            }
            </View>
        </View>
    )
}

export default Item