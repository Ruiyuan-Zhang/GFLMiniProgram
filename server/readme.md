# 联邦学习应用的服务端

> 使用基于Gin的GinSkeleton框架进行开发

#### 如何实现任务进展情况界面的数据返回？

在globalModel表中查询该任务的记录信息，并将该信息返回给客户端。

global表是否需要和client表联查 还有任务表

```shell
select * from 
global as g, client as c
where c.g_id = g.id and g.task_id = ?
```

将某一个任务对应的全局模型和客户端模型都找出来

这样前端就可以显示自己的参与情况

聚合的进度也可以根据最后一项globalModel中提交的clientModel的数量来进行推算。