
export const GifItem = ({title, url, id}) => {

  return (
    <div className="nose">
      <div className="card">
        <div className="contenedor-img">
          <img src={url} alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </div>
   
  )
}
// Me quede en el video 87