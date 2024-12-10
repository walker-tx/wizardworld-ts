/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  GetHousesAcceptEnum,
  housesGetHouses,
} from "../funcs/housesGetHouses.js";
import {
  GetHousesIdAcceptEnum,
  housesGetHousesId,
} from "../funcs/housesGetHousesId.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { GetHousesAcceptEnum } from "../funcs/housesGetHouses.js";

export { GetHousesIdAcceptEnum } from "../funcs/housesGetHousesId.js";

export class Houses extends ClientSDK {
  async getHouses(
    request: operations.GetHousesRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetHousesAcceptEnum },
  ): Promise<operations.GetHousesResponse> {
    return unwrapAsync(housesGetHouses(
      this,
      request,
      options,
    ));
  }

  async getHousesId(
    request: operations.GetHousesIdRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetHousesIdAcceptEnum },
  ): Promise<operations.GetHousesIdResponse> {
    return unwrapAsync(housesGetHousesId(
      this,
      request,
      options,
    ));
  }
}