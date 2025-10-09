import { IquickLink } from '../constants/quickLinks';
import './QuickQueries.scss'


interface QuickQueriesProps {
  quickLink: IquickLink;
  handleClick : (inputQuery : string) => void;
  showPopup : (showPopup : boolean) => void;
}


const QuickQueries: React.FC<QuickQueriesProps> = ({ quickLink, handleClick, showPopup }) => {

    const handleLinkClick = () =>{        
       
        switch(quickLink.type){
            case "query" :  handleClick(quickLink.query);
            break;
            case "process" : showPopup(true);
        }
    }

  return (
    <div className="quick-link-container d-flex align-items-baseline">
        <span><i className="fa-solid fa-magnifying-glass" /></span>
      <p className="quick-link" onClick={handleLinkClick}>{quickLink.query}</p>
    </div>
  );
};

export default QuickQueries;
