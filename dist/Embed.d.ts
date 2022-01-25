import { Field } from "./Field";
import { Footer } from "./Footer";
export interface EmbedInterface {
    author?: string | undefined;
    description?: string | undefined;
    title?: string | undefined;
    color: string | undefined;
    name: string | undefined;
    footer?: Footer | undefined;
    fields?: Field[];
}
export declare class Embed implements EmbedInterface {
    author: string | undefined;
    description: string | undefined;
    title: string | undefined;
    color: string | undefined;
    footer: Footer | undefined;
    name: string | undefined;
    fields: Field[];
    constructor();
}
//# sourceMappingURL=Embed.d.ts.map