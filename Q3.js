function createInventoryItem(name, category, price) {
    return {
      name,
      category,
      price,
      describeItem() {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`)
      }
    }
  }
  
  function addItemDiscount(inventoryItem, discountPercent) {
    const discountedPrice = inventoryItem.price - (inventoryItem.price * (discountPercent / 100))
  
    return {
      ...inventoryItem,
      discountPercent,
      discountedPrice,
      applyDiscount() {
        console.log(`The discounted price of ${this.name} is ${this.discountedPrice.toFixed(2)}`)
      }
    }
  }
  
  const item1 = createInventoryItem("Laptop", "Electronics", 1000)
  item1.describeItem()
  const discountedItem1 = addItemDiscount(item1, 20)
  discountedItem1.applyDiscount()
  