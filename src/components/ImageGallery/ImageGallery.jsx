import React, { Component } from 'react';
import { getImage } from 'APIRequest/APIrequest';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styled from 'styled-components';

export class ImageGallery extends Component {
  state = {
    imageData: null,
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      const reqestedData = await getImage(this.props.searchValue);
      this.setState({
        imageData: reqestedData.hits,
        totalHits: reqestedData.totalHits,
      });
    }
  }
  render() {
    return (
      <List>
        {this.state.imageData !== null ? (
          this.state.imageData.map(
            ({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeIMG={largeImageURL}
              />
            )
          )
        ) : (
          <p>Nothing found</p>
        )}
      </List>
    );
  }
}

const List = styled.ul`
  padding: 15px;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
