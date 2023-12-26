import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../SubNavBar/SubNavBar.Style.css";
export function SubNavBar() {
  return (
    <div className="ContainerSubNav">
      <Link to="/produse/copii">
        <Button className="ButonSubNavBar" variant="link">
          Produse pentru Copii
        </Button>
      </Link>

      <Link to="/produse/adulti">
        <Button className="ButonSubNavBar" variant="link">
          Produse pentru Adulti
        </Button>
      </Link>
      <Link to="/produse/naturiste">
        <Button className="ButonSubNavBar" variant="link">
          Produse Naturiste
        </Button>
      </Link>
      <Link to="/produse/vitamine">
        <Button className="ButonSubNavBar" variant="link">
          Vitamine
        </Button>
      </Link>
      <Link to="/produse/deSlabit">
        <Button className="ButonSubNavBar" variant="link">
          Produse de Slabit
        </Button>
      </Link>
      <Link to="/produse/deIngrijire">
        <Button className="ButonSubNavBar" variant="link">
          Produse de frumusete si ingrijire
        </Button>
      </Link>
    </div>
  );
}
