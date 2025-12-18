import * as fs from 'fs';

/**
 * This renames the package.
 */
const renamePackage = (): void => {
  const source = fs
    .readFileSync(`${__dirname}/../package.json`)
    .toString('utf-8');
  const sourceObj = JSON.parse(source);
  const version = sourceObj.version;

  fs.renameSync(
    `${__dirname}/overwolf-odk-ts-${version}.tgz`,
    `${__dirname}/package.tgz`
  );
};

renamePackage();
