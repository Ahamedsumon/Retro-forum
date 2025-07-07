// LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

// AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts




// Post Search by query

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName


// Example

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding



const post = fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
.then(res => res.json())
.then(data => {
    const valuesArray = Object.values(data);
    console.log(valuesArray)
    valuesArray.forEach(element => {
        console.log(element)
    });
})


