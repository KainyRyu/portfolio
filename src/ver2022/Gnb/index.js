import style from './Gnb.module.scss';
import logo from 'assets/logos/logo_white.svg';

export default function Gnb() {
  return (
    <div className={style.container}>
      <div className={style.inner_container}>
        <a className={style.logo_container} href="/v2022">
          <img src={logo} alt="logo" />
        </a>

        <div className={style.nav_container}>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
