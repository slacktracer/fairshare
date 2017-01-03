chrome.browserAction.onClicked.addListener(function onClick(tab) {
  chrome.tabs.create({
    url: `https://plus.google.com/u/0/share?url=${ encode(tab.url) }`
  })
})

// by http://meyerweb.com/eric/tools/dencoder/
function encode(url) {
	return encodeURIComponent(url).replace(/'/g,'%27').replace(/"/g,'%22')
}
