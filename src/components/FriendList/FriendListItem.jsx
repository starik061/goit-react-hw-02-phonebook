import PropTypes from 'prop-types';
import { FriendCard, FriendStatus } from "./FriendListItem.styled.jsx"

export const FriendListItem = ({ avatar, name, isOnline })=> {
    return (<FriendCard>
  <FriendStatus status={isOnline}></FriendStatus>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</FriendCard>)
 }

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
  }