import "../../styles/support.css";

export default function SupportTicket() {
  return (
    <div className="supp-tick">
      <div className="hero-ii tick">
        <h4>To create a ticket, select a relevant topic</h4>
        <div className="row">
          <div className="col tick-rw" style={{marginLeft: '-12px'}}>
            <a>
              <i class="fa-regular fa-square-plus"></i>
              <p>Account Opening</p>
            </a>
            <ul>
              <li>Resident individual</li>
              <li>Minor</li>
              <li>Non Resident Indian (NRI)</li>
              <li>Company, Partnership, HUF and LLP</li>
              <li>Glossary</li>
            </ul>
          </div>
          <div className="col tick-rw" style={{marginRight: '1.5rem'}}>
            <a>
              <i class="fa-regular fa-user"></i>
              <p>Your Zerodha Account</p>
            </a>
            <ul style={{marginLeft: '0.6rem'}}>
              <li>Your Profile</li>
              <li>Account modification</li>
              <li>Client Master Report (CMR) and Depository Participant (DP)</li>
              <li>Nomination</li>
              <li>Transfer and conversion of securities</li>
            </ul>
          </div>
          <div className="col tick-rw" style={{marginRight: '-50px'}}>
            <a>
              <i class="fa-solid fa-chart-simple"></i>
              <p>Kite</p>
            </a>
            <ul>
              <li>IPO</li>
              <li>Trading FAQs</li>
              <li>Margin Trading Facility (MTF) and Margins</li>
              <li>Charts and orders</li>
              <li>Alerts and Nudges</li>
              <li>General</li>
            </ul>
          </div>
        </div>
        <div className="row" style={{marginBottom: '0'}}>
          <div className="col tick-rw">
            <a>
              <i class="fa-regular fa-credit-card"></i>
              <p>Funds</p>
            </a>
            <ul style={{marginLeft: '0.9rem'}}>
              <li>Add money</li>
              <li>Withdraw money</li>
              <li>Add bank accounts</li>
              <li>eMandates</li>
            </ul>
          </div>
          <div className="col tick-rw">
            <a>
              <i class="fa-solid fa-at"></i>
              <p>Console</p>
            </a>
            <ul style={{marginLeft: '0.9rem'}}>
              <li>Portfolio</li>
              <li>Corporate actions</li>
              <li>Funds statement</li>
              <li>Reports</li>
              <li>Profile</li>
              <li>Segments</li>
            </ul>
          </div>
          <div className="col tick-rw">
            <a>
              <i class="fa-solid fa-coins"></i>
              <p>Coin</p>
            </a>
            <ul style={{marginLeft: '0.9rem'}}>
              <li>Mutual funds</li>
              <li>National Pension Scheme (NPS)</li>
              <li>Fixed Deposit (FD)</li>
              <li>Features on Coin</li>
              <li>Payments and Orders</li>
              <li>General</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
