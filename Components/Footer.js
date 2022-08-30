import Link from "next/link";
import Image from "next/image";

import style from "../styles/footer.module.scss";
// import style from "../styles/.module.scss";

export function Footer() {
  return (
    <>
      <div className={style.footer_container}>
        <div className={style.footer}>
          <div className={style.footer_block}>
            <p className={style.p_bold}>Explore</p>
            <p className={style.text}>RV Rental - Denver, CO</p>
          </div>
          <div className={style.footer_block}>
            <p className={style.p_bold}>Build</p>
            <p className={style.text}>Land for Sale - Sedalia, MO</p>
          </div>
          <div className={style.footer_block}>
            <p className={style.p_bold}>Live</p>
            <p className={style.text}>House for Lease, Sedalia, MO</p>
          </div>
        </div>
        <hr className={style.hr} />
        <div className={style.copyright}>
          <div className={style.part1}>
            <p>Copyright © 2022 5280 Dream Properties. All Rights Reserved.</p>
          </div>
          <div className={style.part2}>
            <p>
              Privacy Policy<span>Terms &amp; Conditons</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
