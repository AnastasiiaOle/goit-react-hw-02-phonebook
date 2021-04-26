import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'short-id';



class ContactForm extends Component {
static propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const {name, value } = event.currentTarget;

        this.setState({[name]: value,});
    };

    handleSubmit = event => {
        event.preventDefault();

        const contact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
        };

        this.props.onSibmit(contact);

        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            id: '',
            name: '',
            number: '', 
        });
    };

    render() {
return (
<div>
<form>
    <label>
        Name
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
        />
    </label>
    <label>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
        />
    </label>
    <button type='submit'>
        Add contact
    </button>
</form>
</div>
);

    }
}

export default ContactForm;