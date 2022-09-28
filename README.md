<h1 align="center">DarkMode für das RaMa-Portal</h1>


<p align="center">Dunkles und modernes Design</p>
<img class="screen" src="https://user-images.githubusercontent.com/69604121/142028115-4b707548-91b6-401a-b807-0e0983e61c59.png" alt="RaMa-Portal Screenshot im DarkMode" />

<p align="center">
	<a aria-label="last commit" href="https://github.com/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode/commits"><img src="https://img.shields.io/github/last-commit/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode.svg"></a>
	<a aria-label="contributors graph" href="https://github.com/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode/graphs/contributors"><img src="https://img.shields.io/github/contributors/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode.svg"></a>
	<a href="https://github.com/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode/pulse" alt="Activity"><img src="https://img.shields.io/github/commit-activity/m/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode"></a>
	<a aria-label="license" href="https://github.com/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode/LICENSE"><img src="https://img.shields.io/github/license/Informatik-AG-Rabanus-Maurus-Gymnasium/RaMa-Portal-DarkMode.svg"></a>
	<a href="https://discord.com/users/599205209784188939"><img src="https://img.shields.io/badge/chat%20on-discord-7289da.svg"></a>
</p>





### Inhaltsverzeichnis

1. <a href="#about">About</a>
2. <a href="#screenshots">Screenshots</a>
3. <a href="#schulen">Unterstützte Schulen</a>
4. <a href="#installation">Installation</a>
5. <a href="#einstellungen">Einstellungen</a><br />
5.1 <a href="#optionen">Optionen</a>
6. <a href="#updates">Updates</a>
7. <a href="#deaktivieren">Deaktivieren/Aktivieren des DarkModes</a>
8. <a href="#technik">Technische Details</a><br />
8.1 <a href="#technik-allg">Allgemeines</a><br />
8.2 <a href="#technik-vars">Variablen</a><br />
8.3 <a href="#technik-files">Dateinamen</a>
<br />
<br />


<a name="about">

## About
</a>

