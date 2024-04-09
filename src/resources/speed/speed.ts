// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailabilitiesAPI from 'cloudflare/resources/speed/availabilities';
import * as PagesAPI from 'cloudflare/resources/speed/pages';
import * as ScheduleAPI from 'cloudflare/resources/speed/schedule';
import * as TestsAPI from 'cloudflare/resources/speed/tests';

export class Speed extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  schedule: ScheduleAPI.ScheduleResource = new ScheduleAPI.ScheduleResource(this._client);
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);

  /**
   * Deletes a scheduled test for a page.
   */
  delete(
    url: string,
    params: SpeedDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedDeleteResponse> {
    const { zone_id, region } = params;
    return (
      this._client.delete(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: SpeedDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the test schedule for a page in a specific region.
   */
  scheduleGet(
    url: string,
    params: SpeedScheduleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleAPI.Schedule> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ScheduleAPI.Schedule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   */
  trendsList(
    url: string,
    params: SpeedTrendsListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Trend> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/pages/${url}/trend`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Trend }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A test region with a label.
 */
export interface LabeledRegion {
  label?: string;

  /**
   * A test region.
   */
  value?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

/**
 * The Lighthouse report.
 */
export interface LighthouseReport {
  /**
   * Cumulative Layout Shift.
   */
  cls?: number;

  /**
   * The type of device.
   */
  deviceType?: 'DESKTOP' | 'MOBILE';

  error?: LighthouseReport.Error;

  /**
   * First Contentful Paint.
   */
  fcp?: number;

  /**
   * The URL to the full Lighthouse JSON report.
   */
  jsonReportUrl?: string;

  /**
   * Largest Contentful Paint.
   */
  lcp?: number;

  /**
   * The Lighthouse performance score.
   */
  performanceScore?: number;

  /**
   * Speed Index.
   */
  si?: number;

  /**
   * The state of the Lighthouse report.
   */
  state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

  /**
   * Total Blocking Time.
   */
  tbt?: number;

  /**
   * Time To First Byte.
   */
  ttfb?: number;

  /**
   * Time To Interactive.
   */
  tti?: number;
}

export namespace LighthouseReport {
  export interface Error {
    /**
     * The error code of the Lighthouse result.
     */
    code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

    /**
     * Detailed error message.
     */
    detail?: string;

    /**
     * The final URL displayed to the user.
     */
    finalDisplayedUrl?: string;
  }
}

export interface Trend {
  /**
   * Cumulative Layout Shift trend.
   */
  cls?: Array<number | null>;

  /**
   * First Contentful Paint trend.
   */
  fcp?: Array<number | null>;

  /**
   * Largest Contentful Paint trend.
   */
  lcp?: Array<number | null>;

  /**
   * The Lighthouse score trend.
   */
  performanceScore?: Array<number | null>;

  /**
   * Speed Index trend.
   */
  si?: Array<number | null>;

  /**
   * Total Blocking Time trend.
   */
  tbt?: Array<number | null>;

  /**
   * Time To First Byte trend.
   */
  ttfb?: Array<number | null>;

  /**
   * Time To Interactive trend.
   */
  tti?: Array<number | null>;
}

export interface SpeedDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

export interface SpeedDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

export interface SpeedScheduleGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

export interface SpeedTrendsListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The type of device.
   */
  deviceType: 'DESKTOP' | 'MOBILE';

  /**
   * Query param: A comma-separated list of metrics to include in the results.
   */
  metrics: string;

  /**
   * Query param: A test region.
   */
  region:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';

  /**
   * Query param:
   */
  start: string;

  /**
   * Query param: The timezone of the start and end timestamps.
   */
  tz: string;

  /**
   * Query param:
   */
  end?: string;
}

export namespace Speed {
  export import Tests = TestsAPI.Tests;
  export import Test = TestsAPI.Test;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
  export import TestGetParams = TestsAPI.TestGetParams;
  export import ScheduleResource = ScheduleAPI.ScheduleResource;
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
  export import Availabilities = AvailabilitiesAPI.Availabilities;
  export import Availability = AvailabilitiesAPI.Availability;
  export import AvailabilityListParams = AvailabilitiesAPI.AvailabilityListParams;
  export import Pages = PagesAPI.Pages;
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListResponsesSinglePage = PagesAPI.PageListResponsesSinglePage;
  export import PageListParams = PagesAPI.PageListParams;
}
