import React, {useEffect, useState, Fragment} from 'react';
import './App.css';
import CategoryTables from './Component/Category/CategoryTables';
import EditCategory from './Component/Category/EditCategory';
import AddCategory from './Component/Category/AddCategory';
import Axios from 'axios';


function App() {
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [editCategory, setEditCategory] = useState(false)

  useEffect(() => {
    const fetchData = async() =>{
     await Axios.get('http://localhost:8090/category')
     .then(res => {
       setCategory(res.data)
      })
    }

    fetchData();
  }, [])

  const updateCategory = category => {
    setSelectedCategory(category)
    setEditCategory(true)
  }

  const handleSaveCategory = (updatedCategory) => {
    Axios.put("http://localhost:8090/category", updatedCategory)
    .then(res => {
      setCategory(
        category.map(category => {
          if(category.id === updatedCategory.id){
            return res.data
          }else{
            return category
          }
        })
      )

      setSelectedCategory(res.data)
    })
  }

  const handleSaveNewCategory = (newCategory) => {
    Axios.post("http://localhost:8090/category", newCategory)
    .then(res=>{
      setCategory([...category, res.data])
    })
  }

  const handleDeleteCategory = (id) =>{
    Axios.delete("http://localhost:8090/category/?id=" + id)
    .then(res=>{
      setCategory(category.filter(cat=>cat.id !== id))
    })
  }

  const handleNewCategory = () => {
    setEditCategory(false)
  }


  return (
    <div className="flex-row">
      <div className="flex-large">
        <CategoryTables updateCategory={updateCategory} categories={category} handleDeleteCategory={handleDeleteCategory}/> 
        <div className="flex-row">
            <div className="flex-large"></div>
            <div className="flex-large"></div>
            <div className="flex-large">
              <button onClick={()=>handleNewCategory()} className="button muted-button">Add Category</button>
            </div>
        </div>
      </div>

      <div className="flex-large"> 
        {editCategory?(<Fragment>
            <EditCategory handleSaveCategory={handleSaveCategory} selectedCategory={selectedCategory}/>
          </Fragment>):(<Fragment>
            <AddCategory handleSaveNewCategory={handleSaveNewCategory}/>
          </Fragment>)}
      </div>
    </div>
  );
}

export default App;
