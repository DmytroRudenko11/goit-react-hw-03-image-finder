import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleSubmit = name => {
    this.setState({ searchValue: name });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />

        <ImageGallery searchValue={this.state.searchValue} />

        <ToastContainer autoClose={3500} />
      </div>
    );
  }
}
