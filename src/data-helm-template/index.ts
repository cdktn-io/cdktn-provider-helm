/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataHelmTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Kubernetes api versions used for Capabilities.APIVersions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}
  */
  readonly apiVersions?: string[];
  /**
  * If set, the installation process purges the chart on fail. The 'wait' flag will be set automatically if 'atomic' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}
  */
  readonly atomic?: boolean | cdktn.IResolvable;
  /**
  * Chart name to be installed. A path may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#chart DataHelmTemplate#chart}
  */
  readonly chart: string;
  /**
  * List of rendered CRDs from the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#crds DataHelmTemplate#crds}
  */
  readonly crds?: string[];
  /**
  * Create the namespace if it does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}
  */
  readonly createNamespace?: boolean | cdktn.IResolvable;
  /**
  * Run helm dependency update before installing the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}
  */
  readonly dependencyUpdate?: boolean | cdktn.IResolvable;
  /**
  * Add a custom description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#description DataHelmTemplate#description}
  */
  readonly description?: string;
  /**
  * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#devel DataHelmTemplate#devel}
  */
  readonly devel?: boolean | cdktn.IResolvable;
  /**
  * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}
  */
  readonly disableOpenapiValidation?: boolean | cdktn.IResolvable;
  /**
  * Prevent hooks from running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktn.IResolvable;
  /**
  * Include CRDs in the templated output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}
  */
  readonly includeCrds?: boolean | cdktn.IResolvable;
  /**
  * Set .Release.IsUpgrade instead of .Release.IsInstall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}
  */
  readonly isUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Location of public keys used for verification. Used only if `verify` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}
  */
  readonly keyring?: string;
  /**
  * Kubernetes version used for Capabilities.KubeVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}
  */
  readonly kubeVersion?: string;
  /**
  * Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}
  */
  readonly manifest?: string;
  /**
  * Map of rendered chart templates indexed by the template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}
  */
  readonly manifests?: { [key: string]: string };
  /**
  * Release name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Namespace to install the release into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Rendered notes if the chart contains a `NOTES.txt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#notes DataHelmTemplate#notes}
  */
  readonly notes?: string;
  /**
  * Pass credentials to all domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktn.IResolvable;
  /**
  * Postrender command config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}
  */
  readonly postrender?: DataHelmTemplatePostrender;
  /**
  * If set, render subchart notes along with the parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}
  */
  readonly renderSubchartNotes?: boolean | cdktn.IResolvable;
  /**
  * Re-use the given name, even if that name is already used. This is unsafe in production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#replace DataHelmTemplate#replace}
  */
  readonly replace?: boolean | cdktn.IResolvable;
  /**
  * Repository where to locate the requested chart. If it is a URL the chart is installed without installing the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository DataHelmTemplate#repository}
  */
  readonly repository?: string;
  /**
  * The repository's CA file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}
  */
  readonly repositoryCaFile?: string;
  /**
  * The repository's cert file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}
  */
  readonly repositoryCertFile?: string;
  /**
  * The repository's cert key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}
  */
  readonly repositoryKeyFile?: string;
  /**
  * Password for HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Username for HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * When upgrading, reset the values to the ones built into the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}
  */
  readonly resetValues?: boolean | cdktn.IResolvable;
  /**
  * When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}
  */
  readonly reuseValues?: boolean | cdktn.IResolvable;
  /**
  * Custom values to be merged with the values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set DataHelmTemplate#set}
  */
  readonly set?: DataHelmTemplateSet[] | cdktn.IResolvable;
  /**
  * Custom sensitive values to be merged with the values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}
  */
  readonly setList?: DataHelmTemplateSetListStruct[] | cdktn.IResolvable;
  /**
  * Custom sensitive values to be merged with the values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}
  */
  readonly setSensitive?: DataHelmTemplateSetSensitive[] | cdktn.IResolvable;
  /**
  * Write-only custom values to be merged with the values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#set_wo DataHelmTemplate#set_wo}
  */
  readonly setWo?: DataHelmTemplateSetWo[] | cdktn.IResolvable;
  /**
  * Only show manifests rendered from the given templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}
  */
  readonly showOnly?: string[];
  /**
  * If set, no CRDs will be installed. By default, CRDs are installed if not already present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}
  */
  readonly skipCrds?: boolean | cdktn.IResolvable;
  /**
  * If set, tests will not be rendered. By default, tests are rendered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}
  */
  readonly skipTests?: boolean | cdktn.IResolvable;
  /**
  * Time in seconds to wait for any individual Kubernetes operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#timeouts DataHelmTemplate#timeouts}
  */
  readonly timeouts?: DataHelmTemplateTimeouts;
  /**
  * Validate your manifests against the Kubernetes cluster you are currently pointing at. This is the same validation performed on an install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#validate DataHelmTemplate#validate}
  */
  readonly validate?: boolean | cdktn.IResolvable;
  /**
  * List of values in raw yaml format to pass to helm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#values DataHelmTemplate#values}
  */
  readonly values?: string[];
  /**
  * Verify the package before installing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#verify DataHelmTemplate#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * Specify the exact chart version to install. If this is not specified, the latest version is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#version DataHelmTemplate#version}
  */
  readonly version?: string;
  /**
  * Will wait until all resources are in a ready state before marking the release as successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#wait DataHelmTemplate#wait}
  */
  readonly wait?: boolean | cdktn.IResolvable;
}
export interface DataHelmTemplatePostrender {
  /**
  * An argument to the post-renderer (can specify multiple)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#args DataHelmTemplate#args}
  */
  readonly args?: string[];
  /**
  * The common binary path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}
  */
  readonly binaryPath: string;
}

