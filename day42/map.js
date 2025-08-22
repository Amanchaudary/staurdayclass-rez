const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// question1 >>company name
let companyname=companies.map((company)=>{return company.name})
console.log(companyname);

// question2==>companyname,catagory
const companynameandCatogory=companies.map((company)=>{
    // return (company.name+" "+company.category)
    // or bestway
    return{
        name:company.name,
        category:company.category
    }

})
console.log(companynameandCatogory.map((company)=>(company.category)));

// question3==> name,totalyears
const companyNameandtotalAge=companies.map((company)=>{
return{
    name:company.name,
    totayears:company.end-company.start
}
})
console.log(companyNameandtotalAge);