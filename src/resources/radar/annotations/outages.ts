// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OutagesAPI from 'cloudflare/resources/radar/annotations/outages';
import * as RadarAPI from 'cloudflare/resources/radar/radar';

export class Outages extends APIResource {
  /**
   * Get latest Internet outages and anomalies.
   */
  get(query?: OutageGetParams, options?: Core.RequestOptions): Core.APIPromise<OutageGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<OutageGetResponse>;
  get(
    query: OutageGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutageGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/annotations/outages', { query, ...options }) as Core.APIPromise<{
        result: OutageGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the number of outages for locations.
   */
  locations(
    query?: OutageLocationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutageLocationsResponse>;
  locations(options?: Core.RequestOptions): Core.APIPromise<OutageLocationsResponse>;
  locations(
    query: OutageLocationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutageLocationsResponse> {
    if (isRequestOptions(query)) {
      return this.locations({}, query);
    }
    return (
      this._client.get('/radar/annotations/outages/locations', { query, ...options }) as Core.APIPromise<{
        result: OutageLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OutageGetResponse {
  annotations: Array<OutageGetResponse.Annotation>;
}

export namespace OutageGetResponse {
  export interface Annotation {
    id: string;

    asns: Array<number>;

    asnsDetails: Array<Annotation.ASNsDetail>;

    dataSource: string;

    eventType: string;

    locations: Array<string>;

    locationsDetails: Array<RadarAPI.UnnamedSchemaRef16e559c45a31db5480e21fbe904b2e42>;

    outage: Annotation.Outage;

    startDate: string;

    description?: string;

    endDate?: string;

    linkedUrl?: string;

    scope?: string;
  }

  export namespace Annotation {
    export interface ASNsDetail {
      asn: string;

      name: string;

      locations?: RadarAPI.UnnamedSchemaRef16e559c45a31db5480e21fbe904b2e42;
    }

    export interface Outage {
      outageCause: string;

      outageType: string;
    }
  }
}

export interface OutageLocationsResponse {
  annotations: Array<RadarAPI.UnnamedSchemaRef83a14d589e799bc901b9ccc870251d09>;
}

export interface OutageGetParams {
  /**
   * Single ASN as integer.
   */
  asn?: number;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?:
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl';

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Location Alpha2 code.
   */
  location?: string;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;
}

export interface OutageLocationsParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?:
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl';

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;
}

export namespace Outages {
  export import OutageGetResponse = OutagesAPI.OutageGetResponse;
  export import OutageLocationsResponse = OutagesAPI.OutageLocationsResponse;
  export import OutageGetParams = OutagesAPI.OutageGetParams;
  export import OutageLocationsParams = OutagesAPI.OutageLocationsParams;
}
