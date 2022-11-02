const table = document.getElementById("locationsTable");

function loadLocationsTableData(country_data) {
    country_data.ref_country_codes.forEach( item => {
      let row = table.insertRow();

      if (item.country == "Chad") {
        row.insertCell(0).innerHTML = item.country;
        row.insertCell(1).innerHTML = "<button onClick='puzzle3()'>???</button>";
        row.insertCell(2).innerHTML = item.latitude;
        row.insertCell(2).innerHTML = item.longitude;
      }
      else {
        row.insertCell(0).innerHTML = item.country;
      row.insertCell(1).innerHTML = item.alpha3;
      row.insertCell(2).innerHTML = item.latitude;
      row.insertCell(2).innerHTML = item.longitude;
      }
    });
}

loadLocationsTableData(country_data);