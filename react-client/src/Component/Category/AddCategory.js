import React, {useState} from 'react'
import AddProduct from '../Products/addProduct'

const AddCategory = (props) => {
    const initialCateogry = { "category": '', "products": [], "id": "" }
    const [category, setCategory] = useState(initialCateogry)

    const handleInputChange = (event)=>{
        const {name, value} = event.target
        setCategory({...category, [name]: value})
    }

    const handleSaveClick = () => {
        props.handleSaveNewCategory(category)
    }

    const handleAddProduct = newProduct => {
        let {category: c, products, id} = category
        products = [...products, newProduct]
        let merge = {"category": c, "products": products, "id": id}
        setCategory(merge)
   }

    return (
        <div>
            <h1>Add Category</h1>

            <form>

                <label>Category Name</label>
                <input type="text" value={category.category} name="category" onChange={handleInputChange} />

                <button
                    onClick={event => {
                        event.preventDefault()
                        handleSaveClick()
                    }}
                    className="button muted-button">Save</button>

            </form>

            <table className="striped-table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Product Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            category.products.map(
                                product => {
                                    return (
                                        <tr key={product.productId}>
                                            <td>{product.productId}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productPrice}</td>
                                        </tr>
                                    )
                                }
                            )
                        }

                    </tbody>
                </table>
                <AddProduct handleAddProduct={handleAddProduct}/>
        </div>
    )
}

export default AddCategory
