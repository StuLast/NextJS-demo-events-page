import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventSearch from '../../components/events/EventsSearch';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const AllEventsPage = () => {
  const router = useRouter();

  const onSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  const events = getAllEvents();
  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
