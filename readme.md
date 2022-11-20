# Native App (Expo)

This simple app uses Expo's `Managed Workflow` (as opposed to Bare workflow). For more information on workflows in Expo, [click here](https://docs.expo.dev/introduction/managed-vs-bare).

## Quick Start

```sh
# Clone the repo
git clone https://github.com/Jmedders/energy-expo

# navigate into the root directory
cd energy-expo

# Install the dependencies
npm install

# Spin up the dev server
npx expo start

# You should now see the expo startup menu (including a QR code)
# If you want to run the app on your device, scan the QR code
# You'll need Expo Go installed on your device
# If you want to run the app on an android emulator press, 'a'
# If you want to run the app on an iphone simulator, press 'i'
# To run on emulators/simulators,
# you'll need XCode & / or Android Studio
```

## Running on emulators / simulators:

If you want to run on emulators/simulators, follow the [React Native CLI instructions](https://reactnative.dev/docs/environment-setup)

## What I'd do going forward:

- The immediate add would be establishing testing, specifically:
  - I'd bring in a package like [msw](https://mswjs.io/) to mock requests and assert UI responds appropriately
  - I'd create some reusable testing patterns / providers that can be consumed easily
- Establish Husky, Linting, Prettier rules
- Allow for dynamic location
  - likely by requesting user's location, though could also allow user to input latitude & longitude
- I left a variety of `TODO`s in the app. See them for more info: (e.g. usage of env variable, creation of global color constants, theming, additional loading states)
- Splash screen while app loading
- if state got more complex, obviously we could consider adding data management strategies like `react-query`, `swr`, or `apollo` (if we were using graphQL) in conjunction with normal `Context Providers`

---

## Contributing:

### Adding dependencies

Unlike most JavaScript/Typescript projects, you will not use `npm` or `yarn` to install dependencies. Instead install via Expo:

```sh
# Regular dependency
npx expo install [package-name]

# Dev dependency
npx expo install [package-name] -- --save-dev
```

# Instructions

Provided instructions can be found [here](./instructions.md)

## Functionality Checklist

- ✅ allows user to view surrounding public charging stations
  - no filters, or car compatibility concerns, all compatible with ev (✅)
- ✅ allows user to select one of the charging stations
- ✅ once charger is selected, allow user to "start charging"
- ✅ tells backend it wants to charge at that station
  - simple POST, no authentication required (✅)
