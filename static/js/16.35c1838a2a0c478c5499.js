webpackJsonp([16,30],{1:function(e,t){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var t=0;t<e.length;t++)hljs.highlightBlock(e[t])})}}},2:function(e,t,n){var a,i;a=n(1);var s=n(3);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},3:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}},21:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(2),s=a(i);e.exports={extends:s.default}},63:function(e,t,n){var a,i;a=n(21);var s=n(99);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},99:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[e._v("《CSS 揭秘》笔记之五：字体排印")]),e._v(" "),e._m(0),e._v(" "),n("footer",[e._v("2016年12月05日")]),e._v(" "),n("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[e._v("连字符断行")]),e._v(" "),n("p",[e._v("使用样式text-align：justify设置两端对齐时，会出行单词孤岛现象。")]),e._v(" "),n("p",[e._v("CSS3的新属性hyphens（3个值：none、manual、auto，manual为默认值），可以实现断词折行的效果。但是浏览器兼容性不是很好，chrome目前不支持。除此之外，也可以手动设置软连字符：&shy。")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("插入换行")]),e._v(" "),n("p",[e._v("使用伪元素+CSS3选择符可以实现结构整洁的换行功能：")]),e._v(" "),n("div",{staticClass:"exp break-line"},[n("div",[n("dl",[n("dt",[e._v("Name：")]),e._v(" "),n("dd",[e._v("Lea Verou")]),e._v(" "),n("dt",[e._v("Email：")]),e._v(" "),n("dd",[e._v("lea@verou.com")]),e._v(" "),n("dt",[e._v("Location：")]),e._v(" "),n("dd",[e._v("Earth")])])])]),e._v(" "),n("pre",[n("code",[e._v('dt,dd{\n  display: inline;\n}\ndd{\n  font-weight: bold;\n}\ndd + dt::before{\n  content: "\\A";\n  white-space: pre;\n}\ndd + dd::before{\n  content: "";\n  font-weight: normal;\n}')])]),e._v(" "),n("h3",{staticClass:"title"},[e._v("文本行的斑马条纹")]),e._v(" "),n("p",[e._v("使用水平条纹背景，将background-size设置为line-height的两倍，并设置background-position以content-box为边缘。可以实现此效果：")]),e._v(" "),n("div",{staticClass:"exp stripe-text"},[e._v("\n                豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。\n            ")]),e._v(" "),n("pre",[n("code",[e._v("padding: 0.8em;\nline-height: 2;\nbackground-image: linear-gradient(rgba(246,246,174,0.9) 50%, transparent 0);\nbackground-size: auto 4em;\nbackground-origin: content-box;")])]),e._v(" "),n("h3",{staticClass:"title"},[e._v("调整Tab的宽度")]),e._v(" "),n("p",[e._v("CSS3有一个新属性：tab-size可以控制tab的字符数，如tab-size：2，一般用于代码段的缩进效果。")]),e._v(" "),n("p",[e._v("可以通过这种方式获取字符的unicode编码：'&'.charCodeAt(0).toString(16)。")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("自定义下划线")]),e._v(" "),n("p",[e._v("文本的下划线在不同浏览器下的渲染效果大相庭径。类似文本的斑马条纹，可以使用渐变生成文本的下划线：")]),e._v(" "),n("pre",[n("code",[e._v("padding: 0.8em;\nline-height: 2;\nbackground: #eee linear-gradient(#f96, #f96) no-repeat 0 2.8rem;\nbackground-size: 100% 1px;\nborder: 1px solid #eee;")])]),e._v(" "),n("p",[e._v("在第一行字加红色的下划线：")]),e._v(" "),n("div",{staticClass:"exp underline-text-1"},[e._v("\n                时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。\n            ")]),e._v(" "),n("p",[e._v("虚线的下划线：")]),e._v(" "),n("pre",[n("code",[e._v("padding: 0.8em;\nline-height: 2;\nbackground: #eee linear-gradient(90deg, #f96 60%, transparent 0) repeat-x 0 2.8rem;\nbackground-size: 0.4em 1px;\nborder: 1px solid #eee;")])]),e._v(" "),n("div",{staticClass:"exp underline-text-2"},[e._v("\n                披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。\n            ")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("现实中的文字效果")]),e._v(" "),n("p",[n("strong",[e._v("空心字效果：")]),e._v("使用多个text-shadow，分别为这些投影加上不同方向的少量偏移。")]),e._v(" "),n("div",{staticClass:"exp text-effect-1"},[e._v("CSS")]),e._v(" "),n("pre",[n("code",[e._v("text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;")])]),e._v(" "),n("p",[e._v("对于越粗的描边，这种方式越糟糕。这种情况下使用SVG效果比较好。")]),e._v(" "),n("p",[n("strong",[e._v("文字外发光效果：")])]),e._v(" "),n("div",{staticClass:"exp text-effect-2"},[e._v("Glow")]),e._v(" "),n("p",[e._v("鼠标悬停下的发光效果：")]),e._v(" "),n("div",{staticClass:"exp text-effect-3"},[e._v("Dizzy")]),e._v(" "),n("pre",[n("code",[e._v("background: #203;\ntext-align: center;\nfont-size: 56px;\ncolor: #ffc;\ntransition: 1s;\n&:hover{\n  color: transparent;\n  text-shadow: 0 0 0.1em, 0 0 0.3em;\n}")])]),e._v(" "),n("p",[n("strong",[e._v("文字凸起效果：")]),e._v("使用一长串累加的投影，不设模糊并以1px的跨度逐渐错开，使之逐渐变暗，然后在底部加一层强烈模糊的投影，从而模拟出完整的立体效果。")]),e._v(" "),n("div",{staticClass:"exp text-effect-4"},[e._v("CSS 3D")]),e._v(" "),n("pre",[n("code",[e._v("text-shadow: 0 1px hsl(0,0%, 85%),0 2px hsl(0,0%, 80%),\n    0 3px hsl(0,0%, 75%),0 4px hsl(0,0%, 70%),\n    0 5px hsl(0,0%, 65%), 0 5px 10px black;")])]),e._v(" "),n("p",[e._v("另外一种效果：")]),e._v(" "),n("div",{staticClass:"exp text-effect-5"},[e._v("RETRO")]),e._v(" "),n("pre",[n("code",[e._v("text-shadow: 1px 1px black, 2px 2px black,\n    3px 3px black, 4px 4px black,\n    5px 5px black, 6px 6px black,\n    7px 7px black, 8px 8px black;")])])])}]}}});