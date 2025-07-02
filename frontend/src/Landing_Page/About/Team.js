import { Link } from 'react-router-dom'

export default function AboutTeam() {
  return (
    <div className="container border-top">
      <div className="row p-5 mt-5" style={{ paddingLeft: "5rem" }}>
        <div
          className="col"
          style={{
            width: "50%",
            paddingLeft: "9rem",
            paddingRight: "1rem",
            fontSize: "1.1rem"
          }}
        >
          <p style={{width: '90%',lineHeight: '30px'}}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p style={{width: '90%',lineHeight: '30px'}}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p style={{width: '90%',lineHeight: '30px'}}>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div
          className="col"
          style={{
            width: "50%",
            paddingRight: "9rem",
            paddingLeft: "1rem",
            fontSize: "1.1rem",
          }}
        >
          <p style={{width: '90%',lineHeight: '30px'}}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p style={{width: '90%',lineHeight: '30px'}}>
            <Link style={{ textDecoration: "none" }}>Rainmatter</Link>, our
            fintech fund and incubator, has invested in several fintech startups
            with the goal of growing the Indian capital markets.
          </p>
          <p style={{width: '90%',lineHeight: '30px'}}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link style={{ textDecoration: "none" }}>blog</Link> or see what the
            media is{" "}
            <Link style={{ textDecoration: "none" }}>saying about us</Link> or
            learn more about our business and product{" "}
            <Link style={{ textDecoration: "none" }}>philosophies</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
