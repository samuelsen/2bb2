const basicAuth = `Basic ${btoa('admin:district')}`;

var $ = require('jquery');

/* Issues a PUT-request to the DHIS datastore */
export function putData(text, data) {
  return $.ajax({
    url: "https://play.dhis2.org/demo/api/25/dataStore/" + text,
    type: "PUT",
    data: data,
    headers: {
      "Authorization": basicAuth,
      "Content-Type": "application/json"
    },
  }).then(function(data, textStatus, jqXHR) {
    //console.log("HTTP Request Succeeded: " + jqXHR.status);
    //console.log(data);
    return data;
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed: " + jqXHR.status);
  })
}

/* Issues a DELETE-request to the DHIS datastore */
export function deleteData(text) {
  return $.ajax({
    url: "https://play.dhis2.org/demo/api/25/dataStore/" + text,
    type: "DELETE",
    headers: {
      "Authorization": basicAuth,
    },
  }).then(function(data, textStatus, jqXHR) {
    //console.log("HTTP Request Succeeded: " + jqXHR.status);
    //console.log(data);
    return data;
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed: " + jqXHR.status);
  })
}

/* Issues a GET-request to the DHIS datastore */
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

/* Issues a POST-request to the DHIS datastore */
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
    //console.log("HTTP Request Succeeded: " + jqXHR.status);
    //console.log(data);
    return data;
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed: " + jqXHR.status);
  })
}
