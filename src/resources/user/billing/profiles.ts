// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/user/billing/profiles';

export class Profiles extends APIResource {
  /**
   * Accesses your billing profile object.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProfileListResponse> {
    return (
      this._client.get('/user/billing/profile', options) as Core.APIPromise<{ result: ProfileListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProfileListResponse = unknown | string | null;

export namespace Profiles {
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
}