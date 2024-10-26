const data = [
    {
        title: 'sample',
        image: "https://cdn-images.farfetch-contents.com/20/25/29/03/20252903_50300475_1000.jpg",
        desc: "Custom Made Blanks Homeroom Tshirt - Coastal Reign",
    },
    {
        title: 'sample',
        image: "https://cdn-images.farfetch-contents.com/20/25/29/03/20252903_50300475_1000.jpg",
        desc: "Custom Made Blanks Homeroom Tshirt - Coastal Reign",
    },
    {
        title: 'sample',
        image: "https://cdn-images.farfetch-contents.com/20/25/29/03/20252903_50300475_1000.jpg",
        desc: "Custom Made Blanks Homeroom Tshirt - Coastal Reign",
    },
    {
        title: 'sample',
        image: "https://cdn-images.farfetch-contents.com/20/25/29/03/20252903_50300475_1000.jpg",
        desc: "Custom Made Blanks Homeroom Tshirt - Coastal Reign",
    },
    {
        title: 'sample',
        image: "https://cdn-images.farfetch-contents.com/20/25/29/03/20252903_50300475_1000.jpg",
        desc: "Custom Made Blanks Homeroom Tshirt - Coastal Reign",
    },
]

const row = document.getElementById('product-container');

data.map(item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-3', 'col-sm-12');
    col.innerHTML = `
    <div class="card">
                    <img src=${item.image} class="card-image-top" alt"...">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.desc}</p>
                      <a href="#" class="btn btn-primary">GO somewhere</a>
                    </div>
    </div>
    `
    row.appendChild(col)
})