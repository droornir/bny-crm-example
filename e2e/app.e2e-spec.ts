import { AppPage } from './app.po';
import {browser} from "protractor";

describe('angular-crm-example App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display orders page with no customers', () => {
    page.navigateTo().then(() => {
      browser.waitForAngular().then(() => {
          return browser.get('/orders');
      })
    });
    expect(page.getParagraphText('pageName')).toEqual('Orders');
    expect(page.getParagraphText('noCustomersPromptMessage')).toEqual('No customers found');
  });
});
