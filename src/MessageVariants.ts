import { Message } from "./Message";

const SUCCESSFUL_COLOR = 51281; // #00C851
const WARNING_COLOR = 16746496; // #FF8800
const INFO_COLOR = 3388901; // #33b5e5
const ERROR_COLOR = 16729156; // #ff4444
const NO_COLOR = undefined; // #ff4444

export class NoColorMessage extends Message {
  constructor(name: string, webhook: string) {
    super(name, webhook);
    this.setColor(NO_COLOR);
  }
}

export class SuccessfulMessage extends Message {
  constructor(name: string, webhook: string) {
    super(name, webhook);
    this.setColor(SUCCESSFUL_COLOR);
  }
}

export class WarningMessage extends Message {
  constructor(name: string, webhook: string) {
    super(name, webhook);
    this.setColor(WARNING_COLOR);
  }
}

export class InfoMessage extends Message {
  constructor(name: string, webhook: string) {
    super(name, webhook);
    this.setColor(INFO_COLOR);
  }
}

export class ErrorMessage extends Message {
  constructor(name: string, webhook: string) {
    super(name, webhook);
    this.setColor(ERROR_COLOR);
  }
}
