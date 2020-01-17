(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{259:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("p",[t._v("React 把用户界面当作简单状态机。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。只需要更新组件的 "),a("code",[t._v("state")]),t._v("，然后根据新 "),a("code",[t._v("state")]),t._v(" 重新渲染用户界面（不需要操作 DOM）。React 来决定如何最高效地更新 DOM。")]),t._v(" "),a("p",[t._v("State 的主要作用是用于组件保存、控制、修改自身的可变状态。State 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 State 是一个局部的、只能被组件自身控制的数据源。State 中状态可以通过 "),a("code",[t._v("this.setState")]),t._v(" 方法进行更新，"),a("router-link",{attrs:{to:"/mechanism/set-state.html"}},[t._v("setState")]),t._v(" 会导致组件的重新渲染。")],1),t._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("组件中用到的一个变量是不是应该作为组件 "),a("code",[t._v("state")]),t._v("，可以通过下面的 4 条依据进行判断：")]),t._v(" "),a("ol",[a("li",[t._v("这个变量是否通过 "),a("code",[t._v("props")]),t._v(" 从父组件中获取？如果是，那么它不是一个状态。")]),t._v(" "),a("li",[t._v("这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。")]),t._v(" "),a("li",[t._v("这个变量是否可以通过其他状态（State）或者属性（Props）计算得到？如果是，那么它不是一个状态。")]),t._v(" "),a("li",[t._v("这个变量是否在组件的 "),a("code",[t._v("render()")]),t._v(" 方法中使用？如果不是，那么它不是一个状态。")])]),t._v(" "),a("p",[t._v("这种情况下，这个变量更适合定义为组件的一个"),a("strong",[t._v("普通属性")]),t._v("，例如组件中用到的定时器，就应该直接定义为 "),a("code",[t._v("this.timer")]),t._v("，而不是 "),a("code",[t._v("this.state.timer")]),t._v("。")]),t._v(" "),a("p",[t._v("⚠️ "),a("strong",[t._v("请务必牢记，并不是组件中用到的所有变量都是组件的状态！"),a("strong",[t._v("当存在多个组件共同依赖一个状态时，一般的做法是")]),t._v("状态提升")]),t._v("，将这个状态放到这几个组件的公共父组件中。")]),t._v(" "),a("h2",{attrs:{id:"不可变对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可变对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 不可变对象")]),t._v(" "),a("p",[t._v("React 官方建议把 State 当做是不可变对象（Immutable），State 中包含的所有状态都应该是"),a("strong",[t._v("不可变对象")]),t._v("，当 State 中的某个状态发生变化，我们应该重新创建这个状态对象，而不是直接修改原来的状态。")]),t._v(" "),a("p",[t._v("State 根据状态类型可以分为三种：")]),t._v(" "),a("ul",[a("li",[t._v("基本数据类型")]),t._v(" "),a("li",[t._v("数组类型")]),t._v(" "),a("li",[t._v("对象类型")])]),t._v(" "),a("h3",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),a("p",[t._v("Number、String、Boolean、Null、Undefined 这五种不可变类型：")]),t._v(" "),a("p",[t._v("由于其本身就是不可变的，如果要修改状态的话，直接赋新值即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"数组类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组类型")]),t._v(" "),a("p",[t._v("JavaScript 中数组类型为可变类型。假如有一个数组类型的 State，需要新增一个数组元素，应使用数组的"),a("code",[t._v("concat")]),t._v(" 方法或 ES6 的数组扩展语法。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法一：将state先赋值给另外的变量，然后使用concat创建新数组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" students "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaoming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法二：使用prevState、concat创建新数组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("preState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" preState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaoming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法三：ES6扩展语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("preState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("preState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaoming'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("从数组中截取部分作为新状态时，应使用 "),a("code",[t._v("slice()")]),t._v(" 方法")]),t._v(" "),a("li",[t._v("当从数组中过滤部分元素后，作为新状态时，使用 "),a("code",[t._v("filter()")]),t._v(" 方法。")])]),t._v(" "),a("p",[t._v("不应该使用 "),a("code",[t._v("push()")]),t._v("、"),a("code",[t._v("pop()")]),t._v("、"),a("code",[t._v("shift()")]),t._v("、"),a("code",[t._v("unshift()")]),t._v("、"),a("code",[t._v("splice()")]),t._v(" 等数组的突变方法（Mutation Methods）修改数组类型的状态，因为这些方法都是在原数组的基础上修改的。")]),t._v(" "),a("h3",{attrs:{id:"对象类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象类型")]),t._v(" "),a("p",[t._v("对象也是可变类型，修改对象类型的 "),a("code",[t._v("state")]),t._v(" 时，应该保证不会修改原来的 "),a("code",[t._v("state")]),t._v("。可以使用 ES6 的 "),a("code",[t._v("Object.assign")]),t._v(" 方法或者对象扩展语法。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Obejct.assign()方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("preState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Obejct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("classNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象扩展语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" school "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("school\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("classNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("总结一下，创建新的状态对象的关键是，避免使用会直接修改原对象的方法，而是使用可以返回一个新对象的方法。当然，也可以使用一些 Immutable 的 JavaScript 库，如 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ffacebook%2Fimmutable-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Immutable.js"),a("OutboundLink")],1),t._v("，实现类似的效果。")]),t._v(" "),a("p",[t._v("❓ "),a("strong",[t._v("那么，为什么 React 推荐组件的状态是不可变对象呢？")])]),t._v(" "),a("p",[t._v("一方面是因为不可变对象方便管理和调试（了解更多可 "),a("a",{attrs:{href:"https://link.juejin.im/?target=http%3A%2F%2Fredux.js.org%2Fdocs%2Ffaq%2FImmutableData.html%23benefits-of-immutability",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里"),a("OutboundLink")],1),t._v("）；另一方面是出于性能考虑，当对象组件状态都是不可变对象时，我们在组件的 "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 方法中，仅需要比较状态的引用就可以判断状态是否真的改变，从而避免不必要的 "),a("code",[t._v("render()")]),t._v(" 调用。当我们使用 React 提供的 "),a("code",[t._v("PureComponent")]),t._v(" 时，更是要保证组件状态是不可变对象，否则在组件的 "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 方法中，状态比较就可能出现错误，因为 "),a("code",[t._v("PureComponent")]),t._v(" 执行的是浅比较（比较对象的引用）。")]),t._v(" "),a("h2",{attrs:{id:"无状态组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无状态组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 无状态组件")]),t._v(" "),a("p",[t._v("没有 State 的组件叫无状态组件（stateless component），设置了 State 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("参考资料：")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/entry/5b3b7bbc5188251af53db90a",target:"_blank",rel:"noopener noreferrer"}},[t._v("说说 React 组件的 state"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/entry/59522bdb6fb9a06b9a516113",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 React 组件状态"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);