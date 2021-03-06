const articlesList = [
  {
    item: "Milk",
    brand: "Milka",
    units: "litters",
    quantity: 2,
    isPurchased: false,
  },
  {
    item: "Bread",
    brand: "Breadia",
    units: "lb",
    quantity: 1,
    isPurchased: true,
  },
  {
    item: "Candy",
    brand: "Candy Crash",
    units: "pack",
    quantity: 12,
    isPurchased: true,
  },
];

class App extends React.Component{
  state = {
    //We need articles array to the add new items
    articles: articlesList,
    //we need those to give them their initial value and to update content when typing and submitting
    item: '',
    brand: '',
    quantity: 10,
    units: '',
    isPurchased: true,

  }
 //I can't put console.log here

 handleChange=(e)=>{
   this.setState({
     [e.target.id]: e.target.value
   })

 }
 //=(e)=> arrow function so we don't have to bind this.
 handleSubmit=(e)=>{
   e.preventDefault();
   const newArticle = {
     item: this.state.item,
     brand: this.state.brand,
     quantity: this.state.quantity,
     units: this.state.units,
     isPurchased: this.state.isPurchased
   }
   console.log(newArticle);
   //What about prevState??
   this.setState({
    articles: [newArticle, ...this.state.articles],
    //those are just for rendering they're not related to the array.
    item: '',
    brand: '',
    quantity: 10,
    units: '',

   })

 }

 //not working

 handleRemove=()=>{
   console.log('hi')
  this.setState({
    isPurchased: false
  })
 }

render(){ 
    console.table(this.state.articles);
    // console.log(this.state.articles.isPurchased);
    return (
    <div>
      <h1>Grocery App</h1>
      <form onSubmit={this.handleSubmit} className="padding-container">
        <label htmlFor="item">Item: </label>
        <input type="text" id="item" onChange={this.handleChange} value={this.state.item}/>
        <label htmlFor="brand">Brand: </label>
        <input type="text" id="brand" onChange={this.handleChange} value={this.state.brand}/>
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" id="quantity" onChange={this.handleChange} value={this.state.quantity}/>
        <label htmlFor="units">Units: </label>
        <input type="text" id="units" onChange={this.handleChange} value={this.state.units}/>
        <input type="submit" />
      </form>
      <div className="padding-container">
        {this.state.articles.map((article)=>{
        return (
          article.isPurchased && <div className="grocery-item">
            {/*How to make an article component*/}
            <h2>Item: {article.item}</h2>
            <h3>Brand: {article.brand}</h3>
            <h3>Quantity: {article.quantity} {article.units}</h3>
            <button onClick={this.handleRemove}>Remove</button>    
          {/*<Article key={article.brand} articleInstance={article}/>*/}
          <p>{article.isPurchased ? "purshased" : "not purshased"}</p>
          </div>
      
        ) 
        })}  
      </div>  
    </div>
    )
  }
}
// class Article extends React.Component {
//   render(){
//     return(
//       <div className="grocery-item">
//         {console.log(this.props.articleInstance)}
//         <h2>Item: {this.props.articleInstance.item}</h2>
//           <h3>Brand: {this.props.articleInstance.brand}</h3>
//           <h3>Quantity: {this.props.articleInstance.quantity} {this.props.articleInstance.units}</h3>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App/>, document.getElementById('container'))
