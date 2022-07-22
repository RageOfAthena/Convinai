import styles from "./Card.module.css";
import { useSelector } from "react-redux";

function Card() {
  const log = useSelector((state) => state.counter.user);

  return (
    <div className={styles.card}>
      <img
        src={log.data.avatar}
        alt={`image ${log.data.first_name}`}
        className={styles.avatar}
      />
      <h1 className={styles.head}>
        {log.data.first_name} {log.data.last_name}
      </h1>
      <h3 className={styles.email}>
        <a href={`mailto:${log.data.email}`}>{log.data.email}</a>
      </h3>
    </div>
  );
}
export default Card;
