import * as fs from 'fs';

/**
 * This removes *.map files from npmignore.
 */
const removeMapFromIgnore = (): void => {
  const user = fs.readFileSync(`${__dirname}/.npmignore`, 'utf8');
  const list = user.split('\n');
  const ignoreWithoutMap = list.filter(ignore => !ignore.includes('*.map'));

  const content = ignoreWithoutMap.join('\n');
  fs.writeFileSync(`${__dirname}/.npmignore`, content, 'utf-8');
};

/**
 * This allows logger debug to be output to console (and log file)
 */
const changeLogLevelToDebug = (): void => {
  const fileLocation = `${__dirname}/common/logging/logger_service.js`;
  const loggerInitFile = fs.readFileSync(fileLocation, 'utf8');

  const modifiedLoggerInitFile =
    loggerInitFile.replace('LogLevel.Info', 'LogLevel.Debug');

  fs.writeFileSync(fileLocation, modifiedLoggerInitFile);
};

removeMapFromIgnore();
changeLogLevelToDebug();
