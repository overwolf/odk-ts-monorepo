import { LogLevel, RawLogMessage } from 'typescript-logging';
import { Category, CategoryConfig, CategoryProvider } from 'typescript-logging-category-style';

// -----------------------------------------------------------------------------
// We use 'typescript-logging' so that in production, where there is a single
// file per-window, we can still understand which class printed a log.
export class LoggerService {
  private static provider: CategoryProvider;
  private static initialized = false;

  // ---------------------------------------------------------------------------
  public static getLogger(): Category {
    if (!this.initialized) {
      this.setup();
    }

    return LoggerService.provider.getCategory('LoggerService');
  }

  // ---------------------------------------------------------------------------
  private static setup() {
    const config = this.createLoggerCategoryConfiguration();
    LoggerService.provider =
      CategoryProvider.createProvider('LoggerService', config);
    this.initialized = true;
  }

  // ---------------------------------------------------------------------------
  private static createLoggerCategoryConfiguration(): Partial<CategoryConfig> {
    const rawLogMessage = (
      msg: RawLogMessage, formatArg: (arg: unknown) => string
    ): void => {
      // We customize the log message to remove the timestamp, as Overwolf
      // already prints the timestamp to the log files.
      const idx = msg.logNames.indexOf('#') + 1;
      const clazz = msg.logNames.slice(idx).toString();
      console.info(`[${clazz}] [${msg.level}] ${msg.message}`);
    };

    const categoryConfig: Partial<CategoryConfig> = {
      level: LogLevel.Debug,
      channel: {
        type: 'RawLogChannel',
        write: rawLogMessage
      }
    };

    return categoryConfig;
  }
}
