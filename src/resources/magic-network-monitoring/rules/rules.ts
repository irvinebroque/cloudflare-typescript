// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/magic-network-monitoring/rules/rules';
import * as AdvertisementsAPI from 'cloudflare/resources/magic-network-monitoring/rules/advertisements';
import { SinglePage } from 'cloudflare/pagination';

export class Rules extends APIResource {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);

  /**
   * Create network monitoring rules for account. Currently only supports creating a
   * single rule per API request.
   */
  create(
    params: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/mnm/rules`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update network monitoring rules for account.
   */
  update(
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.put(`/accounts/${account_id}/mnm/rules`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists network monitoring rules for account.
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MagicNetworkMonitoringRulesSinglePage, MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/mnm/rules`,
      MagicNetworkMonitoringRulesSinglePage,
      options,
    );
  }

  /**
   * Delete a network monitoring rule for account.
   */
  delete(
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/mnm/rules/${ruleId}`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a network monitoring rule for account.
   */
  edit(
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.patch(`/accounts/${account_id}/mnm/rules/${ruleId}`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a single network monitoring rule for account.
   */
  get(
    ruleId: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mnm/rules/${ruleId}`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class MagicNetworkMonitoringRulesSinglePage extends SinglePage<MagicNetworkMonitoringRule | null> {}

export interface MagicNetworkMonitoringRule {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
   * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
   * least one unit must be provided.
   */
  duration: string;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  id?: string;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;
}

export interface RuleCreateParams {
  account_id: string;
}

export interface RuleUpdateParams {
  account_id: string;
}

export interface RuleListParams {
  account_id: string;
}

export interface RuleDeleteParams {
  account_id: string;
}

export interface RuleEditParams {
  account_id: string;
}

export interface RuleGetParams {
  account_id: string;
}

export namespace Rules {
  export import MagicNetworkMonitoringRule = RulesAPI.MagicNetworkMonitoringRule;
  export import MagicNetworkMonitoringRulesSinglePage = RulesAPI.MagicNetworkMonitoringRulesSinglePage;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
  export import Advertisements = AdvertisementsAPI.Advertisements;
  export import MagicNetworkMonitoringRuleAdvertisable = AdvertisementsAPI.MagicNetworkMonitoringRuleAdvertisable;
  export import AdvertisementEditParams = AdvertisementsAPI.AdvertisementEditParams;
}
