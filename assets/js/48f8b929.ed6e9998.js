"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4073],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),o=["components"],s={id:"3_managed_groups",title:"Managed groups",sidebar_label:"Managed groups"},l=void 0,p={unversionedId:"3_manage_nifi/2_manage_users_and_accesses/3_managed_groups",id:"3_manage_nifi/2_manage_users_and_accesses/3_managed_groups",title:"Managed groups",description:"In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of .yaml files ...",source:"@site/../docs/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups.md",sourceDirName:"3_manage_nifi/2_manage_users_and_accesses",slug:"/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups",permalink:"/nifikop/docs/next/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups.md",tags:[],version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1668873143,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{id:"3_managed_groups",title:"Managed groups",sidebar_label:"Managed groups"},sidebar:"docs",previous:{title:"Groups management",permalink:"/nifikop/docs/next/3_manage_nifi/2_manage_users_and_accesses/2_groups_management"},next:{title:"Design Principles",permalink:"/nifikop/docs/next/3_manage_nifi/3_manage_dataflows/0_design_principles"}},m={},u=[],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," files ...\nTo simplify this, we implement in the operator 2 ",(0,i.kt)("inlineCode",{parentName:"p"},"managed groups")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Admins :")," a group giving access to everything on the NiFi Cluster,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Readers :")," a group giving access as viewer on the NiFi Cluster.")),(0,i.kt)("p",null,"You can directly define the list of users who belong to each of them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiCluster.Spec")," field :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  ...\n  oneNifiNodePerNode: false\n  #\n  propagateLabels: true\n  managedAdminUsers:\n    -  identity : "alexandre.guitton@konpyutaika.com"\n       name: "aguitton"\n    -  identity : "nifiuser@konpyutaika.com"\n       name: "nifiuser"\n  managedReaderUsers:\n    -  identity : "toto@konpyutaika.com"\n       name: "toto"\n    ...\n')),(0,i.kt)("p",null,"In this example the operator will create and manage 3 ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUsers")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"aguitton"),", with the identity : ",(0,i.kt)("inlineCode",{parentName:"li"},"alexandre.guitton@konpyutaika.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nifiuser"),", with the identity : ",(0,i.kt)("inlineCode",{parentName:"li"},"nifiuser@konpyutaika.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"toto"),", with the identity : ",(0,i.kt)("inlineCode",{parentName:"li"},"toto@konpyutaika.com"))),(0,i.kt)("p",null,"And create and manage two groups :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managed-admins :")," that will contain 3 users (",(0,i.kt)("strong",{parentName:"li"},"aguitton"),", ",(0,i.kt)("strong",{parentName:"li"},"nifiuser"),", ",(0,i.kt)("strong",{parentName:"li"},"nc-controller.nifikop.mgt.cluster.local")," which is the controller user)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managed-readers :")," that will contain 1 user (",(0,i.kt)("strong",{parentName:"li"},"toto"),")")),(0,i.kt)("p",null,"And the rest of the stuff will be reconciled and managed as described for ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUsers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUserGroups"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There is one more group that is created and managed by the operator, this is the ",(0,i.kt)("strong",{parentName:"p"},"managed-nodes")," group, for each node a ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser")," is created, and we automatically add them to this group to give them the right list of accesses."),(0,i.kt)("p",{parentName:"admonition"},"To get the list of managed groups just check the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUserGroup")," :"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get -n nifikop nifiusergroups.nifi.konpyutaika.com \nNAME              AGE\nmanaged-admins    6d7h\nmanaged-nodes     6d7h\nmanaged-readers   6d7h\n"))))}c.isMDXComponent=!0}}]);