import { Component } from 'react';
import { FiSearch } from "react-icons/fi";
import { toast } from 'react-toastify';
import { Form, Input, Button } from './SearchBar.styled'

export default class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleImageChange = event => {
    this.setState({ imagesName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imagesName.trim() === '') {
    toast.error('Треба щось ввести');
    return;
    }
    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };


  render() {
    
    return (
      
        <Form onSubmit={this.handleSubmit}>
         <Input
            type="text"
            name="imageName"
            onChange={this.handleImageChange}
          />
           <Button type="submit">
              <FiSearch size="15" />
          </Button>
        </Form>
      
    );
  }
}