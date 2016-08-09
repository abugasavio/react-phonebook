function addContact(state = [], action) {
  console.log('add contact called...' + action.type);

  return state;
}

function contacts(state = [], action) {
  switch (action.type) {
  case 'ADD_CONTACT':
    return [...state, {name: action.name, phoneNumber: action.phoneNumber}];
  default:
    return state;
  }
}

export default contacts;
