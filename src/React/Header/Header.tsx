import HeaderSvg from "./headerLogo.svg";
import ContactBtn from "./ContactBtn";

const Header = () => {
  return (
    <>
      <header className="header-top bg-dark fixed-top position-relative">
        <img className="header-logo" src={HeaderSvg} alt="ロゴ画像" />
        <h1 className="header-h1 text-white fw-bold">KENGO MASUNARI</h1>
        <ContactBtn/>
      </header>
      <div className="space"></div>
    </>
  );
};
export default Header;
