import {
  ComponentFactory,
  ComponentRef,
  Injector
} from '@angular/core';

import { FrameworkMountingData } from '@ionic/core';

export interface AngularMountingData extends FrameworkMountingData {
  componentFactory?: ComponentFactory<any>;
  childInjector?: Injector;
  componentRef?: ComponentRef<any>;
  instance?: any;
  angularHostElement?: HTMLElement;
}

export interface ModalDelegate {
  showModal: boolean;
  isHydrated: boolean;
  role: string;
  classes: string[];
}