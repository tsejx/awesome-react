(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{247:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"forceupdate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forceupdate","aria-hidden":"true"}},[e._v("#")]),e._v(" forceUpdate")]),e._v(" "),o("blockquote",[o("p",[e._v("Calling "),o("code",[e._v("forceUpdate()")]),e._v(" will cause "),o("code",[e._v("render()")]),e._v(" to be called on the component, skipping "),o("code",[e._v("shouldComponentUpdate()")]),e._v(". This will trigger the normal lifecycle methods for child components, including the "),o("code",[e._v("shouldComponentUpdate()")]),e._v(" method of each child. React will still only update the DOM if the markup changes.")])]),e._v(" "),o("p",[e._v("官方说的比较清楚，调用 "),o("code",[e._v("forceUpdate")]),e._v(" 后当前组件会跳过 "),o("code",[e._v("shouldComponentUpdate")]),e._v(" 这个钩子，尽管手动 "),o("code",[e._v("return false")]),e._v("，也一样会更新，但是需要注意的是，子组件的更新还是会受到 "),o("code",[e._v("shouldComponentUpdate")]),e._v(" 控制。")]),e._v(" "),o("p",[e._v("调用 "),o("code",[e._v("forceUpdate()")]),e._v(" 将会导致 "),o("code",[e._v("render()")]),e._v(" 方法在相应的组件上被调用，并且子级组件也会调用自身的 "),o("code",[e._v("render()")]),e._v("，但是如果标记改变了，那么 React 仅会更新 DOM。")]),e._v(" "),o("h2",{attrs:{id:"使用场景"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),o("ul",[o("li",[e._v("视图更新来源于其他非 state 或 props 的数据\n"),o("ul",[o("li",[e._v("例如：绑定在组件实例上的属性")]),e._v(" "),o("li",[e._v("例如：直接修改 "),o("code",[e._v("this.state.xxx = xxx")]),e._v(" 后调用 "),o("code",[e._v("forceUpdate()")]),e._v(" 使得组件重新渲染（re-render）")])])]),e._v(" "),o("li",[e._v("某些在 state 或 props 中的变量层级太深，更新时候没有自动触发重渲染\n"),o("ul",[o("li",[e._v("这种情况建议使用 immutable 来操作 state 或 redux 等 flux 架构管理 state")])])])]),e._v(" "),o("p",[e._v("不过对于以上情况，官方文档并不推荐这样处理，正常情况下应该避免使用 "),o("code",[e._v("forceUpdate")]),e._v("，而是通过 state 或 props 去驱动更新视图。")])])},[],!1,null,null,null);t.default=r.exports}}]);