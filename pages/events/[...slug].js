import { useRouter } from "next/router";
import EventSearch from "../../components/events/EventsSearch";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEvents = () => {
  const { query } = useRouter();
  let events = [];

  console.log(query.slug[0], query.slug[1]);

  if (query.slug) {
    events = getFilteredEvents({
      year: query.slug[0],
      month: query.slug[1]
    });
  }

  return (
    <div>
      <EventSearch />
      {events ? <EventList items={events} /> : null}s
    </div>
  )
}

export default FilteredEvents