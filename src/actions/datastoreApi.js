/* global Materialize */
const basicAuth = `Basic ${btoa('admin:district')}`;

const $ = require('jquery');

const api = 'https://play.dhis2.org/demo/api/25/dataStore/';

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
  .fail(() => {
    Materialize.toast('An error occurred while putting data to store', 4000);
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
  .fail(() => {
    Materialize.toast('An error occurred while deleting data from store', 4000);
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
  .fail(() => {
    Materialize.toast('An error occurred while getting data from store', 4000);
  });
}

/* Issues a POST-request to the DHIS datastore */
export function postData(text, body, inCreate) {
  return $.ajax({
    url: `${api}${text}`,
    type: 'POST',
    data: body,
    headers: {
      Authorization: basicAuth,
      'Content-Type': 'application/json',
    },
  }).then((data) => {
    if (inCreate) {
      window.location = `/view/${text}`;
    }
    return data;
  }).fail(() => {
    Materialize.toast('An error occurred while posting data to store', 4000);
  });
}
