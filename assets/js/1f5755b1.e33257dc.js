"use strict";(self.webpackChunkwgt=self.webpackChunkwgt||[]).push([[1503],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var s=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,s,i=function(e,t){if(null==e)return{};var o,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=s.createContext({}),a=function(e){var t=s.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},m=function(e){var t=a(e.components);return s.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=a(o),d=i,g=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return o?s.createElement(g,n(n({ref:t},m),{},{components:o})):s.createElement(g,n({ref:t},m))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,n=new Array(r);n[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var a=2;a<r;a++)n[a]=o[a];return s.createElement.apply(null,n)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7378:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=o(7462),i=(o(7294),o(3905));const r={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},n=void 0,l={permalink:"/wgt/blog/welcome",editUrl:"https://github.com/baiyungao/wgt/tree/main/blog/2021-08-26-blog-tutorial/index.md",source:"@site/blog/2021-08-26-blog-tutorial/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/wgt/blog/tags/facebook"},{label:"hello",permalink:"/wgt/blog/tags/hello"},{label:"docusaurus",permalink:"/wgt/blog/tags/docusaurus"}],readingTime:2.64,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},prevItem:{title:"Install Helm of airflow on Azure KS",permalink:"/wgt/blog/Helm_airflow"}},u={authorsImageUrls:[void 0,void 0]},a=[],m={toc:a};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,i.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,i.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,i.kt)("p",null,"Regular blog authors can be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,i.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,i.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus Plushie",src:o(6911).Z,width:"1500",height:"500"})),(0,i.kt)("p",null,"The blog supports tags as well!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Blog posts support ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,i.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,i.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This is the summary of a very long blog post,"),(0,i.kt)("p",null,"Use a ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--")," ",(0,i.kt)("inlineCode",{parentName:"p"},"truncate")," ",(0,i.kt)("inlineCode",{parentName:"p"},"--\x3e")," comment to limit blog post size in the list view."),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"))}c.isMDXComponent=!0},6911:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);