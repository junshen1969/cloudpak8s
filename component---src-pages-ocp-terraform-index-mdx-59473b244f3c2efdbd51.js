(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var a=r("pOBw"),n=r("q1tI"),i=r.n(n),o=r("NmYn"),s=r.n(o),l=r("OKom"),c=r("k4MR"),u=r("TSYQ"),d=r.n(u),b=r("QH2O"),p=r("qKvR"),f=function(e){var t,r=e.title,a=e.tabs,n=void 0===a?[]:a;return Object(p.b)("div",{className:d()(b.pageHeader,(t={},t[b.withTabs]=n.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:b.text},r)))))},m=r("pEPl"),h=r("BAC9"),v=function(e){var t=e.relativePagePath,r=e.repository,a=m.data.site.siteMetadata.repository,n=r||a,i=n.baseUrl,o=n.subDirectory,s=i+"/edit/"+n.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=r("FCXl"),j=(r("Oyvg"),r("Wbzz")),y=r("I8xM");var g=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=s()(e,{lower:!0}),i=n===a,o=new RegExp(a+"(?!-)"),l=r.replace(o,n);return Object(p.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(p.b)(j.Link,{className:y.link,to:""+l},e))}));return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:y.list},n))))))},a}(i.a.Component),w=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,n=e.location,i=e.Title,o=t.frontmatter,u=void 0===o?{}:o,d=t.relativePagePath,b=t.titleType,m=u.tabs,h=u.title,j=u.theme,y=u.description,N=u.keywords,T=a.data.site.pathPrefix,x=T?n.pathname.replace(T,""):n.pathname,C=m?x.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:j,pageTitle:h,pageDescription:y,pageKeywords:N,titleType:b},Object(p.b)(f,{title:i?Object(p.b)(i,null):h,label:"label",tabs:m}),m&&Object(p.b)(g,{slug:x,tabs:m,currentTab:C}),Object(p.b)(w.a,{padded:!0},r,Object(p.b)(v,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:n,slug:x,tabs:m,currentTab:C}),Object(p.b)(l.a,null))}},"1Jw5":function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return o})),r.d(t,"default",(function(){return c}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=n.a;function c(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(l,i({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Terraform Introduction and Motivation"),Object(a.b)("p",null,"Terraform is an open source infrastructure automation tool, which can be\ninstalled from ",Object(a.b)("inlineCode",{parentName:"p"},"https://terraform.io"),". Using it, infrastructure can be\ndeclaratively specified, deployed, updated and versioned. The declarative\ndefinition of infrastructure resources is sometimes called “infrastructure as\ncode”. These declarations enable the same infrastructure setup to be reproduced\nto different instances and even different underlying infrastructure. This\ncapability allows easy and reproduceable infrastructure environment deployment. "),Object(a.b)("p",null,"As there are many terraform providers for cloud infrastructure vendors,\nterraform skills can be transferred between cloud providers to build platforms\non multiple clouds."),Object(a.b)("p",null,"Terraform is a useful tool for building ",Object(a.b)("em",{parentName:"p"},"immutable infrastructure"),", which is a\nparadigm where infrastructure is never modified after it is deployed.  This\nallows the state of the infrastructure to be completely defined by the declarative\ndefinitions, and destroyed and recreated when problems arise."),Object(a.b)("h3",null,"Terraform resources"),Object(a.b)("p",null,"In Terraform, a resource is a component of your infrastructure. It could be a\nlow level component such as a physical server, virtual machine, or container.\nIt could also be a higher level component such as an email provider, DNS record,\nor database provider. "),Object(a.b)("h3",null,"Terraform providers"),Object(a.b)("p",null,"Infrastructure resources are provisioned by providers. Providers are responsible\nin Terraform for managing the lifecycle of a resource: create, read, update,\ndelete. A provider definition includes the necessary credentials to access the\ninfrastructure. A provider translates the declarative resources specified in the\nterraform language to API calls for the specific provider. Providers generally\nare available for an IaaS (e.g. AWS, GCP, Microsoft Azure, OpenStack),\nPaaS (e.g. Heroku), or\nSaaS service (e.g. Terraform Enterprise, DNSimple, CloudFlare)."),Object(a.b)("p",null,"Terraform uses provider plugins to generate resources for different\ninfrastructure components. Plugins allow terraform capabilities to be extended\nand new resource classes to be provisioned. The providers and plugins maintained\nby Hashicorp, the creator of Terraform, reside in a set of repositories in the\n",Object(a.b)("inlineCode",{parentName:"p"},"terraform-providers")," organization in Github. Third party providers and plugins\ncan also be housed in other Github repositories."),Object(a.b)("h3",null,"Terraform project layout"),Object(a.b)("p",null,"Terraform modules and resource definitions are defined in a set of ",Object(a.b)("inlineCode",{parentName:"p"},"*.tf")," files.\nA module is a grouping of multiple resources that are used together and deployed\ntogether. The most common set of ",Object(a.b)("inlineCode",{parentName:"p"},"*.tf")," files you will see in the current\ndirectory from which you run your terraform deployment are as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"variables.tf")," - This file contains the definitions for all the input\nvariables needed to deploy the resources defined in the module. Typically this\nfile contains variable declarations only, not variable values."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"outputs.tf")," - This file defines any output or return value variables that\nwill be produced. The output values can be used by another module performing\nthe next step of a deployment."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"*.tf")," - Any additional resources may be in other files with ",Object(a.b)("inlineCode",{parentName:"li"},"*.tf")," extension.\nThe provider plugins that will be used to deploy those resources, the name and\nlocation of ",Object(a.b)("em",{parentName:"li"},"modules"),", each of which contains the definitions and instructions\nto deploy a resource, and necessary variables for those plugins, resources and\nmodules. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"terraform.tfvars")," - This file is configured with the values to apply to\nvariables declared in ",Object(a.b)("inlineCode",{parentName:"li"},"variables.tf"),". This file may contain credentials and\nshould not be committed to source control without some type of access controls.")),Object(a.b)("h3",null,"Terraform execution"),Object(a.b)("p",null,"Before execution, prepare the variables file with all required variables as\ndefined in ",Object(a.b)("inlineCode",{parentName:"p"},"variables.tf"),". Use the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform init")," command to download all\nrequired terraform providers and modules to the local directory."),Object(a.b)("p",null,"Using the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform plan")," command, we can check what terraform will do without\nactually making any infrastructure changes, which is helpful to examine what\nwould happen without incurring costs associated with creating or destroying\nresources."),Object(a.b)("p",null,"When run using the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform apply")," command, the variable substitutions are\nread from the ",Object(a.b)("inlineCode",{parentName:"p"},".tfvars")," file.  Terraform internally generates a dependency\ngraph and will begin provisioning resources in a topological order."),Object(a.b)("h3",null,"Terraform state and drift detection"),Object(a.b)("p",null,"Terraform creates a state file with the ",Object(a.b)("inlineCode",{parentName:"p"},"*.tfstate")," extension to store the\nresults of resources it has provisioned during every ",Object(a.b)("inlineCode",{parentName:"p"},"terraform apply")," run.",Object(a.b)("br",{parentName:"p"}),"\n","It uses this file to detect drift, which are differences in the actual\ninfrastructure and terraform’s own view of the resources it has created.",Object(a.b)("br",{parentName:"p"}),"\n","For example, if someone has removed a virtual machine after deployment,\nterraform is able to compare its state file with the live state and recreate\nthe virtual machine according to the resource definitions."),Object(a.b)("h3",null,"Terraform modules"),Object(a.b)("p",null,"Terraform modules may be packaged in sub-directories or in separate\ngit repositories for code reuse.  The main\nlogic can be contained in a repo that combines one or more\nmodules to build a full end-to-end solution. Alternatively,\nthe main repo\nmay contain pointers to multiple modules, each of which\nresides in its own github repo. These modules are typically\nself-contained functions that often need to be run in a certain\nsequence. Some of the components may be shared across\ndifferent implementations. "),Object(a.b)("h3",null,"Using Terraform to install OpenShift 4"),Object(a.b)("p",null,"Where requirements dictate a network-restricted installation, or some\nother infrastructure customization outside the capabilities of an\ninstaller-provisioned infrasture (IPI) installation, terraform can\nbe used to automate some or all of the user-provisioned infrastructure (UPI)\ninstallation.\nSample terraform\nscripts are provided in the sections for ",Object(a.b)("a",i({parentName:"p"},{href:"../openshift4_aws/"}),"AWS"),",\n",Object(a.b)("a",i({parentName:"p"},{href:"../openshift4_azure/"}),"Azure"),", ",Object(a.b)("a",i({parentName:"p"},{href:"../openshift4_gcp/"}),"Google Cloud Platform"),",\nand ",Object(a.b)("a",i({parentName:"p"},{href:"../openshift4_vmware/"}),"VMware"),"."))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-ocp-terraform-index-mdx-59473b244f3c2efdbd51.js.map