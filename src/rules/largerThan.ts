import { IEnforceRule } from "../IEnforceRule";

export const largerThan: IEnforceRule = (srcVal: number, secondVal: number) => srcVal > secondVal;
