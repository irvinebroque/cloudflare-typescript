// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp/prefixes';
import { SinglePage } from 'cloudflare/pagination';

export class Prefixes extends APIResource {
  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to
   * control which specific subnets are advertised to the Internet. It is possible to
   * advertise subnets more specific than an IP Prefix by creating more specific BGP
   * Prefixes.
   */
  list(
    prefixId: string,
    params: PrefixListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressingIpamBGPPrefixesSinglePage, AddressingIpamBGPPrefixes> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes`,
      AddressingIpamBGPPrefixesSinglePage,
      options,
    );
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement
   * status (advertised or withdrawn).
   */
  edit(
    prefixId: string,
    bgpPrefixId: string,
    params: PrefixEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingIpamBGPPrefixes> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: AddressingIpamBGPPrefixes }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a single BGP Prefix according to its identifier
   */
  get(
    prefixId: string,
    bgpPrefixId: string,
    params: PrefixGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingIpamBGPPrefixes> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        options,
      ) as Core.APIPromise<{ result: AddressingIpamBGPPrefixes }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AddressingIpamBGPPrefixesSinglePage extends SinglePage<AddressingIpamBGPPrefixes> {}

export interface AddressingIpamBGPPrefixes {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: AddressingIpamBGPPrefixes.BGPSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: AddressingIpamBGPPrefixes.OnDemand;
}

export namespace AddressingIpamBGPPrefixes {
  export interface BGPSignalOpts {
    /**
     * Whether control of advertisement of the prefix to the Internet is enabled to be
     * performed via BGP signal
     */
    enabled?: boolean;

    /**
     * Last time BGP signaling control was toggled. This field is null if BGP signaling
     * has never been enabled.
     */
    modified_at?: string | null;
  }

  export interface OnDemand {
    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface PrefixListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PrefixEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  on_demand?: PrefixEditParams.OnDemand;
}

export namespace PrefixEditParams {
  export interface OnDemand {
    advertised?: boolean;
  }
}

export interface PrefixGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Prefixes {
  export import AddressingIpamBGPPrefixes = PrefixesAPI.AddressingIpamBGPPrefixes;
  export import AddressingIpamBGPPrefixesSinglePage = PrefixesAPI.AddressingIpamBGPPrefixesSinglePage;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
}
