---
slug: Helm_airflow
title: Install Helm of airflow on Azure KS
authors: [bgao]
tags: [aks]
---

az group create --name pilot --location eastus
az acr create --resource-group pilot --name pilothelmacr --sku Basic



{
  "adminUserEnabled": false,
  "anonymousPullEnabled": false,
  "creationDate": "2022-10-06T19:28:56.969137+00:00",
  "dataEndpointEnabled": false,
  "dataEndpointHostNames": [],
  "encryption": {
    "keyVaultProperties": null,
    "status": "disabled"
  },
  "id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourceGroups/pilot/providers/Microsoft.ContainerRegistry/registries/pilothelmacr",
  "identity": null,
  "location": "eastus",
  "loginServer": "pilothelmacr.azurecr.io",
  "name": "pilothelmacr",
  "networkRuleBypassOptions": "AzureServices",
  "networkRuleSet": null,
  "policies": {
    "exportPolicy": {
      "status": "enabled"
    },
    "quarantinePolicy": {
      "status": "disabled"
    },
    "retentionPolicy": {
      "days": 7,
      "lastUpdatedTime": "2022-10-06T19:28:59.474807+00:00",
      "status": "disabled"
    },
    "trustPolicy": {
      "status": "disabled",
      "type": "Notary"
    }
  },
  "privateEndpointConnections": [],
  "provisioningState": "Succeeded",
  "publicNetworkAccess": "Enabled",
  "resourceGroup": "pilot",
  "sku": {
    "name": "Basic",
    "tier": "Basic"
  },
  "status": null,
  "systemData": {
    "createdAt": "2022-10-06T19:28:56.969137+00:00",
    "createdBy": "bygao@hotmail.com",
    "createdByType": "User",
    "lastModifiedAt": "2022-10-06T19:28:56.969137+00:00",
    "lastModifiedBy": "bygao@hotmail.com",
    "lastModifiedByType": "User"
  },
  "tags": {},
  "type": "Microsoft.ContainerRegistry/registries",
  "zoneRedundancy": "Disabled"
}

az aks create --resource-group pilot --name pilothelmks --location eastus --attach-acr pilothelmacr --generate-ssh-keys

{
  "adminUserEnabled": false,
  "anonymousPullEnabled": false,
  "creationDate": "2022-10-06T19:28:56.969137+00:00",
  "dataEndpointEnabled": false,
  "dataEndpointHostNames": [],
  "encryption": {
    "keyVaultProperties": null,
    "status": "disabled"
  },
  "id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourceGroups/pilot/providers/Microsoft.ContainerRegistry/registries/pilothelmacr",
  "identity": null,
  "location": "eastus",
  "loginServer": "pilothelmacr.azurecr.io",
  "name": "pilothelmacr",
  "networkRuleBypassOptions": "AzureServices",
  "networkRuleSet": null,
  "policies": {
    "exportPolicy": {
      "status": "enabled"
    },
    "quarantinePolicy": {
      "status": "disabled"
    },
    "retentionPolicy": {
      "days": 7,
      "lastUpdatedTime": "2022-10-06T19:28:59.474807+00:00",
      "status": "disabled"
    },
    "trustPolicy": {
      "status": "disabled",
      "type": "Notary"
    }
  },
  "privateEndpointConnections": [],
  "provisioningState": "Succeeded",
  "publicNetworkAccess": "Enabled",
  "resourceGroup": "pilot",
  "sku": {
    "name": "Basic",
    "tier": "Basic"
  },
  "status": null,
  "systemData": {
    "createdAt": "2022-10-06T19:28:56.969137+00:00",
    "createdBy": "bygao@hotmail.com",
    "createdByType": "User",
    "lastModifiedAt": "2022-10-06T19:28:56.969137+00:00",
    "lastModifiedBy": "bygao@hotmail.com",
    "lastModifiedByType": "User"
  },
  "tags": {},
  "type": "Microsoft.ContainerRegistry/registries",
  "zoneRedundancy": "Disabled"
}

