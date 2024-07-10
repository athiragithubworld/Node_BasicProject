console.log("Hello World")

const product = () => 1 * 3;

console.log(product());

const student = {
  name: "Athi",
  age: 15,

  // here this won't work
  greet1: () => {
    // console.log("Hello , I'm not " + this.name);
  },
  
  // this will work
  greet() {
    console.log("Hello , I'm " + this.name);
  },
  greet12: function () {
    console.log("Hi , I'm " + this.age + "years old");
  }
};

student.greet()
student.greet12();

