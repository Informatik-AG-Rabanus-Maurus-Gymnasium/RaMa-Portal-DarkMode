# DarkMode und Mobile-Design für das RaMa-Portal

![CSS3 Validiert](https://jigsaw.w3.org/css-validator/images/vcss)


## Beschreibung

Dies ist ein alternatives dunkles Design für das [RaMa-Portal](https://portal.rama-mainz.de) (und alle anderen Schulen, die das Portal von Ingo Schnell verwenden) und ein Mobile-Design der Lernumgebung für Handys. Das ganze basiert auf Vorgaben des [Material-Themes](https://material.io) und ist in [CSS](https://www.w3.org/Style/CSS/Overview.en.html) geschrieben.

Der DarkMode wird über das Browser-Addon *Custom Style Script* eingebunden, mit welchem der DarkMode einfach aktiviert/deaktiviert werden kann. Es werden einige Grafik-Bugs der normalen Oberfläche behoben und das Design ist moderner und runder. Sowohl die normale Oberfläche, als auch die Lernumgebung sind in dunklem Design.

Die Mobile-Version für die Lernumgebung funktioniert von ca. 300px Breite bis 640px, wird aber nicht mehr entwickelt.

Bugreports und Vorschläge können unter [Issues](https://github.com/HackerFrosch/RaMa-Portal/issues) geäußert werden. Wenn ihr selbst gut CSS beherscht, könnt ihr mich Privat über WhatsApp oder Discord anschreiben.



## Screenshots

<img src="https://user-images.githubusercontent.com/69604121/111031367-85d68c80-8407-11eb-8fcd-8446e4990aa2.png" alt="Image missing" width="600"/>
<img src="https://user-images.githubusercontent.com/69604121/111031369-8b33d700-8407-11eb-8055-d84311e199e2.png" alt="Image missing" width="600"/>
<img src="https://user-images.githubusercontent.com/69604121/111031370-8d963100-8407-11eb-9b31-829070806652.png" alt="Image missing" width="600"/>
<img src="https://user-images.githubusercontent.com/69604121/111775836-8bbde900-88b1-11eb-8491-8f27f4200293.png" alt="Image missing" width="600"/>



## Installation

**Hinweis:** *Kursiv* geschriebener Text markiert immer Eigennamen oder Text den du eingeben sollst. Text in den Klammern <> soll nicht wörtlich abgeschrieben werden.


1. Installiere das Addon *Custom Style Script* für deinen Browser ([Firefox](https://addons.mozilla.org/de/firefox/addon/custom-style-script/), [Chrome](https://chrome.google.com/webstore/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij), [Opera](https://addons.opera.com/de/extensions/details/custom-style-script/))

2. Öffne die [Releases-Seite](https://github.com/HackerFrosch/RaMa-Portal/releases) und lade unter *Assets* die Datei *Source Code (zip)* herunter
3. Extrahiere die Dateien, indem du einen Rechtsklick auf den heruntergeladenen ZIP-Ordner machst und auf *Alle extrahieren* klickst (bei Windows)

4. Öffne die Dateien *Portal DarkMode.css* und *add.js* (in dem Ordner der extrahierten Dateien) mit dem Windows-Editor (Doppelklick)
5. Wähle erst den gesamten Inhalt einer Datei aus (Strg A) und kopiere ihn (Strg C)

6. Gehe in deinem Browser oben rechts bei den Addons auf das Symbol </>
7. Gehe auf *Open Options Page*
8. Trage bei *III. Code* folgendes in die Spalten ein (wiederhole Schritt 5 mit der anderen Datei)

| URL | SCRIPT | STYLE (CSS) |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de | <füge den Inhalt der Datei *add.js* ein (Strg V)> | <füge den Inhalt der Datei *Portal DarkMode.css* ein (Strg V)> |


9. Klicke auf das Plus unter der Tabelle
10. Wiederhole die Schritte 4-9 mit der Datei *Lernumgebung DarkMode.css*

| URL | SCRIPT | STYLE (CSS) |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de/edu | - | <füge den kopierten Inhalt ein (Strg V)> |



## Updaten (Bei Beta-Versionen)

1. Gehe im GitHub auf die Datei *Portal DarkMode.css*
2. Kopiere den gesamten Code aus der Datei
3. Gehe im Browser auf das Addon und dann auf *Open Options Page*
4. Ersetze den Code bei *Item #1* in der Spalte *Style (CSS)* vollständig durch den kopierten Code
5. Wiederhole diese Schritte mit der Datei *Lernumgebung Style.css* für *Item #2*



## Updaten (Bei einem Release)

1. Mache die Schritte 2-7 der DarkMode-Installation
2. Ersetze den Code bei *Item #1* in der Spalte *Style (CSS)* vollständig durch den kopierten Code
3. Wiederhole diese Schritte mit der Datei *Lernumgebung Style.css* für *Item #2*


## Deaktivieren/Aktivieren des DarkModes

1. Gehe in deinem Browser auf das Symbol des Addons (*</>*)
2. Klicke auf das große *</>*-Symbol
3. Lade die Website neu
