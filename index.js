// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Queue {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.size = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items.push(element);
    this.size++;
    return "Added " + element + " to the queue";
  }

  dequeue() {
    if (this.items.length == 0) {
      return this.isEmpty();
    }
    this.items.shift();
    this.size--;
    return this.size;
  }

  length() {
    return this.size;
  }

  getFront() {
    return this.items[0];
  }

  getLast() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.size == 0;
  }

  print(element) {
    console.log(element);
  }
}

let line = new Queue("The Line for Video Game");

line.print(line.name);
line.print(line.enqueue(2));
line.print(line.size);
line.print(line.dequeue());
line.print(line.length());
line.print(line.enqueue("Me"));
line.print(line.enqueue("You"));
// line.print(line.length());
// line.print(line.getFront());
// line.print(line.getLast());
// line.print(line.dequeue());
// line.print(line.dequeue());
// line.print(line.dequeue());

class Something extends Queue {
  clear() {
    this.items = [];
    this.size = 0;
    return "The queue is empty";
  }
}

let test = new Something("Test");

// console.log(test.enqueue(50));
// test.print(test.length())
// console.log(test.clear())
// test.print(test.length())
// console.log(test.enqueue("You"));
// console.log(test.enqueue("Me"));
// test.print(test.clear())
// console.log(test.items)

class Else extends Something {}

let nest = new Else("nested");

// console.log(nest.enqueue(50));
// console.log(nest.clear());
