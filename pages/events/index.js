import EventSearch from "../../components/events/EventsSearch"
import { useRouter } from 'next/router'
import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events/EventList'

const AllEventsPage = () => {
  const router = useRouter();


  const onSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  }

  const events = getAllEvents()
  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </div>
  )
}

export default AllEventsPage