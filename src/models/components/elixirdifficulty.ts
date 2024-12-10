/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ElixirDifficulty = {
  Unknown: "Unknown",
  Advanced: "Advanced",
  Moderate: "Moderate",
  Beginner: "Beginner",
  OrdinaryWizardingLevel: "OrdinaryWizardingLevel",
  OneOfAKind: "OneOfAKind",
} as const;
export type ElixirDifficulty = ClosedEnum<typeof ElixirDifficulty>;

/** @internal */
export const ElixirDifficulty$inboundSchema: z.ZodNativeEnum<
  typeof ElixirDifficulty
> = z.nativeEnum(ElixirDifficulty);

/** @internal */
export const ElixirDifficulty$outboundSchema: z.ZodNativeEnum<
  typeof ElixirDifficulty
> = ElixirDifficulty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ElixirDifficulty$ {
  /** @deprecated use `ElixirDifficulty$inboundSchema` instead. */
  export const inboundSchema = ElixirDifficulty$inboundSchema;
  /** @deprecated use `ElixirDifficulty$outboundSchema` instead. */
  export const outboundSchema = ElixirDifficulty$outboundSchema;
}