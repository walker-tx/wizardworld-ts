/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { WizardWorldCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

export enum PostFeedbackAcceptEnum {
  applicationJson = "application/json",
  textJson = "text/json",
  textPlain = "text/plain",
}

export async function feedbackPostFeedback(
  client: WizardWorldCore,
  request?: components.SendFeedbackCommand | undefined,
  options?: RequestOptions & { acceptHeaderOverride?: PostFeedbackAcceptEnum },
): Promise<
  Result<
    operations.PostFeedbackResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      components.SendFeedbackCommand$outboundSchema.optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/Feedback")();

  const headers = new Headers({
    "Content-Type": "application/json-patch+json",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, text/json;q=0.7, text/plain;q=0",
  });

  const context = {
    operationID: "post_/Feedback",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.PostFeedbackResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.text(200, operations.PostFeedbackResponse$inboundSchema),
    M.json(200, operations.PostFeedbackResponse$inboundSchema),
    M.json(200, operations.PostFeedbackResponse$inboundSchema, {
      ctype: "text/json",
    }),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
