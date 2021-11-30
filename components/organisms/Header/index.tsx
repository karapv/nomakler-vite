import { useState } from 'preact/hooks';
import styles from './Header.module.sass'
import {HeaderProps} from "./Header.props";
import DefaultContainer from "../../containers/DefaultContainer";
import ButtonBurger from "../../molecules/Header/Button/ButtonBurger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../../atoms/Logo";
import LanguageList from "../../molecules/Header/LanguageList";
import Menu from "../../molecules/Header/Menu";
import ButtonSign from "../../molecules/Header/Button/ButtonSign";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
const Header = ({ header: {menu = [],src = '/images/atoms/Logo/LogoLight.svg'},...props}:HeaderProps):JSX.Element => {
   const [showMenu,toggleMenu] = useState(false)
   return(
       <header className={styles.header}>
         <DefaultContainer className={styles.header__container}>
             <ButtonBurger active={showMenu} onClick={() => toggleMenu(!showMenu)} />
             <div className={`${styles.header__logo}`}>
                 <Logo src={src}  />
             </div>
             <div className={`${styles.header__wrapper} ${showMenu ? styles.active: ''}`}>
                 <div className="flex justify-end">
                     <button className={styles.header__btnClose} onClick={() => toggleMenu(!showMenu)}>
                         <FontAwesomeIcon icon={faTimes} />
                     </button>
                 </div>
                 {menu.length ?<Menu menu={menu} />: null}
             </div>
             <LanguageList />
             <ButtonSign className={`${styles.header__btnAuth}`} />
         </DefaultContainer>
       </header>
   )
}
export default Header
