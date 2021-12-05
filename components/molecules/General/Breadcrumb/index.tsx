import styles from './Breadcrumb.module.sass'
import {BreadcrumbProps} from "./Breadcrumb.props";
import {Link} from "../../../atoms/Link/Link";
const Breadcrumb = ({navigation = [],className = ''}:BreadcrumbProps):JSX.Element => {
    return (
        <ul className={`${styles.breadcrumb} ${className}`}>
            {
                navigation.length ? navigation.map(({id,name,url},index)=> (
                    <li key={id}>
                        { index + 1 !== navigation.length ? <><Link href={url}>{name}</Link><span>/</span></> : <span>{name}</span> }
                    </li>
                )) : null
            }
        </ul>
    )
}

export default Breadcrumb