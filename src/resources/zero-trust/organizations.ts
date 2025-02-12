// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as OrganizationsAPI from 'cloudflare/resources/zero-trust/organizations';

export class Organizations extends APIResource {
  /**
   * Sets up a Zero Trust organization for your account or zone.
   */
  create(
    params: OrganizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustOrganizations> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/organizations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustOrganizations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   */
  update(
    params: OrganizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustOrganizations> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/organizations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustOrganizations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   */
  list(
    params?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustOrganizations>;
  list(options?: Core.RequestOptions): Core.APIPromise<ZeroTrustOrganizations>;
  list(
    params: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustOrganizations> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/organizations`,
        options,
      ) as Core.APIPromise<{ result: ZeroTrustOrganizations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes a user's access across all applications.
   */
  revokeUsers(
    params: OrganizationRevokeUsersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRevokeUsersResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/organizations/revoke_user`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrganizationRevokeUsersResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZeroTrustOrganizations {
  /**
   * When set to true, users can authenticate via WARP for any application in your
   * organization. Application settings will take precedence over this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  created_at?: string;

  custom_pages?: ZeroTrustOrganizations.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: ZeroTrustOrganizations.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  updated_at?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace ZeroTrustOrganizations {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export type OrganizationRevokeUsersResponse = true | false;

export interface OrganizationCreateParams {
  /**
   * Body param: The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain: string;

  /**
   * Body param: The name of your Zero Trust organization.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: When set to true, users can authenticate via WARP for any
   * application in your organization. Application settings will take precedence over
   * this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * Body param: When set to `true`, users skip the identity provider selection step
   * during login.
   */
  auto_redirect_to_identity?: boolean;

  /**
   * Body param: Lock all settings as Read-Only in the Dashboard, regardless of user
   * permission. Updates may only be made via the API or Terraform for this account
   * when enabled.
   */
  is_ui_read_only?: boolean;

  /**
   * Body param:
   */
  login_design?: OrganizationCreateParams.LoginDesign;

  /**
   * Body param: The amount of time that tokens issued for applications will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;

  /**
   * Body param: A description of the reason why the UI read only field is being
   * toggled.
   */
  ui_read_only_toggle_reason?: string;

  /**
   * Body param: The amount of time a user seat is inactive before it expires. When
   * the user seat exceeds the set time of inactivity, the user is removed as an
   * active seat and no longer counts against your Teams seat count. Must be in the
   * format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`,
   * `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * Body param: The amount of time that tokens issued for applications will be
   * valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationCreateParams {
  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationUpdateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: When set to true, users can authenticate via WARP for any
   * application in your organization. Application settings will take precedence over
   * this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * Body param: The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * Body param: When set to `true`, users skip the identity provider selection step
   * during login.
   */
  auto_redirect_to_identity?: boolean;

  /**
   * Body param:
   */
  custom_pages?: OrganizationUpdateParams.CustomPages;

  /**
   * Body param: Lock all settings as Read-Only in the Dashboard, regardless of user
   * permission. Updates may only be made via the API or Terraform for this account
   * when enabled.
   */
  is_ui_read_only?: boolean;

  /**
   * Body param:
   */
  login_design?: OrganizationUpdateParams.LoginDesign;

  /**
   * Body param: The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * Body param: The amount of time that tokens issued for applications will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;

  /**
   * Body param: A description of the reason why the UI read only field is being
   * toggled.
   */
  ui_read_only_toggle_reason?: string;

  /**
   * Body param: The amount of time a user seat is inactive before it expires. When
   * the user seat exceeds the set time of inactivity, the user is removed as an
   * active seat and no longer counts against your Teams seat count. Must be in the
   * format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`,
   * `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * Body param: The amount of time that tokens issued for applications will be
   * valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationUpdateParams {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface OrganizationRevokeUsersParams {
  /**
   * Body param: The email of the user to revoke.
   */
  email: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
}

export namespace Organizations {
  export import ZeroTrustOrganizations = OrganizationsAPI.ZeroTrustOrganizations;
  export import OrganizationRevokeUsersResponse = OrganizationsAPI.OrganizationRevokeUsersResponse;
  export import OrganizationCreateParams = OrganizationsAPI.OrganizationCreateParams;
  export import OrganizationUpdateParams = OrganizationsAPI.OrganizationUpdateParams;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import OrganizationRevokeUsersParams = OrganizationsAPI.OrganizationRevokeUsersParams;
}
