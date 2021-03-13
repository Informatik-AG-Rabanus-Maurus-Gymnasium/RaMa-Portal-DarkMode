# DarkMode und Mobile-Design für das RaMa-Portal

![CSS3 Validiert](https://jigsaw.w3.org/css-validator/images/vcss)


## Beschreibung

Dies ist ein alternatives dunkles Design für das [RaMa-Portal](https://portal.rama-mainz.de) (und alle anderen Schulen, die das Portal von Ingo Schnell verwenden) und ein Mobile-Design der Lernumgebung für Handys. Das ganze basiert auf Vorgaben des [Material-Themes](https://material.io) und ist in [CSS](https://www.w3.org/Style/CSS/Overview.en.html) geschrieben.

Der DarkMode wird über ein Browser-Addon eingebunden, mit welchem der DarkMode mit 2 Klicks aktiviert/deaktiviert werden kann. Es werden einige Grafik-Bugs der normalen Oberfläche behoben und insgesamt wirkt das Design moderner und runder. Sowohl die normale Oberfläche, als auch die Lernumgebung sind in dunklem Design.

Das Mobile-Design für die Lernumgebung funktioniert von ca. 300px Breite bis 640px.

Bugreports, Vorschläge und ähnliches können entweder hier auf GitHub unter [Issues](https://github.com/HackerFrosch/RaMa-Portal/issues) gemacht werden oder ihr könnt mich Privat über WhatsApp oder Discord anschreiben.



## Screenshots

<hier screens + Links einfügen>



## Installation

**Hinweis:** *Kursiv* geschriebener Text markiert immer Eigennamen oder Text den du eingeben sollst. Text der in den Klammern <> steht, soll nicht wörtlich eingesetzt werden, sondern in den Klammern steht, was du dort einsetzen sollst.


1. Installiere das Addon *Custom Style Script* für deinen Browser
- [Custom Style Script für Chrome](https://chrome.google.com/webstore/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij)
- [Custom Style Script für Firefox](https://addons.mozilla.org/de/firefox/addon/custom-style-script/)
- [Custom Style Script für Opera](https://addons.opera.com/de/extensions/details/custom-style-script/)

2. Klicke auf der [GitHub-Seite](https://github.com/HackerFrosch/RaMa-Portal) rechts auf *Releases* und lade unten bei *Assets* die Datei *Source Code (Zip)* herunter
3. Extrahiere die Dateien aus dem ZIP-Ordner. Mache dazu einen Rechtsklick auf den Ordner und gehe auf *Alle extrahieren* (bei Windows)

4. Öffne die Datei *Portal DarkMode.css* mit dem Windows-Editor
5. Wähle den gesamten Inhalt aus (Strg A) und kopiere ihn (Strg C)

6. Gehe in deinem Browser oben rechts bei den Addons auf das Symbol </>
7. Gehe auf *Open Options Page*
8. Trage bei *III. Code* folgendes in die Spalten ein
- URL: https://portal.rama-mainz.de
- SCRIPT: *<nichts>*
- STYLE (CSS): *<füge den kopierten Inhalt der Datei "Portal DarkMode.css" ein (Strg V)>*
![Image missing](https://user-images.githubusercontent.com/69604121/110132551-949bbe80-7dcb-11eb-8f52-89722d4440f8.png)

9. Klicke auf das Plus auf der grauen Leiste unter der Tabelle
10. Wiederhole die Schritte 5-9 mit der Datei *Lernumgebung DarkMode.css*
- URL: https://portal.rama-mainz.de/edu
- SCRIPT: *<nichts>*
- STYLE (CSS): *<füge den kopierten Inhalt der Datei "Lernumgebung DarkMode.css" ein (Strg V)>*



## Updaten (Bei Beta-Versionen)

1. Öffne die GitHub-Seite
2. Gehe auf die Datei *Portal DarkMode.css*
3. Kopiere den gesamten Code aus der Datei
4. Gehe im Browser auf das Addon und dann auf *Open Options Page*
5. Ersetze den Code bei *Item #1* in der Spalte *Style (CSS)* vollständig durch den kopierten Code
6. Wiederhole diese Schritte dann auch mit der Datei *Lernumgebung Style.css* für *Item #2*



## Updaten (Bei einem Release)

1. Mache die Schritte 2-7 der DarkMode-Installation
2. Ersetze den Code bei *Item #1* (Blaue Leiste) in der Spalte *Style (CSS)* vollständig durch den kopierten Code
3. Wiederhole diese Schritte dann auch mit der Datei *Lernumgebung Style.css* für *Item #2*
