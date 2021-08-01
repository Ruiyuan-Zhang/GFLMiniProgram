import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import {file_url} from '@/config'
import './index.less'

export default function Index (){

  const urls = [
    file_url+'/images/client/home_bg_1.png',
    file_url+'/images/client/home_bg_2.png',
    file_url+'/images/client/home_bg_3.png',
    file_url+'/images/client/home_bg_4.png',
  ]
    return (
      <View className='index'>
        <Swiper
          autoplay 
          indicatorDots
          circular
        >
          {
            urls.map(url=>(
              <SwiperItem className='image-wrap' key={url}>
                  <Image className='image' src={url}></Image>
              </SwiperItem>
            ))
          }
        </Swiper>
      </View>
    )
  }