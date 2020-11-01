# typescript模板项目

参考: https://www.jianshu.com/p/bfd4511f67bd

## 概述

安装nodejs
设置npm源
安装vscode
安装typescript
初始化并编辑package.json
配置编译选项tsconfig.json
安装项目依赖项
安装vscode语法提示
建立项目
编译项目
执行项目

## 安装nodejs

参考: https://nodejs.org/

## 设置npm源为淘宝源

- 方案1: 永久使用

在开发react-native的时候，不要使用cnpm！cnpm安装的模块路径比较奇怪，packager不能正常识别。所以，为了方便开发，我们最好是直接永久使用淘宝的镜像源

直接命令行的设置

~~~bash
$ npm config set registry https://registry.npm.taobao.org
~~~

手动修改设置

1.打开.npmrc文件（C:\Program Files\nodejs\node_modules\npm\npmrc，没有的话可以使用git命令行建一个( touch .npmrc)，用cmd命令建会报错）
2.增加 registry =https://registry.npm.taobao.org  即可。

- 方案2: 安装cnpm

使用阿里定制的cnpm命令行工具代替默认的npm，输入以下代码

~~~bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
~~~

检测是否安装成功

~~~bash
$ cnpm -v
~~~

- 方案3: 单次使用

~~~bash
$  npm install --registry=https://registry.npm.taobao.org
~~~

## 安装VSCode

参考: https://code.visualstudio.com/ 

## 初始化package.json并编辑

- 初始化:

~~~bash
npm init
~~~

- 编辑: 

~~~json
{
  "name": "hello-typescript",
  "version": "0.0.1",
  "description": "Learning TypeScript.",
  "scripts": {
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "author": "2gua",
  "license": "ISC",
  "dependencies": {

  },
  "devDependencies": {
    "lite-server": "^2.2.0",
    "concurrently": "^2.0.0"
  }
}
~~~

package.json文件主要说明：

- "name"——包的名称
- "version"——版本
- "description"——App描述，方便搜索
- "scripts"——可执行的脚本
- "start": "tsc && concurrently "npm run tsc:w" "npm run lite""——同时执行的命令
- "lite": "lite-server"——启动lite-server服务器
- "tsc": "tsc"——执行一次TypeScript编译
- "tsc:w": "tsc -w"——以监控模式运行TypeScript编译器。后台始终保持进程。一旦TypeScript文件变化即会重编译
- "dependencies"——生产环境中需要的依赖包
- "devDependencies"——开发中要使用的安装包

## 配置编译选项tsconfig.json

当前TypeScript代码并不能直接执行，需编译为JavaScript代码。而借助VS Code，我们就不用在命令行输入编译命令了。为此，在根目录添加一个tsconfig.json文件。该文件是TypeScript编译器配置文件。文件内容如下所示：

~~~json
{
  "compilerOptions": {
    "target": "es5",
    "module": "amd",
    "sourceMap": true
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
~~~

tsconfig.json文件各项说明如下：

- "compilerOptions"——编译器选项；
- "target"——编译目标，如这里编译为es5代码；
- "module"——处理独立文件时的模块加载方式；
- "sourceMap"——是否创建map文件以帮助调试；
- "exclude"——编译器会编译TypeScript文件（.ts或.tsx），通过排除设置里的TypeScript文件不会被编译。

## 安装typescript

~~~bash
npm install -g typescript
~~~

## 安装项目依赖项

- concurrently 并行执行命令时用，例如: 同时运行web服务并监视本地代码改变并动态编译更新。通过npm安装。

~~~bash
$ npm install concurrently -g
~~~

- lite-server 轻量级web服务器

~~~bash
$ npm install lite-server
~~~

## 安装vscode语法提示

安装语法提示程序
~~~bash
$ npm install typings -g
~~~
安装要提示的语法
~~~bash
typings install dt~node --global
typings install dt~typescript --global
typings install dt~lodash --global
~~~

> 其中”dt~”为使用DefinitelyTyped类型定义的意思，vscode可以识别这种定义。

## 编译项目

编写hell-typescript.js和index.html代码

阻塞编译、执行项目
~~~bash
tsc
lite-server
~~~

并行编译、执行项目并监视代码变化动态编译和更新浏览器。
~~~bash
npm run start
~~~

## 执行项目

