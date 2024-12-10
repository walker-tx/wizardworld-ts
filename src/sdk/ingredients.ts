/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  GetIngredientsAcceptEnum,
  ingredientsGetIngredients,
} from "../funcs/ingredientsGetIngredients.js";
import {
  GetIngredientsIdAcceptEnum,
  ingredientsGetIngredientsId,
} from "../funcs/ingredientsGetIngredientsId.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { GetIngredientsAcceptEnum } from "../funcs/ingredientsGetIngredients.js";

export { GetIngredientsIdAcceptEnum } from "../funcs/ingredientsGetIngredientsId.js";

export class Ingredients extends ClientSDK {
  async getIngredients(
    request: operations.GetIngredientsRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: GetIngredientsAcceptEnum;
    },
  ): Promise<operations.GetIngredientsResponse> {
    return unwrapAsync(ingredientsGetIngredients(
      this,
      request,
      options,
    ));
  }

  async getIngredientsId(
    request: operations.GetIngredientsIdRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: GetIngredientsIdAcceptEnum;
    },
  ): Promise<operations.GetIngredientsIdResponse> {
    return unwrapAsync(ingredientsGetIngredientsId(
      this,
      request,
      options,
    ));
  }
}