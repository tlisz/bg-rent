import styles from './EventSelector.module.css';

const EventSelector = () => {
    let events = ['event1', 'event2'];
  return (
    <span className={styles.container}>
      <select name='events' id='events'>
        {events.map(e => <option value={e}>{e}</option>)}
      </select>
    </span>
  );
};

export default EventSelector;
