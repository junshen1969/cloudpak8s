(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),l=a.n(i),s=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},d=a("pEPl"),y=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+y.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:y.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===n,i=new RegExp(n+"(?!-)"),s=a.replace(i,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(O.Link,{className:f.link,to:""+s},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},n}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,d=b.tabs,y=b.title,O=b.theme,f=b.description,v=b.keywords,k=n.data.site.pathPrefix,A=k?r.pathname.replace(k,""):r.pathname,x=d?A.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:O,pageTitle:y,pageDescription:f,pageKeywords:v,titleType:u},Object(m.b)(h,{title:o?Object(m.b)(o,null):y,label:"label",tabs:d}),d&&Object(m.b)(N,{slug:A,tabs:d,currentTab:x}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:p})),Object(m.b)(j.a,{pageContext:t,location:r,slug:A,tabs:d,currentTab:x}),Object(m.b)(s.a,null))}},Kr8m:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("PageDescription"),c=l("InlineNotification"),b={_frontmatter:i},p=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Anyone can contribute to the IBM Cloud Paks Playbook, whether you are\nan IBM’er or not.\nWe welcome your collaboration and contributions happily, as our\nreference applications are meant to reflect your real world scenarios.\nThere are multiple ways to contribute: report bugs and improvement\nsuggestions, improve documentation, and contribute code.")),Object(n.b)("h2",null,"Bug reports, documentation changes, and feature requests"),Object(n.b)("p",null,"If you would like to contribute your experience back to the project\nin the form of encountered bug reports, necessary documentation\nchanges, or new feature requests, this can be done through the use of\nthe repository’s\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s/issues"}),Object(n.b)("strong",{parentName:"a"},"Issues")),"\nlist.  "),Object(n.b)("p",null,"Before opening a new issue, please reference the existing list to\nmake sure a similar or duplicate item does not already exist.",Object(n.b)("br",{parentName:"p"}),"\n","Otherwise, please be as explicit as possible when creating the new\nitem and be sure to include the following:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Bug reports"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Specific Project Version"),Object(n.b)("li",{parentName:"ul"},"Deployment environment"),Object(n.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate the problem"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Documentation changes"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"URL to existing incorrect or incomplete documentation\n(either in the project’s GitHub repo or external product\ndocumentation)"),Object(n.b)("li",{parentName:"ul"},"Updates required to correct current inconsistency"),Object(n.b)("li",{parentName:"ul"},"If possible, a link to a project fork, sample, or workflow to\nexpose the gap in documentation."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Feature requests"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Complete description of project feature request, including but\nnot limited to, components of the existing project that are\nimpacted, as well as additional components that may need to be\ncreated."),Object(n.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate environment\nnecessary to identify the new feature’s current gap.")))),Object(n.b)("p",null,"The more explicit and thorough you are in opening GitHub Issues,\nthe more efficient your interaction with the maintainers will be.",Object(n.b)("br",{parentName:"p"}),"\n","When creating the GitHub Issue for your bug report, documentation\nchange, or feature request, be sure to add as many relevant labels as\nnecessary (that are defined for that specific project).",Object(n.b)("br",{parentName:"p"}),"\n","These will vary by project, but will be helpful to the maintainers\nin quickly triaging your new GitHub issues."),Object(n.b)("h2",null,"Content contributions"),Object(n.b)("p",null,"We really value contributions. To maximize the impact of your\ncontent contributions, we request you follow the procedure and\nguidelines below.  If you are new to open source contribution and\nwould like some more pointers or guidance, you may want to check out\n",Object(n.b)("a",o({parentName:"p"},{href:"http://yourfirstpr.github.io/"}),Object(n.b)("strong",{parentName:"a"},"Your First PR"))," and\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.firsttimersonly.com/"}),Object(n.b)("strong",{parentName:"a"},"First Timers Only")),".",Object(n.b)("br",{parentName:"p"}),"\n","These are a few projects that help on-board new contributors to the\noverall open source process."),Object(n.b)("h3",null,"Forks and Pull Requests best practices"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Please ensure you follow these best practices after you read the\ninstructions for contributing. Details are explained in the detailed\ncontribution process description below."),Object(n.b)("li",{parentName:"ul"},"One change / documentation update per pull request",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Always pull the latest changes from upstream and rebase before\ncreating any pull request.  "),Object(n.b)("li",{parentName:"ul"},"New pull requests should be created against a branch of your\nforked repository."))),Object(n.b)("li",{parentName:"ul"},"All new contributions should first be tested locally before PR\nsubmission.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"There is a way to run a development instance of the Cloud Pak\nPlaybook site on your local machine. Follow the instructions in\nthe ",Object(n.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(n.b)("span",null,"Testing locally")),"\nsection below to set that up. It is very easy. "),Object(n.b)("li",{parentName:"ul"},"Make sure you test all your changes locally before submitting a\npull request.")))),Object(n.b)("h2",null,"The Contribution process step by step - Github and git flow"),Object(n.b)("p",null,"The internet is littered with guides and information on how to use\nand understand git.\nHowever, here’s a compact guide that follows the suggested workflow.\nIf you are new to github, or just rusty with the details, it is worth\nsome minutes of your time to study this diagram, relating each step\nnumber to its description in the text below. This will help you to understand all\nthe steps in the process, and understand where you are in it as\nyou create your contribution."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"791px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.2212389380531%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAC6klEQVQ4y01RyXbTShTU38I3sWf5NqzeYUjIIyHTcwAHbGxrtixLLcmWbUmtuajuBA6LUrVuVd+pjVev/8H99H8AJYZhRz6gqwWy5RTp7CuqzGMsxzgqbY+R56HLUES2/teaQp9iHEoYs9k99gETViaa9FGjSx6x+3aG7OEdCm+CJl+g2c1RZ3P0+x9oqZf2DYp0hkr5s0eM7QZ9G8AAP/n8HdLvb7G+f4P85wc07iUq5xNa/xJHJkytCXJnArG8Q2NfoLL/w2l5DnN2i3D5EY15hr7y0MoVjL6N0VYO4aKXHK9dY6h9DNIFyGh8HVPoVUzrHhO4WlPnUXmQoS0XMMY+03tQ6IcUso7RjynKcsvdZMROA4TS60YQMXfKnXGHytv1Qnt0wqGj4WgSlq5aH21250HmJjtk9WeobpXeFg4aekfdrZpgrfWBSbtqyZELlzt8j8PiDK13BTH9F4V5gYY77PiP8BZDcINhfc3dXqEnK5+kx+NOBbl3LiAPNsrjQiXk82/ueHHCBHy51SdI6wrl6hKH+UfsZ+c61vm3kPZntO4NanI+P0dm3mBnXqO2eCe3cMrnHLneAOkD8VWjjyfoxQMGchPeofDZ2fZea100wZh80aw0ZDyLb8QXPgxX04cwuq6GrMQfFKctyiJCSW6qBG3Nh5AJap7LUwRZClRFrPWSLMv4yc9z2xQwUiFhrTKYC4EorOG7e41wXWIbVIzJZ1TwnAxhUJBTBN4Jrptj7R8QbSRi3k1FA0NEvLSpIKIarr2DY2XY8t+1Umz8E5Kog9g2GmFQIt4yeaD0HaaLNX6ani6uiiYqYZY0SOIOWdLDXAp8n3o6sWsncGwBJ4jh+E9s2zFMJvqx8tjhQd9J4vYv1DA2wYFVax1QVQJ2FbJDNcImOMEP2bUfwwtSxjmmd8TCChBzTBG1RPPMzwlfvHiJ87NrnA6AGj9lx6lQBaTmTNC8LZHGTztKYnpiNd6T5zdEJLHf1fgFUXlf7+s8NfYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github flow",title:"Github flow",src:"/static/bbe8a019b09273bb0f5ea7e3892bf017/74a17/github_flow.png",srcSet:["/static/bbe8a019b09273bb0f5ea7e3892bf017/7fc1e/github_flow.png 288w","/static/bbe8a019b09273bb0f5ea7e3892bf017/a5df1/github_flow.png 576w","/static/bbe8a019b09273bb0f5ea7e3892bf017/74a17/github_flow.png 791w"],sizes:"(max-width: 791px) 100vw, 791px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(c,{mdxType:"InlineNotification"},"The link in step 3 provides you with more detail and context for steps 1 - 3."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create your own fork of the repo in github. This can be done in\nthe GUI at\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s"}),"https://github.com/ibm-cloud-architecture/cloudpak8s"),"\nby clicking the ",Object(n.b)("strong",{parentName:"p"},"Fork")," icon in the upper right corner. A fork or\ncopy of the repo will be created under your own github id. The URL\nwill be:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"https://github.com/<Your github ID>/cloudpak8s\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Go to the URL of your forked repo, and use the ",Object(n.b)("strong",{parentName:"p"},"Clone or download"),"\nbutton to copy the repo information so you can paste it\ninto your clone command in the command line to clone it to your\nlocal computer.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add a connection from the master branch of your local cloned\nrepository to the master branch of the upstream repository.\nThe details for this step are in\n",Object(n.b)("strong",{parentName:"p"},"Step 3  Configure Git to sync your fork …")," of the link below.\nDo not miss this important step."),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("strong",{parentName:"p"},"Note:")," More detail for steps 1-3 here:\n",Object(n.b)("a",o({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo/"}),"forking a repo"),"\n")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In a terminal window command line, working from the\ndirectory of your local\ncloned repository, create a new development branch off the targeted\nupstream branch, which is ",Object(n.b)("inlineCode",{parentName:"p"},"master"),"."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"git checkout -b <my-feature-branch> master\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Do your work:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Write your contributions or make your changes"),Object(n.b)("li",{parentName:"ul"},"Pass your tests locally (see the description of setting up your\nlocal test instance below)"),Object(n.b)("li",{parentName:"ul"},"Commit your intermediate changes as you go and as appropriate"),Object(n.b)("li",{parentName:"ul"},"Repeat until satisfied"),Object(n.b)("li",{parentName:"ul"},"See the ",Object(n.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(n.b)("span",null,"Testing locally"))," section below for more information regarding running Gatsby locally"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"When you are finished with all your commits and ready to push\nyour changes, fetch the latest upstream changes\n(in case other changes had been\ndelivered upstream by others while you were working on your\ncontribution)."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"git fetch upstream\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Rebase your local cloned repo to the latest upstream changes,\nresolving any conflicts.\nThis will ‘replay’ your local commits, one by one, after the changes\ndelivered upstream while you were locally developing, letting you\nmanually resolve any conflicts."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"git branch --set-upstream-to=upstream/master\ngit rebase\n")),Object(n.b)("p",{parentName:"li"},"   Instructions on how to manually resolve a conflict and commit the\nnew change or skip your local replayed commit will be presented\non screen by the git CLI.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Push the changes you added and commited to your forked repository\n(see the diagram above to understand this step)."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"git push origin <my-feature-branch>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a ",Object(n.b)("strong",{parentName:"p"},"pull request")," against the same targeted upstream branch.\nThe easiest way to do this is through the GUI. If you go to the\nupstream repo URL\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s"}),"https://github.com/ibm-cloud-architecture/cloudpak8s"),",\nafter you have done the ",Object(n.b)("inlineCode",{parentName:"p"},"push")," above, you should see a notice of your\npushed changes and a button to create a pull request. "),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("strong",{parentName:"p"},"Click that button"),",\nfill in a general description of the changes in your pull request, and\npreferably choose one or more reviewers from the list on the right\nside. Your pull request needs at least one reviewer’s approval before\nit can be merged. More details on pull requests are in the link below."),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("a",o({parentName:"p"},{href:"https://help.github.com/articles/creating-a-pull-request/"}),"Creating a pull request")),Object(n.b)("p",{parentName:"li"},"   Once the pull request has been reviewed, accepted and merged into\nthe main github repository, you should synchronise your remote\nand local forked github repository master branch with the\nupstream master branch. To do so, follow the steps below.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In your local cloned repo command line, change your active branch\nto ",Object(n.b)("strong",{parentName:"p"},"master"),". Then pull to your local cloned repo the latest\nchanges from the upstream master branch (that is, the pull request)."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"git checkout master\ngit pull upstream master\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Now push those latest upstream changes that you just pulled\nlocally to your forked repository."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"git push origin master\n")),Object(n.b)("p",{parentName:"li"},"   Now your forked repository and your local cloned repository are\nall caught up and synced with the main upstream repository."))),Object(n.b)("h3",null,"What Happens to your Pull Request?"),Object(n.b)("p",null,"This section is just for your information. You do not have to take\nany further steps unless you are requested to by the reviewer(s)."),Object(n.b)("p",null,"All pull requests are automatically built and unit tested by\na Travis-CI pipeline. The pipeline will highlight to the\nreviewer if there are any missing or mis-matched elements of your\nproposed change that could create problems for the web site. If any\nsuch problems are indicated, the reviewer or maintainer will\ncontact you to request the necessary changes to resolve the issue."),Object(n.b)("p",null,"The repository maintainer will inspect the content your commit.\nif approved, they will merge your changes into the upstream master branch."),Object(n.b)("p",null,"Should a maintainer or reviewer ask for changes to be made to the\npull request, these can be made locally and pushed to your forked\nrepository and branch. This uses the same git add, commit, and push\nsteps on the same development branch that you used when you first\ncreated the contribution."),Object(n.b)("p",null,"After the maintainer approves and merges your pull request,\nyour changes will appear on\nthe web site shortly thereafter."),Object(n.b)("h2",null,"Testing locally"),Object(n.b)("p",null,"Once you have forked the repository and have cloned it to your\nlocal system, you can begin contributing. The best way to contribute\nis to run the Gatsby project (the web site) locally in ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," mode.\nThis way, as you are making changes in your development branch,\nand saving the files in your cloned repo, you can make\nsure your changes render correctly before creating a pull\nrequest. "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Once you have cloned your fork of the repository to your local\nsystem, navigate to the directory where your project resides."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"cd <your repo directory>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run the following command to initialize npm in your local directory.\nThis command installs all the dependencies listed in the ",Object(n.b)("inlineCode",{parentName:"p"},"package.json"),"\nfile."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"npm install\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Gatsby with the Carbon theme on your local system."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"npm run dev\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Open your browser to ",Object(n.b)("a",o({parentName:"p"},{href:"http://localhost:8000/"}),"localhost:8000")," to\nsee the pages you are working on and verify that your changes\nare rendered correctly.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If further changes are required, make your modifications.\nGatsby will render the changes immediately."))),Object(n.b)("p",null,"For non-Mac users running Linux in a VM:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Gatsby requires Node.js version 10 or above. Run the following\ncommand to check your version.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"node -v\n"))),Object(n.b)("li",{parentName:"ol"},"Modify the ",Object(n.b)("inlineCode",{parentName:"li"},"package.json")," file to update the server with your\nspecific IP address and port number inside “scripts-dev”.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'"dev": "gatsby develop -H <your local IP address> -p 8000"\n'))),Object(n.b)("li",{parentName:"ol"},"For additional information, check out\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.gatsbyjs.org/docs/gatsby-cli/"}),"Gatsby CLI"),".")))}u.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-contribute-index-mdx-21f9b309c2565fde7795.js.map