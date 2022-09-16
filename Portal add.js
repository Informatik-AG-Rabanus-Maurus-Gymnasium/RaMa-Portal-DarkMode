var ls = localStorage;

document.addEventListener("DOMContentLoaded", function () {
  // Create the Link to the Settings in the reference-bar
  var a = document.createElement("a");
  setAttr(a, { "id": "settings-link", "onclick": "openSettings()" });
  a.innerText = " Einstellungen";
  document.getElementsByClassName("version")[0].appendChild(a);

  createSettings(); // Creates the Settings-Window
  checkDefaults(); // Sets the defaults if there are no custom params set
  applySettings(); // Applys all LocalStored Settings
});


const sWin = document.createElement("div");
setAttr(sWin, { "id": "settings" });

function createSettings() {
  // Create Title and Close-Button
  var title = document.createElement("h4");
  title.innerText = "Einstellungen";

  var close = document.createElement("div");
  close.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1365.3333" height="1365.3333" viewBox="0 0 1024 1024"><path d="M323.5 263.7c-12.1 1.1-20.3 4.4-32.5 13-8 5.6-12.1 10.9-18.5 24-3.8 7.9-5.5 15.8-5.5 25.8.1 11.7 1.8 19.1 7 29.5 4.1 8.4 4.6 9 71.1 75.5l66.9 67.1v7.6c0 6.8-.3 8-2.7 11-1.5 1.8-30.9 31.6-65.4 66.3-57.9 58.1-68.6 69.6-70.5 75.8-.3 1.2-1 2.6-1.4 3.2-.4.5-1.6 3.5-2.6 6.5-1.4 4.2-1.9 8.4-1.8 18 0 15.8.7 18.1 9.7 35.5 1.8 3.4 13.3 15 16.8 17 5.1 2.9 16.6 8.3 20.4 9.6 5.9 1.9 23.6 1.8 31.6-.3 6.5-1.8 10.2-3.5 19.2-8.7 3.1-1.7 28.9-26.8 71-68.9l66.2-66.2h15.8l17.1 17c9.4 9.3 39.5 39.2 67 66.4 27.4 27.2 51.4 50.4 53.5 51.4 2 1.1 5 2.7 6.6 3.6 8.5 4.5 13.1 5.8 22.6 6.3 16.4.9 28.3-1.8 38.6-8.8 2.3-1.6 4.5-2.9 5-2.9 1.1 0 11.1-10.1 12.6-12.7.7-1.1 2.5-4 4.1-6.4 1.6-2.4 4.2-8.4 5.8-13.2 2.3-7.3 2.8-10.6 2.9-19.1 0-7.2-.5-11.5-1.5-14.1-.9-2.1-1.6-4.5-1.6-5.4 0-.9-1.2-3.9-2.5-6.6-2.5-5-3.2-6.2-6.9-12-1.1-1.7-30.9-32-66.2-67.5-35.5-35.6-64.8-65.8-65.3-67.3-1.3-3.5-1.4-11.7-.2-14.9.5-1.3 30.2-31.8 66-67.8 42.6-42.8 66.3-67.4 68.6-71 1.8-3 4.6-8.7 6.1-12.5 2.6-6.5 2.8-8.1 2.9-21 0-9.8-.4-15.1-1.4-17.5-2.4-5.9-6-13.4-8.1-16.5-1.1-1.7-2.3-3.7-2.6-4.5-.9-1.9-10.6-12-11.6-12-.4 0-3-1.6-5.7-3.5-2.6-1.9-5.3-3.5-5.8-3.5-.6 0-2.4-.7-4.2-1.6-12.5-6.2-35.3-5.5-50.1 1.5-4.5 2.2-5.7 2.9-11.5 6.5-1.6 1.1-32.3 31.2-68.1 66.9l-65.2 65-5 .5c-11.4 1.1-6.4 5.4-77.8-65.9-35.7-35.7-65.7-64.9-66.6-64.9-.8 0-2.3-.9-3.3-2-2.4-2.7-14.9-8.5-21-9.8-6.1-1.3-16.6-2-22-1.5z" fill="currentColor"/></svg>';
  setAttr(close, { "id": "close-settings", "onclick": "closeSettings()" });

  globalThis.opts = document.createElement("div");
  opts.classList.add("sOptions");

  // Create the Settings
  createSetting("setBg", "bg_option()", "checkbox", "Hintergrund-Bild");
  createSetting("primary", "storeOption('primary_set','primary')", "color", "Primärfarbe");
  createSetting("hover", "storeOption('hover_set','hover')", "color", "Hoverfarbe");
  createSetting("ownMessage", "storeOption('ownMessage_set','ownMessage')", "color", "Eigene Nachrichten-Farbe");
  createSetting("message", "storeOption('message_set','message')", "color", "Schüler Nachrichten-Farbe");
  createSetting("teacherMessage", "storeOption('teacherMessage_set','teacherMessage')", "color", "Lehrer Nachrichten-Farbe");

  // Append the Settings to the Settings-Window
  document.body
    .appendChild(sWin)
    .append(title, close, opts);
}

function setAttr(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
function createSetting(name, onchange, itype, text) {
  var el = document.createElement("div");
  el.classList.add("Opt", name);
  var el_i = document.createElement("input");
  setAttr(el_i, { "id": name, "type": itype, "onchange": onchange });
  var el_s = document.createElement("span");
  el_s.innerText = text;
  opts
    .appendChild(el)
    .append(el_i, el_s);
}
function bg_option() {
  ls.bg_set = document.getElementById("setBg").checked;
  applySettings();
}
function storeOption(name, par) {
  ls.setItem(name, document.getElementById(par).value);
  applySettings();
}
function applySetting(id, v) {
  var el = document.getElementById(id).value = ls[id + "_set"];
  document.documentElement.style.setProperty(v, el);
}
function openSettings() {
  sWin.classList.add("open");

  // Check if esc is pressed and close settings
  window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
      closeSettings();
    }
  });
}
function closeSettings() {
  sWin.classList.remove("open");
}


function applySettings() {
  // Apply Background-Image
  if (ls.bg_set === "true") {
    document.getElementById("setBg").checked = true;
    setAttr(document.documentElement, { "style": "background: url('https://i.ibb.co/sKLNP49/rama-bkgr.png') #121212 !important; background-size: cover !important;" });
  } else {
    document.documentElement.style = "background: #121212 !important";
  }

  // Apply other Settings
  applySetting("primary", "--primary-color");
  applySetting("hover", "--primary-hover-color");
  applySetting("ownMessage", "--message-self-color");
  applySetting("message", "--message-student-color");
  applySetting("teacherMessage", "--message-teacher-color");
}

// Edit the Login-Fields
function editLogin() {
  document.getElementById('username').placeholder = 'Benutzername';
  document.getElementById('password').placeholder = 'Passwort';
  document.getElementById('bttSenden').textContent = 'Login';
}
// Check if you're on the Login-Page
if (window.location.href === "https://portal.rama-mainz.de/") {
  editLogin();
}

// Sets the Default for every LocalStorage-param that isnt defined
function checkDefaults() {
  if (!ls.bg_set) {
    ls.bg_set = true;
  }
  if (!ls.primary_set) {
    ls.primary_set = "#9c2132";
  }
  if (!ls.hover_set) {
    ls.hover_set = "#d2545b";
  }
  if (!ls.ownMessage_set) {
    ls.ownMessage_set = "#43A047";
  }
  if (!ls.message_set) {
    ls.message_set = "#424242";
  }
  if (!ls.teacherMessage_set) {
    ls.teacherMessage_set = "#0277BD";
  }
}
