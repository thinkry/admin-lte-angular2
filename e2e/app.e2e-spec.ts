import { AdminLtePage } from './app.po';

describe('admin-lte App', () => {
  let page: AdminLtePage;

  beforeEach(() => {
    page = new AdminLtePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
