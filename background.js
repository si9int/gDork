browser.runtime.onMessage.addListener(send_result);

function send_result(message) {
    let result = {
        data: message.data,
        query: message.query
    }
    
    browser.storage.local.set({result})
}
