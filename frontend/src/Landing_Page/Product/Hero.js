export default function ProductHero() {
  return (
    <div className="container border-bottom" style={{padding: '6.5rem 6.5rem'}}>
      <div className="col-12 text-center">
        <h1 className="mb-3" style={{fontSize: '3rem', color: '#464646', letterSpacing: '1px'}}>Zerodha Products</h1>
        <p className="mb-4" style={{fontSize: '1.4rem', fontWeight: '400',color: '#464646'}}>Sleek, modern, and intuitive trading platforms</p>
        <p style={{fontSize: '1.1rem', fontWeight: '400'}}>
          Check out our&nbsp;
          <a style={{ color: "#547DD5", fontWeight: "500" }}>
            investment offerings &nbsp;&nbsp;
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
