/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetWizardsIdRequest = {
  id: string;
};

export type GetWizardsIdResponse = components.WizardDto | string;

/** @internal */
export const GetWizardsIdRequest$inboundSchema: z.ZodType<
  GetWizardsIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetWizardsIdRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetWizardsIdRequest$outboundSchema: z.ZodType<
  GetWizardsIdRequest$Outbound,
  z.ZodTypeDef,
  GetWizardsIdRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWizardsIdRequest$ {
  /** @deprecated use `GetWizardsIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetWizardsIdRequest$inboundSchema;
  /** @deprecated use `GetWizardsIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetWizardsIdRequest$outboundSchema;
  /** @deprecated use `GetWizardsIdRequest$Outbound` instead. */
  export type Outbound = GetWizardsIdRequest$Outbound;
}

export function getWizardsIdRequestToJSON(
  getWizardsIdRequest: GetWizardsIdRequest,
): string {
  return JSON.stringify(
    GetWizardsIdRequest$outboundSchema.parse(getWizardsIdRequest),
  );
}

export function getWizardsIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetWizardsIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWizardsIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWizardsIdRequest' from JSON`,
  );
}

/** @internal */
export const GetWizardsIdResponse$inboundSchema: z.ZodType<
  GetWizardsIdResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.WizardDto$inboundSchema, z.string()]);

/** @internal */
export type GetWizardsIdResponse$Outbound =
  | components.WizardDto$Outbound
  | string;

/** @internal */
export const GetWizardsIdResponse$outboundSchema: z.ZodType<
  GetWizardsIdResponse$Outbound,
  z.ZodTypeDef,
  GetWizardsIdResponse
> = z.union([components.WizardDto$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWizardsIdResponse$ {
  /** @deprecated use `GetWizardsIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetWizardsIdResponse$inboundSchema;
  /** @deprecated use `GetWizardsIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetWizardsIdResponse$outboundSchema;
  /** @deprecated use `GetWizardsIdResponse$Outbound` instead. */
  export type Outbound = GetWizardsIdResponse$Outbound;
}

export function getWizardsIdResponseToJSON(
  getWizardsIdResponse: GetWizardsIdResponse,
): string {
  return JSON.stringify(
    GetWizardsIdResponse$outboundSchema.parse(getWizardsIdResponse),
  );
}

export function getWizardsIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetWizardsIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWizardsIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWizardsIdResponse' from JSON`,
  );
}
