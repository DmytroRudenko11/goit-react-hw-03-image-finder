import { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

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
      toast.info('Enter search value!');
      return;
    }
    this.props.onSubmit(this.state.searchValue);

    this.setState({
      searchValue: '',
    });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SubmitButton type="submit">
            <BsSearch
              style={{ color: 'black', width: '18px', height: '18px' }}
            />
          </SubmitButton>

          <Input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search images and photos"
            name="searchValue"
            value={this.state.searchValue}
          />
        </Form>
      </Header>
    );
  }
}

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  /* height: 50px; */
  padding: 20px;
  background-color: #fd6a02;
  text-align: center;
`;

const Form = styled.form`
  color: #555;
  display: inline-flex;
  padding: 2px;
  border: 2px solid black;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  transition: all 250ms linear;

  &::placeholder {
    color: black;
  }
  &:focus {
    box-shadow: 0 0 3px 0 #ffbf00;
    border-color: #ffbf00;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 40px;
  padding: 8px;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent;
  cursor: pointer;
  opacity: 0.7;

  transition: all 250ms linear;
  &:hover {
    opacity: 1;
    background-color: #ffbf00;
  }

  &:focus {
    box-shadow: 0 0 3px 0 #ffbf00;
    border-color: #ffbf00;
    outline: none;
  }
`;
