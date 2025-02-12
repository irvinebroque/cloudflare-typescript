// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/magic-network-monitoring/configs/configs';
import * as FullAPI from 'cloudflare/resources/magic-network-monitoring/configs/full';

export class Configs extends APIResource {
  full: FullAPI.Full = new FullAPI.Full(this._client);

  /**
   * Create a new network monitoring configuration.
   */
  create(
    params: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringConfig> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing network monitoring configuration, requires the entire
   * configuration to be updated at once.
   */
  update(
    params: ConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringConfig> {
    const { account_id } = params;
    return (
      this._client.put(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an existing network monitoring configuration.
   */
  delete(
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringConfig> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update fields in an existing network monitoring configuration.
   */
  edit(
    params: ConfigEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringConfig> {
    const { account_id } = params;
    return (
      this._client.patch(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists default sampling and router IPs for account.
   */
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<MagicNetworkMonitoringConfig> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MagicNetworkMonitoringConfig {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export interface ConfigCreateParams {
  account_id: string;
}

export interface ConfigUpdateParams {
  account_id: string;
}

export interface ConfigDeleteParams {
  account_id: string;
}

export interface ConfigEditParams {
  account_id: string;
}

export interface ConfigGetParams {
  account_id: string;
}

export namespace Configs {
  export import MagicNetworkMonitoringConfig = ConfigsAPI.MagicNetworkMonitoringConfig;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
  export import Full = FullAPI.Full;
  export import FullGetParams = FullAPI.FullGetParams;
}
