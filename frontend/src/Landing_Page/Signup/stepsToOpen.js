export default function StepsToOpen() {
  return (
    <div style={{ backgroundColor: "#f4f4f4ff", paddingBottom: '5rem' }} className="pt-5">
      <h2 className="text-center" style={{ marginBottom: '5rem' }}>Steps to open a demat account with Zerodha</h2>
      <div className="row" style={{marginTop: '3rem'}}>
        <div className="col-6 d-flex justify-content-end">
          <img className="me-5" src="/media/images/steps-acop.svg" alt="Steps to open" />
        </div>
        <div className="col-6">
          <span style={{
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            gap: '1rem'
          }}>
            <p
              style={{
                width: "fit-content",
                border: "2px solid #c6c6c6d9",
                borderRadius: "50%",
                fontSize: '1.3rem',
                fontWeight: 600,
                padding: "0.4rem 0.8rem",
                margin: 0
              }}
            >01</p>
            <p style={{fontSize: '1.5rem', fontWeight: 600, margin: 0}}>Enter the requested details</p>
          </span>
          <hr style={{ width: '70%' }} />

          <span style={{
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            gap: '1rem'
          }}>
            <p
              style={{
                width: "fit-content",
                border: "2px solid #c6c6c6d9",
                borderRadius: "50%",
                fontSize: '1.3rem',
                fontWeight: 600,
                padding: "0.4rem 0.8rem",
                margin: 0
              }}
            >02</p>
            <p style={{fontSize: '1.5rem', fontWeight: 600, margin: 0}}>Complete e-sign & verification</p>
          </span>
          <hr style={{ width: '70%' }} />

          <span style={{
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            gap: '1rem'
          }}>
            <p
              style={{
                width: "fit-content",
                border: "2px solid #c6c6c6d9",
                borderRadius: "50%",
                fontSize: '1.3rem',
                fontWeight: 600,
                padding: "0.4rem 0.8rem",
                margin: 0
              }}
            >03</p>
            <p style={{fontSize: '1.5rem', fontWeight: 600, margin: 0}}>Start investing!</p>
          </span>
        </div>
      </div>
    </div>
  );
}
