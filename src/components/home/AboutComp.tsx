const AboutComp = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-content">
          <div className="about-text">
            <h1>IYEO</h1>
            <h5>International Youth Economy Olympiad</h5>
            <p>
              The Olympiad is a competition organised to test students skills
              and knowledge in Economics. The event is designed to encourage
              students to learn more about economics.
            </p>
            <p>
              The Economics Olympiad is attended by students from Senior High
              School levels. The participants will be tested with various
              questions related to the basic concepts of economics in everyday
              life.
            </p>
            {/* <a href="/AboutPage"><button className="about-btn">Read More</button></a> */}
          </div>
          <img src="/assets/images/logo/IYEO.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default AboutComp;
