// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/addressing/prefixes/bgp/bindings';
import { SinglePage } from 'cloudflare/pagination';

export class Bindings extends APIResource {
  /**
   * Creates a new Service Binding, routing traffic to IPs within the given CIDR to a
   * service running on Cloudflare's network. **Note:** This API may only be used on
   * prefixes currently configured with a Magic Transit service binding, and only
   * allows creating service bindings for the Cloudflare CDN or Cloudflare Spectrum.
   */
  create(
    prefixId: string,
    params: BindingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingServiceBinding> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressingServiceBinding }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the Cloudflare services this prefix is currently bound to. Traffic sent to
   * an address within an IP prefix will be routed to the Cloudflare service of the
   * most-specific Service Binding matching the address. **Example:** binding
   * `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare
   * CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other
   * IPs in the prefix to Cloudflare Magic Transit.
   */
  list(
    prefixId: string,
    params: BindingListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressingServiceBindingsSinglePage, AddressingServiceBinding> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings`,
      AddressingServiceBindingsSinglePage,
      options,
    );
  }

  /**
   * Delete a Service Binding
   */
  delete(
    prefixId: string,
    bindingId: string,
    params: BindingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings/${bindingId}`,
        options,
      ) as Core.APIPromise<{ result: BindingDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single Service Binding
   */
  get(
    prefixId: string,
    bindingId: string,
    params: BindingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingServiceBinding> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings/${bindingId}`,
        options,
      ) as Core.APIPromise<{ result: AddressingServiceBinding }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AddressingServiceBindingsSinglePage extends SinglePage<AddressingServiceBinding> {}

export interface AddressingServiceBinding {
  /**
   * Identifier
   */
  id?: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  /**
   * Status of a Service Binding's deployment to the Cloudflare network
   */
  provisioning?: AddressingServiceBinding.Provisioning;

  /**
   * Identifier
   */
  service_id?: string;

  /**
   * Name of a service running on the Cloudflare network
   */
  service_name?: string;
}

export namespace AddressingServiceBinding {
  /**
   * Status of a Service Binding's deployment to the Cloudflare network
   */
  export interface Provisioning {
    /**
     * When a binding has been deployed to a majority of Cloudflare datacenters, the
     * binding will become active and can be used with its associated service.
     */
    state?: 'provisioning' | 'active';
  }
}

export type BindingDeleteResponse = unknown | Array<unknown> | string;

export interface BindingCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  /**
   * Body param: Identifier
   */
  service_id?: string;
}

export interface BindingListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface BindingDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface BindingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Bindings {
  export import AddressingServiceBinding = BindingsAPI.AddressingServiceBinding;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import AddressingServiceBindingsSinglePage = BindingsAPI.AddressingServiceBindingsSinglePage;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
  export import BindingListParams = BindingsAPI.BindingListParams;
  export import BindingDeleteParams = BindingsAPI.BindingDeleteParams;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
