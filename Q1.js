function createEmployee(name, role, salary) {
    return {
      name,
      role,
      salary,
      introduce() {
        console.log(`Hello, I am ${this.name}, working as a ${this.role}.`)
      }
    }
  }
  
  const employee1 = createEmployee("Alice", "Software Engineer", 6000)
  const employee2 = createEmployee("Bob", "Project Manager", 7000)
  
  employee1.introduce()
  employee2.introduce()