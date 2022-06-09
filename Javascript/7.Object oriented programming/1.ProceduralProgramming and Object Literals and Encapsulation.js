{
  const cart = [];

  const addToCart = (item) => {
    cart.push(item);
  };

  const removeFromCart = (item) => {
    const index = cart.findIndex((x) => x.id === item.id);
    cart.splice(0, 1);
  };

  const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };

  addToCart(hotdog);
  console.log(cart);

  setTimeout(function(){
    removeFromCart("🌭");
    console.log(cart);
  },200);
}


/** Object Literals and Encapsulation */

{
    const cart = {
        
        items: [],

        add(item) {
            this.items.push(item)
        },

        remove: function(id){
            const index = this.items.findIndex((x) => x.id === id);
            this.items.splice(index,1);
        }
    }
    cart.add({ id: '🥤', name: 'Big Slurp', price: 299 });
    console.table(cart.items);
}