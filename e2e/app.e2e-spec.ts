import { GestaoVinhosEstudoPage } from './app.po';

describe('gestao-vinhos-estudo App', () => {
  let page: GestaoVinhosEstudoPage;

  beforeEach(() => {
    page = new GestaoVinhosEstudoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
