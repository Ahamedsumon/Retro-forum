// LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

// AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts




// Post Search by query

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName


// Example

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding



const AllPosts = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    const posts = data.posts;
    displayData(posts)
}



const displayData = (posts) => {
    posts.forEach(post => {
    // const authorImage = document.getElementById('author-image');
    // authorImage.innerHTML = `
    //     <img
    //   src="/images/joinforum.png" />
    // `
    // const category = document.getElementById('category');
    // category.innerText = post.category;
    // const author = document.getElementById('author');
    // author.innerText = post.author.name;
    // const title = document.getElementById('title');
    // title.innerText = post.title;
    // const description = document.getElementById('description');
    // description.innerText = post.description;
    // const commentCount = document.getElementById('comment-count');
    // commentCount.innerText = post.comment_count;
    // const viewCount = document.getElementById('view-count');
    // viewCount.innerText = post.view_count;
    // const postedTime = document.getElementById('posted-time');
    // postedTime.innerText = post.posted_time;
    console.log(post)

    const cardContainer = document.getElementById('card-container');
    

    const cardText = document.createElement('div');

    cardText.innerHTML = `
    <div class="bg-[#797DFC1A] border border-[#797DFCFF] rounded-2xl p-5 flex gap-3">
            <div class="flex">
              <div id="author-image" class="h-20 w-20 bg-white rounded-lg">
                
              </div>
              <div id="isActiveDot"></div>
            </div>
            <div>
              <div class="flex gap-5 mb-1">
                <p id="category"># <span>${post.category}</span></p>
                <p>Author: <span id="author">${post.author.name}</span></p>
              </div>
              <h3 id="title" class="text-2xl font-semibold mb-5">${post.title}</h3>
              <p id="description" class=" max-w-lg text-sm text-[#12132D99] mb-5">${post.description}</p>
              <div class="flex justify-between border-t border-dashed border-gray-400 py-5">
              <div class="flex gap-3 items-center">
                <i class="fa-regular fa-message cursor-pointer"></i>
                <p id="comment-count">${post.comment_count}</p>
                <i class="fa-regular fa-eye cursor-pointer"></i>
                <p id="view-count">${post.view_count}</p>
                <i class="fa-regular fa-clock cursor-pointer"></i>
                <p><span id="posted-time">${post.posted_time}</span> min</p>
              </div>
              <div>
                <button id="envelop"><i class="fa-regular fa-envelope-open p-2 bg-[#10B981FF] text-white rounded-full "></i></button>
              </div>
              </div>
            </div>
          </div>
    `

        cardContainer.appendChild(cardText)

    isActiveCheck(post.isActive)

    const handleEnvelopeButton = document.getElementById('envelop');
handleEnvelopeButton.addEventListener("click", function(){
    const markAsRead = document.getElementById('mark-as-read');
    markAsRead.innerHTML = `
        <p class="max-w-64">${post.title}</p>
              <p><i class="fa-regular fa-eye cursor-pointer"></i><span>${post.view_count}</span></p>
    `
})



})

}


const isActiveCheck = (isActive) => {
    if(isActive === false){
        const isActiveDot = document.getElementById('isActiveDot');
        isActiveDot.classList = ` h-4 w-4 rounded-full bg-[#10B981FF]`
    }else{
       const isActiveDot = document.getElementById('isActiveDot');
        isActiveDot.classList = ` h-4 w-4 rounded-full bg-[#FF3434]`
         
    }
}




AllPosts()



