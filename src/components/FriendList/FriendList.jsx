import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem.jsx";

export const FriendList= ({ friends })=> {
    return <ul className="friend-list" style={{ margin: " 0 auto"}}>
        {friends.map(({id, avatar, name, isOnline }) => {
            return (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
 })}
</ul>
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline:PropTypes.bool,
        id: PropTypes.number
    })
    ).isRequired
  }