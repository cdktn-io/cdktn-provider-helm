# `dataHelmTemplate` Submodule <a name="`dataHelmTemplate` Submodule" id="@cdktn/provider-helm.dataHelmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHelmTemplate <a name="DataHelmTemplate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template helm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplate;

DataHelmTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .chart(java.lang.String)
    .name(java.lang.String)
//  .apiVersions(java.util.List<java.lang.String>)
//  .atomic(java.lang.Boolean|IResolvable)
//  .crds(java.util.List<java.lang.String>)
//  .createNamespace(java.lang.Boolean|IResolvable)
//  .dependencyUpdate(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .devel(java.lang.Boolean|IResolvable)
//  .disableOpenapiValidation(java.lang.Boolean|IResolvable)
//  .disableWebhooks(java.lang.Boolean|IResolvable)
//  .includeCrds(java.lang.Boolean|IResolvable)
//  .isUpgrade(java.lang.Boolean|IResolvable)
//  .keyring(java.lang.String)
//  .kubeVersion(java.lang.String)
//  .manifest(java.lang.String)
//  .manifests(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .notes(java.lang.String)
//  .passCredentials(java.lang.Boolean|IResolvable)
//  .postrender(DataHelmTemplatePostrender)
//  .renderSubchartNotes(java.lang.Boolean|IResolvable)
//  .replace(java.lang.Boolean|IResolvable)
//  .repository(java.lang.String)
//  .repositoryCaFile(java.lang.String)
//  .repositoryCertFile(java.lang.String)
//  .repositoryKeyFile(java.lang.String)
//  .repositoryPassword(java.lang.String)
//  .repositoryUsername(java.lang.String)
//  .resetValues(java.lang.Boolean|IResolvable)
//  .reuseValues(java.lang.Boolean|IResolvable)
//  .set(IResolvable|java.util.List<DataHelmTemplateSet>)
//  .setList(IResolvable|java.util.List<DataHelmTemplateSetListStruct>)
//  .setSensitive(IResolvable|java.util.List<DataHelmTemplateSetSensitive>)
//  .setWo(IResolvable|java.util.List<DataHelmTemplateSetWo>)
//  .showOnly(java.util.List<java.lang.String>)
//  .skipCrds(java.lang.Boolean|IResolvable)
//  .skipTests(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
//  .timeouts(DataHelmTemplateTimeouts)
//  .validate(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
//  .verify(java.lang.Boolean|IResolvable)
//  .version(java.lang.String)
//  .wait(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.chart">chart</a></code> | <code>java.lang.String</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Release name. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.apiVersions">apiVersions</a></code> | <code>java.util.List<java.lang.String></code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.atomic">atomic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the installation process purges the chart on fail. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.crds">crds</a></code> | <code>java.util.List<java.lang.String></code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Add a custom description. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.devel">devel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.includeCrds">includeCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.isUpgrade">isUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.keyring">keyring</a></code> | <code>java.lang.String</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.kubeVersion">kubeVersion</a></code> | <code>java.lang.String</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifest">manifest</a></code> | <code>java.lang.String</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifests">manifests</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to install the release into. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.postrender">postrender</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | Postrender command config. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.replace">replace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Repository where to locate the requested chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | The repository's CA file. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | The repository's cert file. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | The repository's cert key file. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.resetValues">resetValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.set">set</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>></code> | Custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setList">setList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setSensitive">setSensitive</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setWo">setWo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>></code> | Write-only custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.showOnly">showOnly</a></code> | <code>java.util.List<java.lang.String></code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipTests">skipTests</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, tests will not be rendered. By default, tests are rendered. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds to wait for any individual Kubernetes operation. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeouts DataHelmTemplate#timeouts}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.validate">validate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.verify">verify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.wait">wait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.chart"></a>

- *Type:* java.lang.String

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `apiVersions`<sup>Optional</sup> <a name="apiVersions" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.apiVersions"></a>

