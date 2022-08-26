(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(674)),l=n(678),o=n(679),c=["components"],s={id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},p={unversionedId:"2_setup/3_install/1_customizable_install_with_helm",id:"version-v0.14.0/2_setup/3_install/1_customizable_install_with_helm",isDocsHomePage:!1,title:"Customizable install with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-v0.14.0/2_setup/3_install/1_customizable_install_with_helm.md",slug:"/2_setup/3_install/1_customizable_install_with_helm",permalink:"/nifikop/docs/2_setup/3_install/1_customizable_install_with_helm",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.0/2_setup/3_install/1_customizable_install_with_helm.md",version:"v0.14.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1661532850,sidebar_label:"Customizable install with Helm",sidebar:"version-v0.14.0/docs",previous:{title:"K3D",permalink:"/nifikop/docs/2_setup/2_platform_setup/2_k3d"},next:{title:"Cluster Scaling",permalink:"/nifikop/docs/3_tasks/1_nifi_cluster/2_cluster_scaling"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Introduction",id:"introduction",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Installing the Chart",id:"installing-the-chart",children:[]},{value:"Listing deployed charts",id:"listing-deployed-charts",children:[]},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",children:[]}]},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Install of the CRD",id:"install-of-the-crd",children:[]}]}],u={rightToc:b};function d(e){var t=e.components,n=Object(i.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Perform any necessary ",Object(r.b)("a",{parentName:"li",href:"/nifikop/docs/2_setup/2_platform_setup/1_gke"},"plateform-specific setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/helm/helm#install"},"Install a Helm client")," with a version higher than 3")),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This Helm chart install NiFiKop the Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."),Object(r.b)("p",null,"It will use Custom Ressources Definition CRDs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nificlusters.nifi.konpyutaika.com"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nifiusers.nifi.konpyutaika.com"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nifiusergroups.nifi.konpyutaika.com"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nifiregistryclients.nifi.konpyutaika.com"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nifiparametercontexts.nifi.konpyutaika.com"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nifidataflows.nifi.konpyutaika.com"),",")),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values.\n| Parameter                        | Description                                                                                                                                                                          | Default                                     |\n|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|\n| ",Object(r.b)("inlineCode",{parentName:"p"},"image.repository"),"               | Image                                                                                                                                                                                | ",Object(r.b)("inlineCode",{parentName:"p"},"ghcr.io/konpyutaika/docker-images/nifikop")," |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"image.tag"),"                      | Image tag                                                                                                                                                                            | ",Object(r.b)("inlineCode",{parentName:"p"},"v0.14.0-release"),"                           |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"image.pullPolicy"),"               | Image pull policy                                                                                                                                                                    | ",Object(r.b)("inlineCode",{parentName:"p"},"Always"),"                                    |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"image.imagePullSecrets.enabled")," | Enable tue use of secret for docker image                                                                                                                                            | ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"image.imagePullSecrets.name"),"    | Name of the secret to connect to docker registry                                                                                                                                     | -                                           |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"certManager.enabled"),"            | Enable cert-manager integration                                                                                                                                                      | ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"rbacEnable"),"                     | If true, create & use RBAC resources                                                                                                                                                 | ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"labels"),"                         | Labels to add to all deployed resources                                                                                                                                              | ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"annotations"),"                    | Annotations to add to all deployed resources                                                                                                                                         | ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"resources"),"                      | Pod resource requests & limits                                                                                                                                                       | ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"metrics.enabled"),"                | deploy service for metrics                                                                                                                                                           | ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"metrics.port"),"                   | Set port for operator metrics                                                                                                                                                        | ",Object(r.b)("inlineCode",{parentName:"p"},"8081"),"                                      |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"logLevel"),"                       | Log level to output                                                                                                                                                                  | ",Object(r.b)("inlineCode",{parentName:"p"},"Info"),"                                      |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"logEncoding"),"                    | Log encoding to use. Either ",Object(r.b)("inlineCode",{parentName:"p"},"json")," or ",Object(r.b)("inlineCode",{parentName:"p"},"console"),"                                                                                                                                      | ",Object(r.b)("inlineCode",{parentName:"p"},"json"),"                                      |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"certManager.clusterScoped"),"      | If true setup cluster scoped resources                                                                                                                                               | ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"namespaces"),"                     | List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",Object(r.b)("inlineCode",{parentName:"p"},"get")," permissions on this ",Object(r.b)("inlineCode",{parentName:"p"},"Node")," resource when using limited RBACs. | ",Object(r.b)("inlineCode",{parentName:"p"},'""')," i.e. all namespaces                    |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"nodeSelector"),"                   | Node selector configuration for operator pod                                                                                                                                         | ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"affinity"),"                       | Node affinity configuration for operator pod                                                                                                                                         | ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"tolerations"),"                    | Toleration configuration for operator pod                                                                                                                                            | ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"serviceAccount.create"),"          | Whether the SA creation is delegated to the chart or not                                                                                                                             | ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",Object(r.b)("inlineCode",{parentName:"p"},"serviceAccount.name"),"            | Name of the SA used for NiFiKop deployment                                                                                                                                           | release name                                |"),Object(r.b)("p",null,"Specify each parameter using the ",Object(r.b)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",Object(r.b)("inlineCode",{parentName:"p"},"helm install"),". For example,"),Object(r.b)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"$ helm install nifikop \\\n      konpyutaika/nifikop \\\n      -f values.yaml\n")),Object(r.b)("h3",{id:"installing-the-chart"},"Installing the Chart"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Skip CRDs")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"In the case where you don't want to deploy the crds using helm (",Object(r.b)("inlineCode",{parentName:"p"},"--skip-crds"),") you need to deploy manually the crds beforehand:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n")))),Object(r.b)(l.a,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"dryrun",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop \\\n    --dry-run \\\n    --set logLevel=Debug \\\n    --set namespaces={"nifikop"}\n'))),Object(r.b)(o.a,{value:"rn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm install <release name> konpyutaika/nifikop\n"))),Object(r.b)(o.a,{value:"set-params",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop --set namespaces={"nifikop"}\n')))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"the ",Object(r.b)("inlineCode",{parentName:"p"},"--replace")," flag allow you to reuses a charts release name")),Object(r.b)("h3",{id:"listing-deployed-charts"},"Listing deployed charts"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm list\n")),Object(r.b)("h3",{id:"get-status-for-the-helm-deployment"},"Get Status for the helm deployment"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm status nifikop\n")),Object(r.b)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),Object(r.b)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm del nifikop\n")),Object(r.b)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)"))),Object(r.b)("p",null,"Manually delete the CRD:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete crd nificlusters.nifi.konpyutaika.com\nkubectl delete crd nifiusers.nifi.konpyutaika.com\nkubectl delete crd nifiusergroups.nifi.konpyutaika.com\nkubectl delete crd nifiregistryclients.nifi.konpyutaika.com\nkubectl delete crd nifiparametercontexts.nifi.konpyutaika.com\nkubectl delete crd nifidataflows.nifi.konpyutaika.com\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you delete the CRD then\nIt will delete ",Object(r.b)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care"))),Object(r.b)("p",null,"Helm always keeps records of what releases happened. Need to see the deleted releases ?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm list --deleted\n")),Object(r.b)("p",null,"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm list --all\n")),Object(r.b)("p",null,"Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"--replace")," flag, but it will simply re-use the existing release and replace its\nresources.)"),Object(r.b)("p",null,"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."),Object(r.b)("p",null,"To purge a release"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm delete --purge nifikop\n")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h3",{id:"install-of-the-crd"},"Install of the CRD"),Object(r.b)("p",null,"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."),Object(r.b)("p",null,"In this case there is a parameter to say to not install the CRDs :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n')))}d.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},675:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},676:function(e,t,n){"use strict";var a=n(0),i=n(677);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},678:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(676),l=n(675),o=n(55),c=n.n(o),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(o),j=O[0],g=O[1],y=Object(a.useState)(!1),v=y[0],N=y[1];if(null!=u){var k=f[u];null!=k&&k!==j&&b.some((function(e){return e.value===k}))&&g(k)}var C=function(e){g(e),null!=u&&h(u,e)},w=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},x=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",_),window.removeEventListener("mousedown",x)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),_(e)},onFocus:function(){return C(t)},onClick:function(){C(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},679:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);