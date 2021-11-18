// Import components
import styles from './AdvantagesItem.module.sass'
import {AdvantagesItemProps} from "./AdvantagesItem.props";
import BlockContainer from "../../../containers/BlockContainer";
import React from 'react';


const AdvantagesItem = ({img = '/images/organisms/Home/Advantages/search.svg',title = '',description = '',...props}:AdvantagesItemProps):JSX.Element => {
    return (
        <BlockContainer {...props} className={styles.advantagesItem}>
            {
                img.length ? <div className={styles.advantagesItem__img}>
                    <img
                        src={img}
                    />
                </div>: null
            }
            {
                title ? <div className={styles.advantagesItem__title}>{title}</div>:null
            }
            {
                description ? <div className={styles.advantagesItem__description}>{description}</div>:null
            }


        </BlockContainer>
    )
}
export default AdvantagesItem