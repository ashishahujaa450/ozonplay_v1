import { OzonplayAppPage } from './app.po';

describe('ozonplay-app App', () => {
  let page: OzonplayAppPage;

  beforeEach(() => {
    page = new OzonplayAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
