"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6792],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var i=t(25773),o=t(30808),a=(t(27378),t(35318)),r=["components"],s={id:"2_nodes_configuration",title:"Nodes configuration",sidebar_label:"Nodes configuration"},l=void 0,p={unversionedId:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",id:"version-v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",title:"Nodes configuration",description:"In the quick start section, you deployed a simple NifiCluster resource, which deploys a NiFi cluster. But in many cases, you may need to tune the cluster nodes to match your needs.",source:"@site/versioned_docs/version-v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration.md",tags:[],version:"v0.15.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1666864026,formattedLastUpdatedAt:"Oct 27, 2022",frontMatter:{id:"2_nodes_configuration",title:"Nodes configuration",sidebar_label:"Nodes configuration"},sidebar:"docs",previous:{title:"Quick start",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start"},next:{title:"Kubernetes service",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service"}},c={},u=[{value:"ReadOnlyConfig and NodeConfigGroups",id:"readonlyconfig-and-nodeconfiggroups",level:2},{value:"Configure multiple node groups",id:"configure-multiple-node-groups",level:3},{value:"Storage management",id:"storage-management",level:4},{value:"Data persistence",id:"data-persistence",level:5},{value:"External volumes",id:"external-volumes",level:5},{value:"NiFi configurations",id:"nifi-configurations",level:2},{value:"ConfigMap, Secret, Inline",id:"configmap-secret-inline",level:3},{value:"Overridable configurations",id:"overridable-configurations",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the quick start section, you deployed a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"NifiCluster")," resource, which deploys a NiFi cluster. But in many cases, you may need to tune the cluster nodes to match your needs.\nIn this section, we'll try to cover the various things that can be specified for cluster node configuration."),(0,a.kt)("h2",{id:"readonlyconfig-and-nodeconfiggroups"},"ReadOnlyConfig and NodeConfigGroups"),(0,a.kt)("p",null,"To set up your ",(0,a.kt)("inlineCode",{parentName:"p"},"NiFi")," cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"NiFiKop"),", the first thing to understand is the difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"readOnlyConfig")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeConfigGroups"),"."),(0,a.kt)("h3",{id:"configure-multiple-node-groups"},"Configure multiple node groups"),(0,a.kt)("p",null,"In NiFiKop you can define different types of nodes using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec.NodeConfigGroups")," field. This field allows you to define as many node configurations as you want.\nOnce a ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeConfigGroup"),' has been defined, you can define it with your node declaration to say "I want to add a new node with this type of configuration".'),(0,a.kt)("p",null,"The main purpose of a ",(0,a.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/3_node_config"},"NodeConfigGroup")," is to define the purely technical requirements for the pod that will be deployed (storage configurations, resource requirements, docker image, pod location, etc)."),(0,a.kt)("p",null,"For example, you can have this node group configuration : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  # nodeConfigGroups specifies multiple node configs with unique name\n  nodeConfigGroups:\n    default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      serviceAccountName: "default"\n      # resourceRequirements works exactly like Container resources, the user can specify the limit and the requests\n      # through this property\n      # https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 3Gi\n    high_mem_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      serviceAccountName: "default"\n      # resourceRequirements works exactly like Container resources, the user can specify the limit and the requests\n      # through this property\n      # https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 30Gi\n        requests:\n          cpu: "1"\n          memory: 30Gi\n')),(0,a.kt)("p",null,"In this example, we have defined two different node configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"default_group"),": Saying that we want ",(0,a.kt)("strong",{parentName:"p"},"3Gi")," of RAM for a node using this configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"high_mem_group"),": Saying that we want ",(0,a.kt)("strong",{parentName:"p"},"30Gi")," of RAM for a node using this configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now we can declare the nodes of our cluster using this configuration: "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: 0\n  nodeConfigGroup: "default_group"\n- id: 2\n  nodeConfigGroup: "high_mem_group"\n- id: 3\n  nodeConfigGroup: "high_mem_group"\n- id: 5\n  nodeConfig:\n    resourcesRequirements:\n      limits:\n        cpu: "2"\n        memory: 3Gi\n      requests:\n        cpu: "1"\n        memory: 1Gi\n')),(0,a.kt)("p",null,"In this example, you can see that we have defined one node using the node configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"default_group")," (id = 0), 2 nodes using ",(0,a.kt)("inlineCode",{parentName:"p"},"high_mem_group")," (id = 2 and 3) and you also have the possibility to define the node configuration group directly at the node level (not reusable by another node) like for node 5."),(0,a.kt)("h4",{id:"storage-management"},"Storage management"),(0,a.kt)("p",null,"One of the most important configurations for a node in the case of a NiFi cluster is data persistence. As we run on kubernetes, whenever a pod is deleted, all data that is not stored on persistent storage will be lost, which is really bad for a statefull application like NiFi.\nTo avoid this, you can define how and what you want to persist in NiFi in the ",(0,a.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/3_node_config"},"NodeConfigGroup"),"."),(0,a.kt)("h5",{id:"data-persistence"},"Data persistence"),(0,a.kt)("p",null,"The first way to define data persistence is to use the ",(0,a.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/3_node_config#storageconfig"},"Spec.NodeConfigGroup.StorageConfig")," field."),(0,a.kt)("p",null,"This field allows you to define a storage set giving:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": a unique name to identify the storage config"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pvcSpec")," : a Kubernetes PVC spec definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mountPath")," : the path where the volume will be mounted into the main nifi container inside the pod (i.e the path were you want the data to be persisted).")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you don't replace them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"nifi.properties")," file using ",(0,a.kt)("a",{parentName:"p",href:"#nifi-configurations"},"NiFi-configurations"),", here is a list of paths that should be associated with a storage configuration:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/data")," : contains ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/data/flow.xml.gz"),": flow configuration files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/data/archive"),": NiFi archive"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/data/templates"),": templates directory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/data/database_repository"),": Database persistence"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/nifi-current/logs"),": NiFi logs files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/flowfile_repository"),": flowfiles repository"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/content_repository"),": NiFi content repository"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/provenance_repository"),": NiFi provenance repository"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/opt/nifi/nifi-current/conf"),": NiFi configurations"))),(0,a.kt)("p",null,"Here is an example we use in production for to persist data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nstorageConfigs:\n  - mountPath: /opt/nifi/nifi-current/logs\n    name: logs\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 100Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/data\n    name: data\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 50Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/extensions\n    name: extensions-repository\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/flowfile_repository\n    name: flowfile-repository\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 100Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/nifi-current/conf\n    name: conf\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/content_repository\n    name: content-repository\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 500Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/provenance_repository\n    name: provenance-repository\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 500Gi\n")),(0,a.kt)("h5",{id:"external-volumes"},"External volumes"),(0,a.kt)("p",null,"In some cases, you may want to mount a volume that is not managed by the operator to add a configuration or persist data using an existing volume. To do this, use the ",(0,a.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/3_node_config#externalvolumeconfig"},"Spec.NodeConfigGroup.StorageConfig")," field."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For a complete overview of node configuration possibilities, please refer to the reference page ",(0,a.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/3_node_config"},"NodeConfigGroup"))),(0,a.kt)("h2",{id:"nifi-configurations"},"NiFi configurations"),(0,a.kt)("p",null,"Once you have correctly defined the pods that will be deployed for your NiFi cluster, you may still have some configuration to do but at the NiFi level this time!\nFor this, the field to configure is ",(0,a.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/2_read_only_config"},"ReadOnlyConfig")," which can be used at the global level ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec.ReadOnlyConfig")," or at the node level like for ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeConfigGroup"),"."),(0,a.kt)("p",null,"There is some configuration that can be passed directly into this field like : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maximumTimerDrivenThreadCount"),": define the maximum number of threads for timer driven processors available to the system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maximumEventDrivenThreadCount"),": define the maximum number of threads for event driven processors available to the system.")),(0,a.kt)("p",null,"And other configurations (e.g. configuration files) that can be defined using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes Secret"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap")," or directly using the ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," field."),(0,a.kt)("h3",{id:"configmap-secret-inline"},"ConfigMap, Secret, Inline"),(0,a.kt)("p",null,"For most of the configuration files that can be overwritten (see section below), there are 4 ways to define the configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default"),": if nothing is specified, a default configuration is defined by the operator and will be used as is."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes secret"),": you reference a data key in a secret that will contain your configuration (used to define sensitive configurations like client secret, password, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes configMap"),": you reference a data key in a configMap that will contain your configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"override field"),": you define the configuration directly in the ",(0,a.kt)("inlineCode",{parentName:"li"},"NiFiCluster")," object using a string.")),(0,a.kt)("p",null,"When more than one configuration type is defined, the following priority is applied when the same configuration field is defined more than once: ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Override")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Default"),", which follow the security priority."),(0,a.kt)("p",null,"Let's take an example : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"}," nifiProperties:\n      # Additionnals nifi.properties configuration that will override the one produced based on template and\n      # configuration\n      overrideConfigMap:\n        # The key of the value,in data content, that we want use.\n        data: nifi.properties\n        # Name of the configmap that we want to refer.\n        name: raw\n        # Namespace where is located the secret that we want to refer.\n        namespace: nifikop\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template, configurations, overrideConfigMap and overrideConfigs.\n      overrideSecretConfig:\n        # The key of the value,in data content, that we want use.\n        data: nifi.properties\n        # Name of the configmap that we want to refer.\n        name: raw\n        # Namespace where is located the secret that we want to refer.\n        namespace: nifikop\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template, configurations and overrideConfigMap\n      overrideConfigs: |\n        nifi.ui.banner.text=NiFiKop\n        nifi.sensitive.props.key=thisIsABadSensitiveKeyPassword\n")),(0,a.kt)("p",null,"In this example if we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"nifi.sensitive.props.key")," key defined in the secret ",(0,a.kt)("inlineCode",{parentName:"p"},"raw"),", it will override the one defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"overrideConfigs")," field."),(0,a.kt)("h3",{id:"overridable-configurations"},"Overridable configurations"),(0,a.kt)("p",null,"Here is the list of configuration that you can override for NiFi :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/nifi_properties.go"},"nifi.properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/zookeeper_properties.go"},"zookeeper.properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/bootstrap_properties.go"},"bootstrap.properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/logback.xml.go"},"logback.xml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/authorizers.go"},"authorizers.xml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/bootstrap_notifications_services.go"},"bootstrap_notification_services.xml"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Keep in mind that some changes to the default configuration may cause the operator's behavior to break, so keep that in mind!\nJust because it's allowed doesn't mean it works :)")),(0,a.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("p",null,"In some cases, using the default content or provenance configuration for storage may not be sufficient, for example you may need to create multiple directories for your content or provenance repository in order to ",(0,a.kt)("a",{parentName:"p",href:"https://community.cloudera.com/t5/Community-Articles/HDF-CFM-NIFI-Best-practices-for-setting-up-a-high/ta-p/244999"},"set up a high performance installation"),".\nAs described in the NiFi Administration Guide, you can do this by using the ",(0,a.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#file-system-content-repository-properties"},"nifi.content.repository.directory.default*")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties"},"nifi.provenance.repository.directory.default*")," properties."),(0,a.kt)("p",null,"Here is an example of how to do this in the ",(0,a.kt)("inlineCode",{parentName:"p"},"NiFiCluster")," configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n  readOnlyConfig:\n    nifiProperties:\n      overrideConfigs: |\n        nifi.content.repository.directory.dir1=../content-additional/dir1\n        nifi.content.repository.directory.dir2=../content-additional/dir2\n        nifi.content.repository.directory.dir3=../content-additional/dir3\n        nifi.provenance.repository.directory.dir1=../provenance-additional/dir1\n        nifi.provenance.repository.directory.dir2=../provenance-additional/dir2\n...\n  nodeConfigGroups:\n    default_group:\n      ...\n      storageConfigs:\n      - mountPath: "/opt/nifi/content-additional/dir1"\n        name: content-repository-dir1\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/content-additional/dir2"\n        name: content-repository-dir2\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/content-additional/dir3"\n        name: content-repository-dir3\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/provenance-additional/dir1"\n        name: provenance-repository-dir1\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/provenance-additional/dir2"\n        name: provenance-repository-dir2\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      ...\n')))}f.isMDXComponent=!0}}]);