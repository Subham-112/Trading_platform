export default function PricingHero() {
    return (
        <div className="container">
            <div className="col-12 text-center mt-5 pb-5 border-bottom">
                <h1 className="pt-5">Pricing</h1>
                <h4 className="text-muted mt-4">Free equity investments and flat ₹20 traday and F&O trades</h4>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col pr" style={{paddingLeft: '4rem'}}>
                    <img src="media/images/pricingEquity.svg" alt="zero" style={{width: '250px'}} />
                    <h2>Free equity delivery</h2>
                    <p className="fs-5 text-muted text-center mt-3" style={{width: '380px'}}>All equity delivery investments (NSE, BSE), are absolutely free -- ₹ 0 brokerage</p>
                </div>
                <div className="col pr">
                    <img src="media/images/intradayTrades.svg" alt="zero" style={{width: '250px', paddingTop: '4rem'}} />
                    <h2>Intraday and F&O trades</h2>
                    <p className="fs-5 text-muted text-center mt-3" style={{width: '380px'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col pr" style={{paddingRight: '5rem'}}>
                    <img src="media/images/pricingEquity.svg" alt="zero" style={{width: '250px', paddingTop: '2rem' }} />
                    <h2>Free direct MF</h2>
                    <p className="fs-5 text-muted text-center mt-3" style={{width: '380px'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}