// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSSECAPI from 'cloudflare/resources/dnssec';

export class DNSSEC extends APIResource {
  /**
   * Delete DNSSEC.
   */
  delete(params: DNSSECDeleteParams, options?: Core.RequestOptions): Core.APIPromise<DNSSECDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/dnssec`, options) as Core.APIPromise<{
        result: DNSSECDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable or disable DNSSEC.
   */
  edit(params: DNSSECEditParams, options?: Core.RequestOptions): Core.APIPromise<DNSSECDNSSEC> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/dnssec`, { body, ...options }) as Core.APIPromise<{
        result: DNSSECDNSSEC;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Details about DNSSEC status and configuration.
   */
  get(params: DNSSECGetParams, options?: Core.RequestOptions): Core.APIPromise<DNSSECDNSSEC> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dnssec`, options) as Core.APIPromise<{ result: DNSSECDNSSEC }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSSECDNSSEC {
  /**
   * Algorithm key code.
   */
  algorithm?: string | null;

  /**
   * Digest hash.
   */
  digest?: string | null;

  /**
   * Type of digest algorithm.
   */
  digest_algorithm?: string | null;

  /**
   * Coded type for digest algorithm.
   */
  digest_type?: string | null;

  /**
   * If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers
   * to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY
   * records (except those automatically generated by Cloudflare) to be added to the
   * zone.
   *
   * See
   * [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/)
   * for details.
   */
  dnssec_multi_signer?: boolean;

  /**
   * If true, allows Cloudflare to transfer in a DNSSEC-signed zone including
   * signatures from an external provider, without requiring Cloudflare to sign any
   * records on the fly.
   *
   * Note that this feature has some limitations. See
   * [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec)
   * for details.
   */
  dnssec_presigned?: boolean;

  /**
   * Full DS record.
   */
  ds?: string | null;

  /**
   * Flag for DNSSEC record.
   */
  flags?: number | null;

  /**
   * Code for key tag.
   */
  key_tag?: number | null;

  /**
   * Algorithm key type.
   */
  key_type?: string | null;

  /**
   * When DNSSEC was last modified.
   */
  modified_on?: string | null;

  /**
   * Public key for DS record.
   */
  public_key?: string | null;

  /**
   * Status of DNSSEC, based on user-desired state and presence of necessary records.
   */
  status?: 'active' | 'pending' | 'disabled' | 'pending-disabled' | 'error';
}

export type DNSSECDeleteResponse = unknown | string;

export interface DNSSECDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface DNSSECEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: If true, multi-signer DNSSEC is enabled on the zone, allowing
   * multiple providers to serve a DNSSEC-signed zone at the same time. This is
   * required for DNSKEY records (except those automatically generated by Cloudflare)
   * to be added to the zone.
   *
   * See
   * [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/)
   * for details.
   */
  dnssec_multi_signer?: boolean;

  /**
   * Body param: If true, allows Cloudflare to transfer in a DNSSEC-signed zone
   * including signatures from an external provider, without requiring Cloudflare to
   * sign any records on the fly.
   *
   * Note that this feature has some limitations. See
   * [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec)
   * for details.
   */
  dnssec_presigned?: boolean;

  /**
   * Body param: Status of DNSSEC, based on user-desired state and presence of
   * necessary records.
   */
  status?: 'active' | 'disabled';
}

export interface DNSSECGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace DNSSEC {
  export import DNSSECDNSSEC = DNSSECAPI.DNSSECDNSSEC;
  export import DNSSECDeleteResponse = DNSSECAPI.DNSSECDeleteResponse;
  export import DNSSECDeleteParams = DNSSECAPI.DNSSECDeleteParams;
  export import DNSSECEditParams = DNSSECAPI.DNSSECEditParams;
  export import DNSSECGetParams = DNSSECAPI.DNSSECGetParams;
}
