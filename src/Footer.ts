interface FooterInterface {
  text?: string | undefined;
}

export class Footer implements FooterInterface {
  text: string | undefined;

  constructor(text?: string) {
    this.text = text;
  }
}
