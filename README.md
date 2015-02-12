# trigger-warning
A browser plugin to teach the browser what you do not wish to see.

## Features

Implemented:

 - None.

Planned:

 - Choose categories of content that should be censored.
 - Conceal paragraphs that contain keywords belonging to a censored category.
   - Concealed paragraphs give an indication of the categories of content they contain.
   - Concealed paragraphs can be completely revealed with a click or two.
   - Concealed paragraphs can be revealed while leaving the keywords concealed, with a click or two.
   - Concealed paragraphs can be gradually revealed with a click-and-drag operation. This would ideally be like peeling off a sticker.
 - Add new categories.
 - Add new keywords to categories.
 - Immediately conceal an image, then indicate which categories it belongs to. The image data (probably hashed) is then stored as an entry in each category.
 - Images belonging to censored categories are concealed, similar to paragraphs. There could be several ways to reveal images:
   - Instant reveal
   - Fade-in with some combinations of: contrast, colour depth, brightness, saturation, darkness, blur, size, resolution, random pixels.
   - Peel back a concealing cover, possibly with arbitrary points to grab the cover and peel it in any direction.
   - Pull image out from behind a cover, like removing it from an envelope.
 - Query a central server to learn categories for content that the user has not yet flagged.
 - Send category data to central server to contribute to the database of content categories.
