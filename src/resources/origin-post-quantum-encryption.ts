// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginPostQuantumEncryptionAPI from 'cloudflare/resources/origin-post-quantum-encryption';

export class OriginPostQuantumEncryption extends APIResource {
  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  get(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostQuantumEncryptionGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/origin_post_quantum_encryption`, options) as Core.APIPromise<{
        result: OriginPostQuantumEncryptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  replace(
    zoneId: string,
    body: OriginPostQuantumEncryptionReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostQuantumEncryptionReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/cache/origin_post_quantum_encryption`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginPostQuantumEncryptionReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OriginPostQuantumEncryptionGetResponse = unknown | string | null;

export type OriginPostQuantumEncryptionReplaceResponse = unknown | string | null;

export interface OriginPostQuantumEncryptionReplaceParams {
  /**
   * Value of the Origin Post Quantum Encryption Setting.
   */
  value: 'preferred' | 'supported' | 'off';
}

export namespace OriginPostQuantumEncryption {
  export import OriginPostQuantumEncryptionGetResponse = OriginPostQuantumEncryptionAPI.OriginPostQuantumEncryptionGetResponse;
  export import OriginPostQuantumEncryptionReplaceResponse = OriginPostQuantumEncryptionAPI.OriginPostQuantumEncryptionReplaceResponse;
  export import OriginPostQuantumEncryptionReplaceParams = OriginPostQuantumEncryptionAPI.OriginPostQuantumEncryptionReplaceParams;
}