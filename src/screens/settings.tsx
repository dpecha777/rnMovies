import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {View, ActionSheet, Text} from 'react-native-ui-lib';
import {observer, useLocalObservable} from 'mobx-react';
import * as Application from 'expo-application';

import {useStores} from '../stores';

import {Section} from '../components/section';
import {Action} from '../components/action';
import {useServices} from '../services';

type PickersStateKey = keyof Omit<PickersState, 'show' | 'hide'>;
type PickersState = {
  appearance: boolean;
  language: boolean;

  show: <T extends PickersStateKey>(what: T) => void;
  hide: <T extends PickersStateKey>(what: T) => void;
};

export const Settings: React.FC = observer(() => {
  const {t} = useServices();
  const {ui} = useStores();

  const pickers: PickersState = useLocalObservable(() => ({
    appearance: false,
    language: false,

    show<T extends PickersStateKey>(what: T) {
      pickers[what] = true;
    },
    hide<T extends PickersStateKey>(what: T) {
      pickers[what] = false;
    },
  }));

  const appearancePickOption = (option: UIAppearance) => () => {
    ui.setAppearanceMode(option);
    console.log(option);
  };

  const languagePickOption = (option: UILanguage) => () => {
    ui.setLanguage(option);
    console.log(option);
  };

  const appearanceActions: AppearanceAction[] = useMemo(() => [{name: 'System'}, {name: 'Light'}, {name: 'Dark'}], []);
  const AppearanceActionSheet = useMemo(
    () => (
      <ActionSheet
        title={t.do('settings.ui.appearance')}
        cancelButtonIndex={appearanceActions.length}
        useNativeIOS
        options={[
          ...appearanceActions.map(action => ({
            label: action.name,
            onPress: appearancePickOption(action.name),
          })),
          {
            label: t.do('general.cancel'),
          },
        ]}
        visible={pickers.appearance}
        onDismiss={() => pickers.hide('appearance')}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pickers.appearance],
  );

  const languageActions: LanguageAction[] = useMemo(() => [{name: 'System'}, {name: 'English'}, {name: 'Czech'}], []);
  const LanguageActionSheet = useMemo(
    () => (
      <ActionSheet
        title={t.do('settings.ui.language')}
        cancelButtonIndex={languageActions.length}
        useNativeIOS
        options={[
          ...languageActions.map(action => ({
            label: action.name,
            onPress: languagePickOption(action.name),
          })),
          {
            label: t.do('general.cancel'),
          },
        ]}
        visible={pickers.language}
        onDismiss={() => pickers.hide('language')}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pickers.language],
  );

  const UINote = useMemo(
    () => (
      <View paddingH-s3 marginB-s4>
        <Text grey40>{t.do('settings.ui.uiNote')}</Text>
      </View>
    ),
    [t],
  );

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Section bg title={t.do('settings.ui.title')}>
            <Action
              title={t.do('settings.ui.appearance')}
              info={ui.appearanceName}
              onPress={() => pickers.show('appearance')}
              rightIcon="chevron-forward"
            />
            {AppearanceActionSheet}

            <Action
              title={t.do('settings.ui.language')}
              info={ui.languageName}
              onPress={() => pickers.show('language')}
              rightIcon="chevron-forward"
            />
            {LanguageActionSheet}
          </Section>
          {UINote}

          <Section bg title={t.do('settings.about.title')}>
            <View>
              <Action
                disabled
                title={t.do('settings.about.appName')}
                info={Application.applicationName ?? 'No app name'}
              />
              <Action
                disabled
                title={t.do('settings.about.version')}
                info={Application.nativeApplicationVersion ?? '0.0'}
              />
            </View>
          </Section>
        </View>
      </ScrollView>
    </View>
  );
});
