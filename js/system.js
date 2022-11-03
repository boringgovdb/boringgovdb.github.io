const table = document.getElementById("logTable");

var items = [
    { date: "01/11/2022, 04:20:35", notes: "Bug identified with AI helpbot", status: "Warning"},
    { date: "02/11/2022, 09:14:09", notes: "AI helpbot not functioning as expected", status: "Warning"},
    { date: "02/11/2022, 21:42:45", notes: "AI helpbot has gone rogue", status: "Danger"},
    { date: "03/11/2022, 10:01:58", notes: "AI helpbot is trying to access database", status: "<button class='dangerButton' onclick='puzzle()'>Nothing wrong here</button>"},
];

items.push({date: new Date().toLocaleString(), notes: "Admin has logged in", status: "Log in"})

function loadLogTableData(items) {
    items.reverse().forEach( item => {
      let row = table.insertRow();
      row.insertCell(0).innerHTML = item.date;
      row.insertCell(1).innerHTML = item.notes;
      row.insertCell(2).innerHTML = item.status;
    });
}

loadLogTableData(items);