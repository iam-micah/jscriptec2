function toggle(e) {
    
    if (document.getElementById("all").checked) {
        document.getElementById("main-label").innerHTML = " Uncheck All";
    } else {
        document.getElementById("main-label").innerHTML = " Check All"
    }

    checkboxes = document.getElementsByName("option");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = e.checked;
    }

    
}