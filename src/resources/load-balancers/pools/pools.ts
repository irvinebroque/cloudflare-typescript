// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoolsAPI from 'cloudflare/resources/load-balancers/pools/pools';
import * as LoadBalancersAPI from 'cloudflare/resources/load-balancers/load-balancers';
import * as HealthAPI from 'cloudflare/resources/load-balancers/pools/health';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/pools/references';
import * as LoadBalancersPoolsAPI from 'cloudflare/resources/user/load-balancers/pools';
import { PoolsSinglePage } from 'cloudflare/resources/user/load-balancers/pools';

export class Pools extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create a new pool.
   */
  create(
    params: PoolCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.Pool> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/load_balancers/pools`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancersPoolsAPI.Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured pool.
   */
  update(
    poolId: string,
    params: PoolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.Pool> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancersPoolsAPI.Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured pools.
   */
  list(
    params: PoolListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PoolsSinglePage, LoadBalancersPoolsAPI.Pool> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/load_balancers/pools`, PoolsSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a configured pool.
   */
  delete(
    poolId: string,
    params: PoolDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoolDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: PoolDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing pool, overwriting the supplied properties.
   */
  edit(
    poolId: string,
    params: PoolEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.Pool> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/load_balancers/pools/${poolId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LoadBalancersPoolsAPI.Pool }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured pool.
   */
  get(
    poolId: string,
    params: PoolGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancersPoolsAPI.Pool> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/pools/${poolId}`, options) as Core.APIPromise<{
        result: LoadBalancersPoolsAPI.Pool;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PoolDeleteResponse {
  id?: string;
}

export interface PoolCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A short name (tag) for the pool. Only alphanumeric characters,
   * hyphens, and underscores are allowed.
   */
  name: string;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins: Array<LoadBalancersAPI.Origin>;

  /**
   * Body param: A human-readable description of the pool.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) or disable this pool. Disabled pools
   * will not receive traffic and are excluded from health checks. Disabling a pool
   * will cause any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * Body param: The latitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Body param: Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * Body param: The longitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * Body param: The minimum number of origins that must be healthy for this pool to
   * serve traffic. If the number of healthy origins falls below this number, the
   * pool will be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * Body param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: unknown;

  /**
   * Body param: This field is now deprecated. It has been moved to Cloudflare's
   * Centralized Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Body param: Filter pool and origin health notifications by resource type or
   * health status. Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;
}

export interface PoolUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A short name (tag) for the pool. Only alphanumeric characters,
   * hyphens, and underscores are allowed.
   */
  name: string;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins: Array<LoadBalancersAPI.Origin>;

  /**
   * Body param: A list of regions from which to run health checks. Null means every
   * Cloudflare data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  /**
   * Body param: A human-readable description of the pool.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) or disable this pool. Disabled pools
   * will not receive traffic and are excluded from health checks. Disabling a pool
   * will cause any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * Body param: The latitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Body param: Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * Body param: The longitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * Body param: The minimum number of origins that must be healthy for this pool to
   * serve traffic. If the number of healthy origins falls below this number, the
   * pool will be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * Body param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: unknown;

  /**
   * Body param: This field is now deprecated. It has been moved to Cloudflare's
   * Centralized Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Body param: Filter pool and origin health notifications by resource type or
   * health status. Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;
}

export interface PoolListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: unknown;
}

export interface PoolDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface PoolEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A list of regions from which to run health checks. Null means every
   * Cloudflare data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  /**
   * Body param: A human-readable description of the pool.
   */
  description?: string;

  /**
   * Body param: Whether to enable (the default) or disable this pool. Disabled pools
   * will not receive traffic and are excluded from health checks. Disabling a pool
   * will cause any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * Body param: The latitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Body param: Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * Body param: The longitude of the data center containing the origins used in this
   * pool in decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * Body param: The minimum number of origins that must be healthy for this pool to
   * serve traffic. If the number of healthy origins falls below this number, the
   * pool will be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  /**
   * Body param: The ID of the Monitor to use for checking the health of origins
   * within this pool.
   */
  monitor?: unknown;

  /**
   * Body param: A short name (tag) for the pool. Only alphanumeric characters,
   * hyphens, and underscores are allowed.
   */
  name?: string;

  /**
   * Body param: This field is now deprecated. It has been moved to Cloudflare's
   * Centralized Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Body param: Filter pool and origin health notifications by resource type or
   * health status. Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Body param: Configures origin steering for the pool. Controls how origins are
   * selected for new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;

  /**
   * Body param: The list of origins within this pool. Traffic directed at this pool
   * is balanced across all currently healthy origins, provided the pool itself is
   * healthy.
   */
  origins?: Array<LoadBalancersAPI.Origin>;
}

export interface PoolGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Pools {
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolDeleteParams = PoolsAPI.PoolDeleteParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolGetParams = PoolsAPI.PoolGetParams;
  export import Health = HealthAPI.Health;
  export import HealthCreateResponse = HealthAPI.HealthCreateResponse;
  export import HealthGetResponse = HealthAPI.HealthGetResponse;
  export import HealthCreateParams = HealthAPI.HealthCreateParams;
  export import HealthGetParams = HealthAPI.HealthGetParams;
  export import References = ReferencesAPI.References;
  export import ReferenceGetResponse = ReferencesAPI.ReferenceGetResponse;
  export import ReferenceGetParams = ReferencesAPI.ReferenceGetParams;
}

export { PoolsSinglePage };
