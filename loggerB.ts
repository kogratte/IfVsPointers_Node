import TLogLevel from "./TLogLevel";

export default class Logger {
  public warn: (something: any) => void;

  constructor(logLevel: TLogLevel = TLogLevel.Info) {
    if ((logLevel as TLogLevel) >= TLogLevel.Warn) {
      this.warn = this.warnImplem;
    } else {
      this.warn = this.noop;
    }
  }

  private noop() {}

  private warnImplem(something: any) {
    debugger;
    console.log(something);
  }
}
