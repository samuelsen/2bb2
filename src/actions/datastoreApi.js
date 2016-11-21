const basicAuth = `Basic ${btoa('admin:district')}`;

const $ = require('jquery');

const api = 'https://play.dhis2.org/dev/api/25/dataStore/';

/* Issues a PUT-request to the DHIS datastore */
export function putData(text, body) {
  return $.ajax({
    url: `${api}${text}`,
    type: 'PUT',
    data: body,
    headers: {
      Authorization: basicAuth,
      'Content-Type': 'application/json',
    },
  }).then(data => data)
  .fail((jqXHR, textStatus, errorThrown) => {
    console.log(`HTTP Request Failed: ${jqXHR.status}`);
  });
}

/* Issues a DELETE-request to the DHIS datastore */
export function deleteData(text) {
  return $.ajax({
    url: `${api}${text}`,
    type: 'DELETE',
    headers: {
      Authorization: basicAuth,
    },
  }).then(data => data)
  .fail((jqXHR, textStatus, errorThrown) => {
    console.log(`HTTP Request Failed: ${jqXHR.status}`);
  });
}

/* Issues a GET-request to the DHIS datastore */
export function loadData(text) {
  return $.ajax({
    url: `${api}${text}`,
    type: 'GET',
    headers: {
      Authorization: basicAuth,
    },
  }).then(data => data)
  .fail((jqXHR, textStatus, errorThrown) => {
    console.log(`HTTP Request Failed: ${jqXHR.status}`);
  });
}

/* Issues a POST-request to the DHIS datastore */
export function postData(text, body) {
  return $.ajax({
    url: `${api}${text}`,
    type: 'POST',
    data: body,
    headers: {
      Authorization: basicAuth,
      'Content-Type': 'application/json',
    },
  }).then((data) => {
    window.location = `/viewData/${text}`;
    return data;
  }).fail((jqXHR, textStatus, errorThrown) => {
    console.log(`HTTP Request Failed: ${jqXHR.status}`);
  });
}
