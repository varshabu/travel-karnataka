import { createClient } from 'contentful'
import Image from 'next/image'
import Gallery from '../../components/Gallery'
import Navbar from '../../components/Navbar'
import AttractionCard from '../../components/AttractionCard'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "places" })

  const paths = res.items.map(( item ) => {
    return {
      params: { slug: item.fields.slug}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({ content_type: "places", 'fields.slug': params.slug })

  return {
    props: {
      place: items[0]
    }
  }
}

const PlacesDetails = ({ place }) => {
  const { fields: { description, featuredImage, gallery, placesToVisit, tagline, thumbnail, title }} = place;

  return (
    <div>
      <Navbar/>
      <div className="w-75 p-3" style={{ margin: 'auto', textAlign: 'center' }}>
        <p className="fs-1">{title}</p>
        <p className="fs-3">{tagline}</p>

        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt="Vercel Logo"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />

        <p className="fs-6 pt-4">{description}</p>
        <p className="fs-3 pt-5" style={{ textAlign: 'left' }}>Places to visit</p>

        <div className="py-4">
          <div className="container">
            <div className="row">
              {placesToVisit && placesToVisit.map((place) => (
                <AttractionCard key={place.sys.id} place={place} />
              ))}
            </div>
          </div>
        </div>
        {/* <Gallery gallery={gallery} /> */}
      </div>
    </div>
  )
}

export default PlacesDetails;
