import { LogLevel } from 'typescript-logging';
import { Category, CategoryProvider } from 'typescript-logging-category-style';

const kDefaultLogProviderName = 'OwAppLogProvider';

// -----------------------------------------------------------------------------
export class LoggerService {
  private static logProvider: CategoryProvider =
    CategoryProvider.createProvider(kDefaultLogProviderName, {
      level: LogLevel.Info,
    });

  // ---------------------------------------------------------------------------
  public static setup(providerName: string) {
    LoggerService.logProvider = CategoryProvider.createProvider(providerName, {
      level: LogLevel.Info,
    });
  }

  // ---------------------------------------------------------------------------
  public static getCategory(categoryName: string): Category {
    return LoggerService.logProvider.getCategory(categoryName);
  }
}
