(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(6),a=(n(0),n(226)),o={id:"2_minikube",title:"MiniKube",sidebar_label:"MiniKube"},s={unversionedId:"2_setup/2_platform_setup/2_minikube",id:"version-v0.5.1/2_setup/2_platform_setup/2_minikube",isDocsHomePage:!1,title:"MiniKube",description:"Follow these instructions to prepare minikube for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications.",source:"@site/versioned_docs/version-v0.5.1/2_setup/2_platform_setup/2_minikube.md",slug:"/2_setup/2_platform_setup/2_minikube",permalink:"/nifikop/docs/2_setup/2_platform_setup/2_minikube",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.5.1/2_setup/2_platform_setup/2_minikube.md",version:"v0.5.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1611651248,sidebar_label:"MiniKube",sidebar:"version-v0.5.1/docs",previous:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/2_setup/2_platform_setup/1_gke"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/2_setup/3_install/1_customizable_install_with_helm"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation steps",id:"installation-steps",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Follow these instructions to prepare minikube for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Administrative privileges are required to run minikube.")),Object(a.b)("h2",{id:"installation-steps"},"Installation steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install the latest version of ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://kubernetes.io/docs/setup/learning-environment/minikube/"}),"minikube"),", version 1.1.1 or later, and a ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/#install-a-hypervisor"}),"minikube hypervisor driver"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you\u2019re not using the default driver, set your minikube hypervisor driver.\nFor example, if you installed the KVM hypervisor, set the vm-driver within the minikube configuration using the following command:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"minikube config set vm-driver kvm2\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start minikube with 16384 MB of memory and 4 CPUs. This example uses Kubernetes version 1.14.2. You can change the version to any Kubernetes version supported by NiFiKop by altering the --kubernetes-version value:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"$ minikube start --memory=16384 --cpus=4 --kubernetes-version=v1.14.2\n")))),Object(a.b)("p",null,"Depending on the hypervisor you use and the platform on which the hypervisor is run, minimum memory requirements vary. 16384 MB is sufficent to run NiFiKop."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you don\u2019t have enough RAM allocated to the minikube virtual machine, the following errors could occur:"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"Image pull failures"),Object(a.b)("li",{parentName:"ul"},"Healthcheck timeout failures"),Object(a.b)("li",{parentName:"ul"},"Kubectl failures on the host"),Object(a.b)("li",{parentName:"ul"},"General network instability of the virtual machine and the host"),Object(a.b)("li",{parentName:"ul"},"Complete lock-up of the virtual machine"),Object(a.b)("li",{parentName:"ul"},"Host NMI watchdog reboots"),Object(a.b)("li",{parentName:"ul"},"One effective way to monitor memory usage in minikube:")),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"minikube ssh\ntop\n")))))}u.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||a;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);