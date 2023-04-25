//  Jvascript variables
console.log("Variables of WE ARE GROWING");
var A="ABHIJEET"
console.log(A);

// trying to use let multiple times (numerical)
let a="10";
let bb="20";
console.log("a=10")
console.log("bb=20")
console.log("The multiplication of above variable is", a*bb);

// trying to use const multiple times (numerical)
const x=60;
const y=40;
console.log("addition of two constant variables is ",x+y);

console.log("JS STRING METHODS ARE AS FOLLOWS:-")
// There are total 23 methods of string

//.length
console.log("1: .length");
let zz="omkar";
console.log(zz.length);

//.toUppercase()
console.log("2: .toUppercase()");
let b="omkar";
console.log(b.toUpperCase());

//.toLowercase()
console.log("3: .toLowercase()");
let c="OMKAR";
console.log(c.toLowerCase());

//.slice()
console.log("4: .slice()");
let d="omkar";
console.log(d.slice(1,3));

//.replace()
console.log("5: .replace()");
let e="OMKAR aka bandya";
let f=e.replace("bandya", "dada");
console.log(f);

//.concat()
console.log("6: .concat()");
let g="omkar";
let h="jadhav";
console.log(g.concat(h));

//.trim()
console.log("7: .concat()");
let i="              omkar";
console.log(i.trim());

//.includes()
console.log("8: .includes()");
let j="omkar is a excellent student";
console.log(j.includes("is"));

//.startsWith()
console.log("9: .startsWith()");
let k="omkar is a excellent student";
console.log(k.startsWith("omkar"));

//.endsWith()
console.log("10: .endsWith()");
let l="omkar is a excellent student";
console.log(l.endsWith("student"));

//.search()
console.log("11: .search()");
let m="omkar is a excellent student";
console.log(m.search("student"));

//.match()
console.log("12: .match()");
let n="omkar is a excellent student and good student";
console.log(n.match(/student/g));

//.indexOf()
console.log("13: .indexOf()");
let o="omkar is a excellent student and good student";
console.log(o.indexOf("student"));

//.lastIndexOf()
console.log("14: .lastIndexOf()");
let p="omkar is a excellent student and good student";
console.log(p.lastIndexOf("student"));

// .charCodeAt()
console.log("15: .charCodeAt()");
let q="omkar is a excellent student and good student";
console.log(q.charCodeAt(0));

// .fromcharCode()
console.log("16: .fromCharCode()");
let xy=String.fromCharCode(65);
console.log(xy);

// .charAt()
console.log("17: .charAt()");
let r="javascript";
console.log(r)
console.log(r.charAt(9));

// .split()
console.log("18: .split()");
let s="javascript";
console.log(s.split("a"));

// .repeat()
console.log("19: .repeat()");
let t="javascript";
console.log(t)
console.log(t.repeat(5));

// .substr()
console.log("20: .substr()");
let u="javascript";
console.log(u)
console.log(u.substr(3,5));

// .substring()
console.log("21: .sunstring()");
let v="javascript";
console.log(v)
console.log(v.substring(1,4));

// .tostring()
console.log("22: .tostring()");
let w=50;
console.log(w)
console.log(w.toString()+50);

// .valueof()
console.log("23: .valueof()");
let xx="javascript";
console.log(xx)
console.log(xx.valueOf());


//concating
let firstname="omkar";
let age= 22;
console.log("My name is" + firstname + "& I am"+ age +"years old");

console.log("operators :-")

//addition
var dd=5;
var ee=dd+10;
console.log(ee);

//substraction
var dd=5;
var ee=dd-10;
console.log(ee);

//multiplication
var dd=5;
var ee=dd*10;
console.log(ee);

//division
var dd=5;
var ee=dd/10;
console.log(ee);

//remainder
var dd=5;
var ee=dd % 2;
console.log(ee);

//expontention
var dd=5;
var ee=dd ** 2;
console.log(ee);

//increment
var dd=5;
console.log(dd);
var ee=++dd;
console.log(ee);

//decriment
var dd=5;
console.log(dd);
var ee=--dd;
console.log(ee);