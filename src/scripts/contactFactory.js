//create a variable that holds the html layout string of each contact entry
const createContactHTML = {
    contactPersonHTML(contact) {
        return `
            <div class="contact">
            <h1>${contact.name}</h1>
            <p>${contact.phoneNumber}</p>
            <p>${contact.address}</p>  
        </div> `
    }
}

export default createContactHTML