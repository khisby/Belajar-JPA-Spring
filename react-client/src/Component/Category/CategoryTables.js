import React from 'react'

const CategoryTables = (props) => {
    return (
        <div style={{width: 600}}>
                <h1>Hello World</h1>
                <table className="striped-table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Category Name</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.categories.map(category => {
                            return(
                                <tr key={category.id}>
                                    <td>{category.category}</td>
                                    <td>{category.category}</td>
                                    <td><button className="button muted-button" onClick={()=>{props.updateCategory(category)}}>Edit</button></td>
                                    <td><button className="button muted-button" onClick={(event)=>{
                                        event.preventDefault()
                                        props.handleDeleteCategory(category.id)}
                                        }>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default CategoryTables
