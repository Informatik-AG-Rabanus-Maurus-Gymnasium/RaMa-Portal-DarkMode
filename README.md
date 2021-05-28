# DarkMode und Mobile-Design für das RaMa-Portal

![CSS3 Validiert](https://jigsaw.w3.org/css-validator/images/vcss)


## Beschreibung

Dies ist ein alternatives dunkles Design für das [RaMa-Portal](https://portal.rama-mainz.de) (und alle anderen Schulen, die das Portal von Ingo Schnell verwenden) und ein Mobile-Design der Lernumgebung für Handys. Das ganze basiert auf Vorgaben des [Material-Themes](https://material.io) und ist in [CSS](https://www.w3.org/Style/CSS/Overview.en.html) geschrieben.

Der DarkMode wird über das Browser-Addon *Custom Style Script* eingebunden, mit welchem der DarkMode einfach aktiviert/deaktiviert werden kann. Es werden einige Grafik-Bugs der normalen Oberfläche behoben und das Design ist moderner und runder. Sowohl die normale Oberfläche, als auch die Lernumgebung sind in dunklem Design.

Die Mobile-Version für die Lernumgebung funktioniert von ca. 300px Breite bis 640px, wird aber nicht mehr entwickelt.

Bugreports und Vorschläge können unter [Issues](https://github.com/HackerFrosch/RaMa-Portal/issues) geäußert werden.
Support/Hilfe bei der Installation biete ich über Discord an: LoxxoHD#9204




## Screenshots
<img src="https://user-images.githubusercontent.com/69604121/120025997-bcc54300-bff1-11eb-81eb-62cd3cecd057.png" alt="Image missing" width="600"/>
<img src="https://user-images.githubusercontent.com/69604121/111031369-8b33d700-8407-11eb-8055-d84311e199e2.png" alt="Image missing" width="600"/>
<img src="https://user-images.githubusercontent.com/69604121/111031370-8d963100-8407-11eb-9b31-829070806652.png" alt="Image missing" width="600"/>
<img src="https://user-images.githubusercontent.com/69604121/111775836-8bbde900-88b1-11eb-8491-8f27f4200293.png" alt="Image missing" width="600"/>



## Installation

**Hinweis:** *Kursiv* geschriebener Text markiert immer Eigennamen oder Text den du eingeben sollst. Text in den Klammern <> soll nicht wörtlich abgeschrieben werden.


1. Installiere das Addon *Custom Style Script* für deinen Browser ([Firefox](https://addons.mozilla.org/firefox/downloads/file/3553190/custom_style_script-0.1.4-an+fx.xpi), [Chrome](https://chrome.google.com/webstore/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij), [Opera](https://addons.opera.com/de/extensions/details/custom-style-script/))

2. Gehe in deinem Browser oben rechts bei den Addons auf das Symbol *</>* (das Addon-Menü)
3. Gehe auf *Open Options Page*
4. Trage bei *III. Code* folgendes in die Spalten ein. Wichtig: Wähle die Links aus und kopiere sie. Drag&Drop erzeugt einen Fehler! (siehe Bild)

| URL | SCRIPT | STYLE (CSS) |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de | - | - |

![Image missing](https://user-images.githubusercontent.com/69604121/114930600-b8b7da00-9e24-11eb-8620-ee7b83de161c.png)

5. Klicke auf das graue Plus unter der Tabelle
6. Füge nun bei *Item #1* die Links in die folgenden Spalten ein. Wichtig: Wähle die Links aus und kopiere sie. Drag&Drop erzeugt einen Fehler! (siehe Bild)

| URL | SCRIPT LINK / CODE | STYLE LINK / CODE |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de | https://cdn.statically.io/gh/HackerFrosch/RaMa-Portal/master/Portal%20add.js | https://cdn.statically.io/gh/HackerFrosch/RaMa-Portal/master/Portal%20DarkMode.css |

![Image missing](https://user-images.githubusercontent.com/69604121/114931177-69be7480-9e25-11eb-8c05-6ad41801bffa.png)


7. Wiederhole die Schritte 4-6 mit den folgenden Links

| URL | SCRIPT LINK / CODE | STYLE LINK / CODE |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de/edu | - | https://cdn.statically.io/gh/HackerFrosch/RaMa-Portal/master/Lernumgebung%20DarkMode.css |

![Kazam_screenshot_00000](https://user-images.githubusercontent.com/69604121/114932171-b48cbc00-9e26-11eb-9bdf-7e1245988bdf.png)


## Updates

Der DarkMode updated sich vollautomatisch. Es ist kein manuelles Handeln erforderlich!


## Deaktivieren/Aktivieren des DarkModes

1. Gehe in deinem Browser auf das Symbol des Addons (*</>*)
2. Klicke auf das große *</>*-Symbol
3. Lade die Website neu
