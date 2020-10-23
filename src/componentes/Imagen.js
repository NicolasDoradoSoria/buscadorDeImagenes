import React from "react";

const Imagen = ({imagen}) => {
  const { largeImagenURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={previewURL} alt={tags} />
        <div className="card-body">
          <p className="card-text">{likes} Me Gusta</p>
          <p className="card-text">{views} Vistas</p>
        </div>

        <div className="card-footer">
          <a href={largeImagenURL} target="_blank" className="btn btn-primary btn-block" rel="noopener noreferrer">ver Imagen</a>

        </div>
      </div>
    </div>
  );
};

export default Imagen;
