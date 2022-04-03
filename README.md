# rnMovies

rnMovies is a test project created in React Native for browsing a list of movies and display the detail page of selected movie.

These screens show what the application looks like:

<p float="left">
<img src="https://github.com/dpecha777/rnMovies/blob/media/home-screen.png" alt="home screen" title="Home screen" height="450" /> 
<img src="https://github.com/dpecha777/rnMovies/blob/media/movie-detail-screen.png" alt="home screen" title="Home screen" height="450" /> 
<img src="https://github.com/dpecha777/rnMovies/blob/media/settings-screen.png" alt="home screen" title="Home screen" height="450" />
</p>

## Getting Started

1. Clone the repo

```bash
> git clone https://github.com/dpecha777/rnMovies.git
```

2. Then navigate to cloned project

```bash
> cd [folder_name]
```

3. Install packages and pods

```bash
> npm i && npm run ios:pods
```

4. Start mocked json-server
```bash
> cd mockedApi && npm i && cd .. && npm run mockedApi
```

5. Run app on ios or android emulator
```bash
> npm run ios
or
> npm run android
```



## What's inside

- [React Navigation (v6)](https://github.com/react-navigation/react-navigation) - routing and navigation for React Native apps. If you'd like to use [React Native Navigation](https://github.com/wix/react-native-navigation) by Wix, check out [rnn-starter](https://github.com/kanzitelli/rnn-starter).
- [Expo Modules](https://github.com/expo/expo) - libraries and modules from [Expo](https://expo.dev) ecosystem.
- [RN UI lib](https://github.com/wix/react-native-ui-lib) - amazing Design System, UI toolset & components library for React Native. Dark Mode is implemented using this library.
- [Reanimated 2](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented.
- [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management, with [mobx-persist-store](https://github.com/quarrant/mobx-persist-store) for persisting your stores.
- [MMKV](https://github.com/mrousavy/react-native-mmkv) - efficient, small mobile key-value storage framework developed by WeChat. [~30x faster](https://github.com/mrousavy/react-native-mmkv#benchmark) than _AsyncStorage_!

#### Extra helpful libraries

- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native.
- [Hermes Engine](https://reactnative.dev/docs/hermes) - a JavaScript engine optimized for running React Native apps.
- [ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier) - keep your code neat and structured.
- [Patch Package](https://github.com/ds300/patch-package) - useful for fixing node modules instantly.
- [Release It](https://github.com/release-it/release-it) - automate versioning and publishing of your app.
- [Typescript](https://www.typescriptlang.org/) - strict syntactical superset of JavaScript.

#### Useful services/methods

- `navigation` - a service where all navigation configuration takes place in. It simplifies and abstracts the process of registering screens, layouts, etc.
- `translate` - a service that brings an easy integration of localization for an app by using [i18n-js](https://github.com/fnando/i18n-js) and [expo-localization](https://github.com/expo/expo/tree/master/packages/expo-localization). You can see an example of `en` and `cz` localizations in `Example` screen.
- `onStart` - a service where you can write your own logic when app is launched. For example, you can increment number of `appLaunches` there.
- `configureDesignSystem()` - a method where all settings for an app's design system is taking place. You can customize there colors, schemes, typegraphy, spacings, etc.


## Advantages

#### Describe app screens in one place

All setup for your screens takes place in one file `src/screens/index.ts`:

```
type Screen = 'Main' | 'Example' | 'Settings';
type Tabs = 'Main' | 'WIP' | 'Settings';

const screens: ScreenLayouts = {
  Main: {
    name: 'Main',
    component: Main,
    options: () => ({
      title: 'Home',
    }),
  },
  // ...
}

const tabs: TabScreenLayouts = {
  Main: {
    name: 'MainNavigator',
    component: HomeStack,
    options: () => ({
      title: 'Home',
    }),
  },
  // ...
}
```

#### Build layouts with ease

Stack Navigator:

```
const HomeStack = () =>
  genStackNavigator([
    screens.Main,
    screens.MovieDetail,
  ]);
```

Tab Navigator:

```
const TabNavigator = () =>
  genTabNavigator([
    tabs.Main,
    tabs.Settings,
  ]);
```

#### Navigate to other screens with predictability

```
const Screen = ({componentId}) => {
  const {nav} = useServices();

  return (
    <View>
      <Button
        label="Open Settings"
        onPress={() => nav.push('Settings')}
      />
    </View>
  )
}
```

#### Samples for new screens, services, stores and components.

So you have one structure within the project. You can find them in corresponding folders. Just copy&paste it and make the necessary changes.
