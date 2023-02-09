### 使用的 node 版本

node 版本: v16.18.1

pnpm 版本: 7.22.0

### [](https://gitee.com/shiqi547git/bubble-ui#%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B)技术选型：

-   技术栈：`vue3`+`ts`+`scss`+`vite`
-   文档：vitePress
-   规范：ESLint，StyleLint，prettier
-   提交：husky ，`commitlint`，`lint-staged`
-   第一步：`pnpm install`下载项目相关依赖

### [](https://gitee.com/shiqi547git/bubble-ui#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%91%BD%E4%BB%A4%E4%BB%8B%E7%BB%8D)命令行命令介绍

1.  `pnpm dev`:开发调试：用于组件的预览（功能已抽离为 example 文件夹，详见下 example 文件说明）
1.  `pnpm build`:构建组件库，将组件库打包，打包后的结果写入 lib 文件夹
1.  `pnpm commit`:用于 git 代码提交：为了规范提交的 message，我们使用这种方式提交而不是用 git commit 提交，命令执行后在终端中会有相关提交选项，可通过上下箭头进行选择，然后根据提示填写相关说明

**注意：在开发组件时，如需要安装一些 npm 包请 cd 至 `package/components或package/utils`下,防止依赖混乱**

### [](https://gitee.com/shiqi547git/bubble-ui#%E7%9B%AE%E5%BD%95%E8%AF%B4%E6%98%8E)目录说明

example 文件：组件本地测试：

-   我们写组件的时候会需要看看我们写出来的效果，这个时候就需要一个开发服务器来进行本地案例测试。
-   用法：在`main.ts`中引入组件并注册，即可在`app.vue`中使用相关组件，注意：**组件的名称为编写组件时，组件的 name 属性，我们使用 vue3 的 script 标签的 setup 语法糖，组件 name 属性直接在 script 中写，详见 button 组件**

**详细说明：**

```
.husky：husky 的配置文件，执行 git 时触发的 hooks
.vscode：vscode 的项目配置文件，若与用户配置冲突将会覆盖用户配置
build：打包时的 vite 配置文件
example： 用于调试预览
index.html: html 文件，用于浏览器页面预览
main.ts: 入口文件 (ts 项目引入.vue 文件需要 typings 配置，已配置)
app.vue: vue 的根组件
vite.config.ts: Vite 配置
typings: 对于 main.ts 中申明类型但未申明进行配置
packages：组件、样式及其工具函数存放目录
-components 放置组件
-theme-chalk 放置样式文件
-utils 放置抽离出来的公共工具函数或函数库
.elintignore：eslint 忽视的文件或文件夹
.elintrc.js：eslint 配置文件
.gitignore：git 提交忽视的文件或文件夹
.lintstagedrc.js：lint-staged 配置文件
.npmrc: 对 pnpm 进行一些简单的配置
.prettierignore：prettier 忽视的文件或文件夹
.stylelintignore：stylelint 忽视的文件或文件夹
.styleintrc.js：stylelint 配置文件
commitlint.config.js：commitlint 配置文件
prettier.config.js：prettier 配置文件
package.json: 模块描述文件，包含基本的设置及结果
pnpm-workspace.yaml： Monorepo+pnpm 结构的 workspace 配置文件
tsconfig.json: ts 的基础配置文件
```

启动服务：`pnpm dev`

### [](https://gitee.com/shiqi547git/bubble-ui#%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4%E9%A1%BA%E5%BA%8F)代码提交顺序：

1.  git add [filename]
1.  pnpm commit (会有很多提交信息提示，根据自己的情况自行选择)（写完提交信息后会自动执行代码质量检测和风格检测并自动修复一些风格问题，执行完成后未报错则表示你的代码通过了检测并且 commit 成功，此时可以进行 git push 提交

#### [](https://gitee.com/shiqi547git/bubble-ui#%E7%B1%BB%E5%9E%8B%E6%8F%8F%E8%BF%B0)类型//描述

1.  build:编译相关的修改，例如发布版本、对项目构建或者依赖的改动
1.  chore 其他修改, 比如改变构建流程、或者增加依赖库、工具等
1.  ci 持续集成修改
1.  docs 文档修改
1.  feat 新特性、新功能
1.  fix 修改 bug
1.  perf 优化相关，比如提升性能、体验
1.  refactor 代码重构
1.  revert 回滚到上一个版本
1.  style 代码格式修改, 注意不是 css 修改
1.  test 测试用例修改

#### [](https://gitee.com/shiqi547git/bubble-ui#example)example

```
git add .
pnpm run commit (或者pnpm commit)
执行后终端出现以下界面，提供了几个提交信息选项供选择（回车选择）
```

![image-20230120131207273]()

![image-20230120131602802]()

第二个问题按回车直接可以跳过，第三、四个问题就是让你写提交附带的信息，五六问题直接回车就是 no

![image-20230120131822885]()

不报错即提交完成，即可 push 到远程仓库了

### [](https://gitee.com/shiqi547git/bubble-ui#css-%E8%A7%84%E5%88%99)css 规则

css 规则编写需要按照一定的顺序，便于团队其他同学 codereview 具体顺序如下：

```
'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'hyphens',
      'src',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-image',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-spacing',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'content',
      'quotes',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'zoom',
      'transform',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'table-layout',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'background-clip',
      'backface-visibility',
      'resize',
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak'
```
