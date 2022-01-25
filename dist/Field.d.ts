export interface FieldInterface {
    name: string;
    value: string;
    inline?: boolean | undefined;
}
export declare class Field implements FieldInterface {
    name: string;
    value: string;
    inline: boolean;
    constructor(name: string, value: string, inline?: boolean);
}
//# sourceMappingURL=Field.d.ts.map