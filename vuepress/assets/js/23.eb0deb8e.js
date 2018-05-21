(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{237:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("Headers automatically get anchor links applied. Rendering of anchors can be configured using the "),a("router-link",{attrs:{to:"../config/#markdownanchor"}},[a("code",[t._v("markdown.anchor")])]),t._v(" option.")],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("If you want to link to another markdown file within a directory, remember to:")]),t._m(7),t._m(8),a("p",[t._v("Given the following directory structure:")]),t._m(9),t._m(10),t._m(11),t._m(12),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress on GitHub"),a("OutboundLink")],1)])]),a("p",[t._v("You can customize the attributes added to external links by setting "),a("router-link",{attrs:{to:"../config/#markdown-externallinks"}},[t._v("config.markdown.externalLinks")]),t._v(".")],1),t._m(13),a("p",[a("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML front matter"),a("OutboundLink")],1),t._v(" is supported out of the box:")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("In addition, VuePress also supports JSON or "),a("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),a("OutboundLink")],1),t._v(" front matter.")]),a("p",[t._v("JSON front matter needs to start and end in curly braces:")]),t._m(19),a("p",[t._v("TOML front matter needs to be explicitly marked as TOML:")]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),a("p",[t._v("🎉 💯")]),a("p",[t._v("A list of all emojis available can be found "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._m(30),t._m(31),t._m(32),t._m(33),a("p"),t._m(34),a("p"),a("p",[t._v("Rendering of TOC can be configured using the "),a("router-link",{attrs:{to:"../config/#markdown-toc"}},[a("code",[t._v("markdown.toc")])]),t._v(" option.")],1),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),a("p",[t._v("You can also customize the title of the block:")]),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),a("p",[t._v("VuePress uses "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v(" as the markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the "),a("code",[t._v("markdown-it")]),t._v(" instance using the "),a("code",[t._v("markdown")]),t._v(" option in "),a("code",[t._v(".vuepress/config.js")]),t._v(":")]),t._m(50)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"markdown-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown Extensions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"header-anchors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors","aria-hidden":"true"}},[this._v("#")]),this._v(" Header Anchors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#links","aria-hidden":"true"}},[this._v("#")]),this._v(" Links")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"internal-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-links","aria-hidden":"true"}},[this._v("#")]),this._v(" Internal Links")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Inbound links ending in "),e("code",[this._v(".md")]),this._v(" or "),e("code",[this._v(".html")]),this._v(" are converted to "),e("code",[this._v("<router-link>")]),this._v(" for SPA navigation.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Each sub-directory in your static site should contain a "),e("code",[this._v("README.md")]),this._v(". It will automatically be converted to "),e("code",[this._v("index.html")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("When writing the relative path to a directory's "),a("code",[t._v("index.html")]),t._v(", don't forget to close it off with a "),a("code",[t._v("/")]),t._v(", otherwise you will get a 404. For example, use "),a("code",[t._v("/config/")]),t._v(" instead of "),a("code",[t._v("/config")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Append it with either "),e("code",[this._v(".html")]),this._v(" or "),e("code",[this._v(".md")])]),e("li",[this._v("Make sure the case matches since the path is case-sensitive")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token url"}},[t._v("[Home](/)")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Sends the user to the root README.md --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token url"}},[t._v("[foo](/foo/)")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Sends the user to index.html of directory foo --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token url"}},[t._v("[foo heading anchor](/foo/#heading)")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Anchors user to a heading in the foo README file --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token url"}},[t._v("[foo - one](/foo/one.html)")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- You can append .html --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token url"}},[t._v("[foo - two](/foo/two.md)")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Or you can append .md --\x3e")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"external-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-links","aria-hidden":"true"}},[this._v("#")]),this._v(" External Links")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Outbound links automatically gets "),e("code",[this._v('target="_blank" rel="noopener noreferrer"')]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"front-matter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#front-matter","aria-hidden":"true"}},[this._v("#")]),this._v(" Front Matter")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("lang")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The data will be available to the rest of the page, plus all custom and theming components as "),e("code",[this._v("$page")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("title")]),this._v(" and "),e("code",[this._v("lang")]),this._v(" will be automatically set on the current page. In addition you can specify extra meta tags to be injected:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("meta")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"alternative-front-matter-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alternative-front-matter-formats","aria-hidden":"true"}},[this._v("#")]),this._v(" Alternative Front Matter Formats")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"github-style-tables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-style-tables","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub-Style Tables")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Output")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Tables")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),a("tbody",[a("tr",[a("td",[t._v("col 3 is")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),a("tr",[a("td",[t._v("col 2 is")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),a("tr",[a("td",[t._v("zebra stripes")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"emoji"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emoji","aria-hidden":"true"}},[this._v("#")]),this._v(" Emoji 🎉")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(":tada: :100:\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Output")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[this._v("#")]),this._v(" Table of Contents")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[[toc]]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Output")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#header-anchors"}},[t._v("Header Anchors")])]),a("li",[a("a",{attrs:{href:"#links"}},[t._v("Links")]),a("ul",[a("li",[a("a",{attrs:{href:"#internal-links"}},[t._v("Internal Links")])]),a("li",[a("a",{attrs:{href:"#external-links"}},[t._v("External Links")])])])]),a("li",[a("a",{attrs:{href:"#front-matter"}},[t._v("Front Matter")]),a("ul",[a("li",[a("a",{attrs:{href:"#alternative-front-matter-formats"}},[t._v("Alternative Front Matter Formats")])])])]),a("li",[a("a",{attrs:{href:"#github-style-tables"}},[t._v("GitHub-Style Tables")])]),a("li",[a("a",{attrs:{href:"#emoji-tada"}},[t._v("Emoji 🎉")])]),a("li",[a("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),a("li",[a("a",{attrs:{href:"#custom-containers"}},[t._v("Custom Containers")])]),a("li",[a("a",{attrs:{href:"#line-highlighting-in-code-blocks"}},[t._v("Line Highlighting in Code Blocks")])]),a("li",[a("a",{attrs:{href:"#advanced-configuration"}},[t._v("Advanced Configuration")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"custom-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-containers","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Containers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Output")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("This is a tip")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("This is a warning")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("This is a dangerous thing")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("::: danger STOP\nDanger zone, do not proceed\n:::\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("STOP")]),e("p",[this._v("Danger zone, do not proceed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"line-highlighting-in-code-blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-highlighting-in-code-blocks","aria-hidden":"true"}},[this._v("#")]),this._v(" Line Highlighting in Code Blocks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("``` js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Output")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"advanced-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// options for markdown-it-anchor")]),t._v("\n    anchor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// options for markdown-it-toc")]),t._v("\n    toc"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// use more markdown-it plugins!")]),t._v("\n      md"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);