import React, {useState} from 'react'

const AddProduct = (props) => {
    const initialProduct = {productId: null, productName: '', productPrice: 0, category_id:null}
    const [product, setProduct] = useState(initialProduct)
    const handleInputChange = event =>{
        const {name, value} = event.target
        setProduct({...product, [name]: value})
    }
    return (
        <div>
            <h3>Add Product</h3>
            <form>
                <label>Product Name</label>
                <input type="text" name="productName" value={product.productName} onChange={handleInputChange}/>
                
                <label>Price</label>
                <input type="number" name="productPrice" value={product.productPrice} onChange={handleInputChange}/>

                <button 
                className="button muted-button"
                onClick={event => {
                    event.preventDefault()
                    props.handleAddProduct(product)
                    setProduct(initialProduct)
                }}>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct
