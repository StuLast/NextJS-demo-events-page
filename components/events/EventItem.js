
import Button from '../ui/button'; 
import DateIcon from'../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

import styles from './event-item.module.css';

const EventItem = ({title, image, date, location, id}) => {

  const formatDate = new Date(date).toLocaleDateString('en-UK', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const formatAddress = location.replace(', ', '\n');

  const exploreLink = `/events/event/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{ title }</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time>{ formatDate }</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{ formatAddress }</address>
        </div>
        <div className={styles.actions}>
         <Button link={exploreLink}>
           <span>Explore event</span>
          <span className={styles.icon}><ArrowRightIcon /></span> 
          </Button>
        </div>     
      </div> 

    </li>
  );
}

export default EventItem