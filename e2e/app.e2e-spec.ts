import { JwtAngular2Page } from './app.po';

describe('jwt-angular2 App', () => {
  let page: JwtAngular2Page;

  beforeEach(() => {
    page = new JwtAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
