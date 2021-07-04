import Image from 'next/image'
import Link from 'next/link'

const PlaceCard = ({ place }) => {
  const { fields: { description, slug, tagline, title, thumbnail } } = place;

  return (
    <div className="col-4 p-2">
      <div className="card">
        {/* Card Image */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt="Vercel Logo"
          className="card-img-top"
          width={400}
          height={300}
        />

        {/* Card Description */}
        <div className="card-body">
          <p className="card-text fs-3">{title}</p>
          <p className="card-text fs-6">{`"${tagline}"`}</p>
          <Link href={'/places/' + slug}><a className="btn btn-danger">Click here to know more</a></Link>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard;
