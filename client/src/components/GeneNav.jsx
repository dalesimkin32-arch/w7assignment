import { NavLink } from "react-router";

export default function GeneNav() {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/GeneUp" end>
          Add A Gene to GeneHome
        </NavLink>
      </li>

      {/*<NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>*/}
    </ul>
  );
}
