import React from 'react';

import {OnStartService} from './onStart';
import {NavService} from './navigation';
import {TranslateService} from './translate';
import {ApiService} from './api';

export const services = {
  t: new TranslateService(), // should be first
  nav: new NavService(),
  api: new ApiService(),
  onStart: new OnStartService(), // should be last
};
type ContextServices = typeof services;

const servicesContext = React.createContext<ContextServices>(services);
export const ServicesProvider = ({children}: any) => (
  <servicesContext.Provider value={services}>{children}</servicesContext.Provider>
);

export const useServices = (): ContextServices => React.useContext(servicesContext);

export const initServices = async (): PVoid => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key];

      if (s.init) {
        await s.init();
      }
    }
  }
};
