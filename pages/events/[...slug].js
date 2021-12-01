import { useRouter } from "next/router";

const FilteredEvents = () =>  {
  const {query} = useRouter();
  console.log(query)

  return (
    <div>
      Event page with slug: {query.slug}
    </div>
  )
}

export default FilteredEvents