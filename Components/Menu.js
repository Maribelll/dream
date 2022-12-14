import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import style from "../styles/menu.module.scss";

export function Menu() {
  return (
    <>
      <div className={style.menu_all}>
        <div className={style.menu_up}>
          <div className={style.logo_up}>
            <Link href={"/"}>
              <Image src={Logo} alt="logo" width={228} height={60} />
            </Link>
          </div>
          <div className={style.menu_ul}>
            <ul>
              <li>
                <Link href={"/land"}>
                  <a>Land for Sale</a>
                </Link>
              </li>

              <li>
                <a>Home for Lease</a>
              </li>
              <li>
                <a>RV Rental</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
