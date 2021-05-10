import styled from 'styled-components';

export const Search = styled.input`
   width: 100%;
   max-width: 370px;
   background: var(--cinza-escuro);
   color: #fff;
   padding: 8px 15px;
   border: none;
   border-radius: 20px;
   margin-right: 15px;

   &:focus{
       outline:none;
   }
`;
