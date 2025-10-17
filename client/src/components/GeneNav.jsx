import { NavLink } from "react-router";

export default function GeneNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/GeneUp" end>
        Add A Gene to GeneHome
      </NavLink>
      {/*<NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>*/}
    </nav>
  );
}
