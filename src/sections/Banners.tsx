import { Banner } from "../components";

const Banners = () => {
  return (
    <section>
      <Banner id="weare" />
      <Banner reverse={true} />
      <Banner />
    </section>
  );
};

export default Banners;
