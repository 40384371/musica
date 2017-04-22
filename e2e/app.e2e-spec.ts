import { ProyectoMusicaPage } from './app.po';

describe('proyecto-musica App', () => {
  let page: ProyectoMusicaPage;

  beforeEach(() => {
    page = new ProyectoMusicaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
