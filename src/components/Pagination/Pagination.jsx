import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

export const Pagination = ({ onChangePage, totalPages, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i <= 20) {
      pages.push(i);
    }
  }

  return (
    <Pages>
      <Button
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <AiOutlineLeft />
      </Button>
      {pages.map((page, index) => (
        <Page
          key={index}
          currentPage={currentPage}
          onClick={() => onChangePage(index + 1)}
        >
          {page}
        </Page>
      ))}
      <Button
        disabled={currentPage === 20}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <AiOutlineRight />
      </Button>
    </Pages>
  );
};

const Pages = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 1.2rem;
  padding: 20px 0;
  overflow: hidden;
`;
const Page = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;

  background-color: ${props =>
    props.currentPage === props.children && '#fd6a02'};
  border: 2px solid #fd6a02;
  border-radius: 5px;
  cursor: pointer;

  transition: all 250ms linear;
  &:hover {
    scale: 1.2;
    background-color: #ffbf00;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;

  background-color: #fd6a02;
  border: 2px solid #fd6a02;
  border-radius: 5px;
  cursor: pointer;

  transition: all 250ms linear;

  &:hover {
    scale: 1.2;
    background-color: #ffbf00;
  }
`;
