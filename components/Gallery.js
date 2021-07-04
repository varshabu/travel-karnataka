import Image from 'next/image'

const Gallery = ({ gallery }) => {
  console.log(gallery[0].fields.file.url);
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Image src={'https:' + gallery[0].fields.file.url} height={400} width={300} />
        </div>
        <div className="carousel-item active">
          <Image src={'https:' + gallery[0].fields.file.url} height={400} width={300} />
        </div>
        <div className="carousel-item">
          <Image src={'https:' + gallery[0].fields.file.url} height={400} width={300} />
        </div>
        {/* {gallery.map((image) => (
          <div key={image.sys.id} className="carousel-item">
            <Image src={'https:' + image.fields.file.url} height={400} width={300} />
          </div>
        ))} */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Gallery;
