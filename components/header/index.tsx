import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header__items">
        <div className="header__item">
          <Link href={"/"}>[ RSF ]</Link>
        </div>
        <div className="header__item">
          <h2 className="header__title">
            [ Retro Super Future - "70 / "80 / "90 ]
          </h2>
        </div>

        <div className="header__item">
          <Link href={"/about"}>[ About ]</Link>
          <Link href={"/collections"}>[ Collections ]</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
