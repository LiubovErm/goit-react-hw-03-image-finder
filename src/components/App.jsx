import { Component } from 'react';
import { Box } from './Box/Box';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imagesName: '',
  };

  handleFormSubmit = imagesName => {
    this.setState({ imagesName });
  };

  render() {
    const { imagesName } = this.state;

    return (
      <Box>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery imagesName={imagesName}  />
        <ToastContainer autoClose={2000}/>
      </Box>
    );
  }
}

