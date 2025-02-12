// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RateLimitsAPI from 'cloudflare/resources/rate-limits';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class RateLimits extends APIResource {
  /**
   * Creates a new rate limit for a zone. Refer to the object definition for a list
   * of required attributes.
   */
  create(
    zoneIdentifier: string,
    body: RateLimitCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/rate_limits`, { body, ...options }) as Core.APIPromise<{
        result: RateLimitCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the rate limits for a zone.
   */
  list(
    zoneIdentifier: string,
    query?: RateLimitListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateLimitListResponsesV4PagePaginationArray, RateLimitListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateLimitListResponsesV4PagePaginationArray, RateLimitListResponse>;
  list(
    zoneIdentifier: string,
    query: RateLimitListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateLimitListResponsesV4PagePaginationArray, RateLimitListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/rate_limits`,
      RateLimitListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing rate limit.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/rate_limits/${id}`, options) as Core.APIPromise<{
        result: RateLimitDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing rate limit.
   */
  edit(
    zoneIdentifier: string,
    id: string,
    body: RateLimitEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitEditResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/rate_limits/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RateLimitEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a rate limit.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/rate_limits/${id}`, options) as Core.APIPromise<{
        result: RateLimitGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RateLimitListResponsesV4PagePaginationArray extends V4PagePaginationArray<RateLimitListResponse> {}

export interface RateLimit {
  /**
   * The unique identifier of the rate limit.
   */
  id?: string;

  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  action?: RateLimit.Action;

  /**
   * Criteria specifying when the current rate limit should be bypassed. You can
   * specify that the rate limit should not apply to one or more URLs.
   */
  bypass?: Array<RateLimit.Bypass>;

  /**
   * An informative summary of the rate limit. This value is sanitized and any tags
   * will be removed.
   */
  description?: string;

  /**
   * When true, indicates that the rate limit is currently disabled.
   */
  disabled?: boolean;

  /**
   * Determines which traffic the rate limit counts towards the threshold.
   */
  match?: RateLimit.Match;

  /**
   * The time in seconds (an integer value) to count matching traffic. If the count
   * exceeds the configured threshold within this period, Cloudflare will perform the
   * configured action.
   */
  period?: number;

  /**
   * The threshold that will trigger the configured mitigation action. Configure this
   * value along with the `period` property to establish a threshold per period.
   */
  threshold?: number;
}

export namespace RateLimit {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  export interface Action {
    /**
     * The action to perform.
     */
    mode?: 'simulate' | 'ban' | 'challenge' | 'js_challenge' | 'managed_challenge';

    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    response?: Action.Response;

    /**
     * The time in seconds during which Cloudflare will perform the mitigation action.
     * Must be an integer value greater than or equal to the period. Notes: If "mode"
     * is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the
     * zone's Challenge Passage time and you should not provide this value.
     */
    timeout?: number;
  }

  export namespace Action {
    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    export interface Response {
      /**
       * The response body to return. The value must conform to the configured content
       * type.
       */
      body?: string;

      /**
       * The content type of the body. Must be one of the following: `text/plain`,
       * `text/xml`, or `application/json`.
       */
      content_type?: string;
    }
  }

  export interface Bypass {
    name?: 'url';

    /**
     * The URL to bypass.
     */
    value?: string;
  }

  /**
   * Determines which traffic the rate limit counts towards the threshold.
   */
  export interface Match {
    headers?: Array<Match.Header>;

    request?: Match.Request;

    response?: Match.Response;
  }

  export namespace Match {
    export interface Header {
      /**
       * The name of the response header to match.
       */
      name?: string;

      /**
       * The operator used when matching: `eq` means "equal" and `ne` means "not equal".
       */
      op?: 'eq' | 'ne';

      /**
       * The value of the response header, which must match exactly.
       */
      value?: string;
    }

    export interface Request {
      /**
       * The HTTP methods to match. You can specify a subset (for example,
       * `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when
       * creating a rate limit.
       */
      methods?: Array<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | '_ALL_'>;

      /**
       * The HTTP schemes to match. You can specify one scheme (`['HTTPS']`), both
       * schemes (`['HTTP','HTTPS']`), or all schemes (`['_ALL_']`). This field is
       * optional.
       */
      schemes?: Array<string>;

      /**
       * The URL pattern to match, composed of a host and a path such as
       * `example.org/path*`. Normalization is applied before the pattern is matched. `*`
       * wildcards are expanded to match applicable traffic. Query strings are not
       * matched. Set the value to `*` to match all traffic to your zone.
       */
      url?: string;
    }

    export interface Response {
      /**
       * When true, only the uncached traffic served from your origin servers will count
       * towards rate limiting. In this case, any cached traffic served by Cloudflare
       * will not count towards rate limiting. This field is optional. Notes: This field
       * is deprecated. Instead, use response headers and set "origin_traffic" to "false"
       * to avoid legacy behaviour interacting with the "response_headers" property.
       */
      origin_traffic?: boolean;
    }
  }
}

export type RateLimitCreateResponse = unknown | string;

export interface RateLimitListResponse {
  /**
   * The unique identifier of the rate limit.
   */
  id?: string;

  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  action?: RateLimitListResponse.Action;

  /**
   * Criteria specifying when the current rate limit should be bypassed. You can
   * specify that the rate limit should not apply to one or more URLs.
   */
  bypass?: Array<RateLimitListResponse.Bypass>;

  /**
   * An informative summary of the rate limit. This value is sanitized and any tags
   * will be removed.
   */
  description?: string;

  /**
   * When true, indicates that the rate limit is currently disabled.
   */
  disabled?: boolean;

  /**
   * Determines which traffic the rate limit counts towards the threshold.
   */
  match?: RateLimitListResponse.Match;

  /**
   * The time in seconds (an integer value) to count matching traffic. If the count
   * exceeds the configured threshold within this period, Cloudflare will perform the
   * configured action.
   */
  period?: number;

  /**
   * The threshold that will trigger the configured mitigation action. Configure this
   * value along with the `period` property to establish a threshold per period.
   */
  threshold?: number;
}

export namespace RateLimitListResponse {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  export interface Action {
    /**
     * The action to perform.
     */
    mode?: 'simulate' | 'ban' | 'challenge' | 'js_challenge' | 'managed_challenge';

    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    response?: Action.Response;

    /**
     * The time in seconds during which Cloudflare will perform the mitigation action.
     * Must be an integer value greater than or equal to the period. Notes: If "mode"
     * is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the
     * zone's Challenge Passage time and you should not provide this value.
     */
    timeout?: number;
  }

  export namespace Action {
    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    export interface Response {
      /**
       * The response body to return. The value must conform to the configured content
       * type.
       */
      body?: string;

      /**
       * The content type of the body. Must be one of the following: `text/plain`,
       * `text/xml`, or `application/json`.
       */
      content_type?: string;
    }
  }

  export interface Bypass {
    name?: 'url';

    /**
     * The URL to bypass.
     */
    value?: string;
  }

  /**
   * Determines which traffic the rate limit counts towards the threshold.
   */
  export interface Match {
    headers?: Array<Match.Header>;

    request?: Match.Request;

    response?: Match.Response;
  }

  export namespace Match {
    export interface Header {
      /**
       * The name of the response header to match.
       */
      name?: string;

      /**
       * The operator used when matching: `eq` means "equal" and `ne` means "not equal".
       */
      op?: 'eq' | 'ne';

      /**
       * The value of the response header, which must match exactly.
       */
      value?: string;
    }

    export interface Request {
      /**
       * The HTTP methods to match. You can specify a subset (for example,
       * `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when
       * creating a rate limit.
       */
      methods?: Array<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | '_ALL_'>;

      /**
       * The HTTP schemes to match. You can specify one scheme (`['HTTPS']`), both
       * schemes (`['HTTP','HTTPS']`), or all schemes (`['_ALL_']`). This field is
       * optional.
       */
      schemes?: Array<string>;

      /**
       * The URL pattern to match, composed of a host and a path such as
       * `example.org/path*`. Normalization is applied before the pattern is matched. `*`
       * wildcards are expanded to match applicable traffic. Query strings are not
       * matched. Set the value to `*` to match all traffic to your zone.
       */
      url?: string;
    }

    export interface Response {
      /**
       * When true, only the uncached traffic served from your origin servers will count
       * towards rate limiting. In this case, any cached traffic served by Cloudflare
       * will not count towards rate limiting. This field is optional. Notes: This field
       * is deprecated. Instead, use response headers and set "origin_traffic" to "false"
       * to avoid legacy behaviour interacting with the "response_headers" property.
       */
      origin_traffic?: boolean;
    }
  }
}

export interface RateLimitDeleteResponse {
  /**
   * The unique identifier of the rate limit.
   */
  id?: string;
}

export type RateLimitEditResponse = unknown | string;

export type RateLimitGetResponse = unknown | string;

export type RateLimitCreateParams = unknown;

export interface RateLimitListParams extends V4PagePaginationArrayParams {}

export type RateLimitEditParams = unknown;

export namespace RateLimits {
  export import RateLimit = RateLimitsAPI.RateLimit;
  export import RateLimitCreateResponse = RateLimitsAPI.RateLimitCreateResponse;
  export import RateLimitListResponse = RateLimitsAPI.RateLimitListResponse;
  export import RateLimitDeleteResponse = RateLimitsAPI.RateLimitDeleteResponse;
  export import RateLimitEditResponse = RateLimitsAPI.RateLimitEditResponse;
  export import RateLimitGetResponse = RateLimitsAPI.RateLimitGetResponse;
  export import RateLimitListResponsesV4PagePaginationArray = RateLimitsAPI.RateLimitListResponsesV4PagePaginationArray;
  export import RateLimitCreateParams = RateLimitsAPI.RateLimitCreateParams;
  export import RateLimitListParams = RateLimitsAPI.RateLimitListParams;
  export import RateLimitEditParams = RateLimitsAPI.RateLimitEditParams;
}
