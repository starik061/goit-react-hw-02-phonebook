import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
margin: 0 auto;
border: 1px solid rgb(224, 224, 224);
// border-collapse: collapse;
border-spacing: 0;
border-radius: 5px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
overflow: hidden;

& th, td {
  width: 150px;
  height: 30px;
  text-align: center;
}


& thead tr {
background-color: #00BCD5;
color: white;
text-transform: uppercase;
}

& tr {
text-transform: capitalize;    
}


& th:nth-child(3n+1), td:nth-child(3n+1),
th:nth-child(3n+2), td:nth-child(3n+2) {
border-right: 1px solid rgb(224, 224, 224);
}
& tr:nth-child(2n) {
    background-color: #eeeeee;
 } 
  `