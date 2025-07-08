export default function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-8">
          <a href="#" style={{textDecoration:'none'}}>
            <h3 style={{marginLeft: '15rem', marginBottom: '2rem'}}>Brokerage calculator</h3>
          </a>
        <ul className="text-muted" style={{paddingLeft: '3rem', fontSize: '0.9rem', lineHeight: '2.5'}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul>
        </div>
        <div className="col-4">
          <a href="#" style={{textDecoration:'none'}}>
            <h3>List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
