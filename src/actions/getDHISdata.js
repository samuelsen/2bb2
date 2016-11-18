const basicAuth = `Basic ${btoa('admin:district')}`;

var $ = require('jquery');

export function loadData(text) {
  return $.ajax({
    url: "https://play.dhis2.org/demo/api/25/dataStore/" + text,
    type: "GET",
    headers: {
        "Authorization": basicAuth,
    },
  }).then(function(data, textStatus, jqXHR) {
    //console.log("HTTP Request Succeeded: " + jqXHR.status);
    //console.log(data);
    return data;
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
  })
};