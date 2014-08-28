ChromeExtensionLogger
=====================

Log from background script, content script and popup-html into one console

Use this logger in BackgroundScripts, ContentScripts or Popup-Scripts and receive all messages on the page's console. This omitts the need to open all three consoles.


Just add BackgroundLogger and ContentLogger to your extension's manifest. (These scripts have to be included before ChromeLogger.log is used in any other script.)

<pre><code>
ChromeLogger.log("Log this text");
</code></pre><br/>
