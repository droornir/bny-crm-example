import { Injectable } from '@angular/core';

@Injectable()
export class GrowlerServiceMock {

  constructor() { }

  growl: (message: string, growlType: GrowlerMessageType) => number;

}

export enum GrowlerMessageType {
  Success,
  Danger,
  Warning,
  Info
}
