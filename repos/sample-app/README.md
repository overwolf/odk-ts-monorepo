# Overwolf Development Kit Sample App

## Overview

This is a basic Overwolf sample app demonstrating how to use the background window as the main window to manage the business logic of the app.
The sample is designed to showcase the usage of the **Overwolf Development Kit (odk-ts)** library, providing practical examples of window management and control in an Overwolf environment.

---

### When updating local odk-ts library:

- In the `odk-ts` project, run `npm run builddevpackage` (or the appropriate build command for the library)
- Copy the resulting `package.tgz` file to `3rd_party/overwolf`
- Run `npm i file:3rd_party/overwolf/package.tgz`

### To debug

- `npm install`
- `npm run dev`
- `F5` (Launch overwolf configuration)

---

## Architecture and Main Classes

- **Background Window:**

  - Acts as the main controller for the app, running in the background and managing the overall windowing logic.
  - Holds an instance of the Window Manager Service, which is responsible for creating, opening, and closing all app windows (desktop, OSR, OSR in-game only).
  - Centralizes business logic and coordinates window state and transitions.

- **Window Manager Service:**

  - A service class that encapsulates all logic related to window management.
  - Handles the creation, opening, and closing of different window types using the Overwolf Development Kit (odk-ts) library.
  - Provides a clean interface for the background window to manage windows without dealing with low-level API details.

- **Window UI Controller:**

  - Each window (desktop, OSR, OSR in-game) has its own UI controller class.
  - The controller is bound to the window's UI and is responsible for handling user interactions and controlling the window instance.
  - Uses the Overwolf Development Kit (odk-ts) library to perform actions such as setting position, size, bounds, centering, docking, anchoring, minimizing, maximizing, and closing the window.
  - Demonstrates usage of `Windows.Self()` to obtain and control the current window instance.

- **User Action Service:**

  - Handles user-initiated actions and commands within the app.
  - Provides a layer for processing and responding to user events, such as button clicks or menu selections, and can trigger window or app logic accordingly.

- **Windows Tunnel Data Service:**

  - Provides a global data map for sharing objects and services between the background window and other app windows.
  - Used to register and retrieve services or data by key, enabling non-background windows to access background-registered services and shared state.
  - Ensures all windows can communicate and share resources through the main window context.

- **External Services Exposer:**

  - Registers background services as externally accessible by injecting them into the Windows Tunnel Data Service.
  - Allows non-background windows to access and use background-only services by exposing them through a shared tunnel.
  - Ensures that only services implementing a specific interface are exposed, maintaining control and security over what is shared.

## How It Works

- The **background window** is launched as the main process and initializes the Window Manager Service.
- The Window Manager Service creates and manages all other windows in the app, ensuring only the required windows are open at any time.
  Each window, when opened, instantiates its own **Window UI Controller**, which binds to the window's UI and provides all window control functionality using the odk-ts library.
- This separation of concerns allows the background window to focus on business logic and window orchestration,
  while each window controller handles direct user interaction and window manipulation.

### Key Features

- **Background Window as Main Controller.**

- **Demonstrates odk-ts Library:**

  - The app is built to demonstrate the use of the Overwolf Development Kit (odk-ts) library for window management and other Overwolf features.

- **Window Manager Service:**

  - The sample includes a window manager service that creates and manages different types of windows:
    - **Desktop window**
    - **OSR (Off-Screen Rendering) window**
    - **OSR In-Game Only window**
  - This service handles opening and closing windows, providing a clear example of how to use the Overwolf Development Kit (odk-ts) library for window lifecycle management.

- **Window UI Controller Usage:**
  - Each window's UI controller demonstrates how to control a window using the Overwolf Development Kit (odk-ts) library, including setting position, size, bounds, centering, docking, anchoring, minimizing, maximizing, and closing windows.
  - It also shows how to use the `Windows.Self()` function to obtain a reference to the current window and interact with it programmatically.

This sample app is intended as a starting point for developers building Overwolf apps with the Overwolf Development Kit (odk-ts) library, providing clear and practical code examples for common window management tasks.
