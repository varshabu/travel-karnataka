import Image from 'next/image'

const AttractionCard = ({ place }) => {
  const { thumbnail, title } = place.fields;
  return (
    <div className="col">
      <div className="card">
        {/* Card Image */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt="Vercel Logo"
          className="card-img-top"
          width={200}
          height={150}
        />

        {/* Card Description */}
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default AttractionCard;
