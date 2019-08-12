import createContactHTML from "./contactFactory.js"
import API from "./contactCollection.js"

const contactContainer = document.querySelector("#contact-container")

//how the htmlstring
const contactList = {
    displayContactsInDom(HTMLstring) {
        contactContainer.innerHTML += HTMLstring
    }
}

//function to actually call the api, get the new contact and write the innerHTML to the DOM
const callAPI = () => {
    API.getContacts()
        .then(contacts => {
            contacts.forEach(contact => {
                const HTMLVersion = createContactHTML.contactPersonHTML(contact)
                contactList.displayContactsInDom(HTMLVersion)
            })
        })
}

export default callAPI