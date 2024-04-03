// Account Section
function myAccount() {
    let modal = document.getElementById("account-button")
    if (modal.classList.contains("not-visible")) {
        modal.classList.add("visible")
        modal.classList.remove("not-visible")
        let modal2 = document.getElementById("help-button")
        if (!modal2.classList.contains("no-visible")) {
            modal2.classList.add("no-visible")
            modal2.classList.remove("now-visible")
        }
    } else {
        modal.classList.add("not-visible")
        modal.classList.remove("visible")
    }

};

// Help section
function askHelp() {
    let modal = document.getElementById("help-button")
    if (modal.classList.contains("no-visible")) {
        modal.classList.add("now-visible")
        modal.classList.remove("no-visible")
        let modal2 = document.getElementById("account-button")
        if (!modal2.classList.contains("not-visible")) {
            modal2.classList.add("not-visible")
            modal2.classList.remove("visible")
        }
    } else {
        modal.classList.add("no-visible")
        modal.classList.remove("now-visible")
    }
};

