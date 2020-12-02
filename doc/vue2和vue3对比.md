##  调试工具

| 工具         | Vue2 | Vue3   |
| ------------ | ---- | ------ |
| dev.js tools | 支持 | 不支持 |

1. 目前并不清楚 是否是默认关闭了 dev-tools ，需要去弄清楚是否是 封装了devtools: !1

##  使用体验

| 标题   | Vue2         | Vue3             |
| ------ | ------------ | ---------------- |
| 包大小 |              |                  |
| 热更新 | 比vue3好一点 | 热更新不是很灵敏 |

##   package.json   解析

###   vue3

分享文章来源：

https://blog.csdn.net/weixin_33757609/article/details/87957479 // 讲解的比较清晰

https://docs.percy.io/docs/end-to-end-testing // 意外发现一个 外观测试的网站

https://www.npmjs.com/package/browserslist   // npm 解读

解析：

1. browserslist 的作用： 限制node 和浏览器的版本范围

```js
"browserslist": [
  "> 1%",
  "last 2 versions", // 每个浏览器最近的两个版本
  "not dead" //dead 通过last 2 versions筛选的浏览器版本中，全球使用率低于1%并且官方声明不在维护或者事实上已经两年没有再更新的版本。目前符合条件的有 IE10,IE_Mob 10,BlackBerry 10,BlackBerry 7,OperaMobile 12.1  加上 not就是取反
]
```

2. eslint 配置的位置发生变化，在package.json 中， 而vue2在 eslint.js 文件中配置

###   vue2

分享文章来源：

https://www.cnblogs.com/mengfangui/p/12286701.html

解析：

（1）eslint校验标准：@vue/standard
（2）当开发者执行 git add 操作将代码提交到暂存区后，再执行 git commit 操作时：

- pre-commit钩子在 git commit 执行时被触发，执行npm run precommit脚本（即lint-staged命令）；
- lint-staged的配置，就是利用linters对暂存区的文件路径应用过滤规则，匹配的文件将执行后面配置的任务，这里的任务就是调用项目中的eslint指令检查文件，如果报错则先自动修复--fix，最后把没有问题的代码加入暂存区git add。
- 如果最终还有报错，则流程终止，无法执行 commit 操作。

```js
"gitHooks": {
  "pre-commit": "lint-staged"
},
"lint-staged": {
  "*.{js,jsx,vue}": [
    "vue-cli-service lint",
    "git add"
  ]
}
```

##  组件化





