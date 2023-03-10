import { Component } from 'react';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleInputChange = e => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchValue.trim() === '') {
      toast.info('Wow so easy !');
      return;
    }

    this.props.onSubmit(this.state.searchValue);

    this.setState({
      searchValue: '',
    });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search images and photos"
            name="searchValue"
            value={this.state.searchValue}
          />
        </form>
      </header>
    );
  }
}
