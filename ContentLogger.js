(function(global) {
    var Internal = {
        SENDER: 'ContentScript',
        getDate: function() {
            var today = new Date();
            var secs = today.getSeconds();
            var mins = today.getMinutes();
            var hours = today.getHours();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var todayFileFormat = mm + '_' + dd + '_' + yyyy + '_' + hours + '_' + mins + '_' + secs;
            return todayConsoleFormat = '[' + mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + mins + ':' + secs + ']: ';
        },
        log: function(sender, message) {
            console.log(sender + Internal.getDate() + ": " + message);
        }
    };

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        Internal.log(request.sender, request.message);
    });

    global.ChromeLogger = {
        log: function(message) {
            Internal.log(Internal.SENDER, message);
        }
    };
}(window));