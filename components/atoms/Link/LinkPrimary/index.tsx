
import styles from './LinkPrimary.module.sass'
import {Link} from "../../../../renderer/Link";

const LinkPrimary = ({url = '/',className = '',...props}):JSX.Element => {
    return (
        <Link {...props} className={`${styles.linkPrimary} ${className}`}  href={url}>
            {props.children}
        </Link>
    )
}
export default LinkPrimary
