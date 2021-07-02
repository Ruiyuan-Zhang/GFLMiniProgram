import {View} from '@tarojs/components'
import {useCallback, useEffect, useState} from 'react'
import {AtAvatar, AtInput, AtIcon} from 'taro-ui'
import './index.less'

const Item = ({index, img, objs, handleLocalDataChange}) => {
    const [data, setData] = useState({file:img})
    const [ifInput, setIfInput] = useState(false)
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
            ifInput?objs.map(({name, eglish_name, type, tips}) => (
                    <AtInput
                        key={eglish_name}
                        title={name}
                        name={eglish_name}
                        type={type}
                        placeholder={tips}
                        value={data[eglish_name]}
                        onChange={v=>{
                            let nd = data
                            nd[eglish_name] = v 
                            setData(nd)
                            handleLocalDataChange({index:index,data:nd})
                        }}
                    />
                )):<View>
                    {objs.map(({eglish_name})=>data[eglish_name]||'-').join('；')}
                </View>
            }
            </View>
        </View>
    )
}

export default Item