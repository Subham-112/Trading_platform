export default function Investment() {
  return (
    <div className="container mt-5 pt-5">
      <h2 style={{ fontSize: '2.25rem' }} className="mb-5 text-center">
        Investment options with Zerodha demat account
      </h2>
      <div style={{ marginTop: '6rem', marginBottom: '4rem' }} className="row">
        <div style={{ paddingRight: '5rem' }} className="col-6 d-flex justify-content-end">
          <span style={{ width: '70%' }} className="d-flex justify-content-end gap-4">
            <img style={{ width: '30%' }} src="media/images/stocks-acop.svg" alt="Stock" />
            <span style={{ marginLeft: '10px' }}>
              <h2>Stocks</h2>
              <p style={{ fontSize: '1.1rem' }} className="text-muted">Invest in all exchange-listed securities</p>
            </span>
          </span>
        </div>
        <div style={{ paddingLeft: '4rem' }} className="col-6 d-flex justify-content-start">
          <span className="w-75 d-flex justify-content-end gap-4">
            <img style={{ width: '30%' }} src="media/images/mf-acop.svg" alt="mutual funds" />
            <span>
              <h2>Mutual funds</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', width: '90%' }}>Invest in commission-free direct mutual funds</p>
            </span>
          </span>
        </div>
      </div>
      <div className="row">
        <div style={{ paddingRight: '5rem' }} className="col-6 d-flex justify-content-end">
          <span style={{ width: '70%' }} className="d-flex justify-content-end gap-4">
            <img style={{ width: '30%' }} src="media/images/ipo-acop.svg" alt="IPO" />
            <span>
              <h2>IPO</h2>
              <p style={{ fontSize: '1.1rem' }} className="text-muted">Apply to the latest IPOs instantly via UPI</p>
            </span>
          </span>
        </div>
        <div style={{ paddingLeft: '3.5rem' }} className="col-6 d-flex justify-content-start">
          <span className="w-75 d-flex justify-content-end gap-5">
            <img style={{ width: '30%' }} src="media/images/fo-acop.svg" alt="Future & options" />
            <span>
              <h2>Futures & options</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', width: '90%' }}>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </span>
          </span>
        </div>
      </div>
      <div style={{ width: '100%' }} className="d-flex">
        <button
          style={{ fontWeight: 600, margin: "0 auto", marginTop: '4rem', marginBottom: '6rem' }}
          className="fs-4 btn btn-primary"
        >
          Explore Investments
        </button>
      </div>
    </div>
  );
}
