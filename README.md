##项目搭建具体步骤:

   

 - 安装Create-React-App脚手架工具,已经安装的同学请忽略
    

    `npm install create-react-app -g`
    

 - 创建初始项目 
    `create-react-app my-app --typescript`
    
   **注意:**
    如果同学你是参考typescript官方文档进行react项目搭建,里面有用`create-react-app my-app --scripts-version=react-scripts-ts`命令创建的,千万别用,现在已经过时了,
    webpack版本有问题,后续配置各种想不到的坑 [TypeScript中文官网](https://www.tslang.cn/docs/home.html)
    

 - 引入AntDesignMobile,实现组件按需加载
    >本步骤官网有比较详细的介绍,我就不一一列举配置过程了,建议大家不要eject暴露所有内建配置,后续版本升级维护可能比较麻烦,推荐使用 react-app-rewired 插件即可配置;[AntDesignMobile官网](https://mobile.ant.design/docs/react/introduce-cn )
    

 - 安装React路由,状态管理工具mobx,配置sass
    ``` JavaScript
        npm install history @types/history react-router-dom @types/react-router-dom // 安装react路由
        npm install mobx-react mobx  // 安装mobx
        npm install node-sass // 安装sass工具,安装之后无需另外配置sass,脚手架工具已经集成了
        
    ```
    

 - 基本配置完成,运行项目 
    `npm run start`