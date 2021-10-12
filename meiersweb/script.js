'use strict';

const user1 = {
  name: 'Rene Meier',
  pin: 9999,
  gender: 'm',
};

const user2 = {
  name: 'Katia Cristiane Aparecida Diniz da Silva Meier',
  pin: 8888,
  gender: 'f',
};

const exceptions = ['aus', 'da', 'de', 'of'];

const users = [user1, user2];
const userInput = document.querySelector('.login-input');
const userPIN = document.querySelector('.login-pass');
const checkPIN = document.querySelector('.show-pass');
const checkPINLabel = document.getElementById('check-PIN');
const navUI = document.querySelector('.login-field');
const mainTitle = document.querySelector('.main-title');
const logIn = document.getElementById('login-btn');
const logOut = document.getElementById('logout-btn');
const fullTitle = document.querySelector('.access-menu');
const textDatabase = {
  logoutNotification: '',
  pronoun: [],
  welcomeTitle: '',
  wrongLogin: '',
};

let currentUser;
let logged = false;
let locale = 'en-UK';
// let isEN = false;

setInterval(function () {
  const now = new Date();
  const options = {
    second: 'numeric',
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'long',
  };
  document.querySelector('.time-display').textContent = Intl.DateTimeFormat(
    locale,
    options
  ).format(now);
}, 1000);

function starterUI() {
  userInput.value = '';
  userPIN.value = '';
}

setText(locale);

function toggleButtons(btn) {
  btn.classList.toggle('hidden');
  document.querySelector('.body-background').classList.toggle('overlay');
}

starterUI();

users.forEach(function (user) {
  user.username = user.name
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? '' : word))
    .map(init => init[0])
    .join('');

  user.usernameLong = user.name.toLowerCase().split(' ');
  user.usernameLong = [
    user.usernameLong[0],
    user.usernameLong[user.usernameLong.length - 1],
  ].join('.');
});

checkPIN.addEventListener('click', function () {
  userPIN.type === 'password'
    ? (userPIN.type = 'text')
    : (userPIN.type = 'password');
});

logIn.addEventListener('click', function () {
  currentUser = users.find(
    acc =>
      acc.username === userInput.value || acc.usernameLong === userInput.value
  );
  if (currentUser?.pin === Number(userPIN.value)) {
    const surName = currentUser.name.split(' ')[0];
    mainTitle.textContent = `${textDatabase.welcomeTitle} ${
      currentUser.gender === 'm'
        ? textDatabase.pronoun[0]
        : textDatabase.pronoun[1]
    } ${surName}`;
    logged = true;
    toggleButtons(logOut);
    toggleButtons(fullTitle);
    toggleButtons(navUI);
  } else {
    alert(textDatabase.wrongLogin);
  }
});

//Translate to english
document.querySelector('.eng-btn').addEventListener('click', function () {
  locale = 'en-UK';
  setText(locale);
});

//Translate to german
document.querySelector('.deu-btn').addEventListener('click', function () {
  locale = 'de-DE';
  setText(locale);
});

//Translate to portuguese
document.querySelector('.bra-btn').addEventListener('click', function () {
  locale = 'pt-BR';
  setText(locale);
});

logOut.addEventListener('click', function () {
  logged = false;
  alert(textDatabase.logoutNotification);
  toggleButtons(logOut);
  toggleButtons(fullTitle);
  toggleButtons(navUI);
  starterUI();
});

document.querySelector('.profile').addEventListener('click', function () {
  alert(
    `
  Dear User!
  Thank you very much for visit my first website.
  This website ist created by educational purposes only.
  It may not be used for commercial use.
    
  By dev: René Meier`
  );
});

// A test to provide a language pack
function setText(locale) {
  if (locale === 'en-UK') {
    // English language database
    //
    //
    userInput.placeholder = 'username';
    userPIN.placeholder = 'password';
    checkPINLabel.textContent = 'Show PIN';
    logIn.textContent = 'login';
    logOut.textContent = 'logout';
    mainTitle.textContent = `Meier's utilities`;
    document.querySelector('.main-menu').textContent = 'Select an option';
    document.querySelector('.div1-menu').textContent = `E-mail's:`;
    document.querySelector('.div2-menu').textContent = 'corporation:';
    document.querySelector('.div3-menu').textContent = 'leisure:';
    document.querySelector('.div4-menu').textContent = 'food:';
    textDatabase.logoutNotification = 'You logged out with successful';
    textDatabase.pronoun = ['Mr.', 'Mrs.'];
    textDatabase.welcomeTitle = 'Welcome back';
    textDatabase.wrongLogin = 'Wrong username or PIN';
  } else if (locale === 'de-DE') {
    // German language database
    //
    //
    userInput.placeholder = 'Benutzername';
    userPIN.placeholder = 'Passtwort';
    checkPINLabel.textContent = 'PIN anzeigen';
    logIn.textContent = 'Einloggen';
    logOut.textContent = 'Ausloggen';
    mainTitle.textContent = `Meier's Nützlichkeiten`;
    document.querySelector('.main-menu').textContent =
      'Wählen Sie ein Option aus';
    document.querySelector('.div1-menu').textContent = `Email's:`;
    document.querySelector('.div2-menu').textContent = 'Unternehmen:';
    document.querySelector('.div3-menu').textContent = 'Freizeit:';
    document.querySelector('.div4-menu').textContent = 'Essen:';
    textDatabase.logoutNotification = 'Abgemeldet mit Erfolgereich';
    textDatabase.pronoun = ['Herr', 'Frau'];
    textDatabase.welcomeTitle = 'Willkommen zurück';
    textDatabase.wrongLogin = 'Falscher Benutzername oder PIN';
  } else if (locale === 'pt-BR') {
    // Portuguese language database
    //
    //
    userInput.placeholder = 'usuário';
    userPIN.placeholder = 'senha';
    checkPINLabel.textContent = 'mostrar PIN';
    logIn.textContent = 'entrar';
    logOut.textContent = 'sair';
    mainTitle.textContent = `Meier utilidades`;
    document.querySelector('.main-menu').textContent = 'Escolha uma opção';
    document.querySelector('.div1-menu').textContent = `E-mails:`;
    document.querySelector('.div2-menu').textContent = 'corporativo:';
    document.querySelector('.div3-menu').textContent = 'lazer:';
    document.querySelector('.div4-menu').textContent = 'comida:';
    textDatabase.logoutNotification = 'Logout feito com sucesso';
    textDatabase.pronoun = ['Sr.', 'Sra.'];
    textDatabase.welcomeTitle = 'Bem vindo de volta';
    textDatabase.wrongLogin = 'Usuário ou PIN incorreto';
  }
}
