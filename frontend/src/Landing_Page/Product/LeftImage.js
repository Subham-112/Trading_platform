export default function LeftImage({
  ImageURL,
  prodName,
  prodDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <div className="col" style={{ paddingLeft: "50px" }}>
          <img src={ImageURL} />
        </div>
        <div
          className="col"
          style={{ width: "100px", marginLeft: "150px", marginTop: "30px" }}
        >
          <h1 className="mb-4">{prodName}</h1>
          <p className="fs-5" style={{ lineHeight: "30px" }}>
            {prodDesc}
          </p>
          <div style={{ marginBottom: "20px" }}>
            <a
              style={{
                textDecoration: "none",
                marginRight: "100px",
                marginBottom: "30px",
              }}
              href={tryDemo}
            >
              Try Demo
            </a>
            <a style={{ textDecoration: "none" }} href={learnMore}>
              Learn More
            </a>
          </div>
          <a style={{ marginRight: "30px" }} href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
