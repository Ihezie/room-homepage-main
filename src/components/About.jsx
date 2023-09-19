import aboutImageDark from "../assets/images/image-about-dark.jpg";
import aboutImageLight from "../assets/images/image-about-light.jpg";
const About = () => {
  return (
    <section className="lg:flex">
      <div className="lg:w-[30%]">
        <img
          src={aboutImageDark}
          className="w-full h-full object-cover"
          alt="dark about image"
        />
      </div>
      <article className="pl-9 pr-5 py-10 lg:flex lg:flex-col lg:justify-center lg:w-2/5">
        <h2 className="uppercase mb-3 font-bold tracking-[5px] text-sm lg:text-lg">
          About our furniture
        </h2>
        <p className="text-darkGray ">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <div className="lg:w-[30%]" >
        <img
          src={aboutImageLight}
          className="w-full h-full object-cover"
          alt="light about image"
        />
      </div>
    </section>
  );
};
export default About;