~~~s
C:\>az aks create --resource-group pilot --name pilothelmks --location eastus --attach-acr pilothelmacr --generate-ssh-keys
~~~
~~~JSON
AAD role propagation done[############################################]  100.0000%{
  "aadProfile": null,
  "addonProfiles": null,
  "agentPoolProfiles": [
    {
      "availabilityZones": null,
      "count": 3,
      "creationData": null,
      "currentOrchestratorVersion": "1.23.12",
      "enableAutoScaling": false,
      "enableEncryptionAtHost": false,
      "enableFips": false,
      "enableNodePublicIp": false,
      "enableUltraSsd": false,
      "gpuInstanceProfile": null,
      "kubeletConfig": null,
      "kubeletDiskType": "OS",
      "linuxOsConfig": null,
      "maxCount": null,
      "maxPods": 110,
      "minCount": null,
      "mode": "System",
      "name": "nodepool1",
      "nodeImageVersion": "AKSUbuntu-1804gen2containerd-2022.09.22",
      "nodeLabels": null,
      "nodePublicIpPrefixId": null,
      "nodeTaints": null,
      "orchestratorVersion": "1.23.12",
      "osDiskSizeGb": 128,
      "osDiskType": "Managed",
      "osSku": "Ubuntu",
      "osType": "Linux",
      "podSubnetId": null,
      "powerState": {
        "code": "Running"
      },
      "provisioningState": "Succeeded",
      "proximityPlacementGroupId": null,
      "scaleDownMode": null,
      "scaleSetEvictionPolicy": null,
      "scaleSetPriority": null,
      "spotMaxPrice": null,
      "tags": null,
      "type": "VirtualMachineScaleSets",
      "upgradeSettings": {
        "maxSurge": null
      },
      "vmSize": "Standard_DS2_v2",
      "vnetSubnetId": null,
      "workloadRuntime": null
    }
  ],
  "apiServerAccessProfile": null,
  "autoScalerProfile": null,
  "autoUpgradeProfile": null,
  "azurePortalFqdn": "pilothelmk-pilot-27d3ec-ed257cfd.portal.hcp.eastus.azmk8s.io",
  "currentKubernetesVersion": "1.23.12",
  "disableLocalAccounts": false,
  "diskEncryptionSetId": null,
  "dnsPrefix": "pilothelmk-pilot-27d3ec",
  "enablePodSecurityPolicy": null,
  "enableRbac": true,
  "extendedLocation": null,
  "fqdn": "pilothelmk-pilot-27d3ec-ed257cfd.hcp.eastus.azmk8s.io",
  "fqdnSubdomain": null,
  "httpProxyConfig": null,
  "id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourcegroups/pilot/providers/Microsoft.ContainerService/managedClusters/pilothelmks",
  "identity": {
    "principalId": "a5d21f6c-b88a-4b84-8ef1-3e91cdef15c6",
    "tenantId": "2deefaad-1d66-4007-88d2-dcff6ff63fe1",
    "type": "SystemAssigned",
    "userAssignedIdentities": null
  },
  "identityProfile": {
    "kubeletidentity": {
      "clientId": "1c377527-57dd-429f-a1c2-29b988ae0de8",
      "objectId": "33984a9a-73d7-47e0-a732-1bda577e7262",
      "resourceId": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourcegroups/MC_pilot_pilothelmks_eastus/providers/Microsoft.ManagedIdentity/userAssignedIdentities/pilothelmks-agentpool"
    }
  },
  "kubernetesVersion": "1.23.12",
  "linuxProfile": {
    "adminUsername": "azureuser",
    "ssh": {
      "publicKeys": [
        {
          "keyData": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCrSgtstV+iRW5JIDishgnwuSJrJ6wTTQY1UmP95N+7CQtzHSs6XwuQIB9/r2ql3xc80uzt4V+b1Vxf4+3DQl7UQhMR4Ez56X4QMhRL59zHA7Phgb76wKSVdEMMHSsJaTx+Pz/+7xURDIy4G3Qv6Iabm33GyYsZBMIcv1KmNkW/ALYtLKUOgnqL/nTmw4a4Pn2hCObVBUcDvmd7tB6Nu6R+rz7Mp/JIA9vvCNGIPuyJNEEe9jytWBUNH38Ir+wtxv12eoepJHKJFwL8lFEdk1TbMWcwtVKTrrFjFV05GNBq/p/0FXAvaK7wGyT35pa1RbBXr61y5tupEwsMsKuiOV9C2tnrLsPfo/wtdYz2nlv5w7R55HP152ytn7oyDNkRIdH7KX8YeOBWaV9yutIgk67N8csqofyJkPEa+TLFz9x6AQr0Fl4E9aZAxqynAHKoKSWKQxo53QUZGR2Z9ZL5AjIiips89fSwzdfOT981cYrXKGmic4jUy2tkg3+MZvZHxos= azuread\\bengao@XPS-17-FNVN863\n"
        }
      ]
    }
  },
  "location": "eastus",
  "maxAgentPools": 100,
  "name": "pilothelmks",
  "networkProfile": {
    "dnsServiceIp": "10.0.0.10",
    "dockerBridgeCidr": "172.17.0.1/16",
    "ipFamilies": [
      "IPv4"
    ],
    "loadBalancerProfile": {
      "allocatedOutboundPorts": null,
      "effectiveOutboundIPs": [
        {
          "id": "/subscriptions/27d3ec5e-3532-4e38-a0fc-a39b5d599f39/resourceGroups/MC_pilot_pilothelmks_eastus/providers/Microsoft.Network/publicIPAddresses/ae88f620-07ed-4c00-a8c1-9677ddf7a227",
          "resourceGroup": "MC_pilot_pilothelmks_eastus"
        }
      ],
      "enableMultipleStandardLoadBalancers": null,
      "idleTimeoutInMinutes": null,
      "managedOutboundIPs": {
        "count": 1,
        "countIpv6": null
      },
      "outboundIPs": null,
      "outboundIpPrefixes": null
    },
    "loadBalancerSku": "Standard",
    "natGatewayProfile": null,
    "networkMode": null,
    "networkPlugin": "kubenet",
    "networkPolicy": null,
    "outboundType": "loadBalancer",
    "podCidr": "10.244.0.0/16",
    "podCidrs": [
      "10.244.0.0/16"
    ],
    "serviceCidr": "10.0.0.0/16",
    "serviceCidrs": [
      "10.0.0.0/16"
    ]
  },
  "nodeResourceGroup": "MC_pilot_pilothelmks_eastus",
  "podIdentityProfile": null,
  "powerState": {
    "code": "Running"
  },
  "privateFqdn": null,
  "privateLinkResources": null,
  "provisioningState": "Succeeded",
  "publicNetworkAccess": null,
  "resourceGroup": "pilot",
  "securityProfile": {
    "azureDefender": null
  },
  "servicePrincipalProfile": {
    "clientId": "msi",
    "secret": null
  },
  "sku": {
    "name": "Basic",
    "tier": "Free"
  },
  "storageProfile": {
    "diskCsiDriver": {
      "enabled": true
    },
    "fileCsiDriver": {
      "enabled": true
    },
    "snapshotController": {
      "enabled": true
    }
  },
  "systemData": null,
  "tags": null,
  "type": "Microsoft.ContainerService/ManagedClusters",
  "windowsProfile": null
}
~~~

Please add "C:\Users\BenGao\.azure-kubectl" to your search PATH so the `kubectl.exe` can be found. 2 options:
    1. Run "set PATH=%PATH%;C:\Users\BenGao\.azure-kubectl" or "$env:path += 'C:\Users\BenGao\.azure-kubectl'" for PowerShell. This is good for the current command session.
    2. Update system PATH environment variable by following "Control Panel->System->Advanced->Environment Variables", and re-open the command window. You only need to do it once
Downloading client to "C:\Users\BenGao\AppData\Local\Temp\tmpoj93zr8h\kubelogin.zip" from "https://github.com/Azure/kubelogin/releases/download/v0.0.20/kubelogin.zip"
Please add "C:\Users\BenGao\.azure-kubelogin" to your search PATH so the `kubelogin.exe` can be found. 2 options:
    1. Run "set PATH=%PATH%;C:\Users\BenGao\.azure-kubelogin" or "$env:path += 'C:\Users\BenGao\.azure-kubelogin'" for PowerShell. This is good for the current command session.
    2. Update system PATH environment variable by following "Control Panel->System->Advanced->Environment Variables", and re-open the command window. You only need to do it once
	

az aks get-credentials --resource-group pilot --name pilothelmks

helm repo add apache-airflow https://airflow.apache.org
helm upgrade --install airflow apache-airflow/airflow --namespace airflow --create-namespace


Release "airflow" does not exist. Installing it now.
NAME: airflow
LAST DEPLOYED: Thu Oct  6 16:21:38 2022
NAMESPACE: airflow
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
Thank you for installing Apache Airflow 2.3.0!

Your release is named airflow.
You can now access your dashboard(s) by executing the following command(s) and visiting the corresponding port at localhost in your browser:

Airflow Webserver:     kubectl port-forward svc/airflow-webserver 8080:8080 --namespace airflow
Default Webserver (Airflow UI) Login credentials:
    username: admin
    password: admin
Default Postgres connection credentials:
    username: postgres
    password: postgres
    port: 5432

You can get Fernet Key value by running the following:

    echo Fernet Key: $(kubectl get secret --namespace airflow airflow-fernet-key -o jsonpath="{.data.fernet-key}" | base64 --decode)

###########################################################
#  WARNING: You should set a static webserver secret key  #
###########################################################

You are using a dynamically generated webserver secret key, which can lead to
unnecessary restarts of your Airflow components.

Information on how to set a static webserver secret key can be found here:
https://airflow.apache.org/docs/helm-chart/stable/production-guide.html#webserver-secret-key