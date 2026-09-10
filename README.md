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

## Documentation

- [**Your first window in 5 minutes**](repos/odk-ts/README.md#your-first-window-in-5-minutes)&mdash;start here.
- [odk-ts README](repos/odk-ts/README.md)&mdash;guide to windows, options, positioning and events.
- [**API reference**](repos/odk-ts/docs/)&mdash;generated from the source: every class, method, event, option and enum.
- [sample-app README](repos/sample-app/README.md)&mdash;architecture of the working sample app.
