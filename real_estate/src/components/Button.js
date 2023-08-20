
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? '#CD853F' : '#000d1a')};
    color: #fff;
  }
`;