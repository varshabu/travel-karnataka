import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import PlaceCard from '../components/PlaceCard'
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "places" })

  return {
    props: {
      places: res.items,
    }
  }
}

export default function Home({ places }) {
  return (
    <div className={styles.container}>

      {/* Nav bar */}
      <Navbar/>

      {/* List all the places */}
      <div className="py-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {places.map((place) => (
                <PlaceCard key={place.sys.id} place={place} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
