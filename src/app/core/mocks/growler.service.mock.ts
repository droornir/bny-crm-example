import { Injectable } from '@angular/core';

@Injectable()
export class GrowlerServiceMock {

  constructor() { }

  growl (message: string, growlType: GrowlerMessageType) {return true;};

}

export enum GrowlerMessageType {
  Success,
  Danger,
  Warning,
  Info
}