- *Type:* java.util.List<java.lang.String>

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.atomic"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the installation process purges the chart on fail.

The 'wait' flag will be set automatically if 'atomic' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `crds`<sup>Optional</sup> <a name="crds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.crds"></a>

- *Type:* java.util.List<java.lang.String>

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.createNamespace"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependencyUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.devel"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableOpenapiValidation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableWebhooks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `includeCrds`<sup>Optional</sup> <a name="includeCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.includeCrds"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `isUpgrade`<sup>Optional</sup> <a name="isUpgrade" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.isUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.keyring"></a>

- *Type:* java.lang.String

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `kubeVersion`<sup>Optional</sup> <a name="kubeVersion" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.kubeVersion"></a>

- *Type:* java.lang.String

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifest"></a>

- *Type:* java.lang.String

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifests"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.passCredentials"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.postrender"></a>

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

Postrender command config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.renderSubchartNotes"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.replace"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Repository where to locate the requested chart.

If it is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCaFile"></a>

- *Type:* java.lang.String

The repository's CA file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCertFile"></a>

- *Type:* java.lang.String

The repository's cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryKeyFile"></a>

- *Type:* java.lang.String

The repository's cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryPassword"></a>

- *Type:* java.lang.String

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryUsername"></a>

- *Type:* java.lang.String

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.resetValues"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.reuseValues"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.set"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>>

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setSensitive"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `setWo`<sup>Optional</sup> <a name="setWo" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setWo"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>>

Write-only custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_wo DataHelmTemplate#set_wo}

---

##### `showOnly`<sup>Optional</sup> <a name="showOnly" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.showOnly"></a>

- *Type:* java.util.List<java.lang.String>

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipCrds"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `skipTests`<sup>Optional</sup> <a name="skipTests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipTests"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Time in seconds to wait for any individual Kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeouts DataHelmTemplate#timeouts}.

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.validate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.values"></a>

