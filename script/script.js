const categoryList = [
    {
        id: 1,
        listName: "Grocery",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"
    },
    {
        id: 2,
        listName: "Mobiles",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"
    },
    {
        id: 3,
        listName: "Fashion",
        img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100"
    },
    {
        id: 4,
        listName: "Electronics",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"
    },
    {
        id: 5,
        listName: "Home & Furniture",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100"
    },
    {
        id: 6,
        listName: "Appliances",
        img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100"
    }, {
        id: 7,
        listName: "Fligth Bookings",
        img: "	https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"
    },
    {
        id: 8,
        listName: " Beauty, Toy & More",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100"
    }, {
        id: 9,
        listName: "Two Wheelers",
        img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100"
    }
]

const electronicsItems = [
    {
        id :1,
        name : 'Printers',
        price  : "From 2999",
        img : "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/q/x/f/pixma-e3370-canon-original-imah2f2ygbnqzkrz.jpeg?q=80"
    },
    {
        id :2,
        name : 'BoAt Smartwatch',
        price  : "From 999",
        img : "https://rukminim1.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80"
    },
    {
        id :3,
        name : 'Sandisk Extreme Portable',
        price  : "From 5999",
        img : 'https://rukminim1.flixcart.com/image/210/210/kpsnzww0/external-hard-drive/ssd/t/9/7/portable-ssd-sdssde30-1t00-g25-sandisk-original-imag3xx564jxpgrb.jpeg?q=80'
    },
    {
        id :4,
        name : 'Kid Camera',
        price  : "From 999",
        img : "https://rukminim1.flixcart.com/image/210/210/krwec280/role-play-toy/z/f/w/kids-camera-mini-rechargeable-and-shockproof-camera-creative-diy-original-imag5h7gdjzrvzdr.jpeg?q=80"
    },
    {
        id :5,
        name : 'Smart Watches',
        price  : "From 1999",
        img : "https://rukminim1.flixcart.com/image/210/210/xif0q/smartwatch/x/l/3/-original-imahy7fh7nbgud85.jpeg?q=80"
    },
    {
        id :6,
        price  : "From 9999",
        name : 'Sony TV',
        img : "https://rukminim1.flixcart.com/image/210/210/xif0q/monitor/z/l/6/-original-imagze3c9aggznc9.jpeg?q=80"
    },
    {
        id :7,
        name : 'Color Printer',
        price  : "From 3999",
        img : "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/e/n/x/-original-imagnuwemgbmc6ay.jpeg?q=80"
    },
    {
        id :8,
        name : 'Printers',
        price  : "From 999",
        img : "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/q/x/f/pixma-e3370-canon-original-imah2f2ygbnqzkrz.jpeg?q=80"
    },
]

categoryList.map((item) => {
    const category = document.getElementById('category-List');

    const categoryItem = document.createElement('div');

    categoryItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <p >${item.listName}</p>`;

    category.appendChild(categoryItem);
});
electronicsItems.map((item) => {
    const electronicsItems = document.getElementById('electronics-items');
    
    const divElement = document.createElement('div');
    divElement.classList.add('ele-items')
    
    divElement.innerHTML = `<div classname="elect-items" ><img src="${item.img}"  width='170' height="180"  alt="${item.name}" /> </div>
    <div >${item.name}</div>
    <div>${item.price}</div>`;
 
    electronicsItems.appendChild(divElement);
 });
 
