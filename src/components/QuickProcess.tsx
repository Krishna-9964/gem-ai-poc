import { defaultMaxListeners } from "events";
import "./QuickProcess.scss";
import paymentScreen from '../assets/payments.png'

interface QuickProcessProps {
    showPopup : (showPopup : boolean) => void;
}

const QuickProcess: React.FC<QuickProcessProps> = ({showPopup}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <img src={paymentScreen} alt="payment"/>
        <div className="buttons">
            <button className="btn btn-danger" onClick={() => showPopup(false)}>Discard</button>
            <button className="btn btn-outline-primary" onClick={() => showPopup(false)}>Edit</button>
            <button className="btn btn-success" onClick={() => showPopup(false)}>Approve</button>
        </div>
      </div>
    </div>
  );
};

export default QuickProcess;
