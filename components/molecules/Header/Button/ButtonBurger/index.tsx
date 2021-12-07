import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import styles from './ButtonBurger.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useCallback, useEffect, useRef} from "preact/hooks";
import {ButtonBurgerProps} from "./ButtonBurger.props";
const ButtonBurger = ({ active = false,toggle,className = '', ...props }:ButtonBurgerProps):JSX.Element => {
        const btnRef = useRef();
        const handleClick = (e: { target: any; }) => {
            // @ts-ignore
            if (btnRef.current.contains(e.target)) {
                // inside click
                return;
            }
            toggle(false)
        };
        // Close list when user click outside container
        useEffect(() => {
            document.addEventListener('click', handleClick, true);
            return () => {
                document.removeEventListener('click', handleClick, true);
            }
        },[])
        const toggleList = useCallback(() => toggle(!active),[active])
        return (
            <button
                {...props}
                ref={btnRef}
                onClick={() => toggleList()}
                type="button"
                className={`${styles.buttonBurger}`}
            >
                {
                    active ? <FontAwesomeIcon icon={faTimes} />: <FontAwesomeIcon icon={faBars} />
                }
            </button>
        )
    }
export default ButtonBurger
