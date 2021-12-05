import CatalogHeader from "../../organisms/Catalog/CatalogHeader";
import {CatalogProps} from "./Catalog.props";
import DefaultContainer from "../../containers/DefaultContainer";
import Breadcrumb from "../../molecules/General/Breadcrumb";
import CatalogList from "../../organisms/Catalog/CatalogList";
import Pagination from "../../molecules/General/Pagination";
const Catalog = ({headerPage:{ statusList = [],typeList = [] },breadcrumb: { navigation = [] },catalog: {total = 1,catalogList = []}}:CatalogProps):JSX.Element => {
    return (
        <div className="catalogPage">
            <CatalogHeader className="container"  statusList={statusList} typeList={typeList}/>
            <DefaultContainer>
                <Breadcrumb navigation={navigation} />
                <h1 className="title-page">Catalog</h1>
                <CatalogList catalog={catalogList} />
                <Pagination total={total} />
            </DefaultContainer>
        </div>
    )
}
export default Catalog