function createCar(make, model, year) {
    return {
      make,
      model,
      year,
      describeCar() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`)
      }
    }
  }
  
  const car1 = createCar("Toyota", "Camry", 2022);
  const car2 = createCar("Honda", "Civic", 2020);
  
  car1.describeCar()
  car2.describeCar()