const basicAuth = `Basic ${btoa('admin:district')}`;

function loadData(text) {
  $.ajax({
    url: "https://play.dhis2.org/demo/api/25/dataStore/" + text,
    type: "GET",
    headers: {
        "Authorization": basicAuth,
    },
  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
  })
};