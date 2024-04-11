import TLogLevel from "./TLogLevel";

export default class Logger {
  private logLevel: TLogLevel;

  constructor(logLevel: TLogLevel = TLogLevel.Info) {
    this.logLevel = logLevel;
  }

  public warn(something: any) {
    if ((this.logLevel as TLogLevel) >= TLogLevel.Warn) {
      console.log(something);
    }
  }
}
