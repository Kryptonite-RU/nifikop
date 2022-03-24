(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(488)),l={id:"3_nifi_registry_client",title:"NiFi Registry Client",sidebar_label:"NiFi Registry Client"},c={unversionedId:"5_references/3_nifi_registry_client",id:"5_references/3_nifi_registry_client",isDocsHomePage:!1,title:"NiFi Registry Client",description:"NifiRegistryClient is the Schema for the NiFi registry client API.",source:"@site/../docs/5_references/3_nifi_registry_client.md",slug:"/5_references/3_nifi_registry_client",permalink:"/nifikop/docs/next/5_references/3_nifi_registry_client",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/5_references/3_nifi_registry_client.md",version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646502846,sidebar_label:"NiFi Registry Client",sidebar:"docs",previous:{title:"NiFi User",permalink:"/nifikop/docs/next/5_references/2_nifi_user"},next:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/next/5_references/4_nifi_parameter_context"}},b=[{value:"NifiRegistryClient",id:"nifiregistryclient",children:[]},{value:"NifiRegistryClientsSpec",id:"nifiregistryclientsspec",children:[]},{value:"NifiRegistryClientStatus",id:"nifiregistryclientstatus",children:[]}],s={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NifiRegistryClient")," is the Schema for the NiFi registry client API."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: squidflow\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Squidflow demo"\n  uri: "http://nifi-registry:18080"\n')),Object(i.b)("h2",{id:"nifiregistryclient"},"NifiRegistryClient"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"metadata"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects registry clients must create."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"spec"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#nifiregistryclientspec"}),"NifiRegistryClientSpec")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defines the desired state of NifiRegistryClient."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"status"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#nifiregistryclientstatus"}),"NifiRegistryClientStatus")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defines the observed state of NifiRegistryClient."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")))),Object(i.b)("h2",{id:"nifiregistryclientsspec"},"NifiRegistryClientsSpec"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"description"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"describes the Registry client."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"uri"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"URI of the NiFi registry that should be used for pulling the flow."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clusterRef"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/nifikop/docs/next/5_references/2_nifi_user#clusterreference"}),"ClusterReference")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiCluster with the one the user is linked."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h2",{id:"nifiregistryclientstatus"},"NifiRegistryClientStatus"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nifi registry client's id."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"version"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int64"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the last nifi registry client revision version catched."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return o}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),O=p(n),u=a,o=O["".concat(l,".").concat(u)]||O[u]||j[u]||i;return n?r.a.createElement(o,c(c({ref:t},s),{},{components:n})):r.a.createElement(o,c({ref:t},s))}));function o(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);