- *Type:* java.util.List<java.lang.String>

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.verify"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.wait"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender">putPostrender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList">putSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive">putSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetWo">putSetWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions">resetApiVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic">resetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds">resetCrds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace">resetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate">resetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel">resetDevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation">resetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks">resetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds">resetIncludeCrds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade">resetIsUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion">resetKubeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests">resetManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials">resetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender">resetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes">resetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace">resetReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile">resetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile">resetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile">resetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword">resetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername">resetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues">resetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues">resetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList">resetSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive">resetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetWo">resetSetWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly">resetShowOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds">resetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests">resetSkipTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues">resetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify">resetVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait">resetWait</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPostrender` <a name="putPostrender" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender"></a>

```java
public void putPostrender(DataHelmTemplatePostrender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `putSet` <a name="putSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet"></a>

```java
public void putSet(IResolvable|java.util.List<DataHelmTemplateSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>>

---

##### `putSetList` <a name="putSetList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList"></a>

```java
public void putSetList(IResolvable|java.util.List<DataHelmTemplateSetListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>>

---

##### `putSetSensitive` <a name="putSetSensitive" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive"></a>

```java
public void putSetSensitive(IResolvable|java.util.List<DataHelmTemplateSetSensitive> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>>

---

##### `putSetWo` <a name="putSetWo" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetWo"></a>

```java
public void putSetWo(IResolvable|java.util.List<DataHelmTemplateSetWo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetWo.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putTimeouts"></a>

```java
public void putTimeouts(DataHelmTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a>

---

##### `resetApiVersions` <a name="resetApiVersions" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions"></a>

```java
public void resetApiVersions()
```

##### `resetAtomic` <a name="resetAtomic" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic"></a>

```java
public void resetAtomic()
```

##### `resetCrds` <a name="resetCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds"></a>

```java
public void resetCrds()
```

##### `resetCreateNamespace` <a name="resetCreateNamespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace"></a>

```java
public void resetCreateNamespace()
```

##### `resetDependencyUpdate` <a name="resetDependencyUpdate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate"></a>

```java
public void resetDependencyUpdate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDevel` <a name="resetDevel" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel"></a>

```java
public void resetDevel()
```

##### `resetDisableOpenapiValidation` <a name="resetDisableOpenapiValidation" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation"></a>

```java
public void resetDisableOpenapiValidation()
```

##### `resetDisableWebhooks` <a name="resetDisableWebhooks" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks"></a>

```java
public void resetDisableWebhooks()
```

##### `resetIncludeCrds` <a name="resetIncludeCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds"></a>

```java
public void resetIncludeCrds()
```

##### `resetIsUpgrade` <a name="resetIsUpgrade" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade"></a>

```java
public void resetIsUpgrade()
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring"></a>

```java
public void resetKeyring()
```

##### `resetKubeVersion` <a name="resetKubeVersion" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion"></a>

```java
public void resetKubeVersion()
```

##### `resetManifest` <a name="resetManifest" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest"></a>

```java
public void resetManifest()
```

##### `resetManifests` <a name="resetManifests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests"></a>

```java
public void resetManifests()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetPassCredentials` <a name="resetPassCredentials" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials"></a>

```java
public void resetPassCredentials()
```

##### `resetPostrender` <a name="resetPostrender" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender"></a>

```java
public void resetPostrender()
```

##### `resetRenderSubchartNotes` <a name="resetRenderSubchartNotes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes"></a>

```java
public void resetRenderSubchartNotes()
```

##### `resetReplace` <a name="resetReplace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace"></a>

```java
public void resetReplace()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetRepositoryCaFile` <a name="resetRepositoryCaFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile"></a>

```java
public void resetRepositoryCaFile()
```

##### `resetRepositoryCertFile` <a name="resetRepositoryCertFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile"></a>

```java
public void resetRepositoryCertFile()
```

##### `resetRepositoryKeyFile` <a name="resetRepositoryKeyFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile"></a>

```java
public void resetRepositoryKeyFile()
```

##### `resetRepositoryPassword` <a name="resetRepositoryPassword" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword"></a>

```java
public void resetRepositoryPassword()
```

##### `resetRepositoryUsername` <a name="resetRepositoryUsername" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername"></a>

```java
public void resetRepositoryUsername()
```

##### `resetResetValues` <a name="resetResetValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues"></a>

```java
public void resetResetValues()
```

##### `resetReuseValues` <a name="resetReuseValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues"></a>

```java
public void resetReuseValues()
```

##### `resetSet` <a name="resetSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet"></a>

```java
public void resetSet()
```

##### `resetSetList` <a name="resetSetList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList"></a>

```java
public void resetSetList()
```

##### `resetSetSensitive` <a name="resetSetSensitive" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive"></a>

```java
public void resetSetSensitive()
```

##### `resetSetWo` <a name="resetSetWo" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetWo"></a>

```java
public void resetSetWo()
```

##### `resetShowOnly` <a name="resetShowOnly" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly"></a>

```java
public void resetShowOnly()
```

##### `resetSkipCrds` <a name="resetSkipCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds"></a>

```java
public void resetSkipCrds()
```

##### `resetSkipTests` <a name="resetSkipTests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests"></a>

```java
public void resetSkipTests()
```

##### `resetTfValues` <a name="resetTfValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues"></a>

```java
public void resetTfValues()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate"></a>

```java
public void resetValidate()
```

##### `resetVerify` <a name="resetVerify" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify"></a>

```java
public void resetVerify()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetWait` <a name="resetWait" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait"></a>

```java
public void resetWait()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHelmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplate;

DataHelmTemplate.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplate;

DataHelmTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplate;

DataHelmTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplate;

DataHelmTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHelmTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHelmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHelmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHelmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHelmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender">postrender</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set">set</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList">setList</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive">setSensitive</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setWo">setWo</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList">DataHelmTemplateSetWoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference">DataHelmTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput">apiVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput">atomicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput">chartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput">crdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput">createNamespaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput">dependencyUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput">develInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput">disableOpenapiValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput">disableWebhooksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput">includeCrdsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput">isUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput">keyringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput">kubeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput">manifestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput">manifestsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput">passCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput">postrenderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput">renderSubchartNotesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput">replaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput">repositoryCaFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput">repositoryCertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput">repositoryKeyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput">repositoryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput">repositoryUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput">resetValuesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput">reuseValuesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput">setInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput">setListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput">setSensitiveInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setWoInput">setWoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput">showOnlyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput">skipCrdsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput">skipTestsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput">validateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput">verifyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput">waitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions">apiVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic">atomic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart">chart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds">crds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel">devel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds">includeCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade">isUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring">keyring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion">kubeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests">manifests</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace">replace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues">resetValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly">showOnly</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests">skipTests</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate">validate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify">verify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait">wait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender"></a>

```java
public DataHelmTemplatePostrenderOutputReference getPostrender();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set"></a>

```java
public DataHelmTemplateSetList getSet();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a>

---

##### `setList`<sup>Required</sup> <a name="setList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList"></a>

```java
public DataHelmTemplateSetListStructList getSetList();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a>

---

##### `setSensitive`<sup>Required</sup> <a name="setSensitive" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive"></a>

```java
public DataHelmTemplateSetSensitiveList getSetSensitive();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a>

---

##### `setWo`<sup>Required</sup> <a name="setWo" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setWo"></a>

```java
public DataHelmTemplateSetWoList getSetWo();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList">DataHelmTemplateSetWoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeouts"></a>

```java
public DataHelmTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference">DataHelmTemplateTimeoutsOutputReference</a>

---

##### `apiVersionsInput`<sup>Optional</sup> <a name="apiVersionsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput"></a>

```java
public java.util.List<java.lang.String> getApiVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `atomicInput`<sup>Optional</sup> <a name="atomicInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput"></a>

```java
public java.lang.Boolean|IResolvable getAtomicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chartInput`<sup>Optional</sup> <a name="chartInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput"></a>

```java
public java.lang.String getChartInput();
```

- *Type:* java.lang.String

---

##### `crdsInput`<sup>Optional</sup> <a name="crdsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput"></a>

```java
public java.util.List<java.lang.String> getCrdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="createNamespaceInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateNamespaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="dependencyUpdateInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getDependencyUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `develInput`<sup>Optional</sup> <a name="develInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput"></a>

```java
public java.lang.Boolean|IResolvable getDevelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="disableOpenapiValidationInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableOpenapiValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="disableWebhooksInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableWebhooksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeCrdsInput`<sup>Optional</sup> <a name="includeCrdsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeCrdsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isUpgradeInput`<sup>Optional</sup> <a name="isUpgradeInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getIsUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput"></a>

```java
public java.lang.String getKeyringInput();
```

- *Type:* java.lang.String

---

##### `kubeVersionInput`<sup>Optional</sup> <a name="kubeVersionInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput"></a>

```java
public java.lang.String getKubeVersionInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput"></a>

```java
public java.lang.String getManifestInput();
```

- *Type:* java.lang.String

---

##### `manifestsInput`<sup>Optional</sup> <a name="manifestsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getManifestsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `passCredentialsInput`<sup>Optional</sup> <a name="passCredentialsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getPassCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `postrenderInput`<sup>Optional</sup> <a name="postrenderInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput"></a>

```java
public IResolvable|DataHelmTemplatePostrender getPostrenderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="renderSubchartNotesInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput"></a>

```java
public java.lang.Boolean|IResolvable getRenderSubchartNotesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="repositoryCaFileInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput"></a>

```java
public java.lang.String getRepositoryCaFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="repositoryCertFileInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput"></a>

```java
public java.lang.String getRepositoryCertFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="repositoryKeyFileInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput"></a>

```java
public java.lang.String getRepositoryKeyFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="repositoryPasswordInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput"></a>

```java
public java.lang.String getRepositoryPasswordInput();
```

- *Type:* java.lang.String

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="repositoryUsernameInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput"></a>

```java
public java.lang.String getRepositoryUsernameInput();
```

- *Type:* java.lang.String

---

##### `resetValuesInput`<sup>Optional</sup> <a name="resetValuesInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput"></a>

```java
public java.lang.Boolean|IResolvable getResetValuesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="reuseValuesInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput"></a>

```java
public java.lang.Boolean|IResolvable getReuseValuesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSet> getSetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>>

---

##### `setListInput`<sup>Optional</sup> <a name="setListInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetListStruct> getSetListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>>

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="setSensitiveInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetSensitive> getSetSensitiveInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>>

---

##### `setWoInput`<sup>Optional</sup> <a name="setWoInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setWoInput"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetWo> getSetWoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>>

---

##### `showOnlyInput`<sup>Optional</sup> <a name="showOnlyInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput"></a>

```java
public java.util.List<java.lang.String> getShowOnlyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="skipCrdsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipCrdsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipTestsInput`<sup>Optional</sup> <a name="skipTestsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipTestsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutsInput"></a>

```java
public IResolvable|DataHelmTemplateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a>

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput"></a>

```java
public java.lang.Boolean|IResolvable getVerifyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions"></a>

```java
public java.util.List<java.lang.String> getApiVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic"></a>

```java
public java.lang.Boolean|IResolvable getAtomic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

---

##### `crds`<sup>Required</sup> <a name="crds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds"></a>

```java
public java.util.List<java.lang.String> getCrds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createNamespace`<sup>Required</sup> <a name="createNamespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace"></a>

```java
public java.lang.Boolean|IResolvable getCreateNamespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dependencyUpdate`<sup>Required</sup> <a name="dependencyUpdate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate"></a>

```java
public java.lang.Boolean|IResolvable getDependencyUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel"></a>

```java
public java.lang.Boolean|IResolvable getDevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="disableOpenapiValidation" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableOpenapiValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableWebhooks`<sup>Required</sup> <a name="disableWebhooks" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks"></a>

```java
public java.lang.Boolean|IResolvable getDisableWebhooks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeCrds`<sup>Required</sup> <a name="includeCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds"></a>

```java
public java.lang.Boolean|IResolvable getIncludeCrds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isUpgrade`<sup>Required</sup> <a name="isUpgrade" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getIsUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

---

##### `kubeVersion`<sup>Required</sup> <a name="kubeVersion" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion"></a>

```java
public java.lang.String getKubeVersion();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getManifests();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `passCredentials`<sup>Required</sup> <a name="passCredentials" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials"></a>

```java
public java.lang.Boolean|IResolvable getPassCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="renderSubchartNotes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes"></a>

```java
public java.lang.Boolean|IResolvable getRenderSubchartNotes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace"></a>

```java
public java.lang.Boolean|IResolvable getReplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repositoryCaFile`<sup>Required</sup> <a name="repositoryCaFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile"></a>

```java
public java.lang.String getRepositoryCaFile();
```

- *Type:* java.lang.String

---

##### `repositoryCertFile`<sup>Required</sup> <a name="repositoryCertFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile"></a>

```java
public java.lang.String getRepositoryCertFile();
```

- *Type:* java.lang.String

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="repositoryKeyFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile"></a>

```java
public java.lang.String getRepositoryKeyFile();
```

- *Type:* java.lang.String

---

##### `repositoryPassword`<sup>Required</sup> <a name="repositoryPassword" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword"></a>

```java
public java.lang.String getRepositoryPassword();
```

- *Type:* java.lang.String

---

##### `repositoryUsername`<sup>Required</sup> <a name="repositoryUsername" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername"></a>

```java
public java.lang.String getRepositoryUsername();
```

- *Type:* java.lang.String

---

##### `resetValues`<sup>Required</sup> <a name="resetValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues"></a>

```java
public java.lang.Boolean|IResolvable getResetValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reuseValues`<sup>Required</sup> <a name="reuseValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues"></a>

```java
public java.lang.Boolean|IResolvable getReuseValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `showOnly`<sup>Required</sup> <a name="showOnly" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly"></a>

```java
public java.util.List<java.lang.String> getShowOnly();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipCrds`<sup>Required</sup> <a name="skipCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds"></a>

```java
public java.lang.Boolean|IResolvable getSkipCrds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipTests`<sup>Required</sup> <a name="skipTests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests"></a>

```java
public java.lang.Boolean|IResolvable getSkipTests();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate"></a>

```java
public java.lang.Boolean|IResolvable getValidate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify"></a>

```java
public java.lang.Boolean|IResolvable getVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait"></a>

```java
public java.lang.Boolean|IResolvable getWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHelmTemplateConfig <a name="DataHelmTemplateConfig" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateConfig;

DataHelmTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .chart(java.lang.String)
    .name(java.lang.String)
//  .apiVersions(java.util.List<java.lang.String>)
//  .atomic(java.lang.Boolean|IResolvable)
//  .crds(java.util.List<java.lang.String>)
//  .createNamespace(java.lang.Boolean|IResolvable)
//  .dependencyUpdate(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .devel(java.lang.Boolean|IResolvable)
//  .disableOpenapiValidation(java.lang.Boolean|IResolvable)
//  .disableWebhooks(java.lang.Boolean|IResolvable)
//  .includeCrds(java.lang.Boolean|IResolvable)
//  .isUpgrade(java.lang.Boolean|IResolvable)
//  .keyring(java.lang.String)
//  .kubeVersion(java.lang.String)
//  .manifest(java.lang.String)
//  .manifests(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .notes(java.lang.String)
//  .passCredentials(java.lang.Boolean|IResolvable)
//  .postrender(DataHelmTemplatePostrender)
//  .renderSubchartNotes(java.lang.Boolean|IResolvable)
//  .replace(java.lang.Boolean|IResolvable)
//  .repository(java.lang.String)
//  .repositoryCaFile(java.lang.String)
//  .repositoryCertFile(java.lang.String)
//  .repositoryKeyFile(java.lang.String)
//  .repositoryPassword(java.lang.String)
//  .repositoryUsername(java.lang.String)
//  .resetValues(java.lang.Boolean|IResolvable)
//  .reuseValues(java.lang.Boolean|IResolvable)
//  .set(IResolvable|java.util.List<DataHelmTemplateSet>)
//  .setList(IResolvable|java.util.List<DataHelmTemplateSetListStruct>)
//  .setSensitive(IResolvable|java.util.List<DataHelmTemplateSetSensitive>)
//  .setWo(IResolvable|java.util.List<DataHelmTemplateSetWo>)
//  .showOnly(java.util.List<java.lang.String>)
//  .skipCrds(java.lang.Boolean|IResolvable)
//  .skipTests(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
//  .timeouts(DataHelmTemplateTimeouts)
//  .validate(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
//  .verify(java.lang.Boolean|IResolvable)
//  .version(java.lang.String)
//  .wait(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart">chart</a></code> | <code>java.lang.String</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Release name. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions">apiVersions</a></code> | <code>java.util.List<java.lang.String></code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic">atomic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the installation process purges the chart on fail. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds">crds</a></code> | <code>java.util.List<java.lang.String></code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Add a custom description. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel">devel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds">includeCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade">isUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring">keyring</a></code> | <code>java.lang.String</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion">kubeVersion</a></code> | <code>java.lang.String</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest">manifest</a></code> | <code>java.lang.String</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests">manifests</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to install the release into. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | Postrender command config. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace">replace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Repository where to locate the requested chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | The repository's CA file. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | The repository's cert file. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | The repository's cert key file. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues">resetValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set">set</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>></code> | Custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList">setList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive">setSensitive</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setWo">setWo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>></code> | Write-only custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly">showOnly</a></code> | <code>java.util.List<java.lang.String></code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests">skipTests</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, tests will not be rendered. By default, tests are rendered. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds to wait for any individual Kubernetes operation. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeouts DataHelmTemplate#timeouts}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate">validate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify">verify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version">version</a></code> | <code>java.lang.String</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait">wait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `apiVersions`<sup>Optional</sup> <a name="apiVersions" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions"></a>

```java
public java.util.List<java.lang.String> getApiVersions();
```

- *Type:* java.util.List<java.lang.String>

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic"></a>

```java
public java.lang.Boolean|IResolvable getAtomic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the installation process purges the chart on fail.

The 'wait' flag will be set automatically if 'atomic' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `crds`<sup>Optional</sup> <a name="crds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds"></a>

```java
public java.util.List<java.lang.String> getCrds();
```

- *Type:* java.util.List<java.lang.String>

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace"></a>

```java
public java.lang.Boolean|IResolvable getCreateNamespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```java
public java.lang.Boolean|IResolvable getDependencyUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel"></a>

```java
public java.lang.Boolean|IResolvable getDevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableOpenapiValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks"></a>

```java
public java.lang.Boolean|IResolvable getDisableWebhooks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `includeCrds`<sup>Optional</sup> <a name="includeCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds"></a>

```java
public java.lang.Boolean|IResolvable getIncludeCrds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `isUpgrade`<sup>Optional</sup> <a name="isUpgrade" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getIsUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `kubeVersion`<sup>Optional</sup> <a name="kubeVersion" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion"></a>

```java
public java.lang.String getKubeVersion();
```

- *Type:* java.lang.String

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getManifests();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials"></a>

```java
public java.lang.Boolean|IResolvable getPassCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender"></a>

```java
public DataHelmTemplatePostrender getPostrender();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

Postrender command config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```java
public java.lang.Boolean|IResolvable getRenderSubchartNotes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace"></a>

```java
public java.lang.Boolean|IResolvable getReplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Repository where to locate the requested chart.

If it is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```java
public java.lang.String getRepositoryCaFile();
```

- *Type:* java.lang.String

The repository's CA file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```java
public java.lang.String getRepositoryCertFile();
```

- *Type:* java.lang.String

The repository's cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```java
public java.lang.String getRepositoryKeyFile();
```

- *Type:* java.lang.String

The repository's cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword"></a>

```java
public java.lang.String getRepositoryPassword();
```

- *Type:* java.lang.String

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername"></a>

```java
public java.lang.String getRepositoryUsername();
```

- *Type:* java.lang.String

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues"></a>

```java
public java.lang.Boolean|IResolvable getResetValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues"></a>

```java
public java.lang.Boolean|IResolvable getReuseValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSet> getSet();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>>

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetListStruct> getSetList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetSensitive> getSetSensitive();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `setWo`<sup>Optional</sup> <a name="setWo" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setWo"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetWo> getSetWo();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>>

Write-only custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_wo DataHelmTemplate#set_wo}

---

##### `showOnly`<sup>Optional</sup> <a name="showOnly" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly"></a>

```java
public java.util.List<java.lang.String> getShowOnly();
```

- *Type:* java.util.List<java.lang.String>

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds"></a>

```java
public java.lang.Boolean|IResolvable getSkipCrds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `skipTests`<sup>Optional</sup> <a name="skipTests" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests"></a>

```java
public java.lang.Boolean|IResolvable getSkipTests();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Time in seconds to wait for any individual Kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeouts"></a>

```java
public DataHelmTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeouts DataHelmTemplate#timeouts}.

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate"></a>

```java
public java.lang.Boolean|IResolvable getValidate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify"></a>

```java
public java.lang.Boolean|IResolvable getVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait"></a>

```java
public java.lang.Boolean|IResolvable getWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

### DataHelmTemplatePostrender <a name="DataHelmTemplatePostrender" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplatePostrender;

DataHelmTemplatePostrender.builder()
    .binaryPath(java.lang.String)
//  .args(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath">binaryPath</a></code> | <code>java.lang.String</code> | The common binary path. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | An argument to the post-renderer (can specify multiple). |

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath"></a>

```java
public java.lang.String getBinaryPath();
```

- *Type:* java.lang.String

The common binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

An argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#args DataHelmTemplate#args}

---

### DataHelmTemplateSet <a name="DataHelmTemplateSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSet;

DataHelmTemplateSet.builder()
    .name(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

### DataHelmTemplateSetListStruct <a name="DataHelmTemplateSetListStruct" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetListStruct;

DataHelmTemplateSetListStruct.builder()
    .value(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

### DataHelmTemplateSetSensitive <a name="DataHelmTemplateSetSensitive" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetSensitive;

DataHelmTemplateSetSensitive.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetWo <a name="DataHelmTemplateSetWo" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetWo;

DataHelmTemplateSetWo.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateTimeouts <a name="DataHelmTemplateTimeouts" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateTimeouts;

DataHelmTemplateTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#read DataHelmTemplate#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="DataHelmTemplatePostrenderOutputReference" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplatePostrenderOutputReference;

new DataHelmTemplatePostrenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput">binaryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath">binaryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binaryPathInput`<sup>Optional</sup> <a name="binaryPathInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput"></a>

```java
public java.lang.String getBinaryPathInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath"></a>

```java
public java.lang.String getBinaryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHelmTemplatePostrender getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---


### DataHelmTemplateSetList <a name="DataHelmTemplateSetList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetList;

new DataHelmTemplateSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get"></a>

```java
public DataHelmTemplateSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSet> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>>

---


### DataHelmTemplateSetListStructList <a name="DataHelmTemplateSetListStructList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetListStructList;

new DataHelmTemplateSetListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get"></a>

```java
public DataHelmTemplateSetListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>>

---


### DataHelmTemplateSetListStructOutputReference <a name="DataHelmTemplateSetListStructOutputReference" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetListStructOutputReference;

new DataHelmTemplateSetListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHelmTemplateSetListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>

---


### DataHelmTemplateSetOutputReference <a name="DataHelmTemplateSetOutputReference" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetOutputReference;

new DataHelmTemplateSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHelmTemplateSet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>

---


### DataHelmTemplateSetSensitiveList <a name="DataHelmTemplateSetSensitiveList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetSensitiveList;

new DataHelmTemplateSetSensitiveList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get"></a>

```java
public DataHelmTemplateSetSensitiveOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetSensitive> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>>

---


### DataHelmTemplateSetSensitiveOutputReference <a name="DataHelmTemplateSetSensitiveOutputReference" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetSensitiveOutputReference;

new DataHelmTemplateSetSensitiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHelmTemplateSetSensitive getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>

---


### DataHelmTemplateSetWoList <a name="DataHelmTemplateSetWoList" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetWoList;

new DataHelmTemplateSetWoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.get"></a>

```java
public DataHelmTemplateSetWoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataHelmTemplateSetWo> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>>

---


### DataHelmTemplateSetWoOutputReference <a name="DataHelmTemplateSetWoOutputReference" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateSetWoOutputReference;

new DataHelmTemplateSetWoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWoOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHelmTemplateSetWo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateSetWo">DataHelmTemplateSetWo</a>

---


### DataHelmTemplateTimeoutsOutputReference <a name="DataHelmTemplateTimeoutsOutputReference" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.data_helm_template.DataHelmTemplateTimeoutsOutputReference;

new DataHelmTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHelmTemplateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.dataHelmTemplate.DataHelmTemplateTimeouts">DataHelmTemplateTimeouts</a>

---



