import { useParams } from 'react-router-dom';

import './products-page.styles.scss';

const ProductsPage = () => {
    const { categoryId } = useParams();

    return(
        <div className='products-page'>
            <h1>{ categoryId.toUpperCase() }</h1>
        </div>
    )
}

export default ProductsPage;