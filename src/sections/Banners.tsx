import { Banner } from "../components";

const Banners = () => {
  return (
    <section>
      <Banner
        id="weare"
        image="/img/banner-we-are.jpg"
        title="we are."
        buttonText="THE PLAYERS"
      />
      <Banner
        reverse={true}
        id="wedo"
        image="/img/banner-we-do.jpg"
        title="we do."
        buttonText="THE PROJECTS"
      />
      <Banner
        id="careers"
        image="/img/banner-carrers.jpg"
        title="careers"
        buttonText="THE POSITIONS"
      />
    </section>
  );
};

export default Banners;
