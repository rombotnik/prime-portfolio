## Rom Writes Things
[Running App](https://fast-depths-9989.herokuapp.com/)

### Overview
A simple portfolio display using Bootstrap and jQuery, hosted on Heroku. It doesn't do anything too fancy. The prose and poetry are hosted server-side. When `index.html` is loaded the app sends two requests to the server: `GET /prose` and `GET /poetry`; the result is then formatted and displayed into divs appropriately. I didn't put much in, but it can support more writing than what's hosted on the server.

### My Poetry
Yes, I wrote this in high school. I was a gloomy kid.

### Rainbows
The app loops through an array of colors, tracking a colorIndex to remember which color it's on. Every 3 seconds, the color transitions to a new one, animated via the CSS3 `transition` property.

### Notes
If I were to keep working on this, these are some things I'd like to do:

- Create separate sections for writing, code, and my resume
- Give the app a glossier feeling; update styling so it's more unique
- Add additional contact info
- Add more content
- Move prose/poetry OUT of `server/app.js` so I can include more; have a way to get those files easily

Mostly, I'm just excited to go back to working with (and/or making) APIs. I have a lot of ideas, and I look forward to making them happen.

### Contact
romney.stevens@gmail.com