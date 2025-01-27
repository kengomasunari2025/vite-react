import HeaderSvg from "./headerLogo.svg";

const Header = () => {
  return (
    <>
      <header className="header-top bg-dark fixed-top">
        <img className="header-logo" src={HeaderSvg} alt="ロゴ画像" />
        <h1 className="header-h1 text-white fw-bold">KENGO MASUNARI</h1>
      </header>
      <div className="space"></div>
    </>
  );
};
export default Header;
