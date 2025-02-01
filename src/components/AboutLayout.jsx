import CustomizedHeading from "./CustomizedHeading";
import SectionHeading from "./SectionHeading";

const aboutCards = [
  {
    src: "/icon-1.png",
    alt: "icon",
    title: "Proactive Approach",
    texts:
      "We stay ahead of emerging threats to ensure your organization is always protected.",
    class: "img-1",
  },
  {
    src: "/icon-2.png",
    alt: "icon",
    title: "Expertise",
    texts:
      "Our team of seasoned professionals brings deep industry knowledge and experience.",
    class: "img-2",
  },
  {
    src: "/icon-3.png",
    alt: "icon",
    title: "Tailored Solutions",
    texts:
      "We understand that every organization is unique. Our solutions are customized to meet your specific needs.",
    class: "img-2",
  },
  {
    src: "/icon-4.png",
    alt: "icon",
    title: "Commitment to Excellence",
    texts:
      "We are dedicated to delivering the highest quality services and achieving the best outcomes for our clients.",
    class: "img-2",
  },
];

function AboutLayout() {
  return (
    <div className="about">
      <SectionHeading>How we work</SectionHeading>
      <CustomizedHeading />

      <section className="about-container">
        {aboutCards.map((card, index) => (
          <div key={index} className="about-card">
            <div className="about-card-img">
              <img src={card.src} alt={card.alt} width="200" height="200" />
            </div>

            <div className="about-card-mainTexts">
              <h4 className="about-card-title">{card.title}</h4>
              <p className="about-card-texts">{card.texts}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutLayout;
