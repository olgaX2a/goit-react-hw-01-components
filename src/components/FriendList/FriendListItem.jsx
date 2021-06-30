import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({
  avatar = "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_960_720.jpg",
  name,
  isOnline,
}) => {
  return (
    <li className={s.item}>
      <span className={s[isOnline]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
