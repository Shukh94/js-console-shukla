/* ═══════════════════════════════════════════════════════════════
   DATA — LESSONS (20)
═══════════════════════════════════════════════════════════════ */
const LESSONS=[
{id:1,title:"Variables & Data Types",diff:"easy",
desc:`Variables store data. Use <code>let</code> for mutable values, <code>const</code> for constants.<br>Types: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>object</code>, <code>symbol</code>.`,
hint:"Try: const name = 'Alice'; console.log(typeof name);",
code:`// Variables & Data Types
const name = "Alex";
let age = 20;
let isStudent = true;
const nothing = null;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Null value:", nothing);
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of null:", typeof nothing); // quirk!`,
tests:[
  {l:"Declares a variable",f:c=>/const|let|var/.test(c)},
  {l:"Uses console.log()",f:c=>/console\.log/.test(c)},
  {l:"Uses typeof operator",f:c=>/typeof/.test(c)},
]},
{id:2,title:"Functions",diff:"easy",
desc:`Functions are reusable blocks. Use <code>function</code> keyword or arrow <code>=&gt;</code> syntax.<br>Functions accept <strong>parameters</strong> and can <code>return</code> values. Arrow functions have shorter syntax and no own <code>this</code>.`,
hint:"Arrow: const add = (a, b) => a + b; — if one expression, return is implicit.",
code:`// Functions
function add(a, b) { return a + b; }

// Arrow function (implicit return)
const multiply = (a, b) => a * b;

// Default parameter
const greet = (name = "World") => \`Hello, \${name}!\`;

// Higher-order function
const applyTwice = (fn, x) => fn(fn(x));
const double = x => x * 2;

console.log("5 + 3 =", add(5, 3));
console.log("4 × 6 =", multiply(4, 6));
console.log(greet());
console.log(greet("JavaScript"));
console.log("applyTwice(double, 3):", applyTwice(double, 3));`,
tests:[
  {l:"Defines a function",f:c=>/function|=>/.test(c)},
  {l:"Uses return statement",f:c=>/return/.test(c)},
  {l:"Uses default parameter or HOF",f:c=>/=\s*['"\w]|\(fn|higher/.test(c)},
]},
{id:3,title:"Arrays & Loops",diff:"easy",
desc:`Arrays hold ordered lists. Index starts at <code>0</code>. Key methods: <code>.push()</code> <code>.pop()</code> <code>.map()</code> <code>.filter()</code> <code>.forEach()</code> <code>.reduce()</code>.`,
hint:"arr.map(n => n * 2) returns a new array. arr.filter(n => n > 0) keeps matching items.",
code:`// Arrays & Loops
const fruits = ["apple","banana","cherry","date","elderberry"];

console.log("First:", fruits[0]);
console.log("Length:", fruits.length);

// forEach
console.log("\\nAll:");
fruits.forEach((f,i) => console.log(\` \${i+1}. \${f}\`));

// map — transform
const upper = fruits.map(f => f.toUpperCase());
console.log("\\nUPPER:", upper);

// filter
const long = fruits.filter(f => f.length > 5);
console.log("Long names:", long);

// for...of loop
let total = 0;
for (const f of fruits) total += f.length;
console.log("Total chars:", total);`,
tests:[
  {l:"Declares an array",f:c=>/\[.+\]/.test(c)},
  {l:"Uses forEach, map, or filter",f:c=>/forEach|\.map\(|\.filter\(/.test(c)},
  {l:"Uses for...of or classic loop",f:c=>/for\s*\(/.test(c)},
]},
{id:4,title:"Objects",diff:"easy",
desc:`Objects hold key-value pairs. Access with <code>dot</code> or <code>bracket</code> notation.<br>Objects can contain methods. Use <strong>destructuring</strong> to unpack values, <code>...</code> spread to copy/merge.`,
hint:"const { name, age } = person; — destructures object properties into variables.",
code:`// Objects
const person = {
  name: "Jordan",
  age: 28,
  skills: ["JS","HTML","CSS"],
  greet() { return \`Hi, I'm \${this.name}!\`; }
};

console.log(person.name);
console.log(person["age"]);
console.log(person.skills.join(", "));
console.log(person.greet());

// Destructuring
const { name, age, skills: [first] } = person;
console.log(\`\${name} is \${age}. First skill: \${first}\`);

// Spread — copy & update
const senior = { ...person, age: 40, title: "Senior Dev" };
console.log("Senior:", senior.title, "age", senior.age);

// Object.entries
Object.entries(person).forEach(([k,v]) => {
  if(typeof v !== 'function') console.log(\` \${k}:\`, v);
});`,
tests:[
  {l:"Creates an object {}",f:c=>/\{[\s\S]*:[\s\S]*\}/.test(c)},
  {l:"Uses destructuring",f:c=>/const\s*\{/.test(c)},
  {l:"Uses spread or Object.entries",f:c=>/\.\.\.|Object\.entries/.test(c)},
]},
{id:5,title:"Conditionals",diff:"easy",
desc:`<code>if/else if/else</code> for branching logic. Ternary <code>? :</code> for inline conditions. <code>switch</code> for multiple exact matches. Nullish coalescing <code>??</code> for defaults.`,
hint:"score >= 90 ? 'A' : 'B' — ternary picks between two values based on condition.",
code:`// Conditionals
const score = 87;

if (score >= 90)      console.log("Grade: A ⭐");
else if (score >= 80) console.log("Grade: B ✓");
else if (score >= 70) console.log("Grade: C");
else                  console.log("Grade: F");

const pass = score >= 60 ? "PASS 🎉" : "FAIL";
console.log("Result:", pass);

// Nullish coalescing
const username = null;
console.log("User:", username ?? "Anonymous");

// Optional chaining
const user = { profile: { city: "Dhaka" } };
console.log("City:", user?.profile?.city);
console.log("Phone:", user?.contact?.phone ?? "N/A");

// Switch
const day = new Date().getDay();
const dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][day];
switch(dayName){
  case "Fri": console.log("Weekend soon!"); break;
  case "Sun": console.log("Rest day!"); break;
  default:    console.log("Weekday:", dayName);
}`,
tests:[
  {l:"Uses if/else",f:c=>/if\s*\([\s\S]*\)[\s\S]*else/.test(c)},
  {l:"Uses ternary operator",f:c=>/\?.*:/.test(c)},
  {l:"Uses ?? or optional chaining",f:c=>/\?\?|\?\./.test(c)},
]},
{id:6,title:"Promises & Async/Await",diff:"med",
desc:`Async code uses <code>Promises</code>. States: <em>pending → fulfilled/rejected</em>.<br><code>async/await</code> makes async code look synchronous. <code>Promise.all()</code> runs multiple concurrently.`,
hint:"async functions always return a Promise. Use try/catch to handle rejection.",
code:`// Promises & Async/Await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "User " + id, score: id * 10 });
      else reject(new Error("Invalid ID: " + id));
    }, 50);
  });
}

async function main() {
  console.log("⏳ Fetching...");
  await delay(10);

  // Single fetch
  const user = await fetchUser(7);
  console.log("Got:", user.name, "| Score:", user.score);

  // Parallel with Promise.all
  const users = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  console.log("\\n👥 All users:");
  users.forEach(u => console.log(" -", u.name));

  // Error handling
  try {
    await fetchUser(-1);
  } catch(e) {
    console.error("Caught:", e.message);
  }

  // Promise.race
  const fastest = await Promise.race([fetchUser(4), fetchUser(5)]);
  console.log("\\n🏆 Fastest:", fastest.name);
}

main();`,
tests:[
  {l:"Uses async/await",f:c=>/async|await/.test(c)},
  {l:"Uses new Promise()",f:c=>/new Promise/.test(c)},
  {l:"Handles errors with try/catch",f:c=>/try[\s\S]*catch/.test(c)},
]},
{id:7,title:"Array Methods",diff:"med",
desc:`Master: <code>.reduce()</code> <code>.find()</code> <code>.findIndex()</code> <code>.some()</code> <code>.every()</code> <code>.flat()</code> <code>.flatMap()</code> <code>.sort()</code>. Chain them for elegant data transforms.`,
hint:"reduce(acc, val) => ..., 0) — the second arg is the initial accumulator value.",
code:`// Advanced Array Methods
const products = [
  { name:"Laptop", price:999, cat:"tech", stock:5 },
  { name:"Phone",  price:699, cat:"tech", stock:0 },
  { name:"Shirt",  price:49,  cat:"fashion", stock:12 },
  { name:"Watch",  price:299, cat:"fashion", stock:3 },
  { name:"Tablet", price:499, cat:"tech", stock:8 },
];

// reduce — total
const total = products.reduce((s,p) => s + p.price, 0);
console.log("Total: $" + total);

// filter + map chain
const inStock = products
  .filter(p => p.stock > 0)
  .map(p => \`\${p.name}($\${p.price})\`);
console.log("In stock:", inStock.join(", "));

// find / findIndex
const phone = products.find(p => p.name === "Phone");
console.log("Phone stock:", phone.stock);

// some / every
console.log("Any out of stock:", products.some(p => p.stock === 0));
console.log("All > $10:", products.every(p => p.price > 10));

// sort by price desc
const sorted = [...products].sort((a,b) => b.price - a.price);
console.log("\\nBy price:", sorted.map(p=>p.name).join(" > "));

// flatMap
const tags = products.flatMap(p => [p.name, p.cat]);
console.log("Tags count:", tags.length);`,
tests:[
  {l:"Uses .reduce()",f:c=>/\.reduce\(/.test(c)},
  {l:"Uses .filter() and .map()",f:c=>/\.filter\([\s\S]*\.map\(|\.map\([\s\S]*\.filter\(/.test(c)},
  {l:"Uses .sort() or .find()",f:c=>/\.sort\(|\.find\(/.test(c)},
]},
{id:8,title:"Classes & OOP",diff:"med",
desc:`Classes are blueprints for objects. Key concepts: <code>constructor</code>, <code>extends</code> (inheritance), <code>super()</code>, <code>static</code> methods, and <code>#private</code> fields (ES2022).`,
hint:"super() must be called before using 'this' in a child class constructor.",
code:`// Classes & OOP
class Shape {
  #color;
  constructor(color = "black") { this.#color = color; }
  get color() { return this.#color; }
  area() { return 0; }
  toString() { return \`\${this.constructor.name}(color=\${this.#color})\`; }
}

class Circle extends Shape {
  #r;
  constructor(r, color) { super(color); this.#r = r; }
  area() { return +(Math.PI * this.#r ** 2).toFixed(2); }
  toString() { return \`Circle(r=\${this.#r}, \${super.toString()})\`; }
}

class Rect extends Shape {
  constructor(w, h, color) { super(color); this.w=w; this.h=h; }
  area() { return this.w * this.h; }
}

// Static factory
class ShapeFactory {
  static create(type, ...args) {
    if (type==="circle") return new Circle(...args);
    if (type==="rect")   return new Rect(...args);
  }
}

const c = ShapeFactory.create("circle", 5, "red");
const r = ShapeFactory.create("rect", 4, 6, "blue");

console.log(c.toString());
console.log("Circle area:", c.area());
console.log("Rect area:", r.area());
console.log("Is Shape:", c instanceof Shape, r instanceof Shape);`,
tests:[
  {l:"Defines a class",f:c=>/class\s+\w+/.test(c)},
  {l:"Uses extends (inheritance)",f:c=>/extends/.test(c)},
  {l:"Uses private field # or static",f:c=>/#\w+|static\s/.test(c)},
]},
{id:9,title:"Closures & Scope",diff:"hard",
desc:`A closure is a function that <em>remembers</em> its outer scope even after the outer function returns. Powers: data privacy, factory functions, memoization, currying.`,
hint:"The inner function 'closes over' outer variables — they stay alive as long as needed.",
code:`// Closures & Scope

// Counter factory
function makeCounter(init=0, step=1) {
  let count = init;
  return {
    inc:()   => (count += step),
    dec:()   => (count -= step),
    reset:() => (count = init),
    val:()   => count,
  };
}
const c = makeCounter(10, 2);
console.log(c.inc(), c.inc(), c.dec(), c.reset());

// Memoization closure
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) { console.log("(cached)"); return cache.get(key); }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const fib = memoize(n => n <= 1 ? n : fib(n-1) + fib(n-2));
console.log("\\nfib(10):", fib(10));
console.log("fib(10):", fib(10)); // cached

// Currying
const curry = fn => {
  const arity = fn.length;
  return function curried(...args) {
    return args.length >= arity ? fn(...args) : (...more) => curried(...args,...more);
  };
};
const add = curry((a,b,c) => a+b+c);
console.log("\\nCurry add(1)(2)(3):", add(1)(2)(3));
console.log("Curry add(1,2)(3):", add(1,2)(3));`,
tests:[
  {l:"Returns a function or object from a function",f:c=>/return[\s\S]*(function|\{|=>)/.test(c)},
  {l:"Uses closure pattern (inner accesses outer var)",f:c=>/function.*\{[\s\S]*let|const[\s\S]*return/.test(c)},
  {l:"Uses memoization or currying",f:c=>/memoize|cache|curry|Map\(\)/.test(c)},
]},
{id:10,title:"Error Handling",diff:"hard",
desc:`<code>try/catch/finally</code> handles runtime errors. <code>throw</code> raises custom errors. Extend <code>Error</code> to build typed error hierarchies for better error management.`,
hint:"class ValidationError extends Error — gives errors a name & extra properties.",
code:`// Error Handling
class AppError extends Error {
  constructor(msg, code) {
    super(msg); this.name="AppError"; this.code=code;
  }
}
class ValidationError extends AppError {
  constructor(field, msg) {
    super(msg, "VALIDATION"); this.name="ValidationError"; this.field=field;
  }
}
class NetworkError extends AppError {
  constructor(status, msg) {
    super(msg, "NETWORK"); this.name="NetworkError"; this.status=status;
  }
}

function validateUser({name, age, email}) {
  if(!name?.trim()) throw new ValidationError("name","Name is required");
  if(age<0||age>150) throw new ValidationError("age","Age must be 0-150");
  if(!/^[^@]+@[^@]+$/.test(email)) throw new ValidationError("email","Invalid email");
  return true;
}

const users=[
  {name:"Anika",age:25,email:"anika@mail.com"},
  {name:"",age:20,email:"ok@ok.com"},
  {name:"Bob",age:-3,email:"b@b.com"},
  {name:"Zara",age:30,email:"not-an-email"},
];

users.forEach(u=>{
  try {
    validateUser(u);
    console.log(\`✓ Valid: \${u.name||"(empty)"}\`);
  } catch(e) {
    if(e instanceof ValidationError)
      console.error(\`✗ [\${e.field}] \${e.message}\`);
    else console.error("Unknown:", e.message);
  } finally {
    // always runs — good for cleanup
  }
});`,
tests:[
  {l:"Uses try/catch",f:c=>/try\s*\{[\s\S]*catch/.test(c)},
  {l:"Uses throw",f:c=>/throw/.test(c)},
  {l:"Extends Error class",f:c=>/extends.*Error/.test(c)},
]},
{id:11,title:"Spread & Rest Operators",diff:"easy",
desc:`<code>...</code> does two things:<br>• <strong>Spread</strong> — expands iterable into individual elements<br>• <strong>Rest</strong> — collects remaining arguments into array`,
hint:"function fn(first, ...rest) — rest collects everything after first into an array.",
code:`// Spread & Rest

// Spread arrays
const a=[1,2,3], b=[4,5,6];
console.log("Merged:", [...a,...b]);
console.log("Max:", Math.max(...a,...b));

// Spread objects (immutable update)
const user={name:"Sadia",age:22,city:"Dhaka"};
const updated={...user, age:23, email:"s@mail.com"};
console.log("Updated:", updated);
console.log("Original age:", user.age); // unchanged

// Rest in functions
function stats(label, ...nums) {
  const sum = nums.reduce((a,b)=>a+b,0);
  const avg = sum/nums.length;
  console.log(\`\${label}: sum=\${sum}, avg=\${avg.toFixed(1)}, count=\${nums.length}\`);
}
stats("A", 10, 20, 30, 40, 50);
stats("B", 7, 14);

// Rest in destructuring
const [head, second, ...tail] = [1,2,3,4,5];
console.log("Head:",head,"Second:",second,"Tail:",tail);`,
tests:[
  {l:"Uses spread [...] on array",f:c=>/\[\.\.\./.test(c)},
  {l:"Uses spread {...} on object",f:c=>/\{\.\.\./.test(c)},
  {l:"Uses rest parameter ...name",f:c=>/function[^(]*\([^)]*\.\.\.\w+/.test(c)},
]},
{id:12,title:"Destructuring",diff:"easy",
desc:`Unpack array positions or object keys into variables. Works with <strong>defaults</strong>, <strong>renaming</strong>, <strong>nesting</strong>, and <strong>function params</strong>.`,
hint:"const { a: myA = 10 } = obj — renames 'a' to 'myA' with default 10 if missing.",
code:`// Destructuring

// Array
const [r,g,b=0] = [255,128];
console.log("RGB:", r, g, b); // b defaults to 0

// Skip elements
const [,second,,fourth] = [10,20,30,40];
console.log("2nd:", second, "4th:", fourth);

// Object with rename & default
const {name:n, age:yr=18, city="Unknown"} = {name:"Rahim",age:25};
console.log(n, yr, city);

// Nested
const {address:{street,zip},profile:{lang="en"}={}} =
  {address:{street:"42 Mirpur Rd",zip:"1216"}};
console.log(street, zip, lang);

// In function params
function render({title, price=0, badge="new"}) {
  console.log(\`[\${badge.toUpperCase()}] \${title} — $\${price}\`);
}
render({title:"JS Course",price:29});
render({title:"HTML Basics",badge:"free"});`,
tests:[
  {l:"Array destructuring [a,b]",f:c=>/const\s*\[/.test(c)},
  {l:"Object destructuring {a,b}",f:c=>/const\s*\{/.test(c)},
  {l:"Uses default value in destructuring",f:c=>/\{[^}]*=\s*[^,}]+\}|\[[^\]]*=[^\]]*\]/.test(c)},
]},
{id:13,title:"Map & Set",diff:"med",
desc:`<code>Map</code>: key→value, any key type, preserves insertion order, has <code>.size</code>.<br><code>Set</code>: unique values only, great for deduplication and membership tests.`,
hint:"[...new Set(arr)] is the fastest way to deduplicate an array.",
code:`// Map & Set

// MAP
const scores = new Map([
  ["Alice",95],["Bob",82],["Charlie",91],["Dave",78]
]);
scores.set("Eve",88);
console.log("Size:", scores.size);
console.log("Alice:", scores.get("Alice"));
console.log("Has Bob:", scores.has("Bob"));

// Iterate
const top = [...scores.entries()].filter(([,s])=>s>=90).map(([n])=>n);
console.log("Top scorers:", top);

// Map as counter
const words = "the quick brown fox jumps over the lazy dog the".split(" ");
const freq = new Map();
words.forEach(w => freq.set(w, (freq.get(w)||0)+1));
console.log("\\n'the' appears:", freq.get("the"), "times");

// SET
const tags = new Set(["js","html","css","js","react","css"]);
console.log("\\nUnique tags:", [...tags]);

// Set operations
const setA = new Set([1,2,3,4,5]);
const setB = new Set([3,4,5,6,7]);
const union        = new Set([...setA,...setB]);
const intersection = new Set([...setA].filter(x=>setB.has(x)));
console.log("Union:", [...union]);
console.log("Intersection:", [...intersection]);`,
tests:[
  {l:"Creates and uses a Map",f:c=>/new Map/.test(c)},
  {l:"Creates and uses a Set",f:c=>/new Set/.test(c)},
  {l:"Does set operation or Map iteration",f:c=>/filter\([\s\S]*has\(|entries\(\)|\.forEach\(/.test(c)},
]},
{id:14,title:"Generators & Iterators",diff:"hard",
desc:`<code>function*</code> defines a generator. <code>yield</code> pauses execution and returns a value. Call <code>.next()</code> to resume. Perfect for lazy sequences and infinite streams.`,
hint:"[...range(1,10)] — spread automatically calls .next() until done:true.",
code:`// Generators & Iterators

// Infinite counter generator
function* counter(start=1) {
  while(true) yield start++;
}
const gen=counter(1);
console.log([gen.next().value, gen.next().value, gen.next().value]);

// Range generator
function* range(from,to,step=1){
  for(let i=from; i<=to; i+=step) yield i;
}
console.log("Range:", [...range(0,10,2)]);

// Fibonacci
function* fibonacci() {
  let [a,b]=[0,1];
  while(true){ yield a; [a,b]=[b,a+b]; }
}
const fib=fibonacci();
const first10=Array.from({length:10},()=>fib.next().value);
console.log("Fib:", first10);

// Custom iterable object
class LinkedRange {
  constructor(start,end){ this.start=start; this.end=end; }
  [Symbol.iterator]() { return range(this.start,this.end); }
}
const lr=new LinkedRange(1,5);
console.log("Custom iterable:", [...lr]);
for(const n of lr) process?.stdout?.write?.(n+" ") || null;`,
tests:[
  {l:"Defines generator function*",f:c=>/function\s*\*/.test(c)},
  {l:"Uses yield keyword",f:c=>/\byield\b/.test(c)},
  {l:"Calls .next() or spreads generator",f:c=>/\.next\(\)|\[\.\.\..*\(/.test(c)},
]},
{id:15,title:"Regular Expressions",diff:"med",
desc:`Regex patterns match strings. Methods: <code>.test()</code> <code>.match()</code> <code>.matchAll()</code> <code>.replace()</code> <code>.split()</code>. Flags: <code>g</code> global, <code>i</code> case-insensitive, <code>m</code> multiline.`,
hint:"Use capture groups () to extract parts: /year-(\\d{4})/.exec(str)?.[1]",
code:`// Regular Expressions
const text = "Call us: +880-171-234567 or +1-800-555-1234. Email: hello@jslab.io";

// Test
console.log("Has phone:", /\\+\\d[\d-]{8,}/.test(text));

// Match all phones
const phones = text.match(/\\+[\d-]{10,}/g);
console.log("Phones:", phones);

// Named capture groups
const dateStr = "Meeting on 2025-03-19 and 2025-04-01";
const dates = [...dateStr.matchAll(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/g)];
dates.forEach(m => console.log(\`Date: \${m.groups.y}/\${m.groups.m}/\${m.groups.d}\`));

// Replace
const cleaned = text.replace(/\\+[\d-]+/g,"[PHONE]").replace(/[\\w.]+@[\\w.]+/g,"[EMAIL]");
console.log("\\nCleaned:", cleaned);

// Validate email
const isEmail = e => /^[\\w.+-]+@[\\w-]+\\.[a-z]{2,}$/i.test(e);
["user@site.com","bad@","ok@co.uk"].forEach(e=>console.log(e,"→",isEmail(e)));`,
tests:[
  {l:"Uses regex literal /pattern/",f:c=>/\/[^/\n]+\/[gimsuy]*/.test(c)},
  {l:"Uses .test() or .match()",f:c=>/\.test\(|\.match\(/.test(c)},
  {l:"Uses replace() or matchAll()",f:c=>/\.replace\(|\.matchAll\(/.test(c)},
]},
{id:16,title:"Modules Pattern",diff:"med",
desc:`ES Modules use <code>export</code>/<code>import</code>. This lesson uses the <strong>Revealing Module Pattern</strong> (IIFE) to simulate modules in a single file — same concepts apply.`,
hint:"IIFEs run immediately: (() => { ... })() — great for encapsulation.",
code:`// Module Pattern (simulates ES Modules)

const EventBus = (() => {
  const listeners = new Map();
  return {
    on(event, cb) {
      if(!listeners.has(event)) listeners.set(event,[]);
      listeners.get(event).push(cb);
    },
    off(event, cb) {
      listeners.set(event,(listeners.get(event)||[]).filter(fn=>fn!==cb));
    },
    emit(event, ...args) {
      (listeners.get(event)||[]).forEach(cb=>cb(...args));
    },
    once(event, cb) {
      const wrapper=(...args)=>{ cb(...args); this.off(event,wrapper); };
      this.on(event,wrapper);
    }
  };
})();

// Use the module
EventBus.on("login", user => console.log("Login:", user.name));
EventBus.once("login", () => console.log("(First login detected!)"));
EventBus.on("error", msg => console.error("Error:", msg));

EventBus.emit("login", {name:"Farhan",role:"admin"});
EventBus.emit("login", {name:"Mitu",role:"user"});
EventBus.emit("error", "Connection timeout");`,
tests:[
  {l:"Uses IIFE (() => {...})()",f:c=>/\(\s*\(\s*\)\s*=>|\(\s*function/.test(c)},
  {l:"Returns an object (public API)",f:c=>/return\s*\{/.test(c)},
  {l:"Has private state (variable in closure)",f:c=>/const|let[\s\S]*return\s*\{/.test(c)},
]},
{id:17,title:"Iterators & Symbol",diff:"hard",
desc:`Any object can be iterable by implementing <code>[Symbol.iterator]()</code>. The iterator protocol requires a <code>next()</code> method returning <code>{ value, done }</code>.`,
hint:"Symbol.iterator makes an object work with for...of and spread.",
code:`// Iterators & Symbol.iterator

// Custom range iterator
class Range {
  constructor(start,end,step=1){this.start=start;this.end=end;this.step=step;}
  [Symbol.iterator](){
    let current=this.start;
    const {end,step}=this;
    return {
      next(){
        if(current<=end){ const value=current; current+=step; return{value,done:false}; }
        return{value:undefined,done:true};
      }
    };
  }
}

const r=new Range(1,10,2);
console.log("Range:", [...r]);
for(const n of r) process?.stdout?.write?.(n+" ")||null;

// Infinite lazy iterator
function* naturals(start=1){ while(true) yield start++; }
function take(n, iter){
  const res=[];
  for(const x of iter){ res.push(x); if(res.length===n)break; }
  return res;
}
console.log("\\nFirst 7 naturals:", take(7,naturals()));

// Symbol.toPrimitive
class Temperature{
  constructor(c){this.c=c;}
  [Symbol.toPrimitive](hint){
    if(hint==="number") return this.c;
    if(hint==="string") return \`\${this.c}°C / \${(this.c*9/5+32).toFixed(1)}°F\`;
    return this.c>0;
  }
}
const t=new Temperature(22);
console.log("Temp:", String(t));
console.log("Celsius:", +t);
console.log("Is warm:", !!t);`,
tests:[
  {l:"Implements [Symbol.iterator]",f:c=>/Symbol\.iterator/.test(c)},
  {l:"Returns {value, done} from next()",f:c=>/done/.test(c)},
  {l:"Uses for...of or spread on custom iterable",f:c=>/for\s*\(const[\s\S]*of|\.\.\./.test(c)},
]},
{id:18,title:"Fetch & HTTP",diff:"hard",
desc:`<code>fetch()</code> makes HTTP requests, returns a Promise resolving to a <code>Response</code>. Always check <code>response.ok</code>. Use <code>AbortController</code> to cancel requests.`,
hint:"fetch only rejects on network failure. HTTP 404/500 still resolve — check res.ok!",
code:`// Fetch & HTTP (with mock API)
const mockDB = {
  users:{1:{id:1,name:"Leanne Graham",email:"leanne@april.biz"},
         2:{id:2,name:"Ervin Howell",email:"shanna@melissa.tv"}},
  posts:{1:{id:1,title:"Introduction to JS",userId:1,likes:42}}
};
function mockFetch(url,{signal}={}){
  return new Promise((res,rej)=>{
    const t=setTimeout(()=>{
      const [,resource,id]=url.match(/\/(users|posts)\/(\d+)$/)||[];
      const data=mockDB[resource]?.[id];
      if(data) res({ok:true,status:200,json:async()=>data});
      else res({ok:false,status:404,json:async()=>({error:"Not found"})});
    },60);
    signal?.addEventListener("abort",()=>{ clearTimeout(t); rej(new DOMException("Aborted")); });
  });
}

async function getResource(type,id){
  const res=await mockFetch(\`https://api.example.com/\${type}/\${id}\`);
  if(!res.ok) throw new Error(\`HTTP \${res.status}: \${type}/\${id} not found\`);
  return res.json();
}

async function main(){
  // Single fetch
  const user=await getResource("users",1);
  console.log("User:", user.name,"<"+user.email+">");

  // Parallel
  const [u1,u2]=await Promise.all([getResource("users",1),getResource("users",2)]);
  console.log("\\nParallel:",u1.name,"&",u2.name);

  // 404 error
  try{ await getResource("users",99); }
  catch(e){ console.error("404 caught:", e.message); }

  // AbortController
  const ctrl=new AbortController();
  setTimeout(()=>ctrl.abort(),10);
  try{
    await mockFetch("https://api.example.com/users/1",{signal:ctrl.signal});
  }catch(e){ console.warn("Request aborted:", e.message); }
}
main();`,
tests:[
  {l:"Uses async/await",f:c=>/async|await/.test(c)},
  {l:"Checks response.ok or status",f:c=>/\.ok|\.status/.test(c)},
  {l:"Uses AbortController or Promise.all",f:c=>/AbortController|Promise\.all/.test(c)},
]},
{id:19,title:"Proxy & Reflect",diff:"hard",
desc:`<code>Proxy</code> intercepts object operations via <em>traps</em> (get, set, has, deleteProperty…). <code>Reflect</code> provides the default behavior inside traps. Used for: validation, reactivity, logging.`,
hint:"Always call Reflect.set/get inside traps to preserve default behavior.",
code:`// Proxy & Reflect

// 1. Reactive state (like Vue/MobX)
function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(t,k,v){
      const old=t[k];
      Reflect.set(t,k,v);
      if(old!==v) onChange(k,old,v);
      return true;
    },
    get(t,k){ return typeof t[k]==="object"&&t[k]!==null ? reactive(t[k],onChange) : Reflect.get(t,k); }
  });
}

const state=reactive({count:0,name:"JSLab"},(k,o,n)=>
  console.log(\`[Reactive] \${k}: \${o} → \${n}\`));
state.count++;
state.count++;
state.name="JSLab Pro";

// 2. Validation proxy
function withValidation(obj, schema) {
  return new Proxy(obj,{
    set(t,k,v){
      if(schema[k]){
        const {type,min,max}=schema[k];
        if(typeof v!==type) throw new TypeError(\`\${k} must be \${type}\`);
        if(min!==undefined&&v<min) throw new RangeError(\`\${k} >= \${min}\`);
        if(max!==undefined&&v>max) throw new RangeError(\`\${k} <= \${max}\`);
      }
      return Reflect.set(t,k,v);
    }
  });
}

const user=withValidation({},{
  age:{type:"number",min:0,max:150},
  name:{type:"string"}
});
user.name="Tariq"; user.age=25;
console.log("\\nValid:", user.name, user.age);
try{ user.age=-5; }catch(e){ console.error("Caught:",e.message); }`,
tests:[
  {l:"Uses new Proxy(target, handler)",f:c=>/new Proxy/.test(c)},
  {l:"Defines set or get trap",f:c=>/\bset\s*\(|\bget\s*\(/.test(c)},
  {l:"Uses Reflect.set or Reflect.get",f:c=>/Reflect\.(set|get)/.test(c)},
]},
{id:20,title:"WeakMap & Memory",diff:"hard",
desc:`<code>WeakMap</code>/<code>WeakSet</code> hold <em>weak references</em> — entries are garbage collected when key objects have no other references. Use for: private data, caching, tracking DOM nodes.`,
hint:"WeakMap keys must be objects (not primitives). Values can be anything.",
code:`// WeakMap & Memory Management

// 1. Private class data via WeakMap
const _priv = new WeakMap();

class SecureWallet {
  constructor(owner, balance) {
    _priv.set(this,{balance,txns:[]});
    this.owner=owner;
  }
  deposit(amt){
    if(amt<=0) throw new RangeError("Amount must be positive");
    const d=_priv.get(this);
    d.balance+=amt; d.txns.push({type:"deposit",amt,time:Date.now()});
    console.log(\`[+\${amt}] Balance: \${d.balance}\`);
  }
  withdraw(amt){
    const d=_priv.get(this);
    if(amt>d.balance) throw new Error("Insufficient funds");
    d.balance-=amt; d.txns.push({type:"withdraw",amt,time:Date.now()});
    console.log(\`[-\${amt}] Balance: \${d.balance}\`);
  }
  get balance(){ return _priv.get(this).balance; }
  get history(){ return _priv.get(this).txns.length; }
}

const w=new SecureWallet("Sumaiya",1000);
w.deposit(500);
w.withdraw(200);
console.log("Balance:", w.balance, "| Txns:", w.history);
try{ w.withdraw(9999); }catch(e){ console.error(e.message); }
console.log("Private accessible directly?", w._priv); // undefined

// 2. WeakSet for deduplication tracking
const processed=new WeakSet();
const jobs=[{id:1},{id:2},{id:3}];
function process(job){
  if(processed.has(job)){ console.log("\\nSkip duplicate:", job.id); return; }
  processed.add(job);
  console.log("\\nProcessing job:", job.id);
}
process(jobs[0]); process(jobs[1]); process(jobs[0]);`,
tests:[
  {l:"Uses WeakMap",f:c=>/new WeakMap/.test(c)},
  {l:"Uses WeakSet",f:c=>/new WeakSet/.test(c)},
  {l:"Associates private data with class instance",f:c=>/WeakMap[\s\S]*(class|set\(this)/.test(c)},
]},
];

/* ═══════════════════════════════════════════════════════════════
   QUIZ DATA (20 questions across topics)
═══════════════════════════════════════════════════════════════ */
const QUIZZES=[
{q:"What is the output of: typeof null?",opts:["null","object","undefined","string"],ans:1,exp:"typeof null is 'object' — a famous JS quirk from its early days."},
{q:"Which method does NOT mutate the original array?",opts:[".push()","Array.slice()","Array.sort()","Array.splice()"],ans:1,exp:".slice() returns a new array without modifying the original."},
{q:"What does the '??' (nullish coalescing) operator return?",opts:["Left side if truthy","Right side if left is null or undefined","Left side if falsy","Right side always"],ans:1,exp:"?? returns right side only when left is null or undefined (not 0 or '')."},
{q:"What is a closure?",opts:["A way to close the browser tab","A function with access to its outer scope after outer function returns","A CSS rule","An error handling pattern"],ans:1,exp:"Closures allow inner functions to 'remember' variables from their enclosing scope."},
{q:"What does async function always return?",opts:["undefined","A Promise","A callback","A Generator"],ans:1,exp:"Every async function implicitly returns a Promise, even if you return a plain value."},
{q:"Which is the correct way to deep-clone a simple object?",opts:["obj2 = obj","obj2 = {...obj}","obj2 = JSON.parse(JSON.stringify(obj))","obj2 = Object.keys(obj)"],ans:2,exp:"JSON parse/stringify is a simple deep clone, though it doesn't handle functions, dates etc."},
{q:"What does Array.prototype.reduce() return?",opts:["Always an array","An accumulated single value","A boolean","A new array of same length"],ans:1,exp:"reduce() accumulates array values into a single output using a callback."},
{q:"What is the difference between == and ===?",opts:["No difference","=== checks value AND type","== is faster","=== only works for numbers"],ans:1,exp:"=== (strict equality) checks both value and type. == performs type coercion first."},
{q:"Which keyword creates a block-scoped variable?",opts:["var","let","function","global"],ans:1,exp:"let (and const) are block-scoped. var is function-scoped, which can cause bugs."},
{q:"What is the purpose of Symbol.iterator?",opts:["To compare symbols","To make an object iterable with for...of","To convert to string","To identify object type"],ans:1,exp:"Implementing [Symbol.iterator]() lets any object work with for...of and spread."},
{q:"What does Promise.all() do if one promise rejects?",opts:["Ignores it","Rejects immediately (fail-fast)","Waits for all to settle","Returns undefined for that item"],ans:1,exp:"Promise.all rejects immediately with the first rejection. Use Promise.allSettled to wait for all."},
{q:"Which Array method returns a new array of same length?",opts:[".filter()",".reduce()",".map()",".find()"],ans:2,exp:".map() always returns a new array with the same number of elements as the original."},
{q:"What is the output of: [1,2,3].find(x => x > 1)?",opts:["[2,3]","2","true","[2]"],ans:1,exp:".find() returns the first matching element (2), not an array."},
{q:"What does the 'rest' parameter (...args) collect?",opts:["First argument only","All arguments into an array","Named arguments","Undefined values"],ans:1,exp:"Rest (...args) collects all remaining arguments passed to the function into an array."},
{q:"How do you prevent Proxy's default behavior from being lost?",opts:["Use JSON.stringify","Call Reflect methods inside traps","Return false from the trap","Use Object.freeze"],ans:1,exp:"Reflect mirrors all Proxy traps and provides the default behavior safely."},
{q:"What is a Generator function used for?",opts:["To generate random numbers","To produce values lazily one at a time","To create HTML","To define classes"],ans:1,exp:"Generators pause execution at yield, producing values one at a time — perfect for lazy sequences."},
{q:"WeakMap keys must be:",opts:["Strings","Numbers","Objects","Any primitive"],ans:2,exp:"WeakMap keys must be objects. This allows garbage collection when the key object has no other references."},
{q:"Which correctly destructures with a default value?",opts:["const {a=5} = {}","const {a:5} = {}","const a=5 from {}","const [a|5] = []"],ans:0,exp:"const { a = 5 } = {} — 'a' will be 5 if not present in the object."},
{q:"What does Set guarantee about its values?",opts:["Sorted order","Unique values only","Fixed size","Only numbers"],ans:1,exp:"Set automatically removes duplicate values, keeping only unique entries."},
{q:"Arrow functions differ from regular functions because they:",opts:["Can't take parameters","Don't have their own 'this'","Are always async","Can't return values"],ans:1,exp:"Arrow functions inherit 'this' from the enclosing scope. They don't have their own this binding."},
];

/* ═══════════════════════════════════════════════════════════════
   SNIPPETS & REF
═══════════════════════════════════════════════════════════════ */
const SNIPPETS=[
{n:"console.log",c:"console.log('Hello!');"},
{n:"Arrow fn",c:"const fn = (x) => x * 2;"},
{n:"Array map",c:"const doubled = arr.map(x => x * 2);"},
{n:"Array filter",c:"const pos = arr.filter(x => x > 0);"},
{n:"Array reduce",c:"const sum = arr.reduce((acc, v) => acc + v, 0);"},
{n:"Destructure obj",c:"const { name, age = 18 } = obj;"},
{n:"Spread merge",c:"const merged = { ...obj1, ...obj2 };"},
{n:"Template literal",c:"const msg = `Hello, ${name}!`;"},
{n:"Async function",c:"async function fn() {\n  const data = await fetch(url);\n  return data.json();\n}"},
{n:"Try/catch",c:"try {\n  // risky code\n} catch (err) {\n  console.error(err);\n} finally {\n  // always runs\n}"},
{n:"Class",c:"class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name}!`; }\n}"},
{n:"Promise.all",c:"const [a, b] = await Promise.all([fetchA(), fetchB()]);"},
{n:"Debounce",c:"const debounce = (fn, ms) => {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n};"},
{n:"Deep clone",c:"const clone = JSON.parse(JSON.stringify(obj));"},
];

const REF=[
{n:"String methods",c:"str.toUpperCase() / toLowerCase()\nstr.trim() / trimStart() / trimEnd()\nstr.includes(sub) / startsWith(s)\nstr.replace(a,b) / replaceAll(a,b)\nstr.split(',') / join(',')\nstr.slice(0,5) / substring(0,5)\nstr.padStart(10,'0') / padEnd(10)"},
{n:"Array methods",c:"arr.push(v) / pop()\narr.shift() / unshift(v)\narr.splice(i,n) / slice(i,j)\narr.indexOf(v) / includes(v)\narr.flat() / flatMap(fn)\narr.sort((a,b)=>a-b)\narr.fill(0,1,4)\narr.at(-1) // last element"},
{n:"Object methods",c:"Object.keys(obj)\nObject.values(obj)\nObject.entries(obj)\nObject.assign({}, obj)\nObject.freeze(obj)\nObject.fromEntries(entries)\nObject.hasOwn(obj,'key')"},
{n:"Math",c:"Math.round/floor/ceil(x)\nMath.abs/sign(x)\nMath.max/min(...arr)\nMath.random() // 0-1\nMath.pow(x,n) / x**n\nMath.sqrt(x) / Math.cbrt(x)\nMath.PI / Math.E"},
{n:"Number",c:"Number.isNaN(x)\nNumber.isFinite(x)\nNumber.isInteger(x)\nNumber.parseInt('42')\nNumber.parseFloat('3.14')\n(1234.56).toFixed(2)\n(255).toString(16) // hex"},
{n:"Type checks",c:"typeof x === 'string'\ntypeof x === 'number'\ntypeof x === 'boolean'\nArray.isArray(x)\nx instanceof Date\nx === null\nx == null // null OR undefined"},
{n:"Operators",c:"// Logical\na && b   // AND (short-circuit)\na || b   // OR  (short-circuit)\na ?? b   // Nullish coalescing\n!a       // NOT\n\n// Optional chaining\nobj?.prop?.nested\narr?.[0]\nfn?.()"},
{n:"JSON",c:"JSON.stringify(obj)\nJSON.stringify(obj, null, 2)  // pretty\nJSON.parse(str)\n// Replacer: JSON.stringify(obj,\n//   (key,val) => typeof val==='fn' ? undefined : val)"},
];

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
let S = {
  mode: 'learn',
  lesson: 0,
  xp: 0,
  level: 1,
  done: new Set(),
  snippets: [],
  theme: 'dark',
  quizIdx: 0,
  quizOrder: [],
  quizAnswered: false,
  aiHistory: [],
};

/* ═══════════════════════════════════════════════════════════════
   SYNTAX HIGHLIGHTING
═══════════════════════════════════════════════════════════════ */
function highlight(code) {
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  // Process line by line to handle comments properly
  const lines = code.split('\n');
  return lines.map(line => {
    // Single-line comment — everything after // is a comment
    const ci = line.indexOf('//');
    let main = ci >= 0 ? line.slice(0, ci) : line;
    const comment = ci >= 0 ? line.slice(ci) : '';

    // Process main part
    main = esc(main);
    // Strings (backtick, double, single)
    main = main.replace(/(`[^`]*`|"[^"]*"|'[^']*')/g, m => `<span class="hl-str">${m}</span>`);
    // Keywords
    main = main.replace(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|super|import|export|default|from|of|in|typeof|instanceof|void|delete|throw|try|catch|finally|async|await|yield|static|get|set|this|null|undefined|true|false|NaN|Infinity)\b/g,
      m => `<span class="hl-kw">${m}</span>`);
    // Numbers
    main = main.replace(/\b(\d+\.?\d*)\b/g, m => `<span class="hl-num">${m}</span>`);
    // Function calls
    main = main.replace(/(\b\w+)(?=\s*\()/g, m => `<span class="hl-fn">${m}</span>`);
    // Properties after dot
    main = main.replace(/(?<=\.)(\w+)/g, m => `<span class="hl-prop">${m}</span>`);

    return comment
      ? main + `<span class="hl-cmt">${esc(comment)}</span>`
      : main;
  }).join('\n');
}

function updateHighlight() {
  // No separate highlight layer — textarea text is always visible
  // Syntax coloring is decorative only via CSS on the textarea itself
}

/* ═══════════════════════════════════════════════════════════════
   LINE NUMBERS
═══════════════════════════════════════════════════════════════ */
function updateLineNums() {
  const ed = document.getElementById('editor');
  const n = ed.value.split('\n').length;
  document.getElementById('line-nums').textContent = Array.from({length:n},(_,i)=>i+1).join('\n');
}

/* ═══════════════════════════════════════════════════════════════
   EDITOR SETUP
═══════════════════════════════════════════════════════════════ */
function setupEditor() {
  const ed = document.getElementById('editor');

  ed.addEventListener('input', () => { updateLineNums(); });
  ed.addEventListener('scroll', () => {
    document.getElementById('line-nums').scrollTop = ed.scrollTop;
  });

  ed.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      document.execCommand('insertText', false, '  ');
      updateLineNums(); updateHighlight();
    }
    if ((e.ctrlKey||e.metaKey) && e.key==='Enter') { e.preventDefault(); runCode(); }
    if ((e.ctrlKey||e.metaKey) && e.key==='l')     { e.preventDefault(); clearOut(); }
    if ((e.ctrlKey||e.metaKey) && e.key==='s')     { e.preventDefault(); saveSnippet(); }
    if ((e.ctrlKey||e.metaKey) && e.key==='k')     { e.preventDefault(); openAIDrawer(); askAI('explain'); }

    // Auto-close
    const pairs = {'(':')','[':']','{':'}','"':'"',"'":"'",'`':'`'};
    if (pairs[e.key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const next = ed.value[ed.selectionStart];
      if ((e.key==='"'||e.key==="'"||e.key==='`') && next===e.key && ed.selectionStart===ed.selectionEnd) {
        e.preventDefault(); ed.selectionStart = ed.selectionEnd = ed.selectionStart + 1; return;
      }
      e.preventDefault();
      const s = ed.selectionStart;
      const sel = ed.value.slice(s, ed.selectionEnd);
      document.execCommand('insertText', false, e.key + sel + pairs[e.key]);
      ed.selectionStart = ed.selectionEnd = s + 1;
    }
  });

  // Setup inline autocomplete
  setupAutocomplete(ed);
}

/* ═══════════════════════════════════════════════════════════════
   SET EDITOR CODE
═══════════════════════════════════════════════════════════════ */
function setCode(code) {
  const ed = document.getElementById('editor');
  ed.value = code;
  updateLineNums();
}

/* ═══════════════════════════════════════════════════════════════
   LOAD LESSON
═══════════════════════════════════════════════════════════════ */
function loadLesson(i) {
  S.lesson = i;
  const L = LESSONS[i];
  document.getElementById('lb-meta').textContent  = `LESSON ${String(i+1).padStart(2,'0')}`;
  document.getElementById('lb-title').textContent = L.title;
  document.getElementById('lb-body').innerHTML    = L.desc;
  setCode(L.code);
  clearOut();
  renderTests(L.tests, []);
  renderLessonList();
}

/* ═══════════════════════════════════════════════════════════════
   RENDER SIDEBAR
═══════════════════════════════════════════════════════════════ */
function renderLessonList() {
  document.getElementById('lesson-list').innerHTML = LESSONS.map((L,i) => `
    <div class="l-item ${i===S.lesson?'active':''} ${S.done.has(i)?'done':''}" onclick="loadLesson(${i})">
      <div class="l-num">${S.done.has(i)?'✓':L.id}</div>
      <div style="flex:1;font-size:11px">${L.title}</div>
      <div class="l-tag t-${L.diff}">${L.diff}</div>
    </div>`).join('');
  const pct = Math.round(S.done.size/LESSONS.length*100);
  document.getElementById('prog-fill').style.width = pct+'%';
  document.getElementById('prog-pct').textContent  = pct+'%';
}

/* ═══════════════════════════════════════════════════════════════
   RUN CODE
═══════════════════════════════════════════════════════════════ */
function runCode() {
  const code = document.getElementById('editor').value;
  const out  = document.getElementById('out-content');
  const dot  = document.getElementById('status-dot');
  dot.className = 'status-dot running';
  out.innerHTML = '';
  const logs = [];
  const _con = {
    log:   (...a) => logs.push({t:'log',  a}),
    error: (...a) => logs.push({t:'error',a}),
    warn:  (...a) => logs.push({t:'warn', a}),
    info:  (...a) => logs.push({t:'info', a}),
    table: (...a) => logs.push({t:'log',  a:['[Table]',...a]}),
    dir:   (...a) => logs.push({t:'log',  a}),
  };

  const showLogs = (success=true) => {
    out.innerHTML = '';
    if (!logs.length && success) {
      out.innerHTML='<div class="out-line ok"><span class="pfx">✓</span><span class="val">Code ran — no output</span></div>';
      dot.className='status-dot ok'; return;
    }
    logs.forEach(({t,a},i) => setTimeout(() => {
      const pfx={log:'›',error:'✗',warn:'⚠',info:'ℹ',ok:'✓'}[t]||'›';
      const val = a.map(fmtVal).join(' ');
      const d=document.createElement('div');
      d.className=`out-line ${t}`;
      d.innerHTML=`<span class="pfx">${pfx}</span><span class="val">${escH(val)}</span>`;
      out.appendChild(d); out.scrollTop=out.scrollHeight;
    }, i*35));
    dot.className = success?'status-dot ok':'status-dot err';
  };

  try {
    const fn = new Function('console','process', code);
    const ret = fn(_con, {stdout:{write:()=>{}}});
    if (ret && typeof ret.then==='function') {
      ret.then(()=>{ showLogs(true); if(S.mode==='learn') runTests(code); })
         .catch(e=>{ logs.push({t:'error',a:[e.toString()]}); showLogs(false); });
    } else {
      showLogs(true);
      if (S.mode==='learn') runTests(code);
    }
  } catch(e) {
    logs.push({t:'error',a:[e.toString()]});
    showLogs(false);
  }
}

function fmtVal(v) {
  if (v===null) return 'null';
  if (v===undefined) return 'undefined';
  if (typeof v==='object') { try{ return JSON.stringify(v,null,2); }catch{ return String(v); } }
  return String(v);
}
function escH(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ═══════════════════════════════════════════════════════════════
   TESTS
═══════════════════════════════════════════════════════════════ */
function renderTests(tests, results) {
  document.getElementById('test-cases').innerHTML = tests.map((t,i) => {
    const r=results[i]; const cls=r===undefined?'':r?'pass':'fail';
    const ic=r===undefined?'○':r?'✓':'✗';
    return `<div class="tc ${cls}"><span class="tci">${ic}</span>${t.l}</div>`;
  }).join('');
}

function runTests(code) {
  const L = LESSONS[S.lesson];
  const res = L.tests.map(t=>{ try{ return t.f(code); }catch{ return false; } });
  renderTests(L.tests, res);
  const passed = res.every(Boolean);
  if (passed && !S.done.has(S.lesson)) {
    S.done.add(S.lesson);
    const xpGain = {easy:50,med:100,hard:150}[L.diff];
    gainXP(xpGain);
    renderLessonList();
    showAchievement('🎉','Lesson Complete!', `+${xpGain} XP — ${L.title}`);
    confetti();
    // Auto-advance hint
    if (S.lesson < LESSONS.length-1) toast(`Next: Lesson ${S.lesson+2}`, 'inf', '→');
  } else if (passed) {
    toast('Already completed!', 'inf', '✓');
  } else {
    toast(`${res.filter(Boolean).length}/${res.length} tests passed`, 'inf', '🔍');
  }
}

/* ═══════════════════════════════════════════════════════════════
   CONTROLS
═══════════════════════════════════════════════════════════════ */
function clearOut() {
  document.getElementById('out-content').innerHTML='<div class="out-empty"><div class="ico">⚡</div><div>Run code to see output</div></div>';
  document.getElementById('status-dot').className='status-dot';
}

function resetCode() {
  if (S.mode==='sandbox') {
    setCode('// Sandbox — free practice\n\n');
    clearOut(); toast('Sandbox cleared', 'inf','↺'); return;
  }
  setCode(LESSONS[S.lesson].code);
  clearOut();
  renderTests(LESSONS[S.lesson].tests,[]);
  if (S.done.has(S.lesson)) {
    S.done.delete(S.lesson);
    recalcXP(); renderLessonList();
  }
  toast('Reset complete — code & history cleared','inf','↺');
}

function recalcXP() {
  S.xp=0; S.done.forEach(i=>{ S.xp+={easy:50,med:100,hard:150}[LESSONS[i].diff]; });
  S.level=Math.floor(S.xp/200)+1;
  document.getElementById('xp-badge').textContent=S.xp+' XP';
  document.getElementById('lv-badge').textContent='LVL '+S.level;
}

function gainXP(n) {
  S.xp+=n; S.level=Math.floor(S.xp/200)+1;
  document.getElementById('xp-badge').textContent=S.xp+' XP';
  document.getElementById('lv-badge').textContent='LVL '+S.level;
}

function showHint() {
  toast(LESSONS[S.lesson].hint,'inf','💡');
}

function saveSnippet() {
  const code = document.getElementById('editor').value.trim().slice(0,200);
  const name = `My snippet ${S.snippets.length+1}`;
  S.snippets.push({n:name, c:code});
  renderSnippets();
  toast(`Saved as "${name}"`, 'ok', '💾');
}

/* ═══════════════════════════════════════════════════════════════
   MODE SWITCHING
═══════════════════════════════════════════════════════════════ */
function setMode(mode) {
  S.mode = mode;
  document.querySelectorAll('.m-tab').forEach((t,i)=>{
    t.classList.toggle('active',['learn','sandbox','challenges','quiz','lb'][i]===mode);
  });
  const sidebar  = document.getElementById('sidebar');
  const lessonBar= document.getElementById('lesson-bar');
  const testPnl  = document.getElementById('test-panel');

  if (mode==='sandbox') {
    sidebar.classList.add('hidden');
    lessonBar.style.display='none';
    testPnl.style.display='none';
    setCode('// ─── Sandbox ──────────────────────────────\n// এখানে যা খুশি লিখুন — কোনো constraint নেই!\n// ──────────────────────────────────────────\n\n');
    clearOut();
  } else if (mode==='challenges') {
    sidebar.classList.remove('hidden');
    lessonBar.style.display='';
    testPnl.style.display='none';
    loadChallenge();
  } else {
    sidebar.classList.remove('hidden');
    lessonBar.style.display='';
    testPnl.style.display='';
    loadLesson(S.lesson);
  }
}

function loadChallenge() {
  const ch=[
    {t:"FizzBuzz",d:`Print numbers 1–20. Multiples of 3→"Fizz", 5→"Buzz", both→"FizzBuzz".`,
     c:`function fizzBuzz(n) {\n  for (let i=1; i<=n; i++) {\n    // your code here\n  }\n}\nfizzBuzz(20);`},
    {t:"Palindrome",d:`isPalindrome(str) returns true if str reads same forwards & backwards (ignore spaces, case).`,
     c:`function isPalindrome(str) {\n  // your code\n}\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("A man a plan a canal Panama")); // true\nconsole.log(isPalindrome("hello")); // false`},
    {t:"Flatten Deep",d:`flattenDeep(arr) flattens a deeply nested array to a single level.`,
     c:`function flattenDeep(arr) {\n  // your code\n}\nconsole.log(flattenDeep([1,[2,[3,[4]],5]]));\n// [1,2,3,4,5]`},
    {t:"Group By",d:`groupBy(arr, fn) groups array items by the result of fn(item).`,
     c:`function groupBy(arr, fn) {\n  // your code\n}\nconst words = ['one','two','three','four','five'];\nconsole.log(groupBy(words, w => w.length));\n// { 3:['one','two'], 5:['three','four','five'] }`},
  ];
  const c=ch[Math.floor(Math.random()*ch.length)];
  document.getElementById('lb-meta').textContent='🏆 CHALLENGE';
  document.getElementById('lb-title').textContent=c.t;
  document.getElementById('lb-body').innerHTML=c.d;
  setCode(c.c);
  clearOut();
}

/* ═══════════════════════════════════════════════════════════════
   PANEL SWITCHING
═══════════════════════════════════════════════════════════════ */
function switchPanel(p) {
  ['output','snippets','ref'].forEach(id=>{
    document.getElementById('pv-'+id).style.display = id===p?'flex':'none';
  });
  document.querySelectorAll('.p-tab').forEach((t,i)=>{
    t.classList.toggle('active',['output','snippets','ref'][i]===p);
  });
}

/* ═══════════════════════════════════════════════════════════════
   SNIPPETS & REF RENDER
═══════════════════════════════════════════════════════════════ */
function renderSnippets() {
  const all=[...SNIPPETS,...S.snippets];
  document.getElementById('snippet-grid').innerHTML=all.map(s=>`
    <div class="s-card" onclick="insertSnippet(${JSON.stringify(s.c)})">
      <div class="s-name">${s.n}</div>
      <div class="s-code">${escH(s.c.slice(0,70))}${s.c.length>70?'…':''}</div>
    </div>`).join('');
}

function renderRef() {
  document.getElementById('ref-grid').innerHTML=REF.map(r=>`
    <div class="s-card" onclick="insertSnippet(${JSON.stringify(r.c)})">
      <div class="s-name">${r.n}</div>
      <div class="s-code">${escH(r.c)}</div>
    </div>`).join('');
}

function insertSnippet(code) {
  const ed=document.getElementById('editor');
  ed.focus();
  document.execCommand('insertText',false,code);
  updateLineNums();
  toast('Snippet inserted','inf','📋');
}

/* ═══════════════════════════════════════════════════════════════
   AI DRAWER OPEN / CLOSE
═══════════════════════════════════════════════════════════════ */
function openAIDrawer() {
  const d = document.getElementById('ai-drawer');
  d.style.display = 'flex';
  // nudge right panel left if needed
  requestAnimationFrame(()=>{ d.style.transform='translateX(0)'; });
}
function closeAIDrawer() {
  document.getElementById('ai-drawer').style.display = 'none';
}

/* ═══════════════════════════════════════════════════════════════
   AI ASSISTANT — offline knowledge engine + Anthropic API
═══════════════════════════════════════════════════════════════ */
const PROMPTS = {
  explain: code => `You are a friendly JavaScript teacher. Explain this code clearly for a learner. Use simple language. Max 200 words. Format with **bold** for key terms. Code:\n\`\`\`js\n${code}\n\`\`\``,
  fix:     code => `You are a JS debugger. Find ALL bugs or issues in this code. Be specific about what line and why. Suggest the fix. Code:\n\`\`\`js\n${code}\n\`\`\``,
  hint:    code => `Give ONE helpful hint for this JavaScript code without giving the full solution. Be encouraging and specific. Code:\n\`\`\`js\n${code}\n\`\`\``,
  optimize:code => `Suggest 2-3 concrete improvements to make this JavaScript code cleaner, faster, or more modern (ES6+). Show brief before/after. Code:\n\`\`\`js\n${code}\n\`\`\``,
  concept: ()   => `You are a JS teacher. Explain ONE concept a beginner struggles with (closures, promises, or the event loop). Keep it under 120 words with a mini code example.`,
};

// Offline JS knowledge base for instant answers without API
const JS_KB = {
  'closure':   '**Closure** হলো একটা function যে তার outer scope-এর variable মনে রাখে। Example:\n```js\nfunction counter() {\n  let n = 0;\n  return () => ++n; // remembers n\n}\nconst c = counter();\nc(); // 1, c(); // 2\n```',
  'promise':   '**Promise** হলো async operation-এর result। 3 state: pending → fulfilled/rejected.\n```js\nfetch(url)\n  .then(r => r.json())\n  .catch(err => console.error(err));\n```',
  'arrow':     '**Arrow function** `=>` এ নিজের `this` নেই, outer scope-এর `this` use করে।\n```js\nconst add = (a, b) => a + b;\nconst double = x => x * 2;\n```',
  'async':     '**async/await** Promise-কে synchronous-এর মতো দেখায়।\n```js\nasync function getData() {\n  const res = await fetch(url);\n  return res.json();\n}\n```',
  'map':       '**Array.map()** প্রতিটি element transform করে নতুন array return করে।\n```js\n[1,2,3].map(x => x * 2); // [2,4,6]\n```',
  'filter':    '**Array.filter()** condition-মিলা elements রাখে।\n```js\n[1,2,3,4].filter(x => x % 2 === 0); // [2,4]\n```',
  'reduce':    '**Array.reduce()** সব elements একটা value-তে জমায়।\n```js\n[1,2,3,4].reduce((sum,v) => sum+v, 0); // 10\n```',
  'class':     '**Class** object-এর blueprint। `extends` দিয়ে inherit করে।\n```js\nclass Dog extends Animal {\n  constructor(n) { super(n); }\n  bark() { return "Woof!"; }\n}\n```',
  'destructure':'**Destructuring** object/array থেকে সরাসরি variable বের করে।\n```js\nconst {name, age} = person;\nconst [first, ...rest] = arr;\n```',
  'spread':    '**Spread** `...` array/object copy ও merge করে।\n```js\nconst merged = {...obj1, ...obj2};\nconst combined = [...arr1, ...arr2];\n```',
  'typeof':    '`typeof` operator type জানায়। `typeof null === "object"` একটা পুরোনো bug।',
  'hoisting':  '**Hoisting**: `var` ও `function` declaration উপরে উঠে যায়। `let`/`const` হয় না।',
  'prototype': '**Prototype chain**: JS object-এ property না পেলে `__proto__`-তে খোঁজে।',
  'event loop':'**Event Loop**: JS single-threaded। Call stack খালি হলে task queue থেকে কাজ নেয়।',
};

function findOfflineAnswer(q) {
  const lq = q.toLowerCase();
  for (const [key, ans] of Object.entries(JS_KB)) {
    if (lq.includes(key)) return ans;
  }
  return null;
}

async function askAI(type) {
  openAIDrawer();
  const code = document.getElementById('editor').value.trim();
  if (!code && type !== 'concept') {
    addAIMsg('assistant','✏️ প্রথমে editor-এ কিছু কোড লিখুন, তারপর AI বিশ্লেষণ করতে পারবে।');
    return;
  }
  const label = {explain:'💡 Explain',fix:'🔧 Fix errors',hint:'🎯 Hint',optimize:'⚡ Optimize',concept:'📖 Teach'}[type]||type;
  addAIMsg('user', label);
  const prompt = PROMPTS[type]?.(code);
  await callAI(prompt, code);
}

async function sendAI() {
  const inp = document.getElementById('ai-input');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  addAIMsg('user', msg);

  // Try offline first
  const offline = findOfflineAnswer(msg);
  if (offline) { addAIMsg('assistant', offline); return; }

  const code = document.getElementById('editor').value;
  const ctx = code ? `\n\nEditor code:\n\`\`\`js\n${code.slice(0,600)}\n\`\`\`` : '';
  await callAI(`You are a helpful JavaScript tutor. Answer concisely (max 200 words, use **bold** for terms). ${ctx}\n\nStudent: ${msg}`, code);
}

function aiKeydown(e) {
  if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); sendAI(); }
}

async function callAI(prompt, code='') {
  const msgs = document.getElementById('ai-msgs');
  const typing = document.createElement('div');
  typing.className='ai-msg assistant ai-typing';
  typing.innerHTML='<span></span><span></span><span></span>';
  msgs.appendChild(typing); msgs.scrollTop=msgs.scrollHeight;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        messages:[{role:'user',content:prompt}]
      })
    });
    if (!res.ok) throw new Error('API '+res.status);
    const data = await res.json();
    typing.remove();
    addAIMsg('assistant', data.content?.[0]?.text || 'Response empty.');
  } catch(e) {
    typing.remove();
    // Smart offline fallback
    const fallback = generateOfflineFallback(prompt, code);
    addAIMsg('assistant', fallback);
  }
}

function generateOfflineFallback(prompt, code) {
  const p = prompt.toLowerCase();
  if (p.includes('explain')) {
    if (!code.trim()) return '✏️ Editor-এ কোড লিখুন তারপর Explain করব।';
    const lines = code.trim().split('\n').length;
    const hasAsync = /async|await|promise/i.test(code);
    const hasClass = /class\s+\w+/.test(code);
    const hasFn = /function|=>/.test(code);
    const hasArr = /\.map\(|\.filter\(|\.reduce\(/.test(code);
    let out = `**কোড বিশ্লেষণ** (${lines} lines):\n\n`;
    if (hasAsync) out += '• **Async/Await** ব্যবহার হয়েছে — asynchronous operation handle করছে\n';
    if (hasClass) out += '• **Class** define করা হয়েছে — OOP pattern\n';
    if (hasFn)   out += '• **Function** রয়েছে — reusable logic\n';
    if (hasArr)  out += '• **Array method** (map/filter/reduce) — data transform\n';
    out += '\n💡 AI connection-এ সমস্যা। Network ঠিক থাকলে আরও বিস্তারিত পাবেন।';
    return out;
  }
  if (p.includes('fix')) {
    const errors = [];
    if (/==[^=]/.test(code)) errors.push('`==` এর বদলে `===` ব্যবহার করুন');
    if (/var\s/.test(code))  errors.push('`var` এর বদলে `let`/`const` ব্যবহার করুন');
    if (/\.length\s*-\s*1/.test(code)) errors.push('Array `.at(-1)` দিয়ে last element নিন');
    if (!errors.length) return '✓ কোডে স্পষ্ট কোনো সমস্যা নেই! Run করে দেখুন।';
    return '**সম্ভাব্য উন্নতি:**\n' + errors.map(e=>'• '+e).join('\n');
  }
  if (p.includes('hint')) {
    return '💡 **Hint:** কোডটি ছোট ছোট function-এ ভাগ করুন। প্রতিটি function একটাই কাজ করুক (Single Responsibility)।';
  }
  if (p.includes('optimize')) {
    return '⚡ **Optimize করুন:**\n• Arrow functions ব্যবহার করুন\n• Array method chain করুন\n• `const` use করুন যেখানে possible\n• Template literals দিয়ে string concatenation করুন';
  }
  return '📖 **JS Tip:** `console.log()` দিয়ে debug করুন। Errors ভালোভাবে পড়ুন — line number দেয়।\n\n⚠️ AI server-এ পৌঁছানো যাচ্ছে না। Network চেক করুন।';
}

function addAIMsg(role, text) {
  const msgs = document.getElementById('ai-msgs');
  const d = document.createElement('div');
  d.className = `ai-msg ${role}`;
  let html = escH(text)
    .replace(/```[\w]*\n?([\s\S]*?)```/g, (_,c)=>`<pre>${c.trim()}</pre>`)
    .replace(/`([^`\n]+)`/g, (_,c)=>`<code>${c}</code>`)
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\n/g,'<br>');
  d.innerHTML = html;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

/* ═══════════════════════════════════════════════════════════════
   INLINE AUTOCOMPLETE ENGINE
═══════════════════════════════════════════════════════════════ */
const AC_ITEMS = [
  // Keywords
  {label:'const',kind:'kw',detail:'constant variable'},{label:'let',kind:'kw',detail:'block variable'},
  {label:'var',kind:'kw',detail:'function variable'},{label:'function',kind:'kw',detail:'declare function'},
  {label:'return',kind:'kw',detail:'return value'},{label:'if',kind:'kw',detail:'conditional',insert:'if () {\n  \n}'},
  {label:'else',kind:'kw',detail:'else branch'},{label:'for',kind:'kw',detail:'for loop',insert:'for (let i = 0; i < ; i++) {\n  \n}'},
  {label:'while',kind:'kw',detail:'while loop',insert:'while () {\n  \n}'},
  {label:'class',kind:'kw',detail:'ES6 class',insert:'class  {\n  constructor() {\n    \n  }\n}'},
  {label:'extends',kind:'kw',detail:'inheritance'},{label:'super',kind:'kw',detail:'parent class'},
  {label:'import',kind:'kw',detail:'import module'},{label:'export',kind:'kw',detail:'export module'},
  {label:'async',kind:'kw',detail:'async function'},{label:'await',kind:'kw',detail:'await promise'},
  {label:'try',kind:'kw',detail:'try block',insert:'try {\n  \n} catch (err) {\n  console.error(err);\n}'},
  {label:'throw',kind:'kw',detail:'throw error'},{label:'new',kind:'kw',detail:'create instance'},
  {label:'typeof',kind:'kw',detail:'get type'},{label:'instanceof',kind:'kw',detail:'check instance'},
  {label:'null',kind:'kw',detail:'null value'},{label:'undefined',kind:'kw',detail:'undefined'},
  {label:'true',kind:'kw',detail:'boolean'},{label:'false',kind:'kw',detail:'boolean'},
  // Built-ins / functions
  {label:'console.log',kind:'fn',detail:'log to console',insert:'console.log()'},
  {label:'console.error',kind:'fn',detail:'log error',insert:'console.error()'},
  {label:'console.warn',kind:'fn',detail:'log warning',insert:'console.warn()'},
  {label:'console.table',kind:'fn',detail:'log as table',insert:'console.table()'},
  {label:'setTimeout',kind:'fn',detail:'delay execution',insert:'setTimeout(() => {\n  \n}, 1000)'},
  {label:'setInterval',kind:'fn',detail:'repeat execution',insert:'setInterval(() => {\n  \n}, 1000)'},
  {label:'clearTimeout',kind:'fn',detail:'cancel timeout'},
  {label:'parseInt',kind:'fn',detail:'string → int',insert:'parseInt(, 10)'},
  {label:'parseFloat',kind:'fn',detail:'string → float'},
  {label:'JSON.stringify',kind:'fn',detail:'object → string',insert:'JSON.stringify(, null, 2)'},
  {label:'JSON.parse',kind:'fn',detail:'string → object',insert:'JSON.parse()'},
  {label:'Math.random',kind:'fn',detail:'0 to 1',insert:'Math.random()'},
  {label:'Math.floor',kind:'fn',detail:'round down',insert:'Math.floor()'},
  {label:'Math.ceil',kind:'fn',detail:'round up',insert:'Math.ceil()'},
  {label:'Math.round',kind:'fn',detail:'round',insert:'Math.round()'},
  {label:'Math.max',kind:'fn',detail:'maximum',insert:'Math.max()'},
  {label:'Math.min',kind:'fn',detail:'minimum',insert:'Math.min()'},
  {label:'Math.abs',kind:'fn',detail:'absolute value',insert:'Math.abs()'},
  {label:'Object.keys',kind:'fn',detail:'get keys',insert:'Object.keys()'},
  {label:'Object.values',kind:'fn',detail:'get values',insert:'Object.values()'},
  {label:'Object.entries',kind:'fn',detail:'get entries',insert:'Object.entries()'},
  {label:'Object.assign',kind:'fn',detail:'merge objects',insert:'Object.assign({}, )'},
  {label:'Array.from',kind:'fn',detail:'create array',insert:'Array.from()'},
  {label:'Array.isArray',kind:'fn',detail:'check array',insert:'Array.isArray()'},
  {label:'Promise.all',kind:'fn',detail:'parallel promises',insert:'Promise.all([])'},
  {label:'Promise.race',kind:'fn',detail:'first promise',insert:'Promise.race([])'},
  {label:'fetch',kind:'fn',detail:'HTTP request',insert:'fetch(url)\n  .then(r => r.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err))'},
  // Array methods (snippets)
  {label:'.map()',kind:'sn',detail:'transform array',insert:'.map((item) => {\n  return item;\n})'},
  {label:'.filter()',kind:'sn',detail:'filter array',insert:'.filter((item) => {\n  return true;\n})'},
  {label:'.reduce()',kind:'sn',detail:'accumulate',insert:'.reduce((acc, item) => {\n  return acc;\n}, 0)'},
  {label:'.forEach()',kind:'sn',detail:'iterate',insert:'.forEach((item, index) => {\n  \n})'},
  {label:'.find()',kind:'sn',detail:'find first match',insert:'.find((item) => item === )'},
  {label:'.findIndex()',kind:'sn',detail:'find index',insert:'.findIndex((item) => item === )'},
  {label:'.some()',kind:'sn',detail:'any match',insert:'.some((item) => )'},
  {label:'.every()',kind:'sn',detail:'all match',insert:'.every((item) => )'},
  {label:'.includes()',kind:'sn',detail:'contains',insert:'.includes()'},
  {label:'.indexOf()',kind:'sn',detail:'find index',insert:'.indexOf()'},
  {label:'.join()',kind:'sn',detail:'array to string',insert:".join(', ')"},
  {label:'.split()',kind:'sn',detail:'string to array',insert:".split('')"},
  {label:'.slice()',kind:'sn',detail:'extract portion',insert:'.slice(0, )'},
  {label:'.splice()',kind:'sn',detail:'modify array',insert:'.splice(0, 1)'},
  {label:'.sort()',kind:'sn',detail:'sort array',insert:'.sort((a, b) => a - b)'},
  {label:'.flat()',kind:'sn',detail:'flatten array',insert:'.flat()'},
  {label:'.flatMap()',kind:'sn',detail:'map+flat',insert:'.flatMap((item) => )'},
  {label:'.push()',kind:'sn',detail:'add to end'},{label:'.pop()',kind:'sn',detail:'remove last'},
  {label:'.shift()',kind:'sn',detail:'remove first'},{label:'.unshift()',kind:'sn',detail:'add to start'},
  // String methods
  {label:'.toUpperCase()',kind:'sn',detail:'uppercase'},{label:'.toLowerCase()',kind:'sn',detail:'lowercase'},
  {label:'.trim()',kind:'sn',detail:'remove spaces'},{label:'.replace()',kind:'sn',detail:'replace',insert:".replace('', '')"},
  {label:'.includes()',kind:'sn',detail:'contains check'},{label:'.startsWith()',kind:'sn',detail:'starts with'},
  {label:'.endsWith()',kind:'sn',detail:'ends with'},{label:'.padStart()',kind:'sn',detail:'pad start'},
  {label:'.substring()',kind:'sn',detail:'extract',insert:'.substring(0, )'},
  {label:'.charAt()',kind:'sn',detail:'char at index'},{label:'.charCodeAt()',kind:'sn',detail:'char code'},
];

let acState = { visible:false, items:[], selected:0, token:'' };

function getWordBefore(textarea) {
  const val = textarea.value;
  const pos = textarea.selectionStart;
  // Get the word/token being typed
  let start = pos;
  while (start > 0 && /[\w.$]/.test(val[start-1])) start--;
  return { word: val.slice(start, pos), start, pos };
}

function showAutocomplete(textarea) {
  const { word } = getWordBefore(textarea);
  if (word.length < 1) { hideAutocomplete(); return; }

  const lw = word.toLowerCase();
  const matches = AC_ITEMS.filter(it =>
    it.label.toLowerCase().startsWith(lw) ||
    it.label.toLowerCase().includes(lw)
  ).slice(0, 8);

  if (!matches.length) { hideAutocomplete(); return; }

  acState.items = matches;
  acState.selected = 0;
  acState.token = word;
  acState.visible = true;
  renderAC(textarea);
}

function renderAC(textarea) {
  const box = document.getElementById('ac-box');
  // Position below cursor
  const rect = textarea.getBoundingClientRect();
  const lineH = parseFloat(getComputedStyle(textarea).lineHeight) || 20;
  const val   = textarea.value.slice(0, textarea.selectionStart);
  const lines  = val.split('\n');
  const row    = lines.length;
  const col    = lines[lines.length-1].length;
  const top  = rect.top + (row) * lineH + 2;
  const left = rect.left + 46 + Math.min(col * 7.8, rect.width - 250);

  box.style.top    = Math.min(top, window.innerHeight - 220) + 'px';
  box.style.left   = Math.min(left, window.innerWidth - 330) + 'px';
  box.style.display= 'block';

  const kindClass = {kw:'ac-kw',fn:'ac-fn',sn:'ac-sn',pr:'ac-pr'};
  box.innerHTML = acState.items.map((it,i)=>`
    <div class="ac-item ${i===acState.selected?'selected':''}" onmousedown="applyAC(${i})">
      <span class="ac-kind ${kindClass[it.kind]||'ac-kw'}">${it.kind}</span>
      <span class="ac-label">${escH(it.label)}</span>
      <span class="ac-detail">${escH(it.detail||'')}</span>
    </div>`).join('');
}

function hideAutocomplete() {
  acState.visible = false;
  document.getElementById('ac-box').style.display = 'none';
}

function applyAC(idx) {
  const item = acState.items[idx ?? acState.selected];
  if (!item) return;
  const ed = document.getElementById('editor');
  const { word, start, pos } = getWordBefore(ed);
  const insert = item.insert || item.label;
  // Remove the typed word and insert completion
  const before = ed.value.slice(0, start);
  const after  = ed.value.slice(pos);
  const newVal = before + insert + after;
  ed.value = newVal;
  // Place cursor smartly (between parens if present)
  const pi = insert.indexOf('()');
  const cursorOff = pi >= 0 ? start + pi + 1 : start + insert.length;
  ed.selectionStart = ed.selectionEnd = cursorOff;
  ed.focus();
  updateLineNums();
  hideAutocomplete();
}

function setupAutocomplete(ed) {
  ed.addEventListener('input', () => showAutocomplete(ed));
  ed.addEventListener('keydown', e => {
    if (!acState.visible) return;
    if (e.key==='ArrowDown') {
      e.preventDefault();
      acState.selected = (acState.selected+1) % acState.items.length;
      renderAC(ed);
    } else if (e.key==='ArrowUp') {
      e.preventDefault();
      acState.selected = (acState.selected-1+acState.items.length) % acState.items.length;
      renderAC(ed);
    } else if (e.key==='Tab' || e.key==='Enter') {
      if (acState.visible && acState.items.length) {
        e.preventDefault();
        applyAC(acState.selected);
        return;
      }
    } else if (e.key==='Escape') {
      hideAutocomplete();
    }
  }, true); // capture phase so it runs before the Tab handler
  ed.addEventListener('blur', () => setTimeout(hideAutocomplete, 150));
  ed.addEventListener('scroll', () => { if(acState.visible) renderAC(ed); });
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ
═══════════════════════════════════════════════════════════════ */
function openQuiz() {
  S.quizOrder = shuffleArr([...Array(QUIZZES.length).keys()]).slice(0,5);
  S.quizIdx = 0; S.quizAnswered = false;
  document.getElementById('quiz-overlay').style.display='flex';
  showQuestion();
}

function showQuestion() {
  const i = S.quizOrder[S.quizIdx];
  const Q = QUIZZES[i];
  document.getElementById('q-meta').textContent=`QUIZ · Q${S.quizIdx+1}/${S.quizOrder.length}`;
  document.getElementById('q-text').textContent=Q.q;
  document.getElementById('q-fb').textContent='';
  document.getElementById('q-next').style.display='none';
  S.quizAnswered=false;
  // Render options
  document.getElementById('q-opts').innerHTML=Q.opts.map((o,j)=>
    `<div class="q-opt" onclick="answerQuiz(${j})">${escH(o)}</div>`).join('');
  // Progress dots
  document.getElementById('q-prog').innerHTML=S.quizOrder.map((_,k)=>
    `<div class="quiz-dot ${k<S.quizIdx?'done':k===S.quizIdx?'current':''}"></div>`).join('');
}

function answerQuiz(chosen) {
  if (S.quizAnswered) return;
  S.quizAnswered=true;
  const Q=QUIZZES[S.quizOrder[S.quizIdx]];
  const opts=document.querySelectorAll('.q-opt');
  opts.forEach((o,i)=>{
    if(i===Q.ans) o.classList.add('correct');
    else if(i===chosen) o.classList.add('wrong');
  });
  const correct=chosen===Q.ans;
  document.getElementById('q-fb').textContent=(correct?'✓ Correct! ':'✗ Wrong. ')+Q.exp;
  document.getElementById('q-next').style.display='';
  if(correct){ gainXP(20); toast('+20 XP — Correct!','ok','🧠'); }
}

function quizNext() {
  S.quizIdx++;
  if(S.quizIdx>=S.quizOrder.length) {
    document.getElementById('quiz-overlay').style.display='none';
    showAchievement('🧠','Quiz Complete!',`+${S.quizOrder.length*20} XP possible — great job!`);
    return;
  }
  showQuestion();
}

function closeQuiz() { document.getElementById('quiz-overlay').style.display='none'; }

/* ═══════════════════════════════════════════════════════════════
   LEADERBOARD
═══════════════════════════════════════════════════════════════ */
const FAKE_LB=[
  {n:"Sakib Al Hasan",xp:3200},{n:"Nusrat Jahan",xp:2850},{n:"Arif Rahman",xp:2400},
  {n:"Tahmina Akter",xp:1950},{n:"Mehedi Hassan",xp:1700},{n:"Sumaiya Khanam",xp:1400},
  {n:"Rakibul Islam",xp:1100},{n:"Fatema Tuz",xp:900},{n:"Jubayer Ahmed",xp:650},
];

function openLeaderboard() {
  const lb=[...FAKE_LB, {n:"You ⭐",xp:S.xp}].sort((a,b)=>b.xp-a.xp);
  const medals=['gold','silver','bronze'];
  document.getElementById('lb-rows').innerHTML=lb.map((r,i)=>`
    <div class="lb-row ${r.n==='You ⭐'?'you':''}">
      <div class="lb-rank ${medals[i]||''}">${i+1}</div>
      <div class="lb-name">${r.n}</div>
      <div class="lb-xp">${r.xp} XP</div>
    </div>`).join('');
  document.getElementById('lb-overlay').style.display='flex';
}

function closeLeaderboard() { document.getElementById('lb-overlay').style.display='none'; }

/* ═══════════════════════════════════════════════════════════════
   THEME & FONT SIZE
═══════════════════════════════════════════════════════════════ */
function toggleTheme() {
  S.theme = S.theme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme', S.theme);
  document.getElementById('theme-btn').textContent = S.theme==='dark'?'🌙':'☀️';
}

function toggleFont() {
  const p=document.getElementById('font-popup');
  p.classList.toggle('open');
}

function setFontSize(v) {
  document.documentElement.style.setProperty('--font-size',v+'px');
  document.getElementById('font-val').textContent=v+'px';
}

// Close font popup on outside click
document.addEventListener('click', e=>{
  if(!e.target.closest('#font-popup')&&!e.target.closest('.icon-btn[onclick*="Font"]')
     &&!e.target.textContent.includes('Aa'))
    document.getElementById('font-popup').classList.remove('open');
});

/* ═══════════════════════════════════════════════════════════════
   RESIZABLE SPLIT VIEW
═══════════════════════════════════════════════════════════════ */
function setupResize() {
  const handle = document.getElementById('resize-handle');
  const split   = document.getElementById('editor-split');
  const edPane  = document.getElementById('editor-pane');
  const rtPanel = document.getElementById('right-panel');
  let dragging=false, startX=0, startW=0;

  handle.addEventListener('mousedown', e=>{
    dragging=true; startX=e.clientX; startW=rtPanel.offsetWidth;
    handle.classList.add('dragging');
    document.body.style.cursor='col-resize';
    document.body.style.userSelect='none';
  });
  document.addEventListener('mousemove', e=>{
    if(!dragging) return;
    const delta = startX - e.clientX;
    const newW = Math.max(200, Math.min(startW+delta, split.offsetWidth-300));
    rtPanel.style.width = newW+'px';
    rtPanel.style.flex = 'none';
  });
  document.addEventListener('mouseup', ()=>{
    if(dragging){ dragging=false; handle.classList.remove('dragging'); document.body.style.cursor=''; document.body.style.userSelect=''; }
  });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE SIDEBAR TOGGLE
═══════════════════════════════════════════════════════════════ */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('mob-open');
}

/* ═══════════════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════════════ */
function toast(msg, type='inf', icon='•') {
  const wrap=document.getElementById('toast-wrap');
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span>${icon}</span><span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(()=>el.remove(),3200);
}

/* ═══════════════════════════════════════════════════════════════
   ACHIEVEMENT
═══════════════════════════════════════════════════════════════ */
function showAchievement(icon, title, sub) {
  const el=document.getElementById('ach-popup');
  document.getElementById('ach-icon').textContent=icon;
  document.getElementById('ach-t').textContent=title;
  document.getElementById('ach-s').textContent=sub;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),4500);
}

/* ═══════════════════════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════════════════════ */
function confetti() {
  const cv=document.getElementById('confetti');
  const ctx=cv.getContext('2d');
  cv.width=innerWidth; cv.height=innerHeight;
  const ps=Array.from({length:90},()=>({
    x:Math.random()*cv.width, y:-10,
    vx:(Math.random()-.5)*4, vy:Math.random()*3+2,
    col:['#00e5ff','#7c3aed','#f59e0b','#22c55e','#ec4899'][Math.floor(Math.random()*5)],
    sz:Math.random()*8+4, rot:Math.random()*360, rv:(Math.random()-.5)*5
  }));
  let f=0;
  (function loop(){
    ctx.clearRect(0,0,cv.width,cv.height);
    ps.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=.05; p.rot+=p.rv;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.col; ctx.fillRect(-p.sz/2,-p.sz/2,p.sz,p.sz); ctx.restore(); });
    if(++f<130) requestAnimationFrame(loop); else ctx.clearRect(0,0,cv.width,cv.height);
  })();
}

/* ═══════════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════════ */
function shuffleArr(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }

/* ═══════════════════════════════════════════════════════════════
   MOBILE DETECTION
═══════════════════════════════════════════════════════════════ */
function checkMobile() {
  const isMob = window.innerWidth<=768;
  document.querySelector('.icon-btn[onclick="toggleSidebar()"]').style.display=isMob?'flex':'none';
}
window.addEventListener('resize', checkMobile);

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
function init() {
  setupEditor();
  setupResize();
  renderLessonList();
  loadLesson(0);
  renderSnippets();
  renderRef();
  checkMobile();
  // Switch panel listeners on p-tab elements set inline via onclick
  switchPanel('output');
}
init();