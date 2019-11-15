export class RegExps {
  readonly start: RegExp;
  readonly tar: RegExp;
  readonly drive: RegExp;
  readonly see: RegExp;
  readonly files: RegExp;
  readonly folder: RegExp;
  readonly stop: RegExp;
  readonly stopall: RegExp;
  readonly disk: RegExp;
  readonly ping: RegExp;

  constructor(commands: string[]) {
    this.start = new RegExp(commands[0], 'i');
    this.tar = new RegExp(commands[1], 'i');
    this.drive = new RegExp(commands[2], 'i');
    this.see = new RegExp(commands[3], 'i');
    this.files = new RegExp(commands[4], 'i');
    this.folder = new RegExp(commands[5], 'i');
    this.stop = new RegExp(commands[6], 'i');
    this.stopall = new RegExp(commands[7], 'i');
    this.disk = new RegExp(commands[8], 'i');
    this.ping = new RegExp(commands[9], 'i');
  }
}
