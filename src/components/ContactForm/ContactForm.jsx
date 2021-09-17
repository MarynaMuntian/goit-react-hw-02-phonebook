import React from 'react';
import css from './ContactForm.module.css';
import shortid from 'shortid';

export class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
  };
  
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

     handleChange = (event) => {
    this.setState({
        [event.currentTarget.name]: event.currentTarget.value,
    })
  };
  
  // handleNameChange = (event) => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleNumberChange = (event) => {
  //   this.setState({ number: event.currentTarget.value })
  // };
    
    handleSubmit = (event) => {
      event.preventDefault();
      
      this.props.onSubmit(this.state);
      this.reset();
  };
  
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
                name="name"
                id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
            <label htmlFor={this.numberInputId}>Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
                name="number"
                id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
        );
    }
}