import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink as Link,
  useHistory,
} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  PaginationWrapper,
  ButtonPagination,
  Continue,
  LinkChildren,
  Body,
} from '../../view/styled/index';
import * as actions from '../../redux/actions';
import {Button} from '../../view';

const Pagination = ({
                      currentPage,
                      setCurrentPage, pagesQuantity,
                    }) => {
  const number = currentPage - 1;
  const history = useHistory();

  const handleClick = (data) => {
    if (data === 'mine') {
      setCurrentPage(currentPage - 1);
      history.push(`${currentPage - 1}`);
    } else {
      setCurrentPage(currentPage + 1);
      history.push(`${currentPage + 1}`);
    }
  };

  return (
    <PaginationWrapper>
      <Button
        type="button"
        marginText="0"
        onClick={() => handleClick('mine')}
        disabled={currentPage === 1}
      >
        <ButtonPagination>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L10.4142 12L14.7071 7.70711Z" fill="#BBBECD"/>
          </svg>
        </ButtonPagination>
      </Button>

      <Body>
        {currentPage > 1 && (
          <Link to="1">
            <LinkChildren
              onClick={() => setCurrentPage(1)}
              type="button"
            >
              1
            </LinkChildren>
          </Link>
        )}
        {currentPage >= 4 && (
          <Continue>...</Continue>
        )}
        {currentPage >= 3 && (
          <Link to={`${number}`}>
            <LinkChildren
              onClick={() => setCurrentPage(number)}
              type="button"
            >
              {number}
            </LinkChildren>
          </Link>
        )}
        <Link to={`${currentPage}`}>
          <LinkChildren
            type="button"
            onClick={() => setCurrentPage(currentPage)}
            isActive
          >
            {currentPage}
          </LinkChildren>
        </Link>
        {currentPage < pagesQuantity && (
          <Link to={`${currentPage + 1}`}>
            <LinkChildren
              onClick={() => setCurrentPage(currentPage + 1)}
              type="button"
            >
              {currentPage + 1}
            </LinkChildren>
          </Link>
        )}
        {currentPage < (pagesQuantity - 2) && (
          <Continue>&nbsp;...&nbsp;</Continue>
        )}
        {currentPage < (pagesQuantity - 1) && (
          <Link to={`${pagesQuantity}`}>
            <LinkChildren
              type="button"
            >
              {pagesQuantity}
            </LinkChildren>
          </Link>
        )}
      </Body>
      <Button
        type="button"
        marginText="0"
        disabled={currentPage === pagesQuantity}
        onClick={() => handleClick()}
      >
        <ButtonPagination>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292893 11.7071C-0.097631 11.3166 -0.097631 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711Z" fill="#BBBECD"/>
          </svg>
        </ButtonPagination>
      </Button>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesQuantity: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: state.getUser.currentPage,
  pagesQuantity: state.getUser.pagesQuantity,
});

export default (
  connect(mapStateToProps, actions)(Pagination)
);
