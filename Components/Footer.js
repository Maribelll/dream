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
            <p>RV Rental - Denver, CO</p>
          </div>
          <div className={style.footer_block}>
            <p className={style.p_bold}>Build</p>
            <p>Land for Sale - Sedalia, MO</p>
          </div>
          <div className={style.footer_block}>
            <p className={style.p_bold}>Live</p>
            <p>House for Lease, Sedalia, MO</p>
          </div>
        </div>
      </div>
    </>
  );
}
