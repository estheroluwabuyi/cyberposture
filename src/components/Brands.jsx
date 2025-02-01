import SectionHeading from "./SectionHeading";

const brands = [
  {
    src: "public/brands/Cyberation-Logo.png",
    alt: "cyberation logo",
    class: "img-1",
  },
  {
    src: "public/brands/Esusu-Logo.png",
    alt: "esusu logo",
    class: "img-2",
  },
  {
    src: "public/brands/Cellulant-Logo.png",
    alt: "cellulant logo",
    class: "img-3",
  },
  {
    src: "public/brands/Digiss-Logo.png",
    alt: "Digiss logo",
    class: "img-4",
  },
  {
    src: "public/brands/Cyberation-Logo.png",
    alt: "cyberation logo",
    class: "img-1",
  },
  {
    src: "public/brands/Cyberation-Logo.png",
    alt: "cyberation logo",
    class: "img-1",
  },
];

function Brands() {
  return (
    <section className="brands">
      <SectionHeading>Organizations that trust us</SectionHeading>
      <div className="brands-container">
        {brands.map((brand, index) => (
          <div key={index} className={brand.class}>
            <img src={brand.src} alt={brand.alt} width="100" height="100" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
