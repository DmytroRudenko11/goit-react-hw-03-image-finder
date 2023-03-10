import styled from 'styled-components';

export function ImageGalleryItem({ src, largeIMG, alt }) {
  return (
    <Item>
      <Image src={src} alt={alt} />
    </Item>
  );
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
  border: 1px solid #189fbe;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.03);
  }
`;
