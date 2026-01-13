import MenuBarsIcon from "@icons/menubars.svg"
import NavLink from "./navLink";
import DashboardIcon from "@icons/dashboard.svg";
import SalesIcon from "@icons/sales.svg";
import WalletIcon from "@icons/wallet.svg";
import CreditCardIcon from "@icons/credit-card.svg";
import PuzzleIcon from "@icons/puzzle.svg";

export default function Aside( ) {
    return (
        <aside className="sidebar">
            <button className="btn menu">
                <i className="icon">
                    <MenuBarsIcon height="40px" width="40px"/>
                </i>
            </button>
            <nav className="navWrapper">
                <ul className="navList">
                    <li className="listItem">
                        <NavLink className="navLink" href="/">
                            <i className="icon">
                                <DashboardIcon className="default" height="24px" width="24px"/>
                            </i>
                            <span className="title">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="listItem">
                        <NavLink className="navLink" href="/listings">
                            <i className="icon">
                                <SalesIcon className="alt" height="24px" width="24px"/>
                            </i>
                            <span className="title">Listings</span>
                        </NavLink>
                    </li>
                    <li className="listItem">
                        <NavLink className="navLink" href="/leads">
                            <i className="icon">
                                <CreditCardIcon className="alt" height="24px" width="24px"/>
                            </i>
                            <span className="title">Leads</span>
                        </NavLink>
                    </li>
                    <li className="listItem">
                        <NavLink className="navLink" href="/files">
                            <i className="icon">
                                <WalletIcon className="alt" height="24px" width="24px"/>
                            </i>
                            <span className="title">My Files</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}