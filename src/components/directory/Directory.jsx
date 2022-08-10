import CategoryItem from "../category-item/CategoryItem"

const Directory = ({ categories }) => {
  return (
    <div className="col-lg-6">
      <div className="right-content">
        
          
          <CategoryItem categories={categories}/>
         
          
        
      </div>
    </div>
  )
}

export default Directory