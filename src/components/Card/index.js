import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';

const Container = styled.div`
  ${({bordered, theme, hoverable}) => `
    display: block;
    ${bordered && `border: 1px solid ${theme.cardColor}`};
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s ease;
    :hover{
        ${hoverable &&
          `
        cursor:pointer;
        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
        border-color: rgba(0, 0, 0, 0.09);`}
    }
    `};
`;

const Card = (props) => {
  return (
    <Container {...props}>
      <Header cover={props.cover} title={props.title} />
      <Body>{props.children}</Body>
    </Container>
  );
};

Card.defaultProps = {
  title: '',
  bordered: false,
  hoverable: false,
  cover: null
};

Card.propTypes = {
  title: PropTypes.object,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  cover: PropTypes.string
};

Card.Heaer = Header;

export default Card;
