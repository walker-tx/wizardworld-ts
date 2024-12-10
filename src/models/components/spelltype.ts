/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const SpellType = {
  None: "None",
  Charm: "Charm",
  Conjuration: "Conjuration",
  Spell: "Spell",
  Transfiguration: "Transfiguration",
  HealingSpell: "HealingSpell",
  DarkCharm: "DarkCharm",
  Jinx: "Jinx",
  Curse: "Curse",
  MagicalTransportation: "MagicalTransportation",
  Hex: "Hex",
  CounterSpell: "CounterSpell",
  DarkArts: "DarkArts",
  CounterJinx: "CounterJinx",
  CounterCharm: "CounterCharm",
  Untransfiguration: "Untransfiguration",
  BindingMagicalContract: "BindingMagicalContract",
  Vanishment: "Vanishment",
} as const;
export type SpellType = ClosedEnum<typeof SpellType>;

/** @internal */
export const SpellType$inboundSchema: z.ZodNativeEnum<typeof SpellType> = z
  .nativeEnum(SpellType);

/** @internal */
export const SpellType$outboundSchema: z.ZodNativeEnum<typeof SpellType> =
  SpellType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SpellType$ {
  /** @deprecated use `SpellType$inboundSchema` instead. */
  export const inboundSchema = SpellType$inboundSchema;
  /** @deprecated use `SpellType$outboundSchema` instead. */
  export const outboundSchema = SpellType$outboundSchema;
}
