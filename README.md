# 未来生活 小程序开发框架
# 小程序开发框架

<a name="dncbX"></a>
## 概述
- 小程序开发框架是绿城平台提供给绿城应用开发者，让开发者能根据该框架快速、高效的开发应用和绿城平台实现更好的对接和交互。
- 小程序开发框架是基于Vue进行封装的一个开发框架。使用该框架需要开发者也使用Vue进行应用的开发。对于小程序的开发者我们建议您下载我们的小程序开发框架，在此基础上开发您的应用。


<br />[ 框架下载地址](https://gt-toolbox.oss-cn-beijing.aliyuncs.com/gt-toolbox/372bd52b-122a-4b05-86eb-e0adff2bd890.zip)
<a name="310c64a3"></a>
## 框架目录结构


```markdown
├── src                       # 核心文件
│   └── assets                # 图片资源文件
│		└── common                # 公共JS资源文件
│       ├── config            # 公共JS配置资源文件
│       ├── css               # 公共CSS配置资源文件
│       ├── request           # 公共请求配置资源文件
│				  │── gtaxios         # 封装axios请求
│         ├── url             # 接口请求地址
│       ├── router            # framework扩展（beforeEach，afterEach）
│   └── components            # 项目公共组件
│   └── page                  # 页面文件
│   ├── routerSettings        # 页面路由配置
│   ├── storeSettings         # vuex配置
│   ├── App.vue               # 入口文件
│   ├── main.js               # 项目主js
├── env                       # 开发环境配置
├── env.dev                   # dev环境配置
├── env.prod                  # 正式环境配置
├── postcss.config            # px转rem配置
├── package.json              # 指定项目开发和生成环境中需要使用的依赖库
└── README.md                 # 说明文件
└── vue.config                # webpack配置
```

<br />





