const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];
//  by using arrow function
socialObjs.forEach(link => {
    console.log(link.url);
});