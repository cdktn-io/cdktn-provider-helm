# `release` Submodule <a name="`release` Submodule" id="@cdktn/provider-helm.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktn/provider-helm.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release helm_release}.

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.Release.Initializer"></a>

```java
import io.cdktn.providers.helm.release.Release;

Release.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .chart(java.lang.String)
    .name(java.lang.String)
//  .atomic(java.lang.Boolean|IResolvable)
//  .cleanupOnFail(java.lang.Boolean|IResolvable)
//  .createNamespace(java.lang.Boolean|IResolvable)
//  .dependencyUpdate(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .devel(java.lang.Boolean|IResolvable)
//  .disableCrdHooks(java.lang.Boolean|IResolvable)
//  .disableOpenapiValidation(java.lang.Boolean|IResolvable)
//  .disableWebhooks(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .keyring(java.lang.String)
//  .lint(java.lang.Boolean|IResolvable)
//  .maxHistory(java.lang.Number)
//  .namespace(java.lang.String)
//  .passCredentials(java.lang.Boolean|IResolvable)
//  .postrender(ReleasePostrender)
//  .recreatePods(java.lang.Boolean|IResolvable)
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
//  .set(IResolvable|java.util.List<ReleaseSet>)
//  .setList(IResolvable|java.util.List<ReleaseSetListStruct>)
//  .setSensitive(IResolvable|java.util.List<ReleaseSetSensitive>)
//  .setWo(IResolvable|java.util.List<ReleaseSetWo>)
//  .setWoRevision(java.lang.Number)
//  .skipCrds(java.lang.Boolean|IResolvable)
//  .takeOwnership(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
//  .timeouts(ReleaseTimeouts)
//  .upgradeInstall(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
//  .verify(java.lang.Boolean|IResolvable)
//  .version(java.lang.String)
//  .wait(java.lang.Boolean|IResolvable)
//  .waitForJobs(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.chart">chart</a></code> | <code>java.lang.String</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.atomic">atomic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.cleanupOnFail">cleanupOnFail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Add a custom description. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.devel">devel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.disableCrdHooks">disableCrdHooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.keyring">keyring</a></code> | <code>java.lang.String</code> | Location of public keys used for verification, Used only if 'verify is true'. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.lint">lint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Run helm lint when planning. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to install the release into. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.postrender">postrender</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | Postrender command config. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.recreatePods">recreatePods</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.replace">replace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Repository where to locate the requested chart. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | The Repositories CA file. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | The repositories cert file. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | The repositories cert key file. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.resetValues">resetValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.set">set</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | Custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.setList">setList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.setSensitive">setSensitive</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.setWo">setWo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>></code> | Custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.setWoRevision">setWoRevision</a></code> | <code>java.lang.Number</code> | The current revision of the write-only "set_wo" attribute. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.takeOwnership">takeOwnership</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, Helm will take ownership of resources not already annotated by this release. Useful for migrations or recovery. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#timeouts Release#timeouts}. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.upgradeInstall">upgradeInstall</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the provider will install the release at the specified version even if a release not controlled by the provider is present. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of values in raw YAML format to pass to helm. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.verify">verify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.wait">wait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktn/provider-helm.release.Release.Initializer.parameter.waitForJobs">waitForJobs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-helm.release.Release.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.release.Release.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-helm.release.Release.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-helm.release.Release.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-helm.release.Release.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-helm.release.Release.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-helm.release.Release.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.release.Release.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-helm.release.Release.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.release.Release.Initializer.parameter.chart"></a>

- *Type:* java.lang.String

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.Release.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktn/provider-helm.release.Release.Initializer.parameter.atomic"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="cleanupOnFail" id="@cdktn/provider-helm.release.Release.Initializer.parameter.cleanupOnFail"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktn/provider-helm.release.Release.Initializer.parameter.createNamespace"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktn/provider-helm.release.Release.Initializer.parameter.dependencyUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-helm.release.Release.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktn/provider-helm.release.Release.Initializer.parameter.devel"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="disableCrdHooks" id="@cdktn/provider-helm.release.Release.Initializer.parameter.disableCrdHooks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktn/provider-helm.release.Release.Initializer.parameter.disableOpenapiValidation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktn/provider-helm.release.Release.Initializer.parameter.disableWebhooks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-helm.release.Release.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#force_update Release#force_update}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktn/provider-helm.release.Release.Initializer.parameter.keyring"></a>

- *Type:* java.lang.String

Location of public keys used for verification, Used only if 'verify is true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktn/provider-helm.release.Release.Initializer.parameter.lint"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="@cdktn/provider-helm.release.Release.Initializer.parameter.maxHistory"></a>

- *Type:* java.lang.Number

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-helm.release.Release.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#namespace Release#namespace}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktn/provider-helm.release.Release.Initializer.parameter.passCredentials"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktn/provider-helm.release.Release.Initializer.parameter.postrender"></a>

- *Type:* <a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

Postrender command config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="recreatePods" id="@cdktn/provider-helm.release.Release.Initializer.parameter.recreatePods"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktn/provider-helm.release.Release.Initializer.parameter.renderSubchartNotes"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-helm.release.Release.Initializer.parameter.replace"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-helm.release.Release.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Repository where to locate the requested chart.

If it is a URL, the chart is installed without installing the repository

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryCaFile"></a>

- *Type:* java.lang.String

The Repositories CA file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryCertFile"></a>

- *Type:* java.lang.String

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryKeyFile"></a>

- *Type:* java.lang.String

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryPassword"></a>

- *Type:* java.lang.String

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktn/provider-helm.release.Release.Initializer.parameter.repositoryUsername"></a>

- *Type:* java.lang.String

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktn/provider-helm.release.Release.Initializer.parameter.resetValues"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktn/provider-helm.release.Release.Initializer.parameter.reuseValues"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-helm.release.Release.Initializer.parameter.set"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>>

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set Release#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktn/provider-helm.release.Release.Initializer.parameter.setList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_list Release#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktn/provider-helm.release.Release.Initializer.parameter.setSensitive"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `setWo`<sup>Optional</sup> <a name="setWo" id="@cdktn/provider-helm.release.Release.Initializer.parameter.setWo"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>>

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_wo Release#set_wo}

---

##### `setWoRevision`<sup>Optional</sup> <a name="setWoRevision" id="@cdktn/provider-helm.release.Release.Initializer.parameter.setWoRevision"></a>

- *Type:* java.lang.Number

The current revision of the write-only "set_wo" attribute.

Incrementing this integer value will cause Terraform to update the write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_wo_revision Release#set_wo_revision}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktn/provider-helm.release.Release.Initializer.parameter.skipCrds"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#skip_crds Release#skip_crds}

---

##### `takeOwnership`<sup>Optional</sup> <a name="takeOwnership" id="@cdktn/provider-helm.release.Release.Initializer.parameter.takeOwnership"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, Helm will take ownership of resources not already annotated by this release. Useful for migrations or recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#take_ownership Release#take_ownership}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-helm.release.Release.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#timeout Release#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-helm.release.Release.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#timeouts Release#timeouts}.

---

##### `upgradeInstall`<sup>Optional</sup> <a name="upgradeInstall" id="@cdktn/provider-helm.release.Release.Initializer.parameter.upgradeInstall"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the provider will install the release at the specified version even if a release not controlled by the provider is present.

This is equivalent to running 'helm upgrade --install'. WARNING: this may not be suitable for production use -- see the 'Upgrade Mode' note in the provider documentation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#upgrade_install Release#upgrade_install}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-helm.release.Release.Initializer.parameter.values"></a>

- *Type:* java.util.List<java.lang.String>

List of values in raw YAML format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktn/provider-helm.release.Release.Initializer.parameter.verify"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-helm.release.Release.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktn/provider-helm.release.Release.Initializer.parameter.wait"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="waitForJobs" id="@cdktn/provider-helm.release.Release.Initializer.parameter.waitForJobs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.Release.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-helm.release.Release.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-helm.release.Release.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-helm.release.Release.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-helm.release.Release.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-helm.release.Release.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-helm.release.Release.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-helm.release.Release.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-helm.release.Release.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-helm.release.Release.putPostrender">putPostrender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.putSetList">putSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.putSetSensitive">putSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.putSetWo">putSetWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetAtomic">resetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetCleanupOnFail">resetCleanupOnFail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetCreateNamespace">resetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetDependencyUpdate">resetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetDevel">resetDevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetDisableCrdHooks">resetDisableCrdHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetDisableOpenapiValidation">resetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetDisableWebhooks">resetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetLint">resetLint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetMaxHistory">resetMaxHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetPassCredentials">resetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetPostrender">resetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRecreatePods">resetRecreatePods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRenderSubchartNotes">resetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetReplace">resetReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRepositoryCaFile">resetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRepositoryCertFile">resetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRepositoryKeyFile">resetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRepositoryPassword">resetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetRepositoryUsername">resetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetResetValues">resetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetReuseValues">resetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetSetList">resetSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetSetSensitive">resetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetSetWo">resetSetWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetSetWoRevision">resetSetWoRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetSkipCrds">resetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetTakeOwnership">resetTakeOwnership</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetTfValues">resetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetUpgradeInstall">resetUpgradeInstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetVerify">resetVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.resetWaitForJobs">resetWaitForJobs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.Release.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-helm.release.Release.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-helm.release.Release.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-helm.release.Release.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-helm.release.Release.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-helm.release.Release.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-helm.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-helm.release.Release.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-helm.release.Release.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-helm.release.Release.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-helm.release.Release.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-helm.release.Release.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-helm.release.Release.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.Release.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.Release.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.Release.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.Release.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.Release.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.Release.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.Release.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.Release.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.Release.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-helm.release.Release.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-helm.release.Release.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.release.Release.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.release.Release.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.Release.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-helm.release.Release.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.release.Release.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-helm.release.Release.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-helm.release.Release.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-helm.release.Release.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-helm.release.Release.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.release.Release.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPostrender` <a name="putPostrender" id="@cdktn/provider-helm.release.Release.putPostrender"></a>

