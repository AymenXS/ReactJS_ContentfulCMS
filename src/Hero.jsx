import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, error quam! Animi
            aspernatur consequatur repellendus facere corporis doloremque non natus?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
