// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as OverridesAPI from 'cloudflare/resources/firewall/waf/overrides';
import * as PackagesAPI from 'cloudflare/resources/firewall/waf/packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace WAF {
  export import Overrides = OverridesAPI.Overrides;
  export import WAFOverride = OverridesAPI.WAFOverride;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import WAFOverridesV4PagePaginationArray = OverridesAPI.WAFOverridesV4PagePaginationArray;
  export import OverrideCreateParams = OverridesAPI.OverrideCreateParams;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideListParams = OverridesAPI.OverrideListParams;
  export import Packages = PackagesAPI.Packages;
  export import PackageListResponse = PackagesAPI.PackageListResponse;
  export import PackageGetResponse = PackagesAPI.PackageGetResponse;
  export import PackageListResponsesV4PagePaginationArray = PackagesAPI.PackageListResponsesV4PagePaginationArray;
  export import PackageListParams = PackagesAPI.PackageListParams;
}
