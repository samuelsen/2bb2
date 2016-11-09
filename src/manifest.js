/*
 * This file is in javascript instead of json to be able to add comments.
 * The express server will serve it as a json file.
 * See https://developer.mozilla.org/en-US/docs/Web/Manifest or
 * https://w3c.github.io/manifest/ for more info on the different fields.
 */

module.exports = {
  lang: 'no',
  name: 'DHIS2 data storage',
  display: 'fullscreen', // Options: fullscreen, standalone, minimal-ui, browser
  theme_color: '#ffffff',
  background_color: '#ffffff',
  start_url: '/',
};
