ChromeExtensionLogger
=====================

Log from background script, content script and popup-html into one console

Use this logger in BackgroundScripts, ContentScripts or Popup-Scripts and receive all messages on the page's console. This omitts the need to open all three consoles.


Just add BackgroundLogger and ContentLogger to your extension's manifest or PopupLogger.js into your Popup-Html. (These scripts have to be included before ChromeLogger.log is used in any other script.)

<b>Example:</b>
<pre><code>
ChromeLogger.log("Log this text");
</code></pre><br/>

Examplary output in page's console (sent from popup to ContentScript):
<pre><code>
PopupLogger[08/29/2014 0:50:24]: : popupFoo ContentLogger.js:22
</code></pre><br/>
