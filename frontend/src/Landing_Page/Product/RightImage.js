export default function LeftImage({
  ImageURL,
  prodName,
  prodDesc,
  learnMore,
  linkName
}) {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <div
          className="col"
          style={{ width: "100px", marginTop: '100px', marginLeft: '50px' }}
        >
          <h1 className="mb-4">{prodName}</h1>
          <p className="fs-5" style={{ lineHeight: "30px", width: '350px' }}>
            {prodDesc}
          </p>
          <div style={{ marginBottom: "20px" }}>
            <a style={{ textDecoration: "none" }} href={learnMore}>
              {linkName}
            </a>
          </div>
        </div>

        <div className="col" style={{ paddingLeft: "50px" }}>
          <img src={ImageURL} />
        </div>

      </div>
    </div>
  );
}
