import logo from "../lloyds/logo.png";

const MastHead = () => {
    return(
              <div className="masthead">
        <div className="container-fluid header">
          <img src={logo} alt="logo" className="lbgLogo" />
          <div className="header-second-half">
            <h5 className="lbgText">COMMERCIAL BANKING</h5>
            <span className="phoneBtn">
              <i className="fa-solid fa-phone" />
            </span>
            <button type="button" className="logoutBtn btn">
              <i className="fa-solid fa-lock" />
              Logout
            </button>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Admin</li>
            <li>Payments</li>
            <li>Reports</li>
          </ul>
        </div>
      </div>
    )
}

export default MastHead;