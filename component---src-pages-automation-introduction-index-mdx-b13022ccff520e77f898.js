(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var i=a("pOBw"),n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),s=a("OKom"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,i=e.tabs,n=void 0===i?[]:i;return Object(m.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=n.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},a)))))},d=a("pEPl"),O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=d.data.site.siteMetadata.repository,n=a||i,o=n.baseUrl,r=n.subDirectory,l=o+"/edit/"+n.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var w=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0}),o=n===i,r=new RegExp(i+"(?!-)"),s=a.replace(r,n);return Object(m.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(m.b)(g.Link,{className:v.link,to:""+s},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},n))))))},i}(o.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=b.tabs,O=b.title,g=b.theme,v=b.description,y=b.keywords,B=i.data.site.pathPrefix,M=B?n.pathname.replace(B,""):n.pathname,I=d?M.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:g,pageTitle:O,pageDescription:v,pageKeywords:y,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):O,label:"label",tabs:d}),d&&Object(m.b)(w,{slug:M,tabs:d,currentTab:I}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:n,slug:M,tabs:d,currentTab:I}),Object(m.b)(s.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},wmWH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),n=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r={},l={_frontmatter:r},s=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(s,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Solution overview"),Object(i.b)("p",null,"Digital business automation (DBA) allows an organization to improve its operations by streamlining the way people participate in business processes and workflows, automate repeatable decisions, and provide business users with the ability to edit and change the business logic involved in these business processes. DBA projects also aim to make documents easy to store and retrieve, digitize document content, such as with optical character recognition (OCR), and automate data entries with software robots, also referred to as robotic process automation."),Object(i.b)("p",null,"The IBM Cloud Pak for Automation offers a software platform to develop, deploy, run and manage your digital business automation projects, using the capabilities shown in the following digram: "),Object(i.b)("img",{src:"/assets/automation/images/cp4a.jpg",alt:"overview"}),Object(i.b)("p",null,"The goal of the following chapters is to detail the install process for the components of the cloud pak (specifically version 19.0.3) that are containerized and run in an OpenShift cluster.\nThe components that are currently documented are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-ums"}),"IBM User Management Services")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-bas"}),"IBM Business Automation Studio")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-bai"}),"IBM Business Automation Insights"))),Object(i.b)("p",null,"The documentation for the following components is still ",Object(i.b)("em",{parentName:"p"},"under construction"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-ban"}),"IBM Business Automation Navigator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-ecm"}),"IBM FileNet Content Manager")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-aws"}),"IBM Automation Workstream Services")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-aca"}),"IBM Business Automation Content Analyzer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-odm"}),"IBM Operational Decision Manager")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/automation/install-adw"}),"IBM Automation Digital Worker"))),Object(i.b)("p",null,"The install process is performed through an Operator, which configuration is described ",Object(i.b)("a",o({parentName:"p"},{href:"/automation/install-operator"}),"here")),Object(i.b)("p",null,"Note that these install instructions have been tested on an OpenShift 4.2 cluster, using images from the Entitlement Registry for the IBM Cloud Pak for Automation on ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-automation-f8084c28-d609-4a7a-bfb7-569e79cb9e72-global"}),"IBM Cloud"),"."),Object(i.b)("p",null,"For more information, visit:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/welcome/kc_welcome_dba_distrib.html"}),"IBM Cloud Pak for Automation documentation")," in the IBM Knowledge Center."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/architecture/architectures/dba-architecture"}),"Digital business automation reference architecture")," in the IBM Architecture Center."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/denim-compute"}),"Denim Compute DBA reference implementation")," in GitHub."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/architecture/content/field-guide/digital-business-automation-field-guide"}),"IBM Digital Business Automation Field Guide"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-introduction-index-mdx-b13022ccff520e77f898.js.map