import { IEnforceRule } from "../IEnforceRule";

export const smallerThan: IEnforceRule = (srcVal: number, secondVal: number) => srcVal < secondVal;
