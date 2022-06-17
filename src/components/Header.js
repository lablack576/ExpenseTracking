import Logo from "./ExpenseTrackerLogo.png";

const Header = ({ title, balance }) => {
  return (
    <header>
      <img className="logo" src={Logo} />
      <h1>{title}</h1>
      <div>
        <p>
          YOUR BALANCE : <span>${balance}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
