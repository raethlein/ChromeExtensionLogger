(function(global) {
    var Internal = {
        SENDER: 'BackgroundScript',
        log: function(message) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {'sender': Internal.SENDER, 'message': message});
            });
        }
    };

    global.ChromeLogger = {
        log: function(message) {
            Internal.log(message);
        }
    };
})(window);
