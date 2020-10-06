import { BuildableTree } from "../builder/buildable-tree";
import { Snippet } from "../builder/snippet-builder";
import { double } from "../dart";
export class Radius extends BuildableTree {
    static circular(radius: double): Radius {
        return new Radius().extendWithFactoryName("circular").overrideArguments({
            __default__: radius
        })
    }

    static elliptical(x: double, y: double): Radius {
        return new Radius().extendWithFactoryName("elliptical").overrideArguments({
            __default__x: x,
            __default__y: y
        })
    }

    static readonly zero = Snippet.fromStatic("Radius.zero")
}