Dies ist ein alternatives dunkles Design für das [RaMa-Portal](https://portal.rama-mainz.de) (und <a href="#schulen">weitere Schulen</a>). Das ganze basiert auf Vorgaben des [Material-Themes](https://material.io) und ist in CSS und JS geschrieben.

Der DarkMode wird über das Browser-Addon *Custom Style Script* eingebunden, mit welchem der DarkMode einfach aktiviert und deaktiviert werden kann. Es werden einige Grafik-Bugs der normalen Oberfläche behoben und das Design ist moderner und runder. Sowohl die normale Oberfläche, als auch die Lernumgebung sind in dunklem Design.

Bugreports und Vorschläge können unter [Issues](https://github.com/HackerFrosch/RaMa-Portal/issues) geäußert werden.
Support/Hilfe bei der Installation biete ich über Discord an: LoxxoHD#9204


<a name="screenshots">

## Screenshots
</a>

<img class="screen" src="https://user-images.githubusercontent.com/69604121/142028166-21938e1a-77c9-4913-98ee-4af451915436.png" alt="RaMa-Portal Screenshot im DarkMode" />
<img class="screen" src="https://user-images.githubusercontent.com/69604121/142028115-4b707548-91b6-401a-b807-0e0983e61c59.png" alt="RaMa-Portal Screenshot im DarkMode" />
<img class="screen" src="https://user-images.githubusercontent.com/69604121/142028177-23382b68-4407-4c47-bd2a-6d89c7bdbe8a.png" alt="RaMa-Portal Screenshot im DarkMode" />



<a name="schulen">

## Unterstützte Schulen
</a>

- Rabanus-Maurus-Gymnasium Mainz ([https://portal.rama-mainz.de](https://portal.rama-mainz.de))

- Maria Ward-Schule Mainz ([https://portal.mws-mainz.de](https://portal.mws-mainz.de))

- Otto-Schott-Gymnasium Mainz-Gonsenheim ([https://portal.osg-mainz.de](https://portal.osg-mainz.de))

- Gymnasium am Kurfürstlichen Schloss Mainz ([https://portal.schloss-online.de](https://portal.schloss-online.de))

- Gymnasium Mainz-Oberstadt ([https://portal.gymnasium-oberstadt.de](https://portal.gymnasium-oberstadt.de))

- Gymnasium Theresianum Mainz ([https://portal.theresianum-mainz.de](https://portal.theresianum-mainz.de))

- IGS Mainz-Bretzenheim ([https://portal.igsmz.net](https://portal.igsmz.net))

- IGS Anna Seghers Mainz ([https://portal.igsas.de](https://portal.igsas.de))


<a name="installation">

## Installation
</a>

**Hinweis:** *Kursiv* geschriebener Text markiert immer Eigennamen oder Text, den du eingeben sollst.




1. Installiere das Addon *Custom Style Script* für deinen Browser ([Firefox](https://addons.mozilla.org/firefox/downloads/file/3553190/custom_style_script-0.1.4-an+fx.xpi), [Chrome](https://chrome.google.com/webstore/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij), [Opera](https://addons.opera.com/de/extensions/details/custom-style-script/))

2. Gehe in deinem Browser oben rechts bei den Addons auf das Symbol *</>* (das Addon-Menü)
3. Gehe auf *Open Options Page*
4. Trage bei *III. Code* folgendes in die Spalten ein. Wichtig: Wähle die Links aus und kopiere sie. Drag&Drop erzeugt einen Fehler! (siehe Bild)

| URL | SCRIPT | STYLE (CSS) |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de | - | - |

![Image missing](https://user-images.githubusercontent.com/69604121/114930600-b8b7da00-9e24-11eb-8620-ee7b83de161c.png)

5. Klicke auf das graue Plus unter der Tabelle
6. Füge nun bei *Item #1* die Links in die folgenden Spalten ein. Wichtig: Wähle die Links aus und kopiere sie. Drag&Drop erzeugt einen Fehler!

| URL | SCRIPT LINK / CODE | STYLE LINK / CODE |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de | https://cdn.statically.io/gh/HackerFrosch/RaMa-Portal/master/Portal%20add.js | https://cdn.statically.io/gh/HackerFrosch/RaMa-Portal/master/Portal%20DarkMode.css |

![Image missing](https://user-images.githubusercontent.com/69604121/114931177-69be7480-9e25-11eb-8c05-6ad41801bffa.png)


7. Wiederhole die Schritte 4-6 mit den folgenden Links

| URL | SCRIPT LINK / CODE | STYLE LINK / CODE |
| ----------- | ----------- | ----------- |
| https://portal.rama-mainz.de/edu | - | https://cdn.statically.io/gh/HackerFrosch/RaMa-Portal/master/Lernumgebung%20DarkMode.css |

![Image missing](https://user-images.githubusercontent.com/69604121/114932171-b48cbc00-9e26-11eb-9bdf-7e1245988bdf.png)




<a name="einstellungen">

## Einstellungen
</a>

Der DarkMode verfügt über einige Einstellungen, mit dem sich der DarkMode individuell gestalten lässt. Diese werden auch nach dem schließen der Website und des Browsers lokal gespeichert. Es werden keine Daten an irgendwelche Server weitergeleitet!
Die Einstellungen lassen sich unten in der Referenz-Leiste öffnen und entweder mit dem Kreuz oder per *esc* schließen.
![Image Missing](https://user-images.githubusercontent.com/69604121/190850184-651a1c70-04f7-421a-a2c2-0b354ee68a93.png)


### Optionen

**1. Hintergrund-Bild**<br />
Wenn aktiviert, wird das Hintergrund-Bild angezeigt, ansonsten wird nur eine Farbe angezeigt.<br />
*Standardwert:* `aktiviert`

**2. Hintergrund-Bild Link**<br />
Link zu einem belibigen Hintergrund-Bild.<br />
*Standardwert:* `https://i.ibb.co/sKLNP49/rama-bkgr.png`

**2. Primärfarbe**<br />
Legt die Farbe für alle Elemente mit einer Akzentfarbe fest.<br />
*Standardwert:* `#9c2132`

**3. Hoverfarbe**<br />
Legt die Farbe für Elemente mit einer Akzentfarbe beim darüberfahren fest.<br />
*Standardwert:* `#d2545b`

**4. Eigene Nachrichten-Farbe**<br />
Legt die Farbe für eigene Chat-Nachrichten fest.<br />
*Standardwert:* `#43a047`

**5. Schüler Nachrichten-Farbe**<br />
Legt die Farbe für Chat-Nachrichten von Schülern fest.<br />
*Standardwert:* `#424242`

**6. Lehrer Nachrichten-Farbe**<br />
Legt die Farbe für Chat-Nachrichten von Lehrern fest.<br />
*Standardwert:* `#0277bd`



<a name="updates">

## Updates
</a>

Der DarkMode aktualisiert sich vollautomatisch, sobald eine neue Version auf GitHub veröffentlicht wird.


<a name="deaktivieren">

## Deaktivieren/Aktivieren des DarkModes
</a>

1. Gehe in deinem Browser auf das Symbol des Addons (*</>*)
2. Klicke auf das große *</>*-Symbol
3. Lade die Website neu


<a name="technik">

## Technische Details
</a>

<a name="technik-allg">

### Allgemeines
</a>

Das Addon *Custom Style Script* bindet die neusten CSS- und JS-Scripte über ein CDN direkt von GitHub ein.
Die CSS-Scripte sind ein weitestgehend vollwertiger Ersatz für die normalen Portal-Scripte.

Durch die Einbindung per CDN-Links wird automatisch die neuste Version eingebunden, was manuelle Updates überflüssig macht.

Einige Regeln müssen mit der Eigenschaft *!important* überschrieben werden, damit sie angewendet werden.
<br /><br />


<a name="technik-vars">

### Variablen
</a>

`primary-color`

**Standardwert: #9c2132**<br />
Definiert die primäre Design-Farbe.
<br /><br />

`primary-hover-color`

**Standardwert: #d2545b**<br />
Definiert die Farbe einer Hover-Animation von einem Primärfarbenen Element.
<br /><br />

`message-self-color`

**Standardwert: #43a047**<br />
Definiert die Hintergrundfarbe für eigene Chat-Nachrichten.
<br /><br />

`message-student-color`

**Standardwert: #424242**<br />
Definiert die Hintergrundfarbe für Chat-Nachrichten von Schülern.
<br /><br />

`message-teacher-color`

**Standardwert: #0277bd**<br />
Definiert die Hintergrundfarbe für Chat-Nachrichten von Lehrern.
<br /><br />

`chat-input-color`
**Standardwert: #484848**<br />
Definiert die Hintergrundfarbe für das Nachrichten-Eingabefeld.
<br /><br />

`success-color`

**Standardwert: #09af00**<br />
Definiert die Hintergrundfarbe für Success-Dialoge.
<br /><br />

`transition-duration`

**Standardwert: 0.5s**<br />
Definiert die normale Übergangsdauer für Animationen.
<br /><br />

`1dp-shadow`

**Standardwert: 2px 4px 4px hsl(0deg 0% 0% / 0.6)**<br />
Definiert den Box-Shadow für die erste Elevation-Stufe.
<br /><br />

`1dp-shadow-hover`

**Standardwert: 2px 4px 8px hsl(0deg 0% 0% / 0.6)**<br />
Definiert den Box-Shadow für die erste Elevation-Stufe bei einer Hover-Animation.
<br /><br />

`2dp-shadow`

**Standardwert: 4px 8px 8px hsl(0deg 0% 0% / 0.5)**<br />
Definiert den Box-Shadow für die zweite Elevation-Stufe.
<br /><br />


<a name="technik-files">

### Dateinamen
</a>

`Portal DarkMode.css`
<p>Code, der für die normale Portal-Oberfläche gilt.</p>
<br />

`Lernumgebung DarkMode.css`
<p>Code, der nur für das Design der Lernumgebung gilt.</p>
<br />

`Portal add.js`
<p>Code, der den HTML-DOM des Logins bearbeitet, um bestimmte Elemente zu ändern.</p>
