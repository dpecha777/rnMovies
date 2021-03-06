interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

interface IStore {
  hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;

type DesignSystemColors = Record<string, string>;
type AppearanceMode = 'light' | 'dark';
type StatusBarStyle = 'light-content' | 'dark-content' | undefined;
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
};
type CurrentAppearance = {
  value: AppearanceMode;
  system: boolean;
};

type Language = 'en' | 'cz';

// SERVICES
type AppType = 'one_screen' | 'three_tabs';

// STORES
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Czech';

// SCREENS
// Props
// type ExampleScreenProps = {
//   value?: number;
// };

// Settings
type AppearanceAction = {
  name: UIAppearance;
};

type LanguageAction = {
  name: UILanguage;
};

// API
// Responses
type CarouselsWithMovies = {
  title: string;
  items: Movie[];
}[];

type Movie = {
  id: number;
  title: string;
  year: string;
  duration: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};
