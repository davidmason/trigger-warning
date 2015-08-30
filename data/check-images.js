
// this shows how to subscribe to events from the addon
self.port.on('eventname', function (message) {
  // this logs to the browser process console, not web console
  console.log(message);
})

// process all images that are already loaded
var images = document.getElementsByTagName('img');
for (var image of images) {
  console.log(image.src);
}

// process any new images as they are added
document.body.addEventListener('DOMNodeInserted', function (event) {
  console.log(node.nodeType);
  console.log(node.tagName);
});
