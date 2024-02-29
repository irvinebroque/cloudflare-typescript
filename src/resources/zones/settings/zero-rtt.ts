// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZeroRTTAPI from 'cloudflare/resources/zones/settings/zero-rtt';

export class ZeroRTT extends APIResource {
  /**
   * Changes the 0-RTT session resumption setting.
   */
  edit(params: ZeroRTTEditParams, options?: Core.RequestOptions): Core.APIPromise<ZeroRTTEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/0rtt`, { body, ...options }) as Core.APIPromise<{
        result: ZeroRTTEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets 0-RTT session resumption setting.
   */
  get(params: ZeroRTTGetParams, options?: Core.RequestOptions): Core.APIPromise<ZeroRTTGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/0rtt`, options) as Core.APIPromise<{
        result: ZeroRTTGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRTTEditResponse {
  /**
   * ID of the zone setting.
   */
  id: '0rtt';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRTTGetResponse {
  /**
   * ID of the zone setting.
   */
  id: '0rtt';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface ZeroRTTEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the 0-RTT setting.
   */
  value: 'on' | 'off';
}

export interface ZeroRTTGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ZeroRTT {
  export import ZeroRTTEditResponse = ZeroRTTAPI.ZeroRTTEditResponse;
  export import ZeroRTTGetResponse = ZeroRTTAPI.ZeroRTTGetResponse;
  export import ZeroRTTEditParams = ZeroRTTAPI.ZeroRTTEditParams;
  export import ZeroRTTGetParams = ZeroRTTAPI.ZeroRTTGetParams;
}