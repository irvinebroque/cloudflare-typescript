// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConsumersAPI from 'cloudflare/resources/queues/consumers';

export class Consumers extends APIResource {
  /**
   * Creates a new consumer for a queue.
   */
  create(
    name: string,
    params: ConsumerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/queues/${name}/consumers`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the consumer for a queue, or creates one if it does not exist.
   */
  update(
    name: string,
    consumerName: string,
    params: ConsumerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/queues/${name}/consumers/${consumerName}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the consumer for a queue.
   */
  delete(
    name: string,
    consumerName: string,
    params: ConsumerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/workers/queues/${name}/consumers/${consumerName}`,
        options,
      ) as Core.APIPromise<{ result: ConsumerDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the consumers for a queue.
   */
  get(
    name: string,
    params: ConsumerGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/queues/${name}/consumers`,
        options,
      ) as Core.APIPromise<{ result: ConsumerGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConsumerCreateResponse {
  created_on?: unknown;

  dead_letter_queue?: string;

  environment?: unknown;

  queue_name?: unknown;

  script_name?: unknown;

  settings?: ConsumerCreateResponse.Settings;
}

export namespace ConsumerCreateResponse {
  export interface Settings {
    batch_size?: number;

    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export interface ConsumerUpdateResponse {
  created_on?: unknown;

  dead_letter_queue?: unknown;

  environment?: unknown;

  queue_name?: unknown;

  script_name?: unknown;

  settings?: ConsumerUpdateResponse.Settings;
}

export namespace ConsumerUpdateResponse {
  export interface Settings {
    batch_size?: number;

    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export type ConsumerDeleteResponse = unknown | Array<unknown> | string;

export type ConsumerGetResponse = Array<ConsumerGetResponse.ConsumerGetResponseItem>;

export namespace ConsumerGetResponse {
  export interface ConsumerGetResponseItem {
    created_on?: unknown;

    environment?: unknown;

    queue_name?: unknown;

    service?: unknown;

    settings?: ConsumerGetResponseItem.Settings;
  }

  export namespace ConsumerGetResponseItem {
    export interface Settings {
      batch_size?: number;

      max_retries?: number;

      max_wait_time_ms?: number;
    }
  }
}

export interface ConsumerCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConsumerUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConsumerDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConsumerGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Consumers {
  export import ConsumerCreateResponse = ConsumersAPI.ConsumerCreateResponse;
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerGetResponse = ConsumersAPI.ConsumerGetResponse;
  export import ConsumerCreateParams = ConsumersAPI.ConsumerCreateParams;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerDeleteParams = ConsumersAPI.ConsumerDeleteParams;
  export import ConsumerGetParams = ConsumersAPI.ConsumerGetParams;
}