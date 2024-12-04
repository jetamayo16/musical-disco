Feature('account');

Scenario('test something',  ({ I }) => {
    I.amOnPage('/pisagrafico_osSegui2/zntjsp/SVT0197P.jsp?Equipo=DES&Biblioteca=CDJUAREZV1&BibliotecaDB2=CDJRDBV1');
    I.selectOption('#selectConsultar', '5');
    I.fillField('input[name="Telefono"]', 'TNCKWAK TAAMYO JOSE ERNESTO');
    I.fillField('input[name="tOS"]', 'A0');
    I.fillField('input[name="tServ"]', '1L');
    I.pressKey('Enter');
    within({ frame: '#infoConsulta' }, () => {
      I.waitForElement('.detalleSubfile0', 5);
      I.click('.detalleSubfile0');
    });
    I.wait(5);
    I.click('#btnConsultar');
    I.saveScreenshot('Account Information.png');  
});
