export interface FieldInterface {
  name: string;
  value: string;
  inline?: boolean | undefined;
}

export class Field implements FieldInterface {
  name: string;
  value: string;
  inline: boolean;

  constructor(name: string, value: string, inline?: boolean) {
    const isInlineUndefined = inline === undefined || inline === null;

    this.name = name;
    this.value = value;
    this.inline = isInlineUndefined ? true : inline;
  }
}
