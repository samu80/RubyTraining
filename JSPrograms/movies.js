
movies = [{name: "xxx", year: 2000, rating: 5},
    {name: "yyy", year: 1999, rating: 8},
    {name: "zzz", year: 2001, rating: 9}]

console.log(movies.filter(i => i.rating > 7).sort((a, b) => a.year - b.year).map(j=> j.name));