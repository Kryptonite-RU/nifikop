(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(488)),o={id:"1_developer_guide",title:"Developer guide",sidebar_label:"Developer guide"},c={unversionedId:"6_contributing/1_developer_guide",id:"version-v0.8.0/6_contributing/1_developer_guide",isDocsHomePage:!1,title:"Developer guide",description:"Operator SDK",source:"@site/versioned_docs/version-v0.8.0/6_contributing/1_developer_guide.md",slug:"/6_contributing/1_developer_guide",permalink:"/nifikop/docs/v0.8.0/6_contributing/1_developer_guide",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.8.0/6_contributing/1_developer_guide.md",version:"v0.8.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"Developer guide",sidebar:"version-v0.8.0/docs",previous:{title:"NiFi UserGroup",permalink:"/nifikop/docs/v0.8.0/5_references/6_nifi_usergroup"},next:{title:"Reporting bugs",permalink:"/nifikop/docs/v0.8.0/6_contributing/2_reporting_bugs"}},l=[{value:"Operator SDK",id:"operator-sdk",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial setup",id:"initial-setup",children:[]},{value:"Operator sdk",id:"operator-sdk-1",children:[]},{value:"Build NiFiKop",id:"build-nifikop",children:[]},{value:"Run NiFiKop",id:"run-nifikop",children:[]}]},{value:"Helm",id:"helm",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"operator-sdk"},"Operator SDK"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"NiFiKop has been validated with :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/doc/install"}),"go")," version v1.15+."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"docker")," version 18.09+"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}),"kubectl")," version v1.16+"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh/"}),"Helm")," version v3.4.2"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/operator-framework/operator-sdk"}),"Operator sdk")," version v1.5.0")),Object(i.b)("h3",{id:"initial-setup"},"Initial setup"),Object(i.b)("p",null,"Checkout the project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/konpyutaika/nifikop.git\ncd nifikop\n")),Object(i.b)("h3",{id:"operator-sdk-1"},"Operator sdk"),Object(i.b)("p",null,"The full list of command is available here : ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://sdk.operatorframework.io/docs/upgrading-sdk-version/v1.0.0/#cli-changes"}),"https://sdk.operatorframework.io/docs/upgrading-sdk-version/v1.0.0/#cli-changes")),Object(i.b)("h3",{id:"build-nifikop"},"Build NiFiKop"),Object(i.b)("h4",{id:"local-environment"},"Local environment"),Object(i.b)("p",null,"If you prefer working directly with your local go environment you can simply uses :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make build\n")),Object(i.b)("h3",{id:"run-nifikop"},"Run NiFiKop"),Object(i.b)("p",null,"We can quickly run NiFiKop in development mode (on your local host), then it will use your kubectl configuration file to connect to your kubernetes cluster."),Object(i.b)("p",null,"There are several ways to execute your operator :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using your IDE directly"),Object(i.b)("li",{parentName:"ul"},"Executing directly the Go binary"),Object(i.b)("li",{parentName:"ul"},"deploying using the Helm charts")),Object(i.b)("p",null,"If you want to configure your development IDE, you need to give it environment variables so that it will uses to connect to kubernetes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG={path/to/your/kubeconfig}\nWATCH_NAMESPACE={namespace_to_watch}\nPOD_NAME={name for operator pod}\nLOG_LEVEL=Debug\nOPERATOR_NAME=ide\n")),Object(i.b)("h4",{id:"run-the-operator-locally-with-the-go-binary"},"Run the Operator Locally with the Go Binary"),Object(i.b)("p",null,"This method can be used to run the operator locally outside of the cluster. This method may be preferred during development as it facilitates faster deployment and testing."),Object(i.b)("p",null,"Set the name of the operator in an environment variable"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," export OPERATOR_NAME=nifi-operator\n")),Object(i.b)("p",null,"Deploy the CRDs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\n")),Object(i.b)("p",null,"And deploy the operator."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make run\n")),Object(i.b)("p",null,"This will run the operator in the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," namespace using the default Kubernetes config file at ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),Object(i.b)("h4",{id:"deploy-using-the-helm-charts"},"Deploy using the Helm Charts"),Object(i.b)("p",null,"This section provides an instructions for running the operator Helm charts with an image that is built from the local branch."),Object(i.b)("p",null,"Build the image from the current branch."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export DOCKER_REPO_BASE={your-docker-repo}\nmake docker-build\n")),Object(i.b)("p",null,"Push the image to docker hub (or to whichever repo you want to use)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ make docker-push\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The image tag is a combination of the version as defined in ",Object(i.b)("inlineCode",{parentName:"p"},"verion/version.go")," and the branch name."))),Object(i.b)("p",null,"Install the Helm chart."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'helm install skeleton ./helm/nifikop \\\n    --set image.tag=v0.5.1-release \\\n    --namespace-{"nifikop"}\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"image.repository")," and ",Object(i.b)("inlineCode",{parentName:"p"},"image.tag")," template variables have to match the names from the image that we pushed in the previous step."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We set the chart name to the branch, but it can be anything."))),Object(i.b)("p",null,"Lastly, verify that the operator is running."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ kubectl get pods -n nifikop\nNAME                                                READY   STATUS    RESTARTS   AGE\nskeleton-nifikop-8946b89dc-4cfs9   1/1     Running   0          7m45s\n")),Object(i.b)("h2",{id:"helm"},"Helm"),Object(i.b)("p",null,"The NiFiKop operator is released in the ",Object(i.b)("inlineCode",{parentName:"p"},"konpyutaika-incubator")," helm repository."),Object(i.b)("p",null,"In order to package the chart you need to run the following command. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make helm-package\n")))}p.isMDXComponent=!0},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);