export function dataHelmTemplatePostrenderToTerraform(struct?: DataHelmTemplatePostrender | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    binary_path: cdktn.stringToTerraform(struct!.binaryPath),
  }
}


export function dataHelmTemplatePostrenderToHclTerraform(struct?: DataHelmTemplatePostrender | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    binary_path: {
      value: cdktn.stringToHclTerraform(struct!.binaryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplatePostrenderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHelmTemplatePostrender | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._binaryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryPath = this._binaryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplatePostrender | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._binaryPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._binaryPath = value.binaryPath;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // binary_path - computed: false, optional: false, required: true
  private _binaryPath?: string; 
  public get binaryPath() {
    return this.getStringAttribute('binary_path');
  }
  public set binaryPath(value: string) {
    this._binaryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryPathInput() {
    return this._binaryPath;
  }
}
export interface DataHelmTemplateSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value?: string;
}

export function dataHelmTemplateSetToTerraform(struct?: DataHelmTemplateSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataHelmTemplateSetToHclTerraform(struct?: DataHelmTemplateSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHelmTemplateSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplateSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHelmTemplateSetList extends cdktn.ComplexList {
  public internalValue? : DataHelmTemplateSet[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHelmTemplateSetOutputReference {
    return new DataHelmTemplateSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateSetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string[];
}

export function dataHelmTemplateSetListStructToTerraform(struct?: DataHelmTemplateSetListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function dataHelmTemplateSetListStructToHclTerraform(struct?: DataHelmTemplateSetListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHelmTemplateSetListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplateSetListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHelmTemplateSetListStructList extends cdktn.ComplexList {
  public internalValue? : DataHelmTemplateSetListStruct[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHelmTemplateSetListStructOutputReference {
    return new DataHelmTemplateSetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateSetSensitive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string;
}

export function dataHelmTemplateSetSensitiveToTerraform(struct?: DataHelmTemplateSetSensitive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataHelmTemplateSetSensitiveToHclTerraform(struct?: DataHelmTemplateSetSensitive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetSensitiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHelmTemplateSetSensitive | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplateSetSensitive | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHelmTemplateSetSensitiveList extends cdktn.ComplexList {
  public internalValue? : DataHelmTemplateSetSensitive[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHelmTemplateSetSensitiveOutputReference {
    return new DataHelmTemplateSetSensitiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateSetWo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string;
}

export function dataHelmTemplateSetWoToTerraform(struct?: DataHelmTemplateSetWo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataHelmTemplateSetWoToHclTerraform(struct?: DataHelmTemplateSetWo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetWoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHelmTemplateSetWo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplateSetWo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHelmTemplateSetWoList extends cdktn.ComplexList {
  public internalValue? : DataHelmTemplateSetWo[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHelmTemplateSetWoOutputReference {
    return new DataHelmTemplateSetWoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#read DataHelmTemplate#read}
  */
  readonly read?: string;
}

export function dataHelmTemplateTimeoutsToTerraform(struct?: DataHelmTemplateTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataHelmTemplateTimeoutsToHclTerraform(struct?: DataHelmTemplateTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHelmTemplateTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplateTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template helm_template}
*/
export class DataHelmTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataHelmTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHelmTemplate to import
  * @param importFromId The id of the existing DataHelmTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHelmTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "helm_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/helm/3.1.1/docs/data-sources/template helm_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHelmTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataHelmTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'helm_template',
      terraformGeneratorMetadata: {
        providerName: 'helm',
        providerVersion: '3.1.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersions = config.apiVersions;
    this._atomic = config.atomic;
    this._chart = config.chart;
    this._crds = config.crds;
    this._createNamespace = config.createNamespace;
    this._dependencyUpdate = config.dependencyUpdate;
    this._description = config.description;
    this._devel = config.devel;
    this._disableOpenapiValidation = config.disableOpenapiValidation;
    this._disableWebhooks = config.disableWebhooks;
    this._includeCrds = config.includeCrds;
    this._isUpgrade = config.isUpgrade;
    this._keyring = config.keyring;
    this._kubeVersion = config.kubeVersion;
    this._manifest = config.manifest;
    this._manifests = config.manifests;
    this._name = config.name;
    this._namespace = config.namespace;
    this._notes = config.notes;
    this._passCredentials = config.passCredentials;
    this._postrender.internalValue = config.postrender;
    this._renderSubchartNotes = config.renderSubchartNotes;
    this._replace = config.replace;
    this._repository = config.repository;
    this._repositoryCaFile = config.repositoryCaFile;
    this._repositoryCertFile = config.repositoryCertFile;
    this._repositoryKeyFile = config.repositoryKeyFile;
    this._repositoryPassword = config.repositoryPassword;
    this._repositoryUsername = config.repositoryUsername;
    this._resetValues = config.resetValues;
    this._reuseValues = config.reuseValues;
    this._set.internalValue = config.set;
    this._setList.internalValue = config.setList;
    this._setSensitive.internalValue = config.setSensitive;
    this._setWo.internalValue = config.setWo;
    this._showOnly = config.showOnly;
    this._skipCrds = config.skipCrds;
    this._skipTests = config.skipTests;
    this._timeout = config.timeout;
    this._timeouts.internalValue = config.timeouts;
    this._validate = config.validate;
    this._values = config.values;
    this._verify = config.verify;
    this._version = config.version;
    this._wait = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_versions - computed: false, optional: true, required: false
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  public resetApiVersions() {
    this._apiVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // atomic - computed: false, optional: true, required: false
  private _atomic?: boolean | cdktn.IResolvable; 
  public get atomic() {
    return this.getBooleanAttribute('atomic');
  }
  public set atomic(value: boolean | cdktn.IResolvable) {
    this._atomic = value;
  }
  public resetAtomic() {
    this._atomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicInput() {
    return this._atomic;
  }

  // chart - computed: false, optional: false, required: true
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // crds - computed: true, optional: true, required: false
  private _crds?: string[]; 
  public get crds() {
    return this.getListAttribute('crds');
  }
  public set crds(value: string[]) {
    this._crds = value;
  }
  public resetCrds() {
    this._crds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdsInput() {
    return this._crds;
  }

  // create_namespace - computed: false, optional: true, required: false
  private _createNamespace?: boolean | cdktn.IResolvable; 
  public get createNamespace() {
    return this.getBooleanAttribute('create_namespace');
  }
  public set createNamespace(value: boolean | cdktn.IResolvable) {
    this._createNamespace = value;
  }
  public resetCreateNamespace() {
    this._createNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNamespaceInput() {
    return this._createNamespace;
  }

  // dependency_update - computed: false, optional: true, required: false
  private _dependencyUpdate?: boolean | cdktn.IResolvable; 
  public get dependencyUpdate() {
    return this.getBooleanAttribute('dependency_update');
  }
  public set dependencyUpdate(value: boolean | cdktn.IResolvable) {
    this._dependencyUpdate = value;
  }
  public resetDependencyUpdate() {
    this._dependencyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyUpdateInput() {
    return this._dependencyUpdate;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // devel - computed: false, optional: true, required: false
  private _devel?: boolean | cdktn.IResolvable; 
  public get devel() {
    return this.getBooleanAttribute('devel');
  }
  public set devel(value: boolean | cdktn.IResolvable) {
    this._devel = value;
  }
  public resetDevel() {
    this._devel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get develInput() {
    return this._devel;
  }

  // disable_openapi_validation - computed: false, optional: true, required: false
  private _disableOpenapiValidation?: boolean | cdktn.IResolvable; 
  public get disableOpenapiValidation() {
    return this.getBooleanAttribute('disable_openapi_validation');
  }
  public set disableOpenapiValidation(value: boolean | cdktn.IResolvable) {
    this._disableOpenapiValidation = value;
  }
  public resetDisableOpenapiValidation() {
    this._disableOpenapiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenapiValidationInput() {
    return this._disableOpenapiValidation;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktn.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktn.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_crds - computed: false, optional: true, required: false
  private _includeCrds?: boolean | cdktn.IResolvable; 
  public get includeCrds() {
    return this.getBooleanAttribute('include_crds');
  }
  public set includeCrds(value: boolean | cdktn.IResolvable) {
    this._includeCrds = value;
  }
  public resetIncludeCrds() {
    this._includeCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCrdsInput() {
    return this._includeCrds;
  }

  // is_upgrade - computed: false, optional: true, required: false
  private _isUpgrade?: boolean | cdktn.IResolvable; 
  public get isUpgrade() {
    return this.getBooleanAttribute('is_upgrade');
  }
  public set isUpgrade(value: boolean | cdktn.IResolvable) {
    this._isUpgrade = value;
  }
  public resetIsUpgrade() {
    this._isUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpgradeInput() {
    return this._isUpgrade;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // kube_version - computed: false, optional: true, required: false
  private _kubeVersion?: string; 
  public get kubeVersion() {
    return this.getStringAttribute('kube_version');
  }
  public set kubeVersion(value: string) {
    this._kubeVersion = value;
  }
  public resetKubeVersion() {
    this._kubeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeVersionInput() {
    return this._kubeVersion;
  }

  // manifest - computed: true, optional: true, required: false
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
  }

  // manifests - computed: true, optional: true, required: false
  private _manifests?: { [key: string]: string }; 
  public get manifests() {
    return this.getStringMapAttribute('manifests');
  }
  public set manifests(value: { [key: string]: string }) {
    this._manifests = value;
  }
  public resetManifests() {
    this._manifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktn.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktn.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // postrender - computed: false, optional: true, required: false
  private _postrender = new DataHelmTemplatePostrenderOutputReference(this, "postrender");
  public get postrender() {
    return this._postrender;
  }
  public putPostrender(value: DataHelmTemplatePostrender) {
    this._postrender.internalValue = value;
  }
  public resetPostrender() {
    this._postrender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postrenderInput() {
    return this._postrender.internalValue;
  }

  // render_subchart_notes - computed: false, optional: true, required: false
  private _renderSubchartNotes?: boolean | cdktn.IResolvable; 
  public get renderSubchartNotes() {
    return this.getBooleanAttribute('render_subchart_notes');
  }
  public set renderSubchartNotes(value: boolean | cdktn.IResolvable) {
    this._renderSubchartNotes = value;
  }
  public resetRenderSubchartNotes() {
    this._renderSubchartNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderSubchartNotesInput() {
    return this._renderSubchartNotes;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_ca_file - computed: false, optional: true, required: false
  private _repositoryCaFile?: string; 
  public get repositoryCaFile() {
    return this.getStringAttribute('repository_ca_file');
  }
  public set repositoryCaFile(value: string) {
    this._repositoryCaFile = value;
  }
  public resetRepositoryCaFile() {
    this._repositoryCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCaFileInput() {
    return this._repositoryCaFile;
  }

  // repository_cert_file - computed: false, optional: true, required: false
  private _repositoryCertFile?: string; 
  public get repositoryCertFile() {
    return this.getStringAttribute('repository_cert_file');
  }
  public set repositoryCertFile(value: string) {
    this._repositoryCertFile = value;
  }
  public resetRepositoryCertFile() {
    this._repositoryCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCertFileInput() {
    return this._repositoryCertFile;
  }

  // repository_key_file - computed: false, optional: true, required: false
  private _repositoryKeyFile?: string; 
  public get repositoryKeyFile() {
    return this.getStringAttribute('repository_key_file');
  }
  public set repositoryKeyFile(value: string) {
    this._repositoryKeyFile = value;
  }
  public resetRepositoryKeyFile() {
    this._repositoryKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryKeyFileInput() {
    return this._repositoryKeyFile;
  }

  // repository_password - computed: false, optional: true, required: false
  private _repositoryPassword?: string; 
  public get repositoryPassword() {
    return this.getStringAttribute('repository_password');
  }
  public set repositoryPassword(value: string) {
    this._repositoryPassword = value;
  }
  public resetRepositoryPassword() {
    this._repositoryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPasswordInput() {
    return this._repositoryPassword;
  }

  // repository_username - computed: false, optional: true, required: false
  private _repositoryUsername?: string; 
  public get repositoryUsername() {
    return this.getStringAttribute('repository_username');
  }
  public set repositoryUsername(value: string) {
    this._repositoryUsername = value;
  }
  public resetRepositoryUsername() {
    this._repositoryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUsernameInput() {
    return this._repositoryUsername;
  }

  // reset_values - computed: false, optional: true, required: false
  private _resetValues?: boolean | cdktn.IResolvable; 
  public get resetValues() {
    return this.getBooleanAttribute('reset_values');
  }
  public set resetValues(value: boolean | cdktn.IResolvable) {
    this._resetValues = value;
  }
  public resetResetValues() {
    this._resetValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetValuesInput() {
    return this._resetValues;
  }

  // reuse_values - computed: false, optional: true, required: false
  private _reuseValues?: boolean | cdktn.IResolvable; 
  public get reuseValues() {
    return this.getBooleanAttribute('reuse_values');
  }
  public set reuseValues(value: boolean | cdktn.IResolvable) {
    this._reuseValues = value;
  }
  public resetReuseValues() {
    this._reuseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseValuesInput() {
    return this._reuseValues;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataHelmTemplateSetList(this, "set", true);
  public get set() {
    return this._set;
  }
  public putSet(value: DataHelmTemplateSet[] | cdktn.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // set_list - computed: false, optional: true, required: false
  private _setList = new DataHelmTemplateSetListStructList(this, "set_list", false);
  public get setList() {
    return this._setList;
  }
  public putSetList(value: DataHelmTemplateSetListStruct[] | cdktn.IResolvable) {
    this._setList.internalValue = value;
  }
  public resetSetList() {
    this._setList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setListInput() {
    return this._setList.internalValue;
  }

  // set_sensitive - computed: false, optional: true, required: false
  private _setSensitive = new DataHelmTemplateSetSensitiveList(this, "set_sensitive", true);
  public get setSensitive() {
    return this._setSensitive;
  }
  public putSetSensitive(value: DataHelmTemplateSetSensitive[] | cdktn.IResolvable) {
    this._setSensitive.internalValue = value;
  }
  public resetSetSensitive() {
    this._setSensitive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSensitiveInput() {
    return this._setSensitive.internalValue;
  }

  // set_wo - computed: false, optional: true, required: false
  private _setWo = new DataHelmTemplateSetWoList(this, "set_wo", false);
  public get setWo() {
    return this._setWo;
  }
  public putSetWo(value: DataHelmTemplateSetWo[] | cdktn.IResolvable) {
    this._setWo.internalValue = value;
  }
  public resetSetWo() {
    this._setWo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWoInput() {
    return this._setWo.internalValue;
  }

  // show_only - computed: false, optional: true, required: false
  private _showOnly?: string[]; 
  public get showOnly() {
    return this.getListAttribute('show_only');
  }
  public set showOnly(value: string[]) {
    this._showOnly = value;
  }
  public resetShowOnly() {
    this._showOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnlyInput() {
    return this._showOnly;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktn.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktn.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // skip_tests - computed: false, optional: true, required: false
  private _skipTests?: boolean | cdktn.IResolvable; 
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }
  public set skipTests(value: boolean | cdktn.IResolvable) {
    this._skipTests = value;
  }
  public resetSkipTests() {
    this._skipTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestsInput() {
    return this._skipTests;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHelmTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHelmTemplateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktn.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktn.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetTfValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktn.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktn.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._apiVersions),
      atomic: cdktn.booleanToTerraform(this._atomic),
      chart: cdktn.stringToTerraform(this._chart),
      crds: cdktn.listMapper(cdktn.stringToTerraform, false)(this._crds),
      create_namespace: cdktn.booleanToTerraform(this._createNamespace),
      dependency_update: cdktn.booleanToTerraform(this._dependencyUpdate),
      description: cdktn.stringToTerraform(this._description),
      devel: cdktn.booleanToTerraform(this._devel),
      disable_openapi_validation: cdktn.booleanToTerraform(this._disableOpenapiValidation),
      disable_webhooks: cdktn.booleanToTerraform(this._disableWebhooks),
      include_crds: cdktn.booleanToTerraform(this._includeCrds),
      is_upgrade: cdktn.booleanToTerraform(this._isUpgrade),
      keyring: cdktn.stringToTerraform(this._keyring),
      kube_version: cdktn.stringToTerraform(this._kubeVersion),
      manifest: cdktn.stringToTerraform(this._manifest),
      manifests: cdktn.hashMapper(cdktn.stringToTerraform)(this._manifests),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      notes: cdktn.stringToTerraform(this._notes),
      pass_credentials: cdktn.booleanToTerraform(this._passCredentials),
      postrender: dataHelmTemplatePostrenderToTerraform(this._postrender.internalValue),
      render_subchart_notes: cdktn.booleanToTerraform(this._renderSubchartNotes),
      replace: cdktn.booleanToTerraform(this._replace),
      repository: cdktn.stringToTerraform(this._repository),
      repository_ca_file: cdktn.stringToTerraform(this._repositoryCaFile),
      repository_cert_file: cdktn.stringToTerraform(this._repositoryCertFile),
      repository_key_file: cdktn.stringToTerraform(this._repositoryKeyFile),
      repository_password: cdktn.stringToTerraform(this._repositoryPassword),
      repository_username: cdktn.stringToTerraform(this._repositoryUsername),
      reset_values: cdktn.booleanToTerraform(this._resetValues),
      reuse_values: cdktn.booleanToTerraform(this._reuseValues),
      set: cdktn.listMapper(dataHelmTemplateSetToTerraform, false)(this._set.internalValue),
      set_list: cdktn.listMapper(dataHelmTemplateSetListStructToTerraform, false)(this._setList.internalValue),
      set_sensitive: cdktn.listMapper(dataHelmTemplateSetSensitiveToTerraform, false)(this._setSensitive.internalValue),
      set_wo: cdktn.listMapper(dataHelmTemplateSetWoToTerraform, false)(this._setWo.internalValue),
      show_only: cdktn.listMapper(cdktn.stringToTerraform, false)(this._showOnly),
      skip_crds: cdktn.booleanToTerraform(this._skipCrds),
      skip_tests: cdktn.booleanToTerraform(this._skipTests),
      timeout: cdktn.numberToTerraform(this._timeout),
      timeouts: dataHelmTemplateTimeoutsToTerraform(this._timeouts.internalValue),
      validate: cdktn.booleanToTerraform(this._validate),
      values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._values),
      verify: cdktn.booleanToTerraform(this._verify),
      version: cdktn.stringToTerraform(this._version),
      wait: cdktn.booleanToTerraform(this._wait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_versions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._apiVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      atomic: {
        value: cdktn.booleanToHclTerraform(this._atomic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chart: {
        value: cdktn.stringToHclTerraform(this._chart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crds: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._crds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      create_namespace: {
        value: cdktn.booleanToHclTerraform(this._createNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dependency_update: {
        value: cdktn.booleanToHclTerraform(this._dependencyUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devel: {
        value: cdktn.booleanToHclTerraform(this._devel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_openapi_validation: {
        value: cdktn.booleanToHclTerraform(this._disableOpenapiValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_webhooks: {
        value: cdktn.booleanToHclTerraform(this._disableWebhooks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_crds: {
        value: cdktn.booleanToHclTerraform(this._includeCrds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_upgrade: {
        value: cdktn.booleanToHclTerraform(this._isUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keyring: {
        value: cdktn.stringToHclTerraform(this._keyring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_version: {
        value: cdktn.stringToHclTerraform(this._kubeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: cdktn.stringToHclTerraform(this._manifest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifests: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._manifests),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktn.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_credentials: {
        value: cdktn.booleanToHclTerraform(this._passCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      postrender: {
        value: dataHelmTemplatePostrenderToHclTerraform(this._postrender.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataHelmTemplatePostrender",
      },
      render_subchart_notes: {
        value: cdktn.booleanToHclTerraform(this._renderSubchartNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace: {
        value: cdktn.booleanToHclTerraform(this._replace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktn.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_ca_file: {
        value: cdktn.stringToHclTerraform(this._repositoryCaFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_cert_file: {
        value: cdktn.stringToHclTerraform(this._repositoryCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_key_file: {
        value: cdktn.stringToHclTerraform(this._repositoryKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_password: {
        value: cdktn.stringToHclTerraform(this._repositoryPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_username: {
        value: cdktn.stringToHclTerraform(this._repositoryUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_values: {
        value: cdktn.booleanToHclTerraform(this._resetValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reuse_values: {
        value: cdktn.booleanToHclTerraform(this._reuseValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set: {
        value: cdktn.listMapperHcl(dataHelmTemplateSetToHclTerraform, false)(this._set.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHelmTemplateSetList",
      },
      set_list: {
        value: cdktn.listMapperHcl(dataHelmTemplateSetListStructToHclTerraform, false)(this._setList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHelmTemplateSetListStructList",
      },
      set_sensitive: {
        value: cdktn.listMapperHcl(dataHelmTemplateSetSensitiveToHclTerraform, false)(this._setSensitive.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHelmTemplateSetSensitiveList",
      },
      set_wo: {
        value: cdktn.listMapperHcl(dataHelmTemplateSetWoToHclTerraform, false)(this._setWo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHelmTemplateSetWoList",
      },
      show_only: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._showOnly),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_crds: {
        value: cdktn.booleanToHclTerraform(this._skipCrds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_tests: {
        value: cdktn.booleanToHclTerraform(this._skipTests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktn.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: dataHelmTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataHelmTemplateTimeouts",
      },
      validate: {
        value: cdktn.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      verify: {
        value: cdktn.booleanToHclTerraform(this._verify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktn.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
