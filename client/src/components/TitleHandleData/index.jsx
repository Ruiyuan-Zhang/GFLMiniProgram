const {View} = require("@tarojs/components")
import './index.less'

const Index = ({title, subtitle}) => {
    return (
        <View className='TitleHandleData'>
            <View className='title'>
                {title}
            </View>
            <View className='subtitle'>
                {subtitle}
            </View>
        </View>
    )
}

export default Index