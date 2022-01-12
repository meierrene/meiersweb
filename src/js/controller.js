import view from './view.js';
import { users } from './model.js';

document.querySelector('.profile-img').addEventListener('click', function () {
  alert(
    `
  Dear User!
  Thank you very much for visit my very first website.
  This website ist created by educational purposes only.
  It may not be used for commercial use.
    
  By dev: René Meier`
  );
});

const init = function () {
  view.setText();
  view.addHandlerLanguage();
  view.clearInputFields();
  view.addHandlerCheckPIN();
  view.addHandlerLogin(users);
  view.addHandlerLogout();
};
init();
