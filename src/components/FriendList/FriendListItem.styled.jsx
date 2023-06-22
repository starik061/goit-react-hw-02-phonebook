import styled from '@emotion/styled';


const FriendCard = styled.li`
display: flex;
align-items: center;
width: 200px;
margin: 0 auto 5px;
padding: 10px;
border: 0.5px solid #F4F4FD;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

& .status {
  
}

& img {
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid rgb(224, 224, 224);
}

& .name {
    font-size: 18px;
    font-weight: bold;
}
`
const FriendStatus = styled.span`
  width:10px;
    height:10px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: ${getIsOnlineColor};
`

function getIsOnlineColor({ status }) {
    if (status) {
        return "green"
    }
    return "red"
}

export { FriendCard, FriendStatus };