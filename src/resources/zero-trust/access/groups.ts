// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as GroupsAPI from 'cloudflare/resources/zero-trust/access/groups';
import { SinglePage } from 'cloudflare/pagination';

export class Groups extends APIResource {
  /**
   * Creates a new Access group.
   */
  create(params: GroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustGroups> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGroups }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Access group.
   */
  update(
    uuid: string,
    params: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGroups> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/groups/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGroups }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access groups.
   */
  list(
    params?: GroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustGroupsSinglePage, ZeroTrustGroups>;
  list(options?: Core.RequestOptions): Core.PagePromise<ZeroTrustGroupsSinglePage, ZeroTrustGroups>;
  list(
    params: GroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustGroupsSinglePage, ZeroTrustGroups> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/groups`,
      ZeroTrustGroupsSinglePage,
      options,
    );
  }

  /**
   * Deletes an Access group.
   */
  delete(
    uuid: string,
    params?: GroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupDeleteResponse>;
  delete(uuid: string, options?: Core.RequestOptions): Core.APIPromise<GroupDeleteResponse>;
  delete(
    uuid: string,
    params: GroupDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/groups/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: GroupDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access group.
   */
  get(uuid: string, params?: GroupGetParams, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustGroups>;
  get(uuid: string, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustGroups>;
  get(
    uuid: string,
    params: GroupGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGroups> {
    if (isRequestOptions(params)) {
      return this.get(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/groups/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: ZeroTrustGroups }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZeroTrustGroupsSinglePage extends SinglePage<ZeroTrustGroups> {}

export interface ZeroTrustGroups {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | ZeroTrustGroups.AccessEmailRule
    | ZeroTrustGroups.AccessEmailListRule
    | ZeroTrustGroups.AccessDomainRule
    | ZeroTrustGroups.AccessEveryoneRule
    | ZeroTrustGroups.AccessIPRule
    | ZeroTrustGroups.AccessIPListRule
    | ZeroTrustGroups.AccessCertificateRule
    | ZeroTrustGroups.AccessAccessGroupRule
    | ZeroTrustGroups.AccessAzureGroupRule
    | ZeroTrustGroups.AccessGitHubOrganizationRule
    | ZeroTrustGroups.AccessGsuiteGroupRule
    | ZeroTrustGroups.AccessOktaGroupRule
    | ZeroTrustGroups.AccessSamlGroupRule
    | ZeroTrustGroups.AccessServiceTokenRule
    | ZeroTrustGroups.AccessAnyValidServiceTokenRule
    | ZeroTrustGroups.AccessExternalEvaluationRule
    | ZeroTrustGroups.AccessCountryRule
    | ZeroTrustGroups.AccessAuthenticationMethodRule
    | ZeroTrustGroups.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<
    | ZeroTrustGroups.AccessEmailRule
    | ZeroTrustGroups.AccessEmailListRule
    | ZeroTrustGroups.AccessDomainRule
    | ZeroTrustGroups.AccessEveryoneRule
    | ZeroTrustGroups.AccessIPRule
    | ZeroTrustGroups.AccessIPListRule
    | ZeroTrustGroups.AccessCertificateRule
    | ZeroTrustGroups.AccessAccessGroupRule
    | ZeroTrustGroups.AccessAzureGroupRule
    | ZeroTrustGroups.AccessGitHubOrganizationRule
    | ZeroTrustGroups.AccessGsuiteGroupRule
    | ZeroTrustGroups.AccessOktaGroupRule
    | ZeroTrustGroups.AccessSamlGroupRule
    | ZeroTrustGroups.AccessServiceTokenRule
    | ZeroTrustGroups.AccessAnyValidServiceTokenRule
    | ZeroTrustGroups.AccessExternalEvaluationRule
    | ZeroTrustGroups.AccessCountryRule
    | ZeroTrustGroups.AccessAuthenticationMethodRule
    | ZeroTrustGroups.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<
    | ZeroTrustGroups.AccessEmailRule
    | ZeroTrustGroups.AccessEmailListRule
    | ZeroTrustGroups.AccessDomainRule
    | ZeroTrustGroups.AccessEveryoneRule
    | ZeroTrustGroups.AccessIPRule
    | ZeroTrustGroups.AccessIPListRule
    | ZeroTrustGroups.AccessCertificateRule
    | ZeroTrustGroups.AccessAccessGroupRule
    | ZeroTrustGroups.AccessAzureGroupRule
    | ZeroTrustGroups.AccessGitHubOrganizationRule
    | ZeroTrustGroups.AccessGsuiteGroupRule
    | ZeroTrustGroups.AccessOktaGroupRule
    | ZeroTrustGroups.AccessSamlGroupRule
    | ZeroTrustGroups.AccessServiceTokenRule
    | ZeroTrustGroups.AccessAnyValidServiceTokenRule
    | ZeroTrustGroups.AccessExternalEvaluationRule
    | ZeroTrustGroups.AccessCountryRule
    | ZeroTrustGroups.AccessAuthenticationMethodRule
    | ZeroTrustGroups.AccessDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | ZeroTrustGroups.AccessEmailRule
    | ZeroTrustGroups.AccessEmailListRule
    | ZeroTrustGroups.AccessDomainRule
    | ZeroTrustGroups.AccessEveryoneRule
    | ZeroTrustGroups.AccessIPRule
    | ZeroTrustGroups.AccessIPListRule
    | ZeroTrustGroups.AccessCertificateRule
    | ZeroTrustGroups.AccessAccessGroupRule
    | ZeroTrustGroups.AccessAzureGroupRule
    | ZeroTrustGroups.AccessGitHubOrganizationRule
    | ZeroTrustGroups.AccessGsuiteGroupRule
    | ZeroTrustGroups.AccessOktaGroupRule
    | ZeroTrustGroups.AccessSamlGroupRule
    | ZeroTrustGroups.AccessServiceTokenRule
    | ZeroTrustGroups.AccessAnyValidServiceTokenRule
    | ZeroTrustGroups.AccessExternalEvaluationRule
    | ZeroTrustGroups.AccessCountryRule
    | ZeroTrustGroups.AccessAuthenticationMethodRule
    | ZeroTrustGroups.AccessDevicePostureRule
  >;

  updated_at?: string;
}

export namespace ZeroTrustGroups {
  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface GroupDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface GroupCreateParams {
  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<
    | GroupCreateParams.AccessEmailRule
    | GroupCreateParams.AccessEmailListRule
    | GroupCreateParams.AccessDomainRule
    | GroupCreateParams.AccessEveryoneRule
    | GroupCreateParams.AccessIPRule
    | GroupCreateParams.AccessIPListRule
    | GroupCreateParams.AccessCertificateRule
    | GroupCreateParams.AccessAccessGroupRule
    | GroupCreateParams.AccessAzureGroupRule
    | GroupCreateParams.AccessGitHubOrganizationRule
    | GroupCreateParams.AccessGsuiteGroupRule
    | GroupCreateParams.AccessOktaGroupRule
    | GroupCreateParams.AccessSamlGroupRule
    | GroupCreateParams.AccessServiceTokenRule
    | GroupCreateParams.AccessAnyValidServiceTokenRule
    | GroupCreateParams.AccessExternalEvaluationRule
    | GroupCreateParams.AccessCountryRule
    | GroupCreateParams.AccessAuthenticationMethodRule
    | GroupCreateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: The name of the Access group.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match a policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupCreateParams.AccessEmailRule
    | GroupCreateParams.AccessEmailListRule
    | GroupCreateParams.AccessDomainRule
    | GroupCreateParams.AccessEveryoneRule
    | GroupCreateParams.AccessIPRule
    | GroupCreateParams.AccessIPListRule
    | GroupCreateParams.AccessCertificateRule
    | GroupCreateParams.AccessAccessGroupRule
    | GroupCreateParams.AccessAzureGroupRule
    | GroupCreateParams.AccessGitHubOrganizationRule
    | GroupCreateParams.AccessGsuiteGroupRule
    | GroupCreateParams.AccessOktaGroupRule
    | GroupCreateParams.AccessSamlGroupRule
    | GroupCreateParams.AccessServiceTokenRule
    | GroupCreateParams.AccessAnyValidServiceTokenRule
    | GroupCreateParams.AccessExternalEvaluationRule
    | GroupCreateParams.AccessCountryRule
    | GroupCreateParams.AccessAuthenticationMethodRule
    | GroupCreateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match a policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<
    | GroupCreateParams.AccessEmailRule
    | GroupCreateParams.AccessEmailListRule
    | GroupCreateParams.AccessDomainRule
    | GroupCreateParams.AccessEveryoneRule
    | GroupCreateParams.AccessIPRule
    | GroupCreateParams.AccessIPListRule
    | GroupCreateParams.AccessCertificateRule
    | GroupCreateParams.AccessAccessGroupRule
    | GroupCreateParams.AccessAzureGroupRule
    | GroupCreateParams.AccessGitHubOrganizationRule
    | GroupCreateParams.AccessGsuiteGroupRule
    | GroupCreateParams.AccessOktaGroupRule
    | GroupCreateParams.AccessSamlGroupRule
    | GroupCreateParams.AccessServiceTokenRule
    | GroupCreateParams.AccessAnyValidServiceTokenRule
    | GroupCreateParams.AccessExternalEvaluationRule
    | GroupCreateParams.AccessCountryRule
    | GroupCreateParams.AccessAuthenticationMethodRule
    | GroupCreateParams.AccessDevicePostureRule
  >;
}

export namespace GroupCreateParams {
  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface GroupUpdateParams {
  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<
    | GroupUpdateParams.AccessEmailRule
    | GroupUpdateParams.AccessEmailListRule
    | GroupUpdateParams.AccessDomainRule
    | GroupUpdateParams.AccessEveryoneRule
    | GroupUpdateParams.AccessIPRule
    | GroupUpdateParams.AccessIPListRule
    | GroupUpdateParams.AccessCertificateRule
    | GroupUpdateParams.AccessAccessGroupRule
    | GroupUpdateParams.AccessAzureGroupRule
    | GroupUpdateParams.AccessGitHubOrganizationRule
    | GroupUpdateParams.AccessGsuiteGroupRule
    | GroupUpdateParams.AccessOktaGroupRule
    | GroupUpdateParams.AccessSamlGroupRule
    | GroupUpdateParams.AccessServiceTokenRule
    | GroupUpdateParams.AccessAnyValidServiceTokenRule
    | GroupUpdateParams.AccessExternalEvaluationRule
    | GroupUpdateParams.AccessCountryRule
    | GroupUpdateParams.AccessAuthenticationMethodRule
    | GroupUpdateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: The name of the Access group.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match a policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupUpdateParams.AccessEmailRule
    | GroupUpdateParams.AccessEmailListRule
    | GroupUpdateParams.AccessDomainRule
    | GroupUpdateParams.AccessEveryoneRule
    | GroupUpdateParams.AccessIPRule
    | GroupUpdateParams.AccessIPListRule
    | GroupUpdateParams.AccessCertificateRule
    | GroupUpdateParams.AccessAccessGroupRule
    | GroupUpdateParams.AccessAzureGroupRule
    | GroupUpdateParams.AccessGitHubOrganizationRule
    | GroupUpdateParams.AccessGsuiteGroupRule
    | GroupUpdateParams.AccessOktaGroupRule
    | GroupUpdateParams.AccessSamlGroupRule
    | GroupUpdateParams.AccessServiceTokenRule
    | GroupUpdateParams.AccessAnyValidServiceTokenRule
    | GroupUpdateParams.AccessExternalEvaluationRule
    | GroupUpdateParams.AccessCountryRule
    | GroupUpdateParams.AccessAuthenticationMethodRule
    | GroupUpdateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match a policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<
    | GroupUpdateParams.AccessEmailRule
    | GroupUpdateParams.AccessEmailListRule
    | GroupUpdateParams.AccessDomainRule
    | GroupUpdateParams.AccessEveryoneRule
    | GroupUpdateParams.AccessIPRule
    | GroupUpdateParams.AccessIPListRule
    | GroupUpdateParams.AccessCertificateRule
    | GroupUpdateParams.AccessAccessGroupRule
    | GroupUpdateParams.AccessAzureGroupRule
    | GroupUpdateParams.AccessGitHubOrganizationRule
    | GroupUpdateParams.AccessGsuiteGroupRule
    | GroupUpdateParams.AccessOktaGroupRule
    | GroupUpdateParams.AccessSamlGroupRule
    | GroupUpdateParams.AccessServiceTokenRule
    | GroupUpdateParams.AccessAnyValidServiceTokenRule
    | GroupUpdateParams.AccessExternalEvaluationRule
    | GroupUpdateParams.AccessCountryRule
    | GroupUpdateParams.AccessAuthenticationMethodRule
    | GroupUpdateParams.AccessDevicePostureRule
  >;
}

export namespace GroupUpdateParams {
  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface GroupListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface GroupDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface GroupGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Groups {
  export import ZeroTrustGroups = GroupsAPI.ZeroTrustGroups;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import ZeroTrustGroupsSinglePage = GroupsAPI.ZeroTrustGroupsSinglePage;
  export import GroupCreateParams = GroupsAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupDeleteParams = GroupsAPI.GroupDeleteParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
}
