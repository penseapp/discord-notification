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
    this.name = name;
    this.value = value;
    this.inline = inline || true;
  }
}
