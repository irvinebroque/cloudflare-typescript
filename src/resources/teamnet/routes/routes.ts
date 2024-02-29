// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/teamnet/routes/routes';
import * as IPsAPI from 'cloudflare/resources/teamnet/routes/ips';
import * as NetworksAPI from 'cloudflare/resources/teamnet/routes/networks';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Routes extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);

  /**
   * Routes a private network through a Cloudflare Tunnel.
   */
  create(params: RouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<RouteCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/teamnet/routes`, { body, ...options }) as Core.APIPromise<{
        result: RouteCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters private network routes in an account.
   */
  list(
    params: RouteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RouteListResponsesV4PagePaginationArray, RouteListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/teamnet/routes`,
      RouteListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a private network route from an account.
   */
  delete(
    routeId: string,
    params: RouteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/teamnet/routes/${routeId}`, options) as Core.APIPromise<{
        result: RouteDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing private network route in an account. The fields that are
   * meant to be updated should be provided in the body of the request.
   */
  edit(
    routeId: string,
    params: RouteEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/teamnet/routes/${routeId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RouteListResponsesV4PagePaginationArray extends V4PagePaginationArray<RouteListResponse> {}

export interface RouteCreateResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface RouteListResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * The user-friendly name of the Cloudflare Tunnel serving the route.
   */
  tunnel_name?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;

  /**
   * A user-friendly name for the virtual network.
   */
  virtual_network_name?: string;
}

export interface RouteDeleteResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface RouteEditResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface RouteCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: The private IPv4 or IPv6 range connected by the route, in CIDR
   * notation.
   */
  ip_network: string;

  /**
   * Body param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Body param: UUID of the Tunnel Virtual Network this route belongs to. If no
   * virtual networks are configured, the route is assigned to the default virtual
   * network of the account.
   */
  virtual_network_id?: unknown;
}

export interface RouteListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Query param: If provided, include only routes that were created (and not
   * deleted) before this time.
   */
  existed_at?: unknown;

  /**
   * Query param: If `true`, only include deleted routes. If `false`, exclude deleted
   * routes. If empty, all routes will be included.
   */
  is_deleted?: unknown;

  /**
   * Query param: If set, only list routes that are contained within this IP range.
   */
  network_subset?: unknown;

  /**
   * Query param: If set, only list routes that contain this IP range.
   */
  network_superset?: unknown;

  /**
   * Query param: The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

  /**
   * Query param: UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * Query param: UUID of the Tunnel Virtual Network this route belongs to. If no
   * virtual networks are configured, the route is assigned to the default virtual
   * network of the account.
   */
  virtual_network_id?: unknown;
}

export interface RouteDeleteParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface RouteEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Body param: The private IPv4 or IPv6 range connected by the route, in CIDR
   * notation.
   */
  network?: string;

  /**
   * Body param: The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';

  /**
   * Body param: UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * Body param: UUID of the Tunnel Virtual Network this route belongs to. If no
   * virtual networks are configured, the route is assigned to the default virtual
   * network of the account.
   */
  virtual_network_id?: unknown;
}

export namespace Routes {
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteEditResponse = RoutesAPI.RouteEditResponse;
  export import RouteListResponsesV4PagePaginationArray = RoutesAPI.RouteListResponsesV4PagePaginationArray;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteEditParams = RoutesAPI.RouteEditParams;
  export import IPs = IPsAPI.IPs;
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
  export import Networks = NetworksAPI.Networks;
  export import NetworkCreateResponse = NetworksAPI.NetworkCreateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkEditResponse = NetworksAPI.NetworkEditResponse;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export import NetworkEditParams = NetworksAPI.NetworkEditParams;
}