export function addContact(name, phoneNumber) {
  return {
    type: 'ADD_CONTACT',
    name,
    phoneNumber
  };
}
