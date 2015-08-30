var pageMod = require('sdk/page-mod');

pageMod.PageMod({

  // inject script to all pages
  include: '*',

  // script to inject (in ./data)
  contentScriptFile: './check-images.js',

  // runs when the script is attached to a page
  onAttach: function (worker) {

    // this shows how to communicate from the addon to the script
    worker.port.emit('eventname', 'message');
  }
});
