# odk-ts Monorepo

This repository is the monorepo for the **odk-ts** TypeScript library and its sample application.

## Structure

- **repos/odk-ts/**: The main odk-ts TypeScript library.
- **repos/sample-app/**: A sample Overwolf app demonstrating usage of odk-ts.

## Installing & Building

> **Run these commands in the root folder of the monorepo:**

### Install dependencies
```
npm install
```
This will install dependencies for all packages.

### Build odk-ts
```
npm run build:odk
```

### Build the Sample App
```
npm run build:sample:dev   # For development build
# or
npm run build:sample        # For production build
```

## Loading the Sample App in Overwolf

After building, you can load the sample app as a package using the Overwolf Packages page.

---

For more details, see the README files in each subproject.
