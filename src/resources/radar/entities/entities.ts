// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as ASNsAPI from 'cloudflare/resources/radar/entities/asns';
import * as LocationsAPI from 'cloudflare/resources/radar/entities/locations';

export class Entities extends APIResource {
  asns: ASNsAPI.ASNs = new ASNsAPI.ASNs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);

  /**
   * Get IP address information.
   */
  get(query: EntityGetParams, options?: Core.RequestOptions): Core.APIPromise<EntityGetResponse> {
    return (
      this._client.get('/radar/entities/ip', { query, ...options }) as Core.APIPromise<{
        result: EntityGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EntityGetResponse {
  ip: EntityGetResponse.IP;
}

export namespace EntityGetResponse {
  export interface IP {
    asn: string;

    asnLocation: string;

    asnName: string;

    asnOrgName: string;

    ip: string;

    ipVersion: string;

    location: string;

    locationName: string;
  }
}

export interface EntityGetParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Entities {
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
  export import ASNs = ASNsAPI.ASNs;
  export import ASNListResponse = ASNsAPI.ASNListResponse;
  export import ASNGetResponse = ASNsAPI.ASNGetResponse;
  export import ASNIPResponse = ASNsAPI.ASNIPResponse;
  export import ASNRelResponse = ASNsAPI.ASNRelResponse;
  export import ASNListParams = ASNsAPI.ASNListParams;
  export import ASNGetParams = ASNsAPI.ASNGetParams;
  export import ASNIPParams = ASNsAPI.ASNIPParams;
  export import ASNRelParams = ASNsAPI.ASNRelParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
