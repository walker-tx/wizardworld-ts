/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WizardElixirDto = {
  id?: string | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const WizardElixirDto$inboundSchema: z.ZodType<
  WizardElixirDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type WizardElixirDto$Outbound = {
  id?: string | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const WizardElixirDto$outboundSchema: z.ZodType<
  WizardElixirDto$Outbound,
  z.ZodTypeDef,
  WizardElixirDto
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WizardElixirDto$ {
  /** @deprecated use `WizardElixirDto$inboundSchema` instead. */
  export const inboundSchema = WizardElixirDto$inboundSchema;
  /** @deprecated use `WizardElixirDto$outboundSchema` instead. */
  export const outboundSchema = WizardElixirDto$outboundSchema;
  /** @deprecated use `WizardElixirDto$Outbound` instead. */
  export type Outbound = WizardElixirDto$Outbound;
}

export function wizardElixirDtoToJSON(
  wizardElixirDto: WizardElixirDto,
): string {
  return JSON.stringify(WizardElixirDto$outboundSchema.parse(wizardElixirDto));
}

export function wizardElixirDtoFromJSON(
  jsonString: string,
): SafeParseResult<WizardElixirDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WizardElixirDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WizardElixirDto' from JSON`,
  );
}