chrome.browserAction.onClicked.addListener(function onClick(tab) {
  const parsed = parseUri(tab.url)
  const url = `${parsed.protocol}://${parsed.host}${parsed.path}`
  chrome.tabs.create({ url: `https://plus.google.com/u/0/share?url=${url}` })
})
