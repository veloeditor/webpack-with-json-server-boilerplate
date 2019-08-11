import API from "./contactCollection.js"
import callAPI from "./contactList.js"

const submitButton = document.querySelector("#record-contact")

//grab DOM references to each of the form fields
const ContactName = document.querySelector("#contactName")
const ContactPhoneNum = document.querySelector("#phoneNumber")
const ContactAddress = document.querySelector("#address")

//create new entry factory function
const newContact = (name, phoneNumber, address) => {
    return {
        name: name.value,
        phoneNumber: phoneNumber.value,
        address: address.value
    }
}

//create function to add new contact to the dom, uses eventListener on button click, creates the newContact variable that calls the newContact object and passes the 3 arguments in, then calls on the API save contacts function using the createContact variable as an argument
const addNewContactToAPI = () => {
    submitButton.addEventListener("click", event => {
        const createContact = newContact(ContactName, ContactPhoneNum, ContactAddress)
        API.saveContacts(createContact)
        .then(callAPI)
        .then(() => {
            ContactName = ""
            ContactPhoneNum = ""
            ContactAddress = ""
        })
    })
}

export default addNewContactToAPI