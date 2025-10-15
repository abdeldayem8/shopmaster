import HomeBanner from "../../assets/homebanner.png";

const Banner = () => {
  return (
    <section className="relative w-full  md:h-[75vh] overflow-hidden">
      {/* Banner Image */}
      <img
        src={HomeBanner}
        alt="ShopMaster Banner"
        className="w-full h-full"
      />

     
    </section>
  );
};

export default Banner;
