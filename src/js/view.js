import { localeObject } from './config.js';

class View {
  #logged = false;
  #loginContainer = document.querySelector('.login-container');
  #accessMenu = document.querySelector('.access-menu');
  #articleContainer = document.querySelector('.article-container');
  #userInput = document.querySelector('.username-input');
  #userPIN = document.querySelector('.password-input');
  #checkPINLabel = document.querySelector('.check-PIN');
  #checkPIN = document.querySelector('.show-pass');
  #login = document.querySelector('.login-btn');
  #logout = document.querySelector('.logout-btn');
  #mainTitle = document.querySelector('.main-title');
  #textDatabase = {
    logoutNotification: '',
    pronoun: [],
    welcomeTitle: '',
    wrongLogin: '',
  };

  addHandlerCheckPIN() {
    this.#checkPIN.addEventListener(
      'click',
      function () {
        this.#userPIN.type === 'password'
          ? (this.#userPIN.type = 'text')
          : (this.#userPIN.type = 'password');
      }.bind(this)
    );
  }

  addHandlerLogin(users) {
    this.#login.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        const currentUser = users.find(
          acc =>
            acc.username === this.#userInput.value ||
            acc.usernameLong === this.#userInput.value
        );
        if (currentUser?.pin === Number(this.#userPIN.value)) {
          const surName = currentUser.name.split(' ')[0];
          this.#mainTitle.textContent = `${this.#textDatabase.welcomeTitle} ${
            currentUser.gender === 'm'
              ? this.#textDatabase.pronoun[0]
              : this.#textDatabase.pronoun[1]
          } ${surName}`;
          this.#logged = true;
          this.#toggleButtons();
        } else {
          alert(this.#textDatabase.wrongLogin);
        }
      }.bind(this)
    );
  }
  addHandlerLogout() {
    this.#logout.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        this.#logged = false;
        alert(this.#textDatabase.logoutNotification);
        this.#toggleButtons();
        this.clearInputFields();
      }.bind(this)
    );
  }

  addHandlerLanguage() {
    document.querySelector('.flags').addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.flag-btn');
        if (!btn) return;
        const newLocale = btn.getAttribute('alt');
        localeObject.locale = newLocale;
        this.setText(newLocale);
      }.bind(this)
    );
  }

  clearInputFields() {
    this.#userInput.value = '';
    this.#userPIN.value = '';
  }

  #toggleButtons(btn1, btn2) {
    // btn1 stands for hidden, bt2 for overlay
    this.#articleContainer.classList.toggle('hidden');
    this.#logout.classList.toggle('hidden');
    this.#loginContainer.classList.toggle('hidden');
    this.#accessMenu.classList.toggle('overlay');

    // For any further implements
    if (btn1) btn1.classList.toggle('hidden');
    if (btn2) btn2.classList.toggle('overlay');
  }

  setText(locale = 'en-UK') {
    if (locale === 'en-UK') {
      // English language database
      //
      //
      this.#userInput.placeholder = 'username';
      this.#userPIN.placeholder = 'password';
      this.#checkPINLabel.textContent = 'Show PIN';
      this.#login.textContent = 'login';
      this.#logout.textContent = 'logout';
      this.#mainTitle.textContent = `Meier's utilities`;
      document.querySelector('.main-menu').textContent = 'Select an option';
      document.querySelector('.column-1-title').textContent = `E-mail's:`;
      document.querySelector('.column-2-title').textContent = 'corporation:';
      document.querySelector('.column-3-title').textContent = 'leisure:';
      document.querySelector('.column-4-title').textContent = 'food:';
      this.#textDatabase.logoutNotification = 'You logged out with successful';
      this.#textDatabase.pronoun = ['Mr.', 'Mrs.'];
      this.#textDatabase.welcomeTitle = 'Welcome back';
      this.#textDatabase.wrongLogin = 'Wrong username or PIN';
    }
    if (locale === 'de-DE') {
      // German language database
      //
      //
      this.#userInput.placeholder = 'Benutzername';
      this.#userPIN.placeholder = 'Passwort';
      this.#checkPINLabel.textContent = 'PIN anzeigen';
      this.#login.textContent = 'Einloggen';
      this.#logout.textContent = 'Ausloggen';
      this.#mainTitle.textContent = `Meier's Nützlichkeiten`;
      document.querySelector('.main-menu').textContent =
        'Wählen Sie ein Option aus';
      document.querySelector('.column-1-title').textContent = `Email's:`;
      document.querySelector('.column-2-title').textContent = 'Unternehmen:';
      document.querySelector('.column-3-title').textContent = 'Freizeit:';
      document.querySelector('.column-4-title').textContent = 'Essen:';
      this.#textDatabase.logoutNotification = 'Abgemeldet mit Erfolgereich';
      this.#textDatabase.pronoun = ['Herr', 'Frau'];
      this.#textDatabase.welcomeTitle = 'Willkommen zurück';
      this.#textDatabase.wrongLogin = 'Falscher Benutzername oder PIN';
    }
    if (locale === 'pt-BR') {
      // Portuguese language database
      //
      //
      this.#userInput.placeholder = 'usuário';
      this.#userPIN.placeholder = 'senha';
      this.#checkPINLabel.textContent = 'mostrar PIN';
      this.#login.textContent = 'entrar';
      this.#logout.textContent = 'sair';
      this.#mainTitle.textContent = `Meier utilidades`;
      document.querySelector('.main-menu').textContent = 'Escolha uma opção';
      document.querySelector('.column-1-title').textContent = `E-mails:`;
      document.querySelector('.column-2-title').textContent = 'corporativo:';
      document.querySelector('.column-3-title').textContent = 'lazer:';
      document.querySelector('.column-4-title').textContent = 'comida:';
      this.#textDatabase.logoutNotification = 'Logout feito com sucesso';
      this.#textDatabase.pronoun = ['Sr.', 'Sra.'];
      this.#textDatabase.welcomeTitle = 'Bem vindo de volta';
      this.#textDatabase.wrongLogin = 'Usuário ou PIN incorreto';
    }
  }
}

export default new View();
