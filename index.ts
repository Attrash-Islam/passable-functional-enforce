import * as rules from "./src/index";

export const enforce = (srcVal: any) => {

    const rulesCombiner: {
        [ruleName: string]: Function;
    } =
        Object
            .keys(rules)
            .reduce((acc, ruleName) => ({
                ...acc,
                [ruleName]: (...args) => {
                    const partialFn = rules[ruleName].bind(null, srcVal);
                    if (!partialFn(...args)) {
                        console.log("Test Failed!");
                    } else {
                        console.log("Test Passed");
                    }

                    return rulesCombiner;
                }
            }), {});

    return rulesCombiner;
}

