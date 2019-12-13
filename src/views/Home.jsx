import React from "react";

const Home = () => {
  return (
    <div>
      {/* <header>
      <HeaderMain/>
      </header> */}
      <div className="firstView">
        <h1 className="lookbook">LOOKBOOK</h1>
        <h2 className="soustitre">Découvrez notre selection</h2>
      </div>
      <div className="transition">
        <h2>SUIVEZ-NOUS</h2>
        <h4 className="MEG">#lesminettesengoguette</h4>
      </div>
      <section id="informations">
        <div className="informations">
          <a href="/vetements" className="infoImg">
            <img
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575532200/MEG/people-2589862_1920_cocya2.jpg"
              alt="Nos produits"
            />
          </a>
          <div className="small-info">
            <h4>Produits</h4>
            <p>Venez découvrir notre gamme de vêtements pour toutes</p>
          </div>
        </div>

        <div className="informations">
          <a href="/fabrication" className="infoImg">
            <img
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575530772/MEG/IMG_3104_upjjt4.jpg"
              alt="La fabrication"
            />
          </a>
          <div className="small-info">
            <h4>Fabrication</h4>
            <p>
              Des collections réalisées en France, avec des tissus fabriqués à
              base de fils issus de la production biologique.
            </p>
          </div>
        </div>

        <div className="informations">
          <a href="/histoire" className="infoImg">
            <img
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575530772/MEG/IMG_3105_zhsliy.jpg"
              alt="mon histoire"
            />
          </a>
          <div className="small-info">
            <h4>Histoire</h4>
            <p>
              Tout part d'une envie de positiver et de profiter du savoir-faire
              français du monde la Mode.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