```java
public void putPostrender(ReleasePostrender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `putSet` <a name="putSet" id="@cdktn/provider-helm.release.Release.putSet"></a>

```java
public void putSet(IResolvable|java.util.List<ReleaseSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.putSet.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>>

---

##### `putSetList` <a name="putSetList" id="@cdktn/provider-helm.release.Release.putSetList"></a>

```java
public void putSetList(IResolvable|java.util.List<ReleaseSetListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.putSetList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

---

##### `putSetSensitive` <a name="putSetSensitive" id="@cdktn/provider-helm.release.Release.putSetSensitive"></a>

```java
public void putSetSensitive(IResolvable|java.util.List<ReleaseSetSensitive> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.putSetSensitive.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

---

##### `putSetWo` <a name="putSetWo" id="@cdktn/provider-helm.release.Release.putSetWo"></a>

```java
public void putSetWo(IResolvable|java.util.List<ReleaseSetWo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.putSetWo.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-helm.release.Release.putTimeouts"></a>

```java
public void putTimeouts(ReleaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.Release.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a>

---

##### `resetAtomic` <a name="resetAtomic" id="@cdktn/provider-helm.release.Release.resetAtomic"></a>

```java
public void resetAtomic()
```

##### `resetCleanupOnFail` <a name="resetCleanupOnFail" id="@cdktn/provider-helm.release.Release.resetCleanupOnFail"></a>

```java
public void resetCleanupOnFail()
```

##### `resetCreateNamespace` <a name="resetCreateNamespace" id="@cdktn/provider-helm.release.Release.resetCreateNamespace"></a>

```java
public void resetCreateNamespace()
```

##### `resetDependencyUpdate` <a name="resetDependencyUpdate" id="@cdktn/provider-helm.release.Release.resetDependencyUpdate"></a>

```java
public void resetDependencyUpdate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-helm.release.Release.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDevel` <a name="resetDevel" id="@cdktn/provider-helm.release.Release.resetDevel"></a>

```java
public void resetDevel()
```

##### `resetDisableCrdHooks` <a name="resetDisableCrdHooks" id="@cdktn/provider-helm.release.Release.resetDisableCrdHooks"></a>

```java
public void resetDisableCrdHooks()
```

##### `resetDisableOpenapiValidation` <a name="resetDisableOpenapiValidation" id="@cdktn/provider-helm.release.Release.resetDisableOpenapiValidation"></a>

```java
public void resetDisableOpenapiValidation()
```

##### `resetDisableWebhooks` <a name="resetDisableWebhooks" id="@cdktn/provider-helm.release.Release.resetDisableWebhooks"></a>

```java
public void resetDisableWebhooks()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktn/provider-helm.release.Release.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktn/provider-helm.release.Release.resetKeyring"></a>

```java
public void resetKeyring()
```

##### `resetLint` <a name="resetLint" id="@cdktn/provider-helm.release.Release.resetLint"></a>

```java
public void resetLint()
```

##### `resetMaxHistory` <a name="resetMaxHistory" id="@cdktn/provider-helm.release.Release.resetMaxHistory"></a>

```java
public void resetMaxHistory()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-helm.release.Release.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPassCredentials` <a name="resetPassCredentials" id="@cdktn/provider-helm.release.Release.resetPassCredentials"></a>

```java
public void resetPassCredentials()
```

##### `resetPostrender` <a name="resetPostrender" id="@cdktn/provider-helm.release.Release.resetPostrender"></a>

```java
public void resetPostrender()
```

##### `resetRecreatePods` <a name="resetRecreatePods" id="@cdktn/provider-helm.release.Release.resetRecreatePods"></a>

```java
public void resetRecreatePods()
```

##### `resetRenderSubchartNotes` <a name="resetRenderSubchartNotes" id="@cdktn/provider-helm.release.Release.resetRenderSubchartNotes"></a>

```java
public void resetRenderSubchartNotes()
```

##### `resetReplace` <a name="resetReplace" id="@cdktn/provider-helm.release.Release.resetReplace"></a>

```java
public void resetReplace()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-helm.release.Release.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetRepositoryCaFile` <a name="resetRepositoryCaFile" id="@cdktn/provider-helm.release.Release.resetRepositoryCaFile"></a>

```java
public void resetRepositoryCaFile()
```

##### `resetRepositoryCertFile` <a name="resetRepositoryCertFile" id="@cdktn/provider-helm.release.Release.resetRepositoryCertFile"></a>

```java
public void resetRepositoryCertFile()
```

##### `resetRepositoryKeyFile` <a name="resetRepositoryKeyFile" id="@cdktn/provider-helm.release.Release.resetRepositoryKeyFile"></a>

```java
public void resetRepositoryKeyFile()
```

##### `resetRepositoryPassword` <a name="resetRepositoryPassword" id="@cdktn/provider-helm.release.Release.resetRepositoryPassword"></a>

```java
public void resetRepositoryPassword()
```

##### `resetRepositoryUsername` <a name="resetRepositoryUsername" id="@cdktn/provider-helm.release.Release.resetRepositoryUsername"></a>

```java
public void resetRepositoryUsername()
```

##### `resetResetValues` <a name="resetResetValues" id="@cdktn/provider-helm.release.Release.resetResetValues"></a>

```java
public void resetResetValues()
```

##### `resetReuseValues` <a name="resetReuseValues" id="@cdktn/provider-helm.release.Release.resetReuseValues"></a>

```java
public void resetReuseValues()
```

##### `resetSet` <a name="resetSet" id="@cdktn/provider-helm.release.Release.resetSet"></a>

```java
public void resetSet()
```

##### `resetSetList` <a name="resetSetList" id="@cdktn/provider-helm.release.Release.resetSetList"></a>

```java
public void resetSetList()
```

##### `resetSetSensitive` <a name="resetSetSensitive" id="@cdktn/provider-helm.release.Release.resetSetSensitive"></a>

```java
public void resetSetSensitive()
```

##### `resetSetWo` <a name="resetSetWo" id="@cdktn/provider-helm.release.Release.resetSetWo"></a>

```java
public void resetSetWo()
```

##### `resetSetWoRevision` <a name="resetSetWoRevision" id="@cdktn/provider-helm.release.Release.resetSetWoRevision"></a>

```java
public void resetSetWoRevision()
```

##### `resetSkipCrds` <a name="resetSkipCrds" id="@cdktn/provider-helm.release.Release.resetSkipCrds"></a>

```java
public void resetSkipCrds()
```

##### `resetTakeOwnership` <a name="resetTakeOwnership" id="@cdktn/provider-helm.release.Release.resetTakeOwnership"></a>

```java
public void resetTakeOwnership()
```

##### `resetTfValues` <a name="resetTfValues" id="@cdktn/provider-helm.release.Release.resetTfValues"></a>

```java
public void resetTfValues()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-helm.release.Release.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-helm.release.Release.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradeInstall` <a name="resetUpgradeInstall" id="@cdktn/provider-helm.release.Release.resetUpgradeInstall"></a>

```java
public void resetUpgradeInstall()
```

##### `resetVerify` <a name="resetVerify" id="@cdktn/provider-helm.release.Release.resetVerify"></a>

```java
public void resetVerify()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-helm.release.Release.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetWait` <a name="resetWait" id="@cdktn/provider-helm.release.Release.resetWait"></a>

```java
public void resetWait()
```

##### `resetWaitForJobs` <a name="resetWaitForJobs" id="@cdktn/provider-helm.release.Release.resetWaitForJobs"></a>

```java
public void resetWaitForJobs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.Release.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-helm.release.Release.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Release resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-helm.release.Release.isConstruct"></a>

```java
import io.cdktn.providers.helm.release.Release;

Release.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-helm.release.Release.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-helm.release.Release.isTerraformElement"></a>

```java
import io.cdktn.providers.helm.release.Release;

Release.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-helm.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-helm.release.Release.isTerraformResource"></a>

```java
import io.cdktn.providers.helm.release.Release;

Release.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-helm.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-helm.release.Release.generateConfigForImport"></a>

```java
import io.cdktn.providers.helm.release.Release;

Release.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Release.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Release resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-helm.release.Release.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-helm.release.Release.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Release to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-helm.release.Release.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Release that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.release.Release.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Release to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.Release.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-helm.release.Release.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference">ReleaseMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.postrender">postrender</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.resources">resources</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.set">set</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseSetList">ReleaseSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setList">setList</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setSensitive">setSensitive</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setWo">setWo</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList">ReleaseSetWoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference">ReleaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.atomicInput">atomicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.chartInput">chartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.cleanupOnFailInput">cleanupOnFailInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.createNamespaceInput">createNamespaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.dependencyUpdateInput">dependencyUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.develInput">develInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.disableCrdHooksInput">disableCrdHooksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.disableOpenapiValidationInput">disableOpenapiValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.disableWebhooksInput">disableWebhooksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.keyringInput">keyringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.lintInput">lintInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.maxHistoryInput">maxHistoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.passCredentialsInput">passCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.postrenderInput">postrenderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.recreatePodsInput">recreatePodsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.renderSubchartNotesInput">renderSubchartNotesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.replaceInput">replaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryCaFileInput">repositoryCaFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryCertFileInput">repositoryCertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryKeyFileInput">repositoryKeyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryPasswordInput">repositoryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryUsernameInput">repositoryUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.resetValuesInput">resetValuesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.reuseValuesInput">reuseValuesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setInput">setInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setListInput">setListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setSensitiveInput">setSensitiveInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setWoInput">setWoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setWoRevisionInput">setWoRevisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.skipCrdsInput">skipCrdsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.takeOwnershipInput">takeOwnershipInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.upgradeInstallInput">upgradeInstallInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.verifyInput">verifyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.waitForJobsInput">waitForJobsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.waitInput">waitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.atomic">atomic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.chart">chart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.cleanupOnFail">cleanupOnFail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.devel">devel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.disableCrdHooks">disableCrdHooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.keyring">keyring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.lint">lint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.recreatePods">recreatePods</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.replace">replace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.resetValues">resetValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.setWoRevision">setWoRevision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.takeOwnership">takeOwnership</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.upgradeInstall">upgradeInstall</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.verify">verify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.wait">wait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.Release.property.waitForJobs">waitForJobs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-helm.release.Release.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-helm.release.Release.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.Release.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-helm.release.Release.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-helm.release.Release.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-helm.release.Release.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-helm.release.Release.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-helm.release.Release.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-helm.release.Release.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-helm.release.Release.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-helm.release.Release.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-helm.release.Release.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.release.Release.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-helm.release.Release.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-helm.release.Release.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-helm.release.Release.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-helm.release.Release.property.metadata"></a>

```java
public ReleaseMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference">ReleaseMetadataOutputReference</a>

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktn/provider-helm.release.Release.property.postrender"></a>

```java
public ReleasePostrenderOutputReference getPostrender();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-helm.release.Release.property.resources"></a>

```java
public StringMap getResources();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktn/provider-helm.release.Release.property.set"></a>

```java
public ReleaseSetList getSet();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseSetList">ReleaseSetList</a>

---

##### `setList`<sup>Required</sup> <a name="setList" id="@cdktn/provider-helm.release.Release.property.setList"></a>

```java
public ReleaseSetListStructList getSetList();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a>

---

##### `setSensitive`<sup>Required</sup> <a name="setSensitive" id="@cdktn/provider-helm.release.Release.property.setSensitive"></a>

```java
public ReleaseSetSensitiveList getSetSensitive();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a>

---

##### `setWo`<sup>Required</sup> <a name="setWo" id="@cdktn/provider-helm.release.Release.property.setWo"></a>

```java
public ReleaseSetWoList getSetWo();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseSetWoList">ReleaseSetWoList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-helm.release.Release.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-helm.release.Release.property.timeouts"></a>

```java
public ReleaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference">ReleaseTimeoutsOutputReference</a>

---

##### `atomicInput`<sup>Optional</sup> <a name="atomicInput" id="@cdktn/provider-helm.release.Release.property.atomicInput"></a>

```java
public java.lang.Boolean|IResolvable getAtomicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chartInput`<sup>Optional</sup> <a name="chartInput" id="@cdktn/provider-helm.release.Release.property.chartInput"></a>

```java
public java.lang.String getChartInput();
```

- *Type:* java.lang.String

---

##### `cleanupOnFailInput`<sup>Optional</sup> <a name="cleanupOnFailInput" id="@cdktn/provider-helm.release.Release.property.cleanupOnFailInput"></a>

```java
public java.lang.Boolean|IResolvable getCleanupOnFailInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="createNamespaceInput" id="@cdktn/provider-helm.release.Release.property.createNamespaceInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateNamespaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="dependencyUpdateInput" id="@cdktn/provider-helm.release.Release.property.dependencyUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getDependencyUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-helm.release.Release.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `develInput`<sup>Optional</sup> <a name="develInput" id="@cdktn/provider-helm.release.Release.property.develInput"></a>

```java
public java.lang.Boolean|IResolvable getDevelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableCrdHooksInput`<sup>Optional</sup> <a name="disableCrdHooksInput" id="@cdktn/provider-helm.release.Release.property.disableCrdHooksInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableCrdHooksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="disableOpenapiValidationInput" id="@cdktn/provider-helm.release.Release.property.disableOpenapiValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableOpenapiValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="disableWebhooksInput" id="@cdktn/provider-helm.release.Release.property.disableWebhooksInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableWebhooksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktn/provider-helm.release.Release.property.forceUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktn/provider-helm.release.Release.property.keyringInput"></a>

```java
public java.lang.String getKeyringInput();
```

- *Type:* java.lang.String

---

##### `lintInput`<sup>Optional</sup> <a name="lintInput" id="@cdktn/provider-helm.release.Release.property.lintInput"></a>

```java
public java.lang.Boolean|IResolvable getLintInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxHistoryInput`<sup>Optional</sup> <a name="maxHistoryInput" id="@cdktn/provider-helm.release.Release.property.maxHistoryInput"></a>

```java
public java.lang.Number getMaxHistoryInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.release.Release.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-helm.release.Release.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passCredentialsInput`<sup>Optional</sup> <a name="passCredentialsInput" id="@cdktn/provider-helm.release.Release.property.passCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getPassCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `postrenderInput`<sup>Optional</sup> <a name="postrenderInput" id="@cdktn/provider-helm.release.Release.property.postrenderInput"></a>

```java
public IResolvable|ReleasePostrender getPostrenderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `recreatePodsInput`<sup>Optional</sup> <a name="recreatePodsInput" id="@cdktn/provider-helm.release.Release.property.recreatePodsInput"></a>

```java
public java.lang.Boolean|IResolvable getRecreatePodsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="renderSubchartNotesInput" id="@cdktn/provider-helm.release.Release.property.renderSubchartNotesInput"></a>

```java
public java.lang.Boolean|IResolvable getRenderSubchartNotesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktn/provider-helm.release.Release.property.replaceInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="repositoryCaFileInput" id="@cdktn/provider-helm.release.Release.property.repositoryCaFileInput"></a>

```java
public java.lang.String getRepositoryCaFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="repositoryCertFileInput" id="@cdktn/provider-helm.release.Release.property.repositoryCertFileInput"></a>

```java
public java.lang.String getRepositoryCertFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-helm.release.Release.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="repositoryKeyFileInput" id="@cdktn/provider-helm.release.Release.property.repositoryKeyFileInput"></a>

```java
public java.lang.String getRepositoryKeyFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="repositoryPasswordInput" id="@cdktn/provider-helm.release.Release.property.repositoryPasswordInput"></a>

```java
public java.lang.String getRepositoryPasswordInput();
```

- *Type:* java.lang.String

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="repositoryUsernameInput" id="@cdktn/provider-helm.release.Release.property.repositoryUsernameInput"></a>

```java
public java.lang.String getRepositoryUsernameInput();
```

- *Type:* java.lang.String

---

##### `resetValuesInput`<sup>Optional</sup> <a name="resetValuesInput" id="@cdktn/provider-helm.release.Release.property.resetValuesInput"></a>

```java
public java.lang.Boolean|IResolvable getResetValuesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="reuseValuesInput" id="@cdktn/provider-helm.release.Release.property.reuseValuesInput"></a>

```java
public java.lang.Boolean|IResolvable getReuseValuesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktn/provider-helm.release.Release.property.setInput"></a>

```java
public IResolvable|java.util.List<ReleaseSet> getSetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>>

---

##### `setListInput`<sup>Optional</sup> <a name="setListInput" id="@cdktn/provider-helm.release.Release.property.setListInput"></a>

```java
public IResolvable|java.util.List<ReleaseSetListStruct> getSetListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="setSensitiveInput" id="@cdktn/provider-helm.release.Release.property.setSensitiveInput"></a>

```java
public IResolvable|java.util.List<ReleaseSetSensitive> getSetSensitiveInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

---

##### `setWoInput`<sup>Optional</sup> <a name="setWoInput" id="@cdktn/provider-helm.release.Release.property.setWoInput"></a>

```java
public IResolvable|java.util.List<ReleaseSetWo> getSetWoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>>

---

##### `setWoRevisionInput`<sup>Optional</sup> <a name="setWoRevisionInput" id="@cdktn/provider-helm.release.Release.property.setWoRevisionInput"></a>

```java
public java.lang.Number getSetWoRevisionInput();
```

- *Type:* java.lang.Number

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="skipCrdsInput" id="@cdktn/provider-helm.release.Release.property.skipCrdsInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipCrdsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `takeOwnershipInput`<sup>Optional</sup> <a name="takeOwnershipInput" id="@cdktn/provider-helm.release.Release.property.takeOwnershipInput"></a>

```java
public java.lang.Boolean|IResolvable getTakeOwnershipInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-helm.release.Release.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-helm.release.Release.property.timeoutsInput"></a>

```java
public IResolvable|ReleaseTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a>

---

##### `upgradeInstallInput`<sup>Optional</sup> <a name="upgradeInstallInput" id="@cdktn/provider-helm.release.Release.property.upgradeInstallInput"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeInstallInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-helm.release.Release.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktn/provider-helm.release.Release.property.verifyInput"></a>

```java
public java.lang.Boolean|IResolvable getVerifyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-helm.release.Release.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `waitForJobsInput`<sup>Optional</sup> <a name="waitForJobsInput" id="@cdktn/provider-helm.release.Release.property.waitForJobsInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForJobsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktn/provider-helm.release.Release.property.waitInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktn/provider-helm.release.Release.property.atomic"></a>

```java
public java.lang.Boolean|IResolvable getAtomic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.release.Release.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

---

##### `cleanupOnFail`<sup>Required</sup> <a name="cleanupOnFail" id="@cdktn/provider-helm.release.Release.property.cleanupOnFail"></a>

```java
public java.lang.Boolean|IResolvable getCleanupOnFail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createNamespace`<sup>Required</sup> <a name="createNamespace" id="@cdktn/provider-helm.release.Release.property.createNamespace"></a>

```java
public java.lang.Boolean|IResolvable getCreateNamespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dependencyUpdate`<sup>Required</sup> <a name="dependencyUpdate" id="@cdktn/provider-helm.release.Release.property.dependencyUpdate"></a>

```java
public java.lang.Boolean|IResolvable getDependencyUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-helm.release.Release.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktn/provider-helm.release.Release.property.devel"></a>

```java
public java.lang.Boolean|IResolvable getDevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableCrdHooks`<sup>Required</sup> <a name="disableCrdHooks" id="@cdktn/provider-helm.release.Release.property.disableCrdHooks"></a>

```java
public java.lang.Boolean|IResolvable getDisableCrdHooks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="disableOpenapiValidation" id="@cdktn/provider-helm.release.Release.property.disableOpenapiValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableOpenapiValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableWebhooks`<sup>Required</sup> <a name="disableWebhooks" id="@cdktn/provider-helm.release.Release.property.disableWebhooks"></a>

```java
public java.lang.Boolean|IResolvable getDisableWebhooks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktn/provider-helm.release.Release.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktn/provider-helm.release.Release.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

---

##### `lint`<sup>Required</sup> <a name="lint" id="@cdktn/provider-helm.release.Release.property.lint"></a>

```java
public java.lang.Boolean|IResolvable getLint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxHistory`<sup>Required</sup> <a name="maxHistory" id="@cdktn/provider-helm.release.Release.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.Release.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-helm.release.Release.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `passCredentials`<sup>Required</sup> <a name="passCredentials" id="@cdktn/provider-helm.release.Release.property.passCredentials"></a>

```java
public java.lang.Boolean|IResolvable getPassCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recreatePods`<sup>Required</sup> <a name="recreatePods" id="@cdktn/provider-helm.release.Release.property.recreatePods"></a>

```java
public java.lang.Boolean|IResolvable getRecreatePods();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="renderSubchartNotes" id="@cdktn/provider-helm.release.Release.property.renderSubchartNotes"></a>

```java
public java.lang.Boolean|IResolvable getRenderSubchartNotes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-helm.release.Release.property.replace"></a>

```java
public java.lang.Boolean|IResolvable getReplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-helm.release.Release.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repositoryCaFile`<sup>Required</sup> <a name="repositoryCaFile" id="@cdktn/provider-helm.release.Release.property.repositoryCaFile"></a>

```java
public java.lang.String getRepositoryCaFile();
```

- *Type:* java.lang.String

---

##### `repositoryCertFile`<sup>Required</sup> <a name="repositoryCertFile" id="@cdktn/provider-helm.release.Release.property.repositoryCertFile"></a>

```java
public java.lang.String getRepositoryCertFile();
```

- *Type:* java.lang.String

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="repositoryKeyFile" id="@cdktn/provider-helm.release.Release.property.repositoryKeyFile"></a>

```java
public java.lang.String getRepositoryKeyFile();
```

- *Type:* java.lang.String

---

##### `repositoryPassword`<sup>Required</sup> <a name="repositoryPassword" id="@cdktn/provider-helm.release.Release.property.repositoryPassword"></a>

```java
public java.lang.String getRepositoryPassword();
```

- *Type:* java.lang.String

---

##### `repositoryUsername`<sup>Required</sup> <a name="repositoryUsername" id="@cdktn/provider-helm.release.Release.property.repositoryUsername"></a>

```java
public java.lang.String getRepositoryUsername();
```

- *Type:* java.lang.String

---

##### `resetValues`<sup>Required</sup> <a name="resetValues" id="@cdktn/provider-helm.release.Release.property.resetValues"></a>

```java
public java.lang.Boolean|IResolvable getResetValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reuseValues`<sup>Required</sup> <a name="reuseValues" id="@cdktn/provider-helm.release.Release.property.reuseValues"></a>

```java
public java.lang.Boolean|IResolvable getReuseValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `setWoRevision`<sup>Required</sup> <a name="setWoRevision" id="@cdktn/provider-helm.release.Release.property.setWoRevision"></a>

```java
public java.lang.Number getSetWoRevision();
```

- *Type:* java.lang.Number

---

##### `skipCrds`<sup>Required</sup> <a name="skipCrds" id="@cdktn/provider-helm.release.Release.property.skipCrds"></a>

```java
public java.lang.Boolean|IResolvable getSkipCrds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `takeOwnership`<sup>Required</sup> <a name="takeOwnership" id="@cdktn/provider-helm.release.Release.property.takeOwnership"></a>

```java
public java.lang.Boolean|IResolvable getTakeOwnership();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-helm.release.Release.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `upgradeInstall`<sup>Required</sup> <a name="upgradeInstall" id="@cdktn/provider-helm.release.Release.property.upgradeInstall"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeInstall();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-helm.release.Release.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktn/provider-helm.release.Release.property.verify"></a>

```java
public java.lang.Boolean|IResolvable getVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-helm.release.Release.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktn/provider-helm.release.Release.property.wait"></a>

```java
public java.lang.Boolean|IResolvable getWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `waitForJobs`<sup>Required</sup> <a name="waitForJobs" id="@cdktn/provider-helm.release.Release.property.waitForJobs"></a>

```java
public java.lang.Boolean|IResolvable getWaitForJobs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-helm.release.Release.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktn/provider-helm.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseConfig.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseConfig;

ReleaseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .chart(java.lang.String)
    .name(java.lang.String)
//  .atomic(java.lang.Boolean|IResolvable)
//  .cleanupOnFail(java.lang.Boolean|IResolvable)
//  .createNamespace(java.lang.Boolean|IResolvable)
//  .dependencyUpdate(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .devel(java.lang.Boolean|IResolvable)
//  .disableCrdHooks(java.lang.Boolean|IResolvable)
//  .disableOpenapiValidation(java.lang.Boolean|IResolvable)
//  .disableWebhooks(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .keyring(java.lang.String)
//  .lint(java.lang.Boolean|IResolvable)
//  .maxHistory(java.lang.Number)
//  .namespace(java.lang.String)
//  .passCredentials(java.lang.Boolean|IResolvable)
//  .postrender(ReleasePostrender)
//  .recreatePods(java.lang.Boolean|IResolvable)
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
//  .set(IResolvable|java.util.List<ReleaseSet>)
//  .setList(IResolvable|java.util.List<ReleaseSetListStruct>)
//  .setSensitive(IResolvable|java.util.List<ReleaseSetSensitive>)
//  .setWo(IResolvable|java.util.List<ReleaseSetWo>)
//  .setWoRevision(java.lang.Number)
//  .skipCrds(java.lang.Boolean|IResolvable)
//  .takeOwnership(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
//  .timeouts(ReleaseTimeouts)
//  .upgradeInstall(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
//  .verify(java.lang.Boolean|IResolvable)
//  .version(java.lang.String)
//  .wait(java.lang.Boolean|IResolvable)
//  .waitForJobs(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.chart">chart</a></code> | <code>java.lang.String</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.atomic">atomic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.cleanupOnFail">cleanupOnFail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.description">description</a></code> | <code>java.lang.String</code> | Add a custom description. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.devel">devel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.disableCrdHooks">disableCrdHooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.keyring">keyring</a></code> | <code>java.lang.String</code> | Location of public keys used for verification, Used only if 'verify is true'. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.lint">lint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Run helm lint when planning. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to install the release into. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | Postrender command config. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.recreatePods">recreatePods</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.replace">replace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Repository where to locate the requested chart. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | The Repositories CA file. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | The repositories cert file. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | The repositories cert key file. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.resetValues">resetValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.set">set</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | Custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.setList">setList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.setSensitive">setSensitive</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.setWo">setWo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>></code> | Custom values to be merged with the values. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.setWoRevision">setWoRevision</a></code> | <code>java.lang.Number</code> | The current revision of the write-only "set_wo" attribute. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.takeOwnership">takeOwnership</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, Helm will take ownership of resources not already annotated by this release. Useful for migrations or recovery. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#timeouts Release#timeouts}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.upgradeInstall">upgradeInstall</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the provider will install the release at the specified version even if a release not controlled by the provider is present. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of values in raw YAML format to pass to helm. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.verify">verify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.version">version</a></code> | <code>java.lang.String</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.wait">wait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseConfig.property.waitForJobs">waitForJobs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-helm.release.ReleaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-helm.release.ReleaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-helm.release.ReleaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-helm.release.ReleaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-helm.release.ReleaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-helm.release.ReleaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-helm.release.ReleaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.release.ReleaseConfig.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktn/provider-helm.release.ReleaseConfig.property.atomic"></a>

```java
public java.lang.Boolean|IResolvable getAtomic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="cleanupOnFail" id="@cdktn/provider-helm.release.ReleaseConfig.property.cleanupOnFail"></a>

```java
public java.lang.Boolean|IResolvable getCleanupOnFail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktn/provider-helm.release.ReleaseConfig.property.createNamespace"></a>

```java
public java.lang.Boolean|IResolvable getCreateNamespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktn/provider-helm.release.ReleaseConfig.property.dependencyUpdate"></a>

```java
public java.lang.Boolean|IResolvable getDependencyUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-helm.release.ReleaseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktn/provider-helm.release.ReleaseConfig.property.devel"></a>

```java
public java.lang.Boolean|IResolvable getDevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="disableCrdHooks" id="@cdktn/provider-helm.release.ReleaseConfig.property.disableCrdHooks"></a>

```java
public java.lang.Boolean|IResolvable getDisableCrdHooks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktn/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableOpenapiValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktn/provider-helm.release.ReleaseConfig.property.disableWebhooks"></a>

```java
public java.lang.Boolean|IResolvable getDisableWebhooks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-helm.release.ReleaseConfig.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#force_update Release#force_update}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktn/provider-helm.release.ReleaseConfig.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

Location of public keys used for verification, Used only if 'verify is true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktn/provider-helm.release.ReleaseConfig.property.lint"></a>

```java
public java.lang.Boolean|IResolvable getLint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="@cdktn/provider-helm.release.ReleaseConfig.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-helm.release.ReleaseConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#namespace Release#namespace}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktn/provider-helm.release.ReleaseConfig.property.passCredentials"></a>

```java
public java.lang.Boolean|IResolvable getPassCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktn/provider-helm.release.ReleaseConfig.property.postrender"></a>

```java
public ReleasePostrender getPostrender();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

Postrender command config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="recreatePods" id="@cdktn/provider-helm.release.ReleaseConfig.property.recreatePods"></a>

```java
public java.lang.Boolean|IResolvable getRecreatePods();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktn/provider-helm.release.ReleaseConfig.property.renderSubchartNotes"></a>

```java
public java.lang.Boolean|IResolvable getRenderSubchartNotes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-helm.release.ReleaseConfig.property.replace"></a>

```java
public java.lang.Boolean|IResolvable getReplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-helm.release.ReleaseConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Repository where to locate the requested chart.

If it is a URL, the chart is installed without installing the repository

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktn/provider-helm.release.ReleaseConfig.property.repositoryCaFile"></a>

```java
public java.lang.String getRepositoryCaFile();
```

- *Type:* java.lang.String

The Repositories CA file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktn/provider-helm.release.ReleaseConfig.property.repositoryCertFile"></a>

```java
public java.lang.String getRepositoryCertFile();
```

- *Type:* java.lang.String

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktn/provider-helm.release.ReleaseConfig.property.repositoryKeyFile"></a>

```java
public java.lang.String getRepositoryKeyFile();
```

- *Type:* java.lang.String

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktn/provider-helm.release.ReleaseConfig.property.repositoryPassword"></a>

```java
public java.lang.String getRepositoryPassword();
```

- *Type:* java.lang.String

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktn/provider-helm.release.ReleaseConfig.property.repositoryUsername"></a>

```java
public java.lang.String getRepositoryUsername();
```

- *Type:* java.lang.String

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktn/provider-helm.release.ReleaseConfig.property.resetValues"></a>

```java
public java.lang.Boolean|IResolvable getResetValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktn/provider-helm.release.ReleaseConfig.property.reuseValues"></a>

```java
public java.lang.Boolean|IResolvable getReuseValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-helm.release.ReleaseConfig.property.set"></a>

```java
public IResolvable|java.util.List<ReleaseSet> getSet();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>>

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set Release#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktn/provider-helm.release.ReleaseConfig.property.setList"></a>

```java
public IResolvable|java.util.List<ReleaseSetListStruct> getSetList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_list Release#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktn/provider-helm.release.ReleaseConfig.property.setSensitive"></a>

```java
public IResolvable|java.util.List<ReleaseSetSensitive> getSetSensitive();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `setWo`<sup>Optional</sup> <a name="setWo" id="@cdktn/provider-helm.release.ReleaseConfig.property.setWo"></a>

```java
public IResolvable|java.util.List<ReleaseSetWo> getSetWo();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>>

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_wo Release#set_wo}

---

##### `setWoRevision`<sup>Optional</sup> <a name="setWoRevision" id="@cdktn/provider-helm.release.ReleaseConfig.property.setWoRevision"></a>

```java
public java.lang.Number getSetWoRevision();
```

- *Type:* java.lang.Number

The current revision of the write-only "set_wo" attribute.

Incrementing this integer value will cause Terraform to update the write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#set_wo_revision Release#set_wo_revision}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktn/provider-helm.release.ReleaseConfig.property.skipCrds"></a>

```java
public java.lang.Boolean|IResolvable getSkipCrds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#skip_crds Release#skip_crds}

---

##### `takeOwnership`<sup>Optional</sup> <a name="takeOwnership" id="@cdktn/provider-helm.release.ReleaseConfig.property.takeOwnership"></a>

```java
public java.lang.Boolean|IResolvable getTakeOwnership();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, Helm will take ownership of resources not already annotated by this release. Useful for migrations or recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#take_ownership Release#take_ownership}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-helm.release.ReleaseConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#timeout Release#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-helm.release.ReleaseConfig.property.timeouts"></a>

```java
public ReleaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#timeouts Release#timeouts}.

---

##### `upgradeInstall`<sup>Optional</sup> <a name="upgradeInstall" id="@cdktn/provider-helm.release.ReleaseConfig.property.upgradeInstall"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeInstall();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the provider will install the release at the specified version even if a release not controlled by the provider is present.

This is equivalent to running 'helm upgrade --install'. WARNING: this may not be suitable for production use -- see the 'Upgrade Mode' note in the provider documentation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#upgrade_install Release#upgrade_install}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-helm.release.ReleaseConfig.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of values in raw YAML format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktn/provider-helm.release.ReleaseConfig.property.verify"></a>

```java
public java.lang.Boolean|IResolvable getVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-helm.release.ReleaseConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktn/provider-helm.release.ReleaseConfig.property.wait"></a>

```java
public java.lang.Boolean|IResolvable getWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="waitForJobs" id="@cdktn/provider-helm.release.ReleaseConfig.property.waitForJobs"></a>

```java
public java.lang.Boolean|IResolvable getWaitForJobs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

### ReleaseMetadata <a name="ReleaseMetadata" id="@cdktn/provider-helm.release.ReleaseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseMetadata.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseMetadata;

ReleaseMetadata.builder()
    .build();
```


### ReleasePostrender <a name="ReleasePostrender" id="@cdktn/provider-helm.release.ReleasePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleasePostrender.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleasePostrender;

ReleasePostrender.builder()
    .binaryPath(java.lang.String)
//  .args(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrender.property.binaryPath">binaryPath</a></code> | <code>java.lang.String</code> | The common binary path. |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrender.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | An argument to the post-renderer (can specify multiple). |

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktn/provider-helm.release.ReleasePostrender.property.binaryPath"></a>

```java
public java.lang.String getBinaryPath();
```

- *Type:* java.lang.String

The common binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#binary_path Release#binary_path}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-helm.release.ReleasePostrender.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

An argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#args Release#args}

---

### ReleaseSet <a name="ReleaseSet" id="@cdktn/provider-helm.release.ReleaseSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseSet.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSet;

ReleaseSet.builder()
    .name(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSet.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSet.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#type Release#type}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSet.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-helm.release.ReleaseSet.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#type Release#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSet.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}.

---

### ReleaseSetListStruct <a name="ReleaseSetListStruct" id="@cdktn/provider-helm.release.ReleaseSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseSetListStruct.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetListStruct;

ReleaseSetListStruct.builder()
    .name(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStruct.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStruct.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetListStruct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetListStruct.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}.

---

### ReleaseSetSensitive <a name="ReleaseSetSensitive" id="@cdktn/provider-helm.release.ReleaseSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseSetSensitive.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetSensitive;

ReleaseSetSensitive.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitive.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitive.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitive.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetSensitive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetSensitive.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-helm.release.ReleaseSetSensitive.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#type Release#type}.

---

### ReleaseSetWo <a name="ReleaseSetWo" id="@cdktn/provider-helm.release.ReleaseSetWo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseSetWo.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetWo;

ReleaseSetWo.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWo.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWo.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetWo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetWo.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-helm.release.ReleaseSetWo.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#type Release#type}.

---

### ReleaseTimeouts <a name="ReleaseTimeouts" id="@cdktn/provider-helm.release.ReleaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-helm.release.ReleaseTimeouts.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseTimeouts;

ReleaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-helm.release.ReleaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#create Release#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-helm.release.ReleaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#delete Release#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-helm.release.ReleaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#read Release#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-helm.release.ReleaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/resources/release#update Release#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ReleaseMetadataOutputReference <a name="ReleaseMetadataOutputReference" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseMetadataOutputReference;

new ReleaseMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.chart">chart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.firstDeployed">firstDeployed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.lastDeployed">lastDeployed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.values">values</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

---

##### `firstDeployed`<sup>Required</sup> <a name="firstDeployed" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.firstDeployed"></a>

```java
public java.lang.Number getFirstDeployed();
```

- *Type:* java.lang.Number

---

##### `lastDeployed`<sup>Required</sup> <a name="lastDeployed" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.lastDeployed"></a>

```java
public java.lang.Number getLastDeployed();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.values"></a>

```java
public java.lang.String getValues();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue"></a>

```java
public ReleaseMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a>

---


### ReleasePostrenderOutputReference <a name="ReleasePostrenderOutputReference" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleasePostrenderOutputReference;

new ReleasePostrenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput">binaryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath">binaryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binaryPathInput`<sup>Optional</sup> <a name="binaryPathInput" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```java
public java.lang.String getBinaryPathInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath"></a>

```java
public java.lang.String getBinaryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue"></a>

```java
public IResolvable|ReleasePostrender getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---


### ReleaseSetList <a name="ReleaseSetList" id="@cdktn/provider-helm.release.ReleaseSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetList.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetList;

new ReleaseSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.release.ReleaseSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.release.ReleaseSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.release.ReleaseSetList.get"></a>

```java
public ReleaseSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.release.ReleaseSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ReleaseSet> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>>

---


### ReleaseSetListStructList <a name="ReleaseSetListStructList" id="@cdktn/provider-helm.release.ReleaseSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetListStructList;

new ReleaseSetListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.release.ReleaseSetListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.release.ReleaseSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.release.ReleaseSetListStructList.get"></a>

```java
public ReleaseSetListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.release.ReleaseSetListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ReleaseSetListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

---


### ReleaseSetListStructOutputReference <a name="ReleaseSetListStructOutputReference" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetListStructOutputReference;

new ReleaseSetListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|ReleaseSetListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>

---


### ReleaseSetOutputReference <a name="ReleaseSetOutputReference" id="@cdktn/provider-helm.release.ReleaseSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetOutputReference;

new ReleaseSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetOutputReference.property.internalValue"></a>

```java
public IResolvable|ReleaseSet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleaseSet">ReleaseSet</a>

---


### ReleaseSetSensitiveList <a name="ReleaseSetSensitiveList" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetSensitiveList;

new ReleaseSetSensitiveList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.get"></a>

```java
public ReleaseSetSensitiveOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetSensitiveList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ReleaseSetSensitive> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

---


### ReleaseSetSensitiveOutputReference <a name="ReleaseSetSensitiveOutputReference" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetSensitiveOutputReference;

new ReleaseSetSensitiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue"></a>

```java
public IResolvable|ReleaseSetSensitive getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>

---


### ReleaseSetWoList <a name="ReleaseSetWoList" id="@cdktn/provider-helm.release.ReleaseSetWoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetWoList.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetWoList;

new ReleaseSetWoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-helm.release.ReleaseSetWoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-helm.release.ReleaseSetWoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-helm.release.ReleaseSetWoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetWoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetWoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetWoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetWoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-helm.release.ReleaseSetWoList.get"></a>

```java
public ReleaseSetWoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-helm.release.ReleaseSetWoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetWoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetWoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetWoList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ReleaseSetWo> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>>

---


### ReleaseSetWoOutputReference <a name="ReleaseSetWoOutputReference" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseSetWoOutputReference;

new ReleaseSetWoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseSetWoOutputReference.property.internalValue"></a>

```java
public IResolvable|ReleaseSetWo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>

---


### ReleaseTimeoutsOutputReference <a name="ReleaseTimeoutsOutputReference" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.helm.release.ReleaseTimeoutsOutputReference;

new ReleaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-helm.release.ReleaseTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ReleaseTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-helm.release.ReleaseTimeouts">ReleaseTimeouts</a>

---



