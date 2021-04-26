import React from 'react';
import PropTypes from 'prop-types';


const ContactList = ({ contacts, onDeleteContact }) => {
    return(
        <ul>
            {contacts.map(contact =>(
              <li key={contact.id}>
                  {contact.name}:{contact.number}
                  <button
                  type ='button'
                  onClick= {()=> onDeleteContact(contact.id)}>
                      Delete
                  </button>
              </li>  
            ))}
        </ul>
    );

};

ContactList.propTypes = {
value: PropTypes.string,
contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        number: PropTypes.number,
    }),
),
onDeleteContact: PropTypes.func,
}

export default ContactList;