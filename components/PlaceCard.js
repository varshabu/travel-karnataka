import Image from 'next/image'
import Link from 'next/link'

const PlaceCard = ({ place }) => {
  const { fields: { description, slug, tagline, title, thumbnail } } = place;

  return (
    <div className="col">
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
          <p className="card-text fs-3" style={{ textDecoration: 'underline' }}>{title}</p>
          <p className="card-text">{tagline}</p>
          <div  style={{ textAlign: "right" }}>
            <Link href={'/places/' + slug}>
              <a className="btn btn-danger">Read more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard;
