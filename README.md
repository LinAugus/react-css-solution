# react中css的解决方案

## 选型
1. less
2. babel-plugin-react-css-modules
3. bem

## less
1. less与sass的语法相同，这里不纠结用less还是sass，不过less的名字比sass好听，哈哈。预处理器的选择是为了更好的维护css，css本身更有灵活性，但是也由于其太过灵活，所有样式都是在全局作用域上，在一个大型项目上，会有类名冲突、覆盖的风险。预处理器能很好的解决全局冲突的问题，并且其特殊的嵌套写法让样式的从属关系更加明显，易于维护。预处理器也提供了变量、继承、组合、函数等css现如今在浏览器还不支持的语法特性等。
2. less用法
参考文档: [http://www.bootcss.com/p/lesscss/]
## css-modules
CSS模块化重要的是解决两个问题：CSS 样式的导入和导出。灵活按需导入以便复用代码，导出时要能够隐藏内部作用域，以免造成全局污染。Sass、Less、PostCss 等试图解决 CSS 编程能力弱的问题，但并没有解决模块化的问题。
    - 全局污染
        CSS 使用全局选择器机制来设置样式，优点是书写方便。缺点是所有的样式都是全局生效，可能会被覆盖，由此产生了非常丑陋的 !important。
    - 命名混乱
        由于全局污染的问题，在多人开发过程中为了避免样式冲突，选择器越来越复杂，容易形成不同风格的命名风格，尤其在样式多的情况下，命名更加混乱。
    - 依赖管理不彻底
        组件应该相互独立，引入一个组件式应该只需要引入它所需要的样式
    - 无法共享变量
    - 复杂组件使用 JavaScript 和 CSS 来处理样式就会造成有些变量在代码中冗余
    - 代码压缩不彻底

CSS 模块化的解决方案有很多，但主要有以下两类：
### inline style
这种方案彻底抛弃了 CSS，使用 JavaScript 或 JSON 来书写样式，能使 CSS 和 JavaScript 一样拥有模块化能力，但缺点同样明显，Inline Style 几乎不能利用 CSS 本身强大的特性，比如级联、媒体查询等，:hover、:active 等伪类处理起来也比较复杂。与 React 有关的框架有 Radium、jsxstyle 和 react-style。
### css modules
依旧使用 CSS，但使用 JavaScript 来管理样式依赖。CSS Modules 最大程度的结合了现有的 CSS 生态和 JavaScript 模块化的能力，其 API 非常简洁学习成本低。
#### 1. 使用css modules
css modules与webpack很好的集成在一起，可以使用css-loader来启用css moduels.

```
css?modules&localIdentName=[name]-[local]-[hash:base64:6]
```

webpack如何转化的呢？

```css
// Button.css
.btn {}
.disabled {}
```

```js
// Button.js
import styles from './Button.css'
console.log(styles)
// =>
// Object {
//   btn: 'button_btn_abc12'
//   disabled: 'button_disabled_1ck1e'
// }
//
```
结果这样的混淆处理后，class 的名称就是唯一的了，大大降低了项目中样式覆盖的几率。

#### 2. 更多用法


## BEM
文档：http://getbem.com/introduction/