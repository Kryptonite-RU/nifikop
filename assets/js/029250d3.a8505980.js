"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1090],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<s;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(25773),o=t(30808),s=(t(27378),t(35318)),r=["components"],l={id:"1_using_keda",title:"Using KEDA",sidebar_label:"Using KEDA"},i=void 0,c={unversionedId:"3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/1_using_keda",id:"version-v0.15.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/1_using_keda",title:"Using KEDA",description:"Deploy KDEA",source:"@site/versioned_docs/version-v0.15.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/1_using_keda.md",sourceDirName:"3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling",slug:"/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/1_using_keda",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/1_using_keda",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.15.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/1_using_keda.md",tags:[],version:"v0.15.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1666864026,formattedLastUpdatedAt:"Oct 27, 2022",frontMatter:{id:"1_using_keda",title:"Using KEDA",sidebar_label:"Using KEDA"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/0_design_principles"},next:{title:"External cluster",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/3_external_cluster"}},p={},u=[{value:"Deploy KDEA",id:"deploy-kdea",level:2},{value:"What is KEDA ?",id:"what-is-keda-",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Deploy NiFI cluster",id:"deploy-nifi-cluster",level:3},{value:"Deploy NiFi cluster autoscaling group",id:"deploy-nifi-cluster-autoscaling-group",level:3},{value:"Deploy Prometheus",id:"deploy-prometheus",level:3},{value:"Deploy Scale object",id:"deploy-scale-object",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"deploy-kdea"},"Deploy KDEA"),(0,s.kt)("h3",{id:"what-is-keda-"},"What is KEDA ?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," is a Kubernetes-based Event Driven Autoscaler. With ",(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA"),", you can drive the scaling of any container in Kubernetes based on the number of events needing to be processed."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," is a single-purpose and lightweight component that can be added into any Kubernetes cluster. ",(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," works alongside standard Kubernetes components like the Horizontal Pod Autoscaler and can extend functionality without overwriting or duplication. With ",(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," you can explicitly map the apps you want to use event-driven scale, with other apps continuing to function. This makes ",(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," a flexible and safe option to run alongside any number of any other Kubernetes applications or frameworks."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," can be a very powerful tool for integration with NiFi because we can auto-scale based on a service that your DataFlow will consume (e.g. PubSub, etc.) or with NiFi metrics exposed using Prometheus."),(0,s.kt)("h3",{id:"deployment"},"Deployment"),(0,s.kt)("p",null,"Following the ",(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/docs/2.8/deploy/"},"documentation")," here are the steps to deploy KEDA."),(0,s.kt)("p",null,"Deploying KEDA with Helm is very simple:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add Helm repo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add kedacore https://kedacore.github.io/charts\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Update Helm repo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo update\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install keda Helm chart")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace keda\nhelm install keda kedacore/keda --namespace keda\n")),(0,s.kt)("h3",{id:"deploy-nifi-cluster"},"Deploy NiFI cluster"),(0,s.kt)("p",null,"Use your own NiFi cluster deployment, for this example we will add a specific ",(0,s.kt)("inlineCode",{parentName:"p"},"NodeConfigGroup")," which will be used for auto-scaling nodes, and add the configuration for Prometheus :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  ...\n  listenersConfig:\n    internalListeners:\n    ...\n    - containerPort: 9090\n      name: prometheus\n      type: prometheus \n    ...\n  ...\n  nodeConfigGroups:\n    auto_scaling:\n      isNode: true\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 2Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n      serviceAccountName: external-dns\n      storageConfigs:\n        - mountPath: /opt/nifi/nifi-current/logs\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n        - mountPath: /opt/nifi/data\n          name: data\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n        - mountPath: /opt/nifi/extensions\n          name: extensions-repository\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n        - mountPath: /opt/nifi/flowfile_repository\n          name: flowfile-repository\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n        - mountPath: /opt/nifi/nifi-current/conf\n          name: conf\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n        - mountPath: /opt/nifi/content_repository\n          name: content-repository\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n        - mountPath: /opt/nifi/provenance_repository\n          name: provenance-repository\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            resources:\n              requests:\n                storage: 10Gi\n            storageClassName: ssd-wait\n  ...\n')),(0,s.kt)("h3",{id:"deploy-nifi-cluster-autoscaling-group"},"Deploy NiFi cluster autoscaling group"),(0,s.kt)("p",null,"Now we will deploy a ",(0,s.kt)("inlineCode",{parentName:"p"},"NifiNodeGroupAutoscaler")," to define how and what we want to autoscale : "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiNodeGroupAutoscaler\nmetadata:\n  name: nifinodegroupautoscaler-sample\n  namespace: clusters\nspec:\n  # contains the reference to the NifiCluster with the one the node group autoscaler is linked.\n  clusterRef:\n    name: cluster\n    namespace: clusters\n  # defines the id of the NodeConfig contained in NifiCluster.Spec.NodeConfigGroups\n  nodeConfigGroupId: auto_scaling\n  # readOnlyConfig can be used to pass Nifi node config\n  # which has type read-only these config changes will trigger rolling upgrade\n  readOnlyConfig:\n    nifiProperties:\n      overrideConfigs: |\n        nifi.ui.banner.text=NiFiKop - Scale Group\n  # This is an example of a node config you can apply to each replica in this node group.\n  # Any settings here will override those in the configured nodeConfigGroupId\n#  nodeConfig:\n#    nodeSelector:\n#      node_type: high-mem\n  # The selector used to identify nodes in NifiCluster.Spec.Nodes this autoscaler will manage\n  # Use Node.Labels in combination with this selector to clearly define which nodes will be managed by this autoscaler \n  nodeLabelsSelector: \n    matchLabels:\n      nifi_cr: cluster\n      nifi_node_group: auto-scaling\n  # the strategy used to decide how to add nodes to a nifi cluster\n  upscaleStrategy: simple\n  # the strategy used to decide how to remove nodes from an existing cluster\n  downscaleStrategy: lifo\n")),(0,s.kt)("p",null,"Here we will autoscale using the ",(0,s.kt)("inlineCode",{parentName:"p"},"NodeConfigGroup")," : auto_scaling."),(0,s.kt)("h3",{id:"deploy-prometheus"},"Deploy Prometheus"),(0,s.kt)("p",null,"For this example, we will base the autoscaling on some metrics of NiFi cluster, to deploy Prometheus we use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"prometheus operator"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create dedicated namespace: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace monitoring-system\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add Helm repo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add prometheus https://prometheus-community.github.io/helm-charts\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Update Helm repo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo update\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Deploy prometheus operator")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm install prometheus prometheus/kube-prometheus-stack --namespace monitoring-system \\\n    --set prometheusOperator.createCustomResource=false \\\n    --set prometheusOperator.logLevel=debug \\\n    --set prometheusOperator.alertmanagerInstanceNamespaces=monitoring-system \\\n    --set prometheusOperator.namespaces.additional=monitoring-system \\\n    --set prometheusOperator.prometheusInstanceNamespaces=monitoring-system \\\n    --set prometheusOperator.thanosRulerInstanceNamespaces=monitoring-system \\\n    --set defaultRules.enable=false \\\n    --set alertmanager.enabled=false \\\n    --set grafana.enabled=false \\\n    --set kubeApiServer.enabled=false \\\n    --set kubelet.enabled=false \\\n    --set kubeControllerManager.enabled=false \\\n    --set coreDNS.enabled=false \\\n    --set kubeEtcd.enabled=false \\\n    --set kubeScheduler.enabled=false \\\n    --set kubeProxy.enabled=false \\\n    --set kubeStateMetrics.enabled=false \\\n    --set prometheus.enabled=false\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Deploy the prometheus resource : ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  name: prometheus\n  namespace: monitoring-system\nspec:\n  enableAdminAPI: false\n  evaluationInterval: 30s\n  logLevel: debug\n  podMonitorSelector:\n    matchExpressions:\n    - key: release\n      operator: In\n      values:\n      - prometheus\n  resources:\n    requests:\n      memory: 400Mi\n  scrapeInterval: 30s\n  serviceAccountName: prometheus\n  serviceMonitorSelector:\n    matchExpressions:\n    - key: app\n      operator: In\n      values:\n      - nifi-cluster\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Deploy ",(0,s.kt)("inlineCode",{parentName:"li"},"ServiceMonitor")," resource:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: cluster\n  namespace: monitoring-system\n  labels:\n    app: nifi-cluster\n    nifi_cr: cluster\nspec:\n  selector:\n    matchLabels:\n      app: nifi\n      nifi_cr: cluster\n  namespaceSelector:\n    matchNames:\n      - clusters\n  endpoints:\n    - interval: 10s\n      port: prometheus\n      path: /metrics\n      honorLabels: true\n      relabelings:\n        - sourceLabels: [__meta_kubernetes_pod_ip]\n          separator: ;\n          regex: (.*)\n          targetLabel: pod_ip\n          replacement: $1\n          action: replace\n        - sourceLabels: [__meta_kubernetes_pod_label_nodeId]\n          separator: ;\n          regex: (.*)\n          targetLabel: nodeId\n          replacement: $1\n          action: replace\n        - sourceLabels: [__meta_kubernetes_pod_label_nifi_cr]\n          separator: ;\n          regex: (.*)\n          targetLabel: nifi_cr\n          replacement: $1\n          action: replace\n")),(0,s.kt)("p",null,"You should now have a ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus-prometheus-0")," pod and a ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus-operated")," service, you can access your prometheus using port forwarding:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"kubectl port-forward -n monitoring-system service/prometheus-operated 9090:9090\n")),(0,s.kt)("p",null,"You should be able to connect to your prometheus instance on ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),", check that you can query your NiFi metrics correctly."),(0,s.kt)("h3",{id:"deploy-scale-object"},"Deploy Scale object"),(0,s.kt)("p",null,"The last step is to deploy your ",(0,s.kt)("a",{parentName:"p",href:"https://keda.sh/docs/2.8/concepts/scaling-deployments/#scaledobject-spec"},"ScaledObject")," to define how to scale your NiFi node : "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: cluster\n  namespace: clusters\nspec:\n  scaleTargetRef:\n    apiVersion:    nifi.konpyutaika.com/v1alpha1     # Optional. Default: apps/v1\n    kind:          NifiNodeGroupAutoscaler           # Optional. Default: Deployment\n    name:          nifinodegroupautoscaler-sample    # Mandatory. Must be in the same namespace as the ScaledObject\n    envSourceContainerName: nifi                     # Optional. Default: .spec.template.spec.containers[0]\n  pollingInterval:  30                               # Optional. Default: 30 seconds\n  cooldownPeriod:   300                              # Optional. Default: 300 seconds\n  idleReplicaCount: 0                                # Optional. Default: ignored, must be less than minReplicaCount \n  minReplicaCount:  1                                # Optional. Default: 0\n  maxReplicaCount:  3                                # Optional. Default: 100\n  fallback:                                          # Optional. Section to specify fallback options\n    failureThreshold: 5                              # Mandatory if fallback section is included\n    replicas: 1                                      # Mandatory if fallback section is included\n  # advanced:                                          # Optional. Section to specify advanced options\n  #   restoreToOriginalReplicaCount: true              # Optional. Whether the target resource should be scaled back to original replicas count, after the ScaledObject is deleted\n  #   horizontalPodAutoscalerConfig:                   # Optional. Section to specify HPA related options\n  #     name: {name-of-hpa-resource}                   # Optional. Default: keda-hpa-{scaled-object-name}\n  #     behavior:                                      # Optional. Use to modify HPA's scaling behavior\n  #       scaleDown:\n  #         stabilizationWindowSeconds: 300 <--- \n  #         policies:\n  #         - type: Percent\n  #           value: 100\n  #           periodSeconds: 15\n  triggers:\n    - type: prometheus\n      metadata:\n        serverAddress: http://prometheus-operated.monitoring-system.svc:9090\n        metricName: http_requests_total\n        threshold: <threshold value>\n        query: <prometheus query>\n")),(0,s.kt)("p",null,"Now everything is ready, you must have an ",(0,s.kt)("inlineCode",{parentName:"p"},"HPA")," deployed that manage you ",(0,s.kt)("inlineCode",{parentName:"p"},"NifiNodeGroupAutoscaler")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get -n clusters hpa\nNAME                REFERENCE                                                TARGETS         MINPODS   MAXPODS   REPLICAS   AGE\nkeda-hpa-cluster    NifiNodeGroupAutoscaler/nifinodegroupautoscaler-sample     1833m/2 (avg)   1         3         2          25d\n")))}m.isMDXComponent=!0}}]);