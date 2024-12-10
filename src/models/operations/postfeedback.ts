/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostFeedbackResponse = components.Unit | string;

/** @internal */
export const PostFeedbackResponse$inboundSchema: z.ZodType<
  PostFeedbackResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Unit$inboundSchema, z.string()]);

/** @internal */
export type PostFeedbackResponse$Outbound = components.Unit$Outbound | string;

/** @internal */
export const PostFeedbackResponse$outboundSchema: z.ZodType<
  PostFeedbackResponse$Outbound,
  z.ZodTypeDef,
  PostFeedbackResponse
> = z.union([components.Unit$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostFeedbackResponse$ {
  /** @deprecated use `PostFeedbackResponse$inboundSchema` instead. */
  export const inboundSchema = PostFeedbackResponse$inboundSchema;
  /** @deprecated use `PostFeedbackResponse$outboundSchema` instead. */
  export const outboundSchema = PostFeedbackResponse$outboundSchema;
  /** @deprecated use `PostFeedbackResponse$Outbound` instead. */
  export type Outbound = PostFeedbackResponse$Outbound;
}

export function postFeedbackResponseToJSON(
  postFeedbackResponse: PostFeedbackResponse,
): string {
  return JSON.stringify(
    PostFeedbackResponse$outboundSchema.parse(postFeedbackResponse),
  );
}

export function postFeedbackResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostFeedbackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostFeedbackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostFeedbackResponse' from JSON`,
  );
}