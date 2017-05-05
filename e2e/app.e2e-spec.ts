import { CodeschoolScreencastAngularAppPage } from './app.po';

describe('codeschool-screencast-angular-app App', () => {
  let page: CodeschoolScreencastAngularAppPage;

  beforeEach(() => {
    page = new CodeschoolScreencastAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
