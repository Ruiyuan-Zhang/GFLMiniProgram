import {View} from '@tarojs/components'
import {useState} from 'react'
import {AtAvatar, AtInput, AtIcon} from 'taro-ui'

const Item = ({img, objs}) => {
    const [data, setData] = useState({})
    const [ifInput, setIfInput] = useState(false)
    const setInput = () =>{
        setIfInput(!ifInput)
    }

    return (
        <View className='item'>
            <AtAvatar image={img} /> 
            <AtIcon value='chevron-up' size='30' onClick={setInput}/>
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
                            console.log(data)
                        }}
                    />
                )):<View>
                    {objs.map(({eglish_name})=>data[eglish_name]||'-').join('；')}
                </View>
            }
        </View>
    )
}

export default Item