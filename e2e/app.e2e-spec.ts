import { LecturerviewPage } from './app.po';

describe('lecturerview App', () => {
  let page: LecturerviewPage;

  beforeEach(() => {
    page = new LecturerviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
