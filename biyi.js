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

// Left Arrow section




// Right arrow section



async function logJSONData(){
    const response = await
    fetch("http://example.com/pictures.json");
    const jsonData = await response.json();
    console.log(jsonData);
}

// Example POST method implementation:
async function postData(url = "", data = {}){
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", //*GET, POST, PUT, DELETE. etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", //*default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded'.
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referre-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    
    });
    return response.json(); // parses JSON response into native Javascript objects
}

postData("https://dog.ceo/api", {
    answer: 42}).then((data)=>{
        console.log(data); //JSON data parsed by 'data.json()' call
    });

