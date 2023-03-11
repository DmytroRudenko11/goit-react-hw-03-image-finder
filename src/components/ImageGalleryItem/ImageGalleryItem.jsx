import styled from 'styled-components';
import { Modal } from 'Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Item>
        <Image
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.handleOpenModal}
        />
        {this.state.showModal && (
          <Modal
            image={this.props.largeIMG}
            alt={this.props.alt}
            onClose={this.handleCloseModal}
            onOpen={this.state.showModal}
          />
        )}
      </Item>
    );
  }
}

const Item = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  width: calc((100% - 60px) / 4);
  cursor: zoom-in;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;

  border-radius: 4px;
  border: 1px solid #fd6a02;
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.75);
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.03);
  }
`;
