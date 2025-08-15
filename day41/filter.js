const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter ma return ra condition huna parxa
let a = nums.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(a);

// q1 filter
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
let com = companies.filter((companies) => {
  if (companies.category=== "Retail") {
    return companies.name;
  }
});
console.log(com);


const filter1=companies.filter((company)=>(company.category==="Retail"))
const filter2=companies.filter((company)=>{(company.category==="Retail")})
const filter3=companies.filter((company)=>company.category==="Retail");
const filter4=companies.filter(company=>company.category==="Retail");
console.log(filter1);
console.log(filter2);
console.log(filter3);
console.log(filter4);
