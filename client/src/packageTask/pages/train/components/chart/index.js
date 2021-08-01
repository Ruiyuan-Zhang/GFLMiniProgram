// 柱状图
import React, { Component, useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.less";

export default ({data, name}) => {

    let barChart
    const refBarChart = (node) => (barChart = node);
    useEffect(()=>{
        const defautOption = {
            animation:false,
            title: {
                text:name, subtext:"本地模型训练情况（损失率）", x: 'center'
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                type: 'line', data: data
            }]
        };
        if (barChart) barChart.refresh(defautOption);
    },[data])

    return (
      <View className='bar-chart'>
        {data&&<EChart ref={refBarChart} canvasId='bar-canvas' />}
      </View>
    );
  
}