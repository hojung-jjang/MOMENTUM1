const images = ["0.jpg","1.jpg", "2.webp","3.jpeg", "4.jpeg",
"5.jpg", "6.jpg","7.jpeg", "8.jpg", "9.jpg", "10.jpg", "11.jpeg", 
"12.jpg", "13.jpg", "14.jpg", "15.png", "16.jpg", "17.jpg","18.jpg", "19.jpg", "20.jpg",
"21.jpg","22.jpg", "23.jpg", "24.jpg","25.jpg", "26.jpg", "27.jpg"
];


const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.classList = "background_img";

document.body.appendChild(bgImage);

