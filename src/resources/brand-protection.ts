// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrandProtectionAPI from 'cloudflare/resources/brand-protection';

export class BrandProtection extends APIResource {
  /**
   * Submit suspicious URL for scanning
   */
  submit(
    params: BrandProtectionSubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrandProtectionSubmitResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/brand-protection/submit`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BrandProtectionSubmitResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get results for a URL scan
   */
  urlInfo(
    params: BrandProtectionURLInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrandProtectionURLInfoResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/brand-protection/url-info`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: BrandProtectionURLInfoResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BrandProtectionSubmitResponse {
  /**
   * URLs that were excluded from scanning because their domain is in our no-scan
   * list.
   */
  excluded_urls?: Array<BrandProtectionSubmitResponse.ExcludedURL>;

  /**
   * URLs that were skipped because the same URL is currently being scanned
   */
  skipped_urls?: Array<BrandProtectionSubmitResponse.SkippedURL>;

  /**
   * URLs that were successfully submitted for scanning.
   */
  submitted_urls?: Array<BrandProtectionSubmitResponse.SubmittedURL>;
}

export namespace BrandProtectionSubmitResponse {
  export interface ExcludedURL {
    /**
     * URL that was excluded.
     */
    url?: string;
  }

  export interface SkippedURL {
    /**
     * URL that was skipped.
     */
    url?: string;

    /**
     * ID of the submission of that URL that is currently scanning.
     */
    url_id?: number;
  }

  export interface SubmittedURL {
    /**
     * URL that was submitted.
     */
    url?: string;

    /**
     * ID assigned to this URL submission. Used to retrieve scanning results.
     */
    url_id?: number;
  }
}

export interface BrandProtectionURLInfoResponse {
  /**
   * List of categorizations applied to this submission.
   */
  categorizations?: Array<BrandProtectionURLInfoResponse.Categorization>;

  /**
   * List of model results for completed scans.
   */
  model_results?: Array<BrandProtectionURLInfoResponse.ModelResult>;

  /**
   * List of signatures that matched against site content found when crawling the
   * URL.
   */
  rule_matches?: Array<BrandProtectionURLInfoResponse.RuleMatch>;

  /**
   * Status of the most recent scan found.
   */
  scan_status?: BrandProtectionURLInfoResponse.ScanStatus;

  /**
   * For internal use.
   */
  screenshot_download_signature?: string;

  /**
   * For internal use.
   */
  screenshot_path?: string;

  /**
   * URL that was submitted.
   */
  url?: string;
}

export namespace BrandProtectionURLInfoResponse {
  export interface Categorization {
    /**
     * Name of the category applied.
     */
    category?: string;

    /**
     * Result of human review for this categorization.
     */
    verification_status?: string;
  }

  export interface ModelResult {
    /**
     * Name of the model.
     */
    model_name?: string;

    /**
     * Score output by the model for this submission.
     */
    model_score?: number;
  }

  export interface RuleMatch {
    /**
     * For internal use.
     */
    banning?: boolean;

    /**
     * For internal use.
     */
    blocking?: boolean;

    /**
     * Description of the signature that matched.
     */
    description?: string;

    /**
     * Name of the signature that matched.
     */
    name?: string;
  }

  /**
   * Status of the most recent scan found.
   */
  export interface ScanStatus {
    /**
     * Timestamp of when the submission was processed.
     */
    last_processed?: string;

    /**
     * For internal use.
     */
    scan_complete?: boolean;

    /**
     * Status code that the crawler received when loading the submitted URL.
     */
    status_code?: number;

    /**
     * ID of the most recent submission.
     */
    submission_id?: number;
  }
}

export interface BrandProtectionSubmitParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: URL(s) to filter submissions results by
   */
  url?: string;
}

export interface BrandProtectionURLInfoParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  url?: string;

  /**
   * Query param:
   */
  url_id_param?: BrandProtectionURLInfoParams.URLIDParam;
}

export namespace BrandProtectionURLInfoParams {
  export interface URLIDParam {
    /**
     * Submission ID(s) to filter submission results by.
     */
    url_id?: number;
  }
}

export namespace BrandProtection {
  export import BrandProtectionSubmitResponse = BrandProtectionAPI.BrandProtectionSubmitResponse;
  export import BrandProtectionURLInfoResponse = BrandProtectionAPI.BrandProtectionURLInfoResponse;
  export import BrandProtectionSubmitParams = BrandProtectionAPI.BrandProtectionSubmitParams;
  export import BrandProtectionURLInfoParams = BrandProtectionAPI.BrandProtectionURLInfoParams;
}