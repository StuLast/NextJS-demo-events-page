import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert'
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEvents = () => {
  const router = useRouter();

  if (!router.query.slug) {
    return <p className='center'> Loading ...</p>;
  }

  const [year, month] = router.query.slug;

  const yearNumber = parseInt(year);
  const monthNumber = parseInt(month);

  if (
    isNaN(yearNumber) ||
    isNaN(monthNumber) ||
    monthNumber > 12 ||
    monthNumber < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>
            {' '}
            Unable to find data for year "{year}" : month "{month}"
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({
    year: yearNumber,
    month: monthNumber,
  });

  const date = new Date(yearNumber, monthNumber - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      {events.length > 0 ? (
        <EventList items={events} />
      ) : (
        <ErrorAlert>
          <p className='center'>No events found for filtered year and month</p>
        </ErrorAlert>
      )}
    </Fragment>
  );
};

export default FilteredEvents;
