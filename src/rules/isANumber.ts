import { IEnforceRule } from "../IEnforceRule";

export const isANumber: IEnforceRule = (srcVal: number) => !isNaN(srcVal);
