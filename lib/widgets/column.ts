import { Widget } from "."
import { CrossAxisAlignment } from "../rendering/cross-axis-alignment"
import { MainAxisAlignment } from "../rendering/main-axis-alignment"
import { MainAxisSize } from "../rendering/main-axis-size"
import { TextDirection } from "../dart-ui/text-direction"
import { VerticalDirection } from "../painting/vertical-direction"
import { TextBaseline } from "../painting/text-baseline"
import { Snippet } from "../builder/buildable-tree"

/**
 * https://api.flutter.dev/flutter/widgets/Column-class.html
 * https://api.flutter.dev/flutter/widgets/Column/Column.html
 */
export class Column extends Widget {
    mainAxisAlignment: MainAxisAlignment = MainAxisAlignment.start as Snippet
    mainAxisSize: MainAxisSize = MainAxisSize.max
    crossAxisAlignment: CrossAxisAlignment = CrossAxisAlignment.center
    textDirection: TextDirection
    verticalDirection: VerticalDirection = VerticalDirection.down as Snippet
    textBaseline: TextBaseline
    children: Array<Widget> = Array<Widget>()

    constructor(args: {
        children: Array<Widget>
        mainAxisAlignment?: MainAxisAlignment
        crossAxisAlignment?: CrossAxisAlignment
        mainAxisSize?: MainAxisSize
        verticalDirection?: VerticalDirection
    }) {
        super()
        this.children = args.children;
        this.mainAxisAlignment = args.mainAxisAlignment
        this.crossAxisAlignment = args.crossAxisAlignment
        this.mainAxisSize = args.mainAxisSize
        this.verticalDirection = args.verticalDirection
    }
}