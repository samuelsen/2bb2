var username = "admin";
var password = "district";

export function get (text) {
    $.ajax({
        type: "GET",
        url: "https://play.dhis2.org/demo/api/25/dataStore/METADATASTORE/Version_1/",
        dataType: 'json',
        async: false,
        data: '{"username": "' + username + '", "password" : "' + password + '"}',
    }).then(function(data){
        return(data);
    });
}