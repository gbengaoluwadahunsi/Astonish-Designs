import "./services.scss";

const Services = () => {
  return (
    <>
      <hr />
      <div className="serviceSection">
        <div className="firstDiv">
          <h2>Our Services</h2>
          <p className="serviceParagraph">
            Explore our diverse range of services meticulously tailored to meet
            your every fashion need.
          </p>
        </div>

        <div className="serviceWrap">
          <div className="services">
            <div className="div1">
              <img
                src="/images/scissors.png"
                alt="scissors"
                width={130}
                className="icon scissors"
              />
              <h2 className="smallScissors">Custom Clothing Design</h2>
              <p>
                Astonish Designs specializes in creating one-of-a-kind, bespoke
                garments tailored to individual preferences and measurements.
                Clients can expect a personalized experience that reflects their
                unique style.
              </p>
            </div>

            <div className="div3">
              <img
                src="/images/special-occassion.png"
                alt="special-occassion"
                width={80}
                className="icon"
              />
              <h2 className="special-occ">Special Occasion Outfits</h2>
              <p>
                For weddings, parties, and special events, Astonish Designs
                crafts exquisite outfits that make a statement. Each design is
                meticulously crafted to align with the client&apos;s vision and
                the specific theme.
              </p>
            </div>

            <div className="div5">
              <img
                src="/images/age-inclusive.png"
                alt="age-inclusive"
                width={100}
                className="icon"
              />
              <h2 className="age-inc">Age-Inclusive Collections</h2>
              <p>
                Astonish Designs embraces diversity by curating fashion
                collections that cater to various age groups. Each collection is
                thoughtfully designed to celebrate different styles and
                preferences, ensuring inclusivity in every piece.
              </p>
            </div>

            <div className="div6">
              <img
                src="/images/ready-to-wear.png"
                alt="readytowear"
                width={100}
                className="icon"
              />
              <h2 className="ready">Ready-To-Wear Outfits</h2>
              <p>
                Our Ready-To-Wear Outfits are meticulously designed, ensuring
                each piece is not only on-trend but also effortlessly chic. From
                casual day looks to sophisticated evening attire, we have range
                of outfits to suit every occasion and style preference.
              </p>
            </div>
          </div>

          <div className="serviceImage">
            <img
              src="/images/servicesImagesLeft.jpeg"
              alt="services"
              width={500}
              height={650}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
