import { DmuiPage } from './app.po';

describe('dmui App', function() {
  let page: DmuiPage;

  beforeEach(() => {
    page = new DmuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
