import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(cssSelector) {
    return element(by.id(cssSelector)).getText();
  }
}
