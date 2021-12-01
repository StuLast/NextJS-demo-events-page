import { Fragment } from 'react';
import {useRouter} from 'next/router';
import { getEventById } from '../../../dummy-data';
import EventContent from '../../../components/event-detail/event-content';
import EventLogistics from '../../../components/event-detail/event-logistics';
import EventSummary from '../../../components/event-detail/event-summary';

const EventDetailPage = () => {

  const { query } = useRouter();
  
  const event = getEventById(query.eventId);
  if(!event) {
    return <p>No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} image={event.image} imageAlt={event.title} address={event.location}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
} 

export default EventDetailPage;