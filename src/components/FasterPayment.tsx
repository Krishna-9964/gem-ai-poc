import "./FasterPayment.scss";

const FasterPayment = () => {
  const data = {
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, Cityville",
  };

  return (
    
    <div className="container confirmation-outer-container">
      <h1 className="section">Create Faster Payment</h1>
      <div className="confirmation-box">
        <div className="section debit-account-details">
          <h3>Debit account details</h3>
          <hr />
          <div className="fields">
          <div>
            <p>
              <strong>Account</strong>
            </p>
            <p>304065 00199064</p>

            <p>
              <strong>Bank ID</strong>
            </p>
            <p>LLOYDS BANK PLC</p>
            <p>
              <strong>Processing date</strong>
            </p>
            <p>11/11/2025</p>
            <p>
              <strong>Debit account reference</strong>
            </p>
            <p>Payment redirection from Gem-AI</p>
          </div>
          <a href="javascript:void(0)">Edit</a>
          </div>
        </div>
        <div className="section debit-account-details">
          <h3>Payment details</h3>
          <hr />
          <div className="fields">
          <div>
            <p>
              <strong>Amount</strong>
            </p>
            <p>500 GBP</p>

            <p>
              <strong>Payment frequencey</strong>
            </p>
            <p>Once off</p>
            <p>
              <strong>Processing date</strong>
            </p>
            <p>11/11/2025</p>
          </div>
          <a href="javascript:void(0)">Edit</a>
          </div>
        </div>
        <div className="section debit-account-details">
          <h3>Beneficiary details</h3>
          <hr />
          <div className="fields">
          <div>
            <p>
              <strong>Name</strong>
            </p>
            <p>Clare</p>

            <p>
              <strong>Preferred name</strong>
            </p>
            <p>Clare</p>
            <p>
              <strong>Sort code</strong>
            </p>
            <p>304065</p>
            <p>
              <strong>Account number</strong>
            </p>
            <p>12345678</p>
            <p>
              <strong>Bank ID</strong>
            </p>
            <p>LLOYDS BANK PLC</p>
            <p>
              <strong>Beneficiary reference</strong>
            </p>
            <p>Gem AI payment test</p>
          </div>
          <a href="javascript:void(0)">Edit</a>
          </div>
        </div>
        <div className="section">
            <div className="button-pattern">
                <button type="button" className="btn btn-lg back">Back</button>
                <button type="button" className="btn btn-lg edit">Edit</button>
                <button type="button" className="btn btn-lg confirm">Confirm</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FasterPayment;
