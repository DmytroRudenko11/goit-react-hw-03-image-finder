import React, { Component } from 'react';
import { getImage } from 'APIRequest/APIrequest';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Pagination } from 'components/Pagination/Pagination';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

export class ImageGallery extends Component {
  state = {
    imageData: null,
    totalHits: 0,
    currentPage: 1,
    perPage: 12,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchValue !== this.props.searchValue ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState(prevState => ({
        isLoading: !prevState.isLoading,
      }));

      const reqestedData = await getImage(
        this.props.searchValue,
        this.state.currentPage,
        this.state.perPage
      );

      this.setState({
        imageData: reqestedData.hits,
        totalHits: reqestedData.totalHits,
      });

      setTimeout(
        () =>
          this.setState(prevState => ({
            isLoading: !prevState.isLoading,
          })),
        500
      );
    }

    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ currentPage: 1 });
    }
  }

  setCurrentPage = currentPage => {
    if (currentPage !== '...') {
      const number = Number(currentPage);

      this.setState({ currentPage: number });
      const element = document.getElementById('ahcnor1');
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { imageData, currentPage, totalHits, perPage } = this.state;
    return (
      <div>
        {this.state.isLoading && (
          <Preloader>
            <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              strokeWidthSecondary={2}
              color="#ffbf00"
              secondaryColor="white"
            />
          </Preloader>
        )}
        <List id="ahcnor1">
          {totalHits === 0 && imageData !== null && (
            <StartText>No pictures found on your request</StartText>
          )}
          {imageData !== null ? (
            imageData.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeIMG={largeImageURL}
              />
            ))
          ) : (
            <StartText>It's time to search pictures!</StartText>
          )}
        </List>
        {totalHits > perPage && (
          <Pagination
            currentPage={currentPage}
            onChangePage={this.setCurrentPage}
            totalPages={Math.ceil(totalHits / perPage)}
          />
        )}
        {/* <button onClick={this.loadMore}>Load More</button> */}
      </div>
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

const Preloader = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StartText = styled.h1`
  text-align: center;
  margin: 0 auto;
`;
