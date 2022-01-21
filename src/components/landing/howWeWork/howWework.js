import './css/howwework.css';

const Featurescard = (props) => {
  return (
    <div className="featurescard">
      <div className="logo">
        <img src={props.logo} alt="feature logo" className="logo"/>
      </div>
      <div className="cardtext">
        <div className='cardheading'>{props.Heading}</div>
        <div className='cardsubheading'>{props.Subheading}</div>
      </div>
    </div>
  );
};

const HowWework = () => {
  return (
    <>
      <div className="features">
        <div className="leftfeatures">
          <div className="featuresheading">App Features</div>
          <div className="featurecards">
            {Featurescarddata.map(function ncards(val) {
              return (
                <Featurescard
                  key={val.id}
                  Heading={val.Heading}
                  Subheading={val.Subheading}
                  logo={val.logo}
                />
              );
            })}
          </div>
        </div>
        <div className="rightfeatures">
          <div className="image">
            <img className="image"
              // className={mainImage1}
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641632711/zete/undraw_mobile_payments_re_7udl_tdokuf.svg"
              // width={240}
              // height={240}
              alt="svg"
            />
          </div>

          <div className="image">
            <img className="image"
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641632711/zete/undraw_booked_re_vtod_ld8crb.svg"
              // width={240}
              // height={240}
              // className="mainImage2"
              alt="svg"
            />
          </div>

          <div className="image">
            <img className="image"
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641632711/zete/undraw_delivery_address_re_cjca_nultsv.svg"
              // width={240}
              // height={240}
              // className="mainImage2"
              alt="svg"
            />
          </div>

          <div className="image">
            <img className="image"
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641632711/zete/undraw_deliveries_2r4y_crkwtv.svg"
              // width={240}
              // height={240}
              // className="mainImage2"
              alt="svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWework;

const Featurescarddata = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle_wzodhy.svg",
    Heading: "Register and book",
    Subheading:
      "You register on our website and book a slot beforehand.",
  },

  {
    id: 2,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle4_sg6n5p.svg",
    Heading: "Book your time",
    Subheading:
      "Decide a time to take over the left food.",
  },

  {
    id: 3,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle3_whxif3.svg",
    Heading: "Taking the food",
    Subheading:
      "Our representatives arrive at venue and take care of left over food.",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054982/Feature_Icon_with_circle_2_nvhn9u.svg",
    Heading: "Distributing it to the needy",
    Subheading:
      "We distribute it to NGOs, NGOs Distribute it to needed people. ",
  },
];
