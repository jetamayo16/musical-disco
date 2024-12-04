const { I } = inject();


Given('I am in the Order Managment APP', () => {
  I.amOnPage('/pisagrafico_osSegui2/zntjsp/SVT0197P.jsp?Equipo=DES&Biblioteca=CDJUAREZV1&BibliotecaDB2=CDJRDBV1');
});

When('I enter the costumer name {string}', (customerName) => {
  I.selectOption('#selectConsultar', '5');
  I.fillField('input[name="Telefono"]', customerName);
  I.pressKey('Enter');
  within({ frame: '#infoConsulta' }, () => {
    I.waitForElement('.detalleSubfile0', 5);
    I.click('.detalleSubfile0');
  });
});

When('I click on the Detail button', () => {
  I.wait(5);
  I.click('#btnConsultar');
});

Then('I should see the order number and the costumer information', () => {
  I.saveScreenshot('Account Information.png');  
});
