"use strict";(self.webpackChunkwgt=self.webpackChunkwgt||[]).push([[1607],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(7462),o=(t(7294),t(3905));const r={slug:"Helm_airflow",title:"Install Helm of airflow on Azure KS",authors:["bgao"],tags:["aks"]},l=void 0,i={permalink:"/blog/Helm_airflow",editUrl:"https://github.com/baiyungao/wgt/tree/main/blog/blog/2022-10-06_Helm_airflow.md",source:"@site/blog/2022-10-06_Helm_airflow.md",title:"Install Helm of airflow on Azure KS",description:"az group create --name pilot --location eastus",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"aks",permalink:"/blog/tags/aks"}],readingTime:4.255,hasTruncateMarker:!1,authors:[{name:"Ben Gao",title:"Cloud Native Technology Evangelist",url:"https://www.linkedin.com/in/bengao/",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQGOlYw1Y3O7Jw/profile-displayphoto-shrink_400_400/0/1659556647362?e=1670457600&v=beta&t=pwZYzOqKE9lPX0Lrm6mCz_EF4e6tz-0QBnR3NwaiHLM",key:"bgao"}],frontMatter:{slug:"Helm_airflow",title:"Install Helm of airflow on Azure KS",authors:["bgao"],tags:["aks"]},prevItem:{title:"Cloud Native Practice in a nutshell",permalink:"/blog/cloud_native_nutshell"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"az group create --name pilot --location eastus\naz acr create --resource-group pilot --name pilothelmacr --sku Basic"),(0,o.kt)("p",null,'{\n"adminUserEnabled": false,\n"anonymousPullEnabled": false,\n"creationDate": "2022-10-06T19:28:56.969137+00:00",\n"dataEndpointEnabled": false,\n"dataEndpointHostNames": [],\n"encryption": {\n"keyVaultProperties": null,\n"status": "disabled"\n},\n"id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourceGroups/pilot/providers/Microsoft.ContainerRegistry/registries/pilothelmacr",\n"identity": null,\n"location": "eastus",\n"loginServer": "pilothelmacr.azurecr.io",\n"name": "pilothelmacr",\n"networkRuleBypassOptions": "AzureServices",\n"networkRuleSet": null,\n"policies": {\n"exportPolicy": {\n"status": "enabled"\n},\n"quarantinePolicy": {\n"status": "disabled"\n},\n"retentionPolicy": {\n"days": 7,\n"lastUpdatedTime": "2022-10-06T19:28:59.474807+00:00",\n"status": "disabled"\n},\n"trustPolicy": {\n"status": "disabled",\n"type": "Notary"\n}\n},\n"privateEndpointConnections": [],\n"provisioningState": "Succeeded",\n"publicNetworkAccess": "Enabled",\n"resourceGroup": "pilot",\n"sku": {\n"name": "Basic",\n"tier": "Basic"\n},\n"status": null,\n"systemData": {\n"createdAt": "2022-10-06T19:28:56.969137+00:00",\n"createdBy": "',(0,o.kt)("a",{parentName:"p",href:"mailto:bygao@hotmail.com"},"bygao@hotmail.com"),'",\n"createdByType": "User",\n"lastModifiedAt": "2022-10-06T19:28:56.969137+00:00",\n"lastModifiedBy": "',(0,o.kt)("a",{parentName:"p",href:"mailto:bygao@hotmail.com"},"bygao@hotmail.com"),'",\n"lastModifiedByType": "User"\n},\n"tags": {},\n"type": "Microsoft.ContainerRegistry/registries",\n"zoneRedundancy": "Disabled"\n}'),(0,o.kt)("p",null,"az aks create --resource-group pilot --name pilothelmks --location eastus --attach-acr pilothelmacr --generate-ssh-keys"),(0,o.kt)("p",null,'{\n"adminUserEnabled": false,\n"anonymousPullEnabled": false,\n"creationDate": "2022-10-06T19:28:56.969137+00:00",\n"dataEndpointEnabled": false,\n"dataEndpointHostNames": [],\n"encryption": {\n"keyVaultProperties": null,\n"status": "disabled"\n},\n"id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourceGroups/pilot/providers/Microsoft.ContainerRegistry/registries/pilothelmacr",\n"identity": null,\n"location": "eastus",\n"loginServer": "pilothelmacr.azurecr.io",\n"name": "pilothelmacr",\n"networkRuleBypassOptions": "AzureServices",\n"networkRuleSet": null,\n"policies": {\n"exportPolicy": {\n"status": "enabled"\n},\n"quarantinePolicy": {\n"status": "disabled"\n},\n"retentionPolicy": {\n"days": 7,\n"lastUpdatedTime": "2022-10-06T19:28:59.474807+00:00",\n"status": "disabled"\n},\n"trustPolicy": {\n"status": "disabled",\n"type": "Notary"\n}\n},\n"privateEndpointConnections": [],\n"provisioningState": "Succeeded",\n"publicNetworkAccess": "Enabled",\n"resourceGroup": "pilot",\n"sku": {\n"name": "Basic",\n"tier": "Basic"\n},\n"status": null,\n"systemData": {\n"createdAt": "2022-10-06T19:28:56.969137+00:00",\n"createdBy": "',(0,o.kt)("a",{parentName:"p",href:"mailto:bygao@hotmail.com"},"bygao@hotmail.com"),'",\n"createdByType": "User",\n"lastModifiedAt": "2022-10-06T19:28:56.969137+00:00",\n"lastModifiedBy": "',(0,o.kt)("a",{parentName:"p",href:"mailto:bygao@hotmail.com"},"bygao@hotmail.com"),'",\n"lastModifiedByType": "User"\n},\n"tags": {},\n"type": "Microsoft.ContainerRegistry/registries",\n"zoneRedundancy": "Disabled"\n}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-s"},"C:\\>az aks create --resource-group pilot --name pilothelmks --location eastus --attach-acr pilothelmacr --generate-ssh-keys\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'AAD role propagation done[############################################]  100.0000%\n{\n  "aadProfile": null,\n  "addonProfiles": null,\n  "agentPoolProfiles": [\n    {\n      "availabilityZones": null,\n      "count": 3,\n      "creationData": null,\n      "currentOrchestratorVersion": "1.23.12",\n      "enableAutoScaling": false,\n      "enableEncryptionAtHost": false,\n      "enableFips": false,\n      "enableNodePublicIp": false,\n      "enableUltraSsd": false,\n      "gpuInstanceProfile": null,\n      "kubeletConfig": null,\n      "kubeletDiskType": "OS",\n      "linuxOsConfig": null,\n      "maxCount": null,\n      "maxPods": 110,\n      "minCount": null,\n      "mode": "System",\n      "name": "nodepool1",\n      "nodeImageVersion": "AKSUbuntu-1804gen2containerd-2022.09.22",\n      "nodeLabels": null,\n      "nodePublicIpPrefixId": null,\n      "nodeTaints": null,\n      "orchestratorVersion": "1.23.12",\n      "osDiskSizeGb": 128,\n      "osDiskType": "Managed",\n      "osSku": "Ubuntu",\n      "osType": "Linux",\n      "podSubnetId": null,\n      "powerState": {\n        "code": "Running"\n      },\n      "provisioningState": "Succeeded",\n      "proximityPlacementGroupId": null,\n      "scaleDownMode": null,\n      "scaleSetEvictionPolicy": null,\n      "scaleSetPriority": null,\n      "spotMaxPrice": null,\n      "tags": null,\n      "type": "VirtualMachineScaleSets",\n      "upgradeSettings": {\n        "maxSurge": null\n      },\n      "vmSize": "Standard_DS2_v2",\n      "vnetSubnetId": null,\n      "workloadRuntime": null\n    }\n  ],\n  "apiServerAccessProfile": null,\n  "autoScalerProfile": null,\n  "autoUpgradeProfile": null,\n  "azurePortalFqdn": "pilothelmk-pilot-27d3ec-ed257cfd.portal.hcp.eastus.azmk8s.io",\n  "currentKubernetesVersion": "1.23.12",\n  "disableLocalAccounts": false,\n  "diskEncryptionSetId": null,\n  "dnsPrefix": "pilothelmk-pilot-27d3ec",\n  "enablePodSecurityPolicy": null,\n  "enableRbac": true,\n  "extendedLocation": null,\n  "fqdn": "pilothelmk-pilot-27d3ec-ed257cfd.hcp.eastus.azmk8s.io",\n  "fqdnSubdomain": null,\n  "httpProxyConfig": null,\n  "id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourcegroups/pilot/providers/Microsoft.ContainerService/managedClusters/pilothelmks",\n  "identity": {\n    "principalId": "a5d21f6c-b88a-4b84-8ef1-3e91cdef15c6",\n    "tenantId": "2deefaad-1d66-4007-88d2-dcff6ff63fe1",\n    "type": "SystemAssigned",\n    "userAssignedIdentities": null\n  },\n  "identityProfile": {\n    "kubeletidentity": {\n      "clientId": "1c377527-57dd-429f-a1c2-29b988ae0de8",\n      "objectId": "33984a9a-73d7-47e0-a732-1bda577e7262",\n      "resourceId": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourcegroups/MC_pilot_pilothelmks_eastus/providers/Microsoft.ManagedIdentity/userAssignedIdentities/pilothelmks-agentpool"\n    }\n  },\n  "kubernetesVersion": "1.23.12",\n  "linuxProfile": {\n    "adminUsername": "azureuser",\n    "ssh": {\n      "publicKeys": [\n        {\n          "keyData": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCrSgtstV+iRW5JIDishgnwuSJrJ6wTTQY1UmP95N+7CQtzHSs6XwuQIB9/r2ql3xc80uzt4V+b1Vxf4+3DQl7UQhMR4Ez56X4QMhRL59zHA7Phgb76wKSVdEMMHSsJaTx+Pz/+7xURDIy4G3Qv6Iabm33GyYsZBMIcv1KmNkW/ALYtLKUOgnqL/nTmw4a4Pn2hCObVBUcDvmd7tB6Nu6R+rz7Mp/JIA9vvCNGIPuyJNEEe9jytWBUNH38Ir+wtxv12eoepJHKJFwL8lFEdk1TbMWcwtVKTrrFjFV05GNBq/p/0FXAvaK7wGyT35pa1RbBXr61y5tupEwsMsKuiOV9C2tnrLsPfo/wtdYz2nlv5w7R55HP152ytn7oyDNkRIdH7KX8YeOBWaV9yutIgk67N8csqofyJkPEa+TLFz9x6AQr0Fl4E9aZAxqynAHKoKSWKQxo53QUZGR2Z9ZL5AjIiips89fSwzdfOT981cYrXKGmic4jUy2tkg3+MZvZHxos= azuread\\\\bengao@XPS-17-FNVN863\\n"\n        }\n      ]\n    }\n  },\n  "location": "eastus",\n  "maxAgentPools": 100,\n  "name": "pilothelmks",\n  "networkProfile": {\n    "dnsServiceIp": "10.0.0.10",\n    "dockerBridgeCidr": "172.17.0.1/16",\n    "ipFamilies": [\n      "IPv4"\n    ],\n    "loadBalancerProfile": {\n      "allocatedOutboundPorts": null,\n      "effectiveOutboundIPs": [\n        {\n          "id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourceGroups/MC_pilot_pilothelmks_eastus/providers/Microsoft.Network/publicIPAddresses/ae88f620-07ed-4c00-a8c1-9677ddf7a227",\n          "resourceGroup": "MC_pilot_pilothelmks_eastus"\n        }\n      ],\n      "enableMultipleStandardLoadBalancers": null,\n      "idleTimeoutInMinutes": null,\n      "managedOutboundIPs": {\n        "count": 1,\n        "countIpv6": null\n      },\n      "outboundIPs": null,\n      "outboundIpPrefixes": null\n    },\n    "loadBalancerSku": "Standard",\n    "natGatewayProfile": null,\n    "networkMode": null,\n    "networkPlugin": "kubenet",\n    "networkPolicy": null,\n    "outboundType": "loadBalancer",\n    "podCidr": "10.244.0.0/16",\n    "podCidrs": [\n      "10.244.0.0/16"\n    ],\n    "serviceCidr": "10.0.0.0/16",\n    "serviceCidrs": [\n      "10.0.0.0/16"\n    ]\n  },\n  "nodeResourceGroup": "MC_pilot_pilothelmks_eastus",\n  "podIdentityProfile": null,\n  "powerState": {\n    "code": "Running"\n  },\n  "privateFqdn": null,\n  "privateLinkResources": null,\n  "provisioningState": "Succeeded",\n  "publicNetworkAccess": null,\n  "resourceGroup": "pilot",\n  "securityProfile": {\n    "azureDefender": null\n  },\n  "servicePrincipalProfile": {\n    "clientId": "msi",\n    "secret": null\n  },\n  "sku": {\n    "name": "Basic",\n    "tier": "Free"\n  },\n  "storageProfile": {\n    "diskCsiDriver": {\n      "enabled": true\n    },\n    "fileCsiDriver": {\n      "enabled": true\n    },\n    "snapshotController": {\n      "enabled": true\n    }\n  },\n  "systemData": null,\n  "tags": null,\n  "type": "Microsoft.ContainerService/ManagedClusters",\n  "windowsProfile": null\n}\n')),(0,o.kt)("p",null,'Please add "C:\\Users\\BenGao',".",'azure-kubectl" to your search PATH so the ',(0,o.kt)("inlineCode",{parentName:"p"},"kubectl.exe")," can be found. 2 options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1. Run "set PATH=%PATH%;C:\\Users\\BenGao\\.azure-kubectl" or "$env:path += \'C:\\Users\\BenGao\\.azure-kubectl\'" for PowerShell. This is good for the current command session.\n2. Update system PATH environment variable by following "Control Panel->System->Advanced->Environment Variables", and re-open the command window. You only need to do it once\n')),(0,o.kt)("p",null,'Downloading client to "C:\\Users\\BenGao\\AppData\\Local\\Temp\\tmpoj93zr8h\\kubelogin.zip" from "',(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/kubelogin/releases/download/v0.0.20/kubelogin.zip%22"},'https://github.com/Azure/kubelogin/releases/download/v0.0.20/kubelogin.zip"'),'\nPlease add "C:\\Users\\BenGao',".",'azure-kubelogin" to your search PATH so the ',(0,o.kt)("inlineCode",{parentName:"p"},"kubelogin.exe")," can be found. 2 options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1. Run "set PATH=%PATH%;C:\\Users\\BenGao\\.azure-kubelogin" or "$env:path += \'C:\\Users\\BenGao\\.azure-kubelogin\'" for PowerShell. This is good for the current command session.\n2. Update system PATH environment variable by following "Control Panel->System->Advanced->Environment Variables", and re-open the command window. You only need to do it once\n')),(0,o.kt)("p",null,"az aks get-credentials --resource-group pilot --name pilothelmks"),(0,o.kt)("p",null,"helm repo add apache-airflow ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org"},"https://airflow.apache.org"),"\nhelm upgrade --install airflow apache-airflow/airflow --namespace airflow --create-namespace"),(0,o.kt)("p",null,'Release "airflow" does not exist. Installing it now.\nNAME: airflow\nLAST DEPLOYED: Thu Oct  6 16:21:38 2022\nNAMESPACE: airflow\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nThank you for installing Apache Airflow 2.3.0!'),(0,o.kt)("p",null,"Your release is named airflow.\nYou can now access your dashboard(s) by executing the following command(s) and visiting the corresponding port at localhost in your browser:"),(0,o.kt)("p",null,"Airflow Webserver:     kubectl port-forward svc/airflow-webserver 8080:8080 --namespace airflow\nDefault Webserver (Airflow UI) Login credentials:\nusername: admin\npassword: admin\nDefault Postgres connection credentials:\nusername: postgres\npassword: postgres\nport: 5432"),(0,o.kt)("p",null,"You can get Fernet Key value by running the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo Fernet Key: $(kubectl get secret --namespace airflow airflow-fernet-key -o jsonpath="{.data.fernet-key}" | base64 --decode)\n')),(0,o.kt)("p",null,"###########################################################"),(0,o.kt)("h1",{id:"warning-you-should-set-a-static-webserver-secret-key"},"WARNING: You should set a static webserver secret key"),(0,o.kt)("p",null,"###########################################################"),(0,o.kt)("p",null,"You are using a dynamically generated webserver secret key, which can lead to\nunnecessary restarts of your Airflow components."),(0,o.kt)("p",null,"Information on how to set a static webserver secret key can be found here:\n",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/helm-chart/stable/production-guide.html#webserver-secret-key"},"https://airflow.apache.org/docs/helm-chart/stable/production-guide.html#webserver-secret-key")))}d.isMDXComponent=!0}}]);