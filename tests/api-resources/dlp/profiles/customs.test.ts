// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customs', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.dlp.profiles.customs.create('023e105f4ecef8ad9ca31a8372d0c353', {
      profiles: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.dlp.profiles.customs.create('023e105f4ecef8ad9ca31a8372d0c353', {
      profiles: [
        {
          allowed_match_count: 5,
          description: 'A standard CVV card number',
          entries: [
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
          ],
          name: 'Generic CVV Card Number',
        },
        {
          allowed_match_count: 5,
          description: 'A standard CVV card number',
          entries: [
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
          ],
          name: 'Generic CVV Card Number',
        },
        {
          allowed_match_count: 5,
          description: 'A standard CVV card number',
          entries: [
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
          ],
          name: 'Generic CVV Card Number',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.dlp.profiles.customs.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.dlp.profiles.customs.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.dlp.profiles.customs.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '384e129d-25bd-403c-8019-bc19eb7a8a5f',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace', async () => {
    const responsePromise = cloudflare.dlp.profiles.customs.replace(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});