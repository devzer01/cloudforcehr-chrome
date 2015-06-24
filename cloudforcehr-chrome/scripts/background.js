/**
 * Created by nayan on 6/24/15.
 */

var requestFilter = {
        urls: ["*://*.cloudforcehr.com/*"]
    },

    extraInfoSpec = ['requestHeaders', 'blocking'],
    handler = function(details) {

        var isRefererSet = false;
        var headers = details.requestHeaders,
            blockingResponse = {};

        for (var i = 0, l = headers.length; i < l; ++i) {
            if (headers[i].name == 'User-Agent') {
                headers[i].value = "Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))";
                isRefererSet = true;
                break;
            }
        }

        blockingResponse.requestHeaders = headers;
        return blockingResponse;
    };

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);