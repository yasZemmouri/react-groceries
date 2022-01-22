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
    isPurchased: false,
  },
  {
    item: "Candy",
    brand: "Candy Crash",
    units: "pack",
    quantity: 12,
    isPurchased: false,
  },
];

class App extends React.Component{
  state = {
    articles: articlesList,

  }
 //I can't put console.log here
  render(){ 
    console.table(this.state.articles);
    return (
    <div>
      <h1>Grocery App</h1>
      {this.state.articles.map((article)=>{
        return (
         <div className="grocery-item">
          <h2>Item: {article.item}</h2>
          <h3>Brand: {article.brand}</h3>
          <h3>Quantity: {article.quantity} {article.units}</h3>
        </div>
        ) 
      })}    
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))
