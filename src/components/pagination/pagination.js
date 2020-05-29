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
          <img src="left-arrow.png" alt="left arrow"/>
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
          <img src="next.png" alt="arrow next"/>
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
