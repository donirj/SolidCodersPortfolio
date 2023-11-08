

export const About = (props) => {
    let resumeData = props.resumeData;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          {" "}
          <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3>Why Choose Us?</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}