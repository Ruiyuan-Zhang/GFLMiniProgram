import { View, Image, Swiper, SwiperItem } from '@tarojs/components'

import home_bg_1 from '@/assets/images/home_bg_1.png'
import home_bg_2 from '@/assets/images/home_bg_2.png'
import home_bg_3 from '@/assets/images/home_bg_3.png'
import home_bg_4 from '@/assets/images/home_bg_4.png'

import './index.less'

export default function Index (){

    return (
      <View className='index'>
        <Swiper
          autoplay
          indicatorDots
          circular
        >
            <SwiperItem className='image-wrap'>
                <Image className='image' src={home_bg_1}></Image>
            </SwiperItem>
            <SwiperItem className='image-wrap'>
                <Image className='image' src={home_bg_2}></Image>
            </SwiperItem>
            <SwiperItem className='image-wrap'>
                <Image className='image' src={home_bg_3}></Image>
            </SwiperItem>
            <SwiperItem className='image-wrap'>
                <Image className='image' src={home_bg_4}></Image>
            </SwiperItem>
        </Swiper>
      </View>
    )
  }