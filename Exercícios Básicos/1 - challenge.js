class Usuario {
    constructor(email, passworld) {
      this.email = email;
      this.passworld = passworld;
    }
  
    isAdmin() {
      return this.admin === true;
    }
  }
  
  class Admin extends Usuario {
    constructor(email, passworld) {
      super(email, passworld);
  
      this.admin = true;
    }
  }
  
  const User1 = new Usuario("lucasedu@gmail", "prte123");
  const Adm1 = new Admin("lucasedu@gmail", "prte123");
  
  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true