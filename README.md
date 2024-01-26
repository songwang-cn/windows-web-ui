# Web前端

### 写在前面

你当前正在查看基于 ```AirPower``` 基础库的 DEMO宿主项目的分支代码, 这次我们使用的是 ```vite``` 构建, 包管理使用的是 ```yarn```, 请先安装前叙的相关工具后继续接下来的操作 ：）

### 一、初始化仓库(推荐ssh)

> 建议windows开发者使用 ```git bash``` 不要使用windows自带的拉垮的 ```cmd``` ```powershell``` 等。否则接下来的脚本可能出现问题，你只能通过自己手动去操作。

```shell
git clone git@e.coding.net:holdhope/houhouhulian/web.git HoldHopeWeb &&
cd HoldHopeWeb/src && 
git clone -b 5.x git@e.coding.net:holdhope/common/AirPower.git airpower && cd ../ &&
yarn && cp .env.dev .env && yarn s
```

### 二、修改环境变量和配置

请按需要修改环境变量以及项目的一些特性配置 ```AppConfig```

### 三、启动和打包

> 启动项目前，我们建议你关闭 ```visual studio code``` 的 ```Vetur``` 插件，避免 ```vue2``` 和 ```vue3``` 产生冲突。


```shell
# 启动项目
yarn s              #缩写指令

# 打包项目
yarn dev            #开发环境 使用.env.dev
yarn test           #测试环境 使用.env.test
yarn production     #生产环境 使用.env.production
```

### 四、其他命令

```shell
#使用标准commit模板
yarn c   

#更新项目和AirPower
yarn u   

#查看Git格式化日志
yarn l           
```

### 五、推荐的VSCODE插件扩展

- TypeScript Vue Plugin (Volar)
- Vue Language Features (Volar)
- ESLint
- SCSS Formatter

> 如碰到其他兼容问题，建议在工作区禁用以上四个插件之外的其他插件，特别是```Vetur```。

### And now, enjoy your coding!