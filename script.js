const googleDatabase=[
    'cats.com',
    'soups.com',
    'catlovers.com',
    'catipie.com',
    'amaazing.com',
    'heyy.com',
    'catking.com'
];

const googleSearch=(searchInput, db)=>{
    const matches=db.filter(website=>{
        return website.includes(searchInput);
    })
    return matches.length > 3? matches.splice(0,3):matches;
}

// console.log(googleSearch('cat'));

module.exports= googleSearch;