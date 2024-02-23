// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PreviewAPI from 'cloudflare/resources/user/load-balancers/preview';

export class Preview extends APIResource {
  /**
   * Get the result of a previous preview operation using the provided preview_id.
   */
  get(previewId: unknown, options?: Core.RequestOptions): Core.APIPromise<PreviewGetResponse> {
    return (
      this._client.get(`/user/load_balancers/preview/${previewId}`, options) as Core.APIPromise<{
        result: PreviewGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Resulting health data from a preview operation.
 */
export type PreviewGetResponse = Record<string, PreviewGetResponse.unnamed_schema_with_map_parent_0>;

export namespace PreviewGetResponse {
  export interface unnamed_schema_with_map_parent_0 {
    healthy?: boolean;

    origins?: Array<Record<string, unnamed_schema_with_map_parent_0.load_balancing_origin_health_data>>;
  }

  export namespace unnamed_schema_with_map_parent_0 {
    /**
     * The origin ipv4/ipv6 address or domain name mapped to it's health data.
     */
    export interface load_balancing_origin_health_data {
      failure_reason?: string;

      healthy?: boolean;

      response_code?: number;

      rtt?: string;
    }
  }
}

export namespace Preview {
  export import PreviewGetResponse = PreviewAPI.PreviewGetResponse;
}