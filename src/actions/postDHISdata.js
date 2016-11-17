const basicAuth = `Basic ${btoa('admin:district')}`;

var $ = require('jquery');

export function postData(text, data) {
  return $.ajax({
    url: "https://play.dhis2.org/demo/api/25/dataStore/" + text,
    type: "POST",
    data: data,
    headers: {
      "Authorization": basicAuth,
      "Content-Type": "application/json"
    },
  }).then(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed: " + jqXHR.status);
  })
}
