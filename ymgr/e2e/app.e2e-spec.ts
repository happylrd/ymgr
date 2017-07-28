import { YmgrPage } from './app.po';

describe('ymgr App', () => {
  let page: YmgrPage;

  beforeEach(() => {
    page = new YmgrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
