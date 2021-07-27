// 在 Worker 线程执行上下文会全局暴露一个 worker 对象，直接调用 worker.onMessage/postMessage 即可
// 可以在这里执行一些异步的操作
worker.onMessage( async ({action,data}) => {
    console.log(action)
    console.log(data)
    if (action == 'init'){
        // 初始化

    }else if (action == 'train'){
        /**
         * data格式
         * data: {
         *    task, dataList
         * }
         */
        
        

        // 告诉主线程已经执行结束
        worker.postMessage({
            action:'doneTrain'
        })


    }else if (action == 'info'){
        // 返回当前任务的训练情况信息 废弃
        

    }else if (action == 'shutdown'){
        // 关闭一个 正在训练中的任务/待训练的任务
        
    }
})
