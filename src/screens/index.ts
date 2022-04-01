import {ModalScreenLayouts, ScreenLayouts, TabScreenLayouts} from '../services/navigation/types';

import {Main} from './main';
import {Settings} from './settings';
import {genRootNavigator, genStackNavigator, genTabNavigator} from '../services/navigation/help';
import {services} from '../services';

// Describe your screens here
export type Tabs = 'Main' | 'Settings';
export type Modal = 'ExampleModal';
export type Screen = 'Main' | 'Settings';

export type ModalProps = {
  ExampleModal: undefined;
};
export type ScreenProps = {
  Main: undefined;
  Example: undefined;
  Settings: undefined;
} & ModalProps;

const {t} = services;

// Screens
const screens: ScreenLayouts = {
  Main: {
    name: 'Main',
    component: Main,
    options: () => ({
      title: t.do('home.title'),
    }),
  },
  Settings: {
    name: 'Settings',
    component: Settings,
    options: () => ({
      title: 'Settings',
    }),
  },
};
const HomeStack = () => genStackNavigator([screens.Main]);
const SettingsStack = () => genStackNavigator([screens.Settings]);
const ExampleModalStack = () => genStackNavigator([screens.Main]);

// Tabs
const tabs: TabScreenLayouts = {
  Main: {
    name: 'MainNavigator',
    component: HomeStack,
    options: () => ({
      title: t.do('home.title'),
    }),
  },
  Settings: {
    name: 'SettingsNavigator',
    component: SettingsStack,
    options: () => ({
      title: 'Settings',
    }),
  },
};
const TabNavigator = () => genTabNavigator([tabs.Main, tabs.Settings]);

// Modals
const modals: ModalScreenLayouts = {
  ExampleModal: {
    name: 'ExampleModal',
    component: ExampleModalStack,
    options: () => ({
      title: 'ExampleModal',
    }),
  },
};

// Root Navigator
export const RootNavigator = (): JSX.Element => genRootNavigator(TabNavigator, [modals.ExampleModal]);
