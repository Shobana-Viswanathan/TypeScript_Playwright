"use strict";
function showDetails(id, name, email_id) {
    console.log("ID:", id, "Name:", name);
    if (email_id != undefined)
        console.log("Email-id:", email_id);
}
showDetails(101, "Virat kohli");
showDetails(103, "Dhoni", "dhoni@gmail.com");
