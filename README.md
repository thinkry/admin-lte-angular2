# AdminLTE Angular2

[AdminLTE](https://github.com/almasaeed2010/AdminLTE)是一个挺不错的基于Bootstrap 3.x的管理系统。[预览在线效果](https://almsaeedstudio.com/themes/AdminLTE/)

!["AdminLTE Presentation"](https://almsaeedstudio.com/AdminLTE2.png "AdminLTE Presentation")

本项目是基于AdminLTE 2.3.12版本，用Angular2重新包装成一个SPA。从本项目可以了解Angular2如何使用Bootstrap、jQuery、datatables、flot、chartjs等常见js组件。

## 1 安装和运行
本项目基于angular-cli 1.0.0-rc.1版本构建。如果你使用更新版本cli时出现问题，可以试试安装1.0.0-rc.1版本。

### 1.1 安装angular-cli
```bash
cnpm install -g @angular/cli@1.0.0-rc.1
```

### 1.2 clone项目
```bash
git clone https://github.com/thinkry/admin-lte-angular2
```

### 1.3 安装并编译运行
```bash
cd admin-lte-angular2
cnpm install
npm start
```
在浏览器访问 http://localhost:4200 就能看到效果了

## 2 一些经验

### 2.1 在Angular2项目中使用js库的方法

Angular2一般做的是SPA（单页面应用），要在其中使用js库，一个简单方式是在.angular-cli.json中apps.scripts数组里把js文件都加进去，css文件可以加在src/styles.css里。具体参见本项目。

因为所用js库都打包在一起了，有可能库之间会出现冲突，这个就是你自己要取舍或解决的了。本项目中UI Elements下的Slider页面下半部分显示不正常，就是因为jQueryUI和ionslider、bootstrap-slider的冲突导致的。

### 2.2 在ts里使用jQuery

参考dashboards2.componet.ts，在文件里声明$符号就可以像以前那样使用$了。（前提是按2.1那样引入了jQuery的库）
```typescript
declare let $: any;
```
我猜测如果安装了@type/jQuery的话，这里声明$时可以指定类型，而不是any。待验证。

### 2.3 页面加载js代码的处理

AdminLTE里有些代码是在页面加载时执行，使用了jQuery的$()方法。
而用Angular2改造后，页面加载后是通过router来切换组件，不在再有页面onload，这些代码需要包装成函数，在组件初始时调用。

参见dashboards2.componet.ts
```typescript
ngOnInit() {
  $.AdminLTE.installDashBoard2();
}
```
installDashBoard2()定义在plugins/admin-lte/js/pages/dashboard2.js里。

### 2.4 Angular2懒加载模块

本项目特意把UI Elements用懒加载来实现。

app-routing.module.ts
```js
{
  path: 'ui',
  loadChildren: './ui/ui.module#UiModule'
}
```

ui-routing.module.ts
```js
{
  path: 'buttons',
  component: ButtonsComponent
}
```

### 2.5 公共组件如何在多个Module中引用

Angular2组件只能在一个Module中声明，一般我们会声明在AppModule中。
如果一个Module是懒加载的，我遇到无法引用在AppModule中声明的组件的问题，

解决方法：把公共组件单独放一个公共Module中，然后AppModule和懒加载Module都导入公共Module。

### 2.6 ckeditor的使用

ckeditor插件会在运行时下载配置、皮肤、语言等，如果像jQuery那样直接在.angular-cli.json中apps.scripts里引用，会出现资源找不到的情况。

解决方法：直接在index.html中引入ckeditor。
