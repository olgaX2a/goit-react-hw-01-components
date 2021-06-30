import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({
  avatarUrl = "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  name,
  tag,
  location,
  stats,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatarUrl} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers ?? 0}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views ?? 0}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes ?? 0}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Profile;
