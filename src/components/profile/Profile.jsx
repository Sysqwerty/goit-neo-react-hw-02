import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
