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

document.querySelector('.menu-btn').addEventListener('click', function () {
    this.classList.toggle('active');
});


const electronicsItems = [
    {
        id: 1,
        name: 'Printers',
        price: "2999",
        img: 'https://rukminim2.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80'
    },
    {
        id: 2,
        name: 'BoAt Smartwatch',
        price: "999",
        img: "https://rukminim1.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80"
    },
    {
        id: 3,
        name: 'Sandisk Extreme Portable',
        price: "5999",
        img: 'https://rukminim1.flixcart.com/image/210/210/kpsnzww0/external-hard-drive/ssd/t/9/7/portable-ssd-sdssde30-1t00-g25-sandisk-original-imag3xx564jxpgrb.jpeg?q=80'
    },
    {
        id: 4,
        name: 'Kid Camera',
        price: "999",
        img: "https://rukminim1.flixcart.com/image/210/210/krwec280/role-play-toy/z/f/w/kids-camera-mini-rechargeable-and-shockproof-camera-creative-diy-original-imag5h7gdjzrvzdr.jpeg?q=80"
    },
    {
        id: 5,
        name: 'Smart Watches',
        price: "1999",
        img: "https://rukminim1.flixcart.com/image/210/210/xif0q/smartwatch/x/l/3/-original-imahy7fh7nbgud85.jpeg?q=80"
    },
    {
        id: 6,
        price: "9999",
        name: 'Sony TV',
        img: 'https://rukminim2.flixcart.com/image/210/210/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80'
    },
    {
        id: 7,
        name: 'Color Printer',
        price: "3999",
        img: "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/e/n/x/-original-imagnuwemgbmc6ay.jpeg?q=80"
    },
    {
        id: 8,
        name: 'Printers',
        price: "999",
        img: "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/q/x/f/pixma-e3370-canon-original-imah2f2ygbnqzkrz.jpeg?q=80"
    },
]

const othersItems = [
    {
        id: 1,
        name: 'Coffe Powder',
        price: "Upto 80% off",
        img: "https://rukminim2.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=80"
    },
    {
        id: 2,
        name: 'Remote control Toys',
        price: "Upto 80% off",
        img: "https://rukminim2.flixcart.com/image/210/210/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=80"
    },
    {
        id: 3,
        name: 'Toys',
        price: "Upto 70% off",
        img: "https://rukminim2.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=80"
    },
    {
        id: 4,
        name: 'Gym tool',
        price: "upto 50% off",
        img: "https://rukminim2.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=80"
    },
    {
        id: 5,
        name: 'insruments',
        price: "From &#8377;  1999",
        img: "https://rukminim2.flixcart.com/image/210/210/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=80"
    },
    {
        id: 6,
        price: "Upto 60% off",
        name: 'Yoga Mat',
        img: 'https://rukminim2.flixcart.com/image/210/210/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=80'
    },
    {
        id: 7,
        name: 'Musical Toy',
        price: "From &#8377;  999",
        img: "https://rukminim2.flixcart.com/image/210/210/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=80"
    },
    {
        id: 8,
        name: 'Printers',
        price: "From &#8377;  999",
        img: "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/q/x/f/pixma-e3370-canon-original-imah2f2ygbnqzkrz.jpeg?q=80"
    },
]

const collections = [
    {
        title: "Men's Collections",
        items: [
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            }
        ]
    },
    {
        title: "End of Season BestSeller",
        items: [
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/sweater/g/z/c/xxl-stw-high-neck-101-olv-doomee-original-imagwwhc9a46vhzw.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/muffler/q/e/t/free-latest-stylish-winter-woolen-beanie-cap-scarf-and-original-imah77h8dj7tm8dz.jpeg?q=80",
                heading: "Winter Collection",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/combo-kit/k/t/l/ceo-man-perfume-white-oud-perfume-combo-citrus-woody-notes-long-original-imahy9dgwssurvef.jpeg?q=80",
                heading: "Perfume Collection",
                offer: "Min 50% Off"
            }
        ]
    },
    {
        title: "Make Your Home Stylish",
        items: [
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/office-study-chair/d/b/d/1-wrought-iron-64-ifa-diego-black-mb-iafa-109-original-imah6qnwfqsxg6br.jpeg?q=80",
                heading: "Office Study Chairs",
                offer: "Min 30% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/sofa-set/v/u/q/32-32-blue-brown-jute-2-1-1-32-18-32-18-18-32-lf-25-32-aqsa-18-original-imah2267rgyw5wbf.jpeg?q=80",
                heading: "Sofas",
                offer: "Min 40% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/bed/g/v/x/single-na-no-synthetic-no-portable-folding-bed-3x6-feet-bed-size-original-imags27jhvtjrkfc.jpeg?q=80",
                heading: "Beds",
                offer: "Min 50% Off"
            },
            {
                imgSrc: "https://rukminim2.flixcart.com/image/60/60/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80",
                heading: "Men's Collection",
                offer: "Min 50% Off"
            }
        ]
    }
];

categoryList.map((item) => {
    const category = document.getElementById('category-List');

    const categoryItem = document.createElement('div');
    // categoryItem.className.add('category-item')

    categoryItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <p >${item.listName}</p>`;

    category.appendChild(categoryItem);
});


electronicsItems.map((item) => {
    const electronicsItems = document.getElementById('electronics-items');
    // console.log(electronicsItems)

    const divElement = document.createElement('div');
    divElement.classList.add('ele-items');

    divElement.innerHTML = `
        <div class = 'ele-item-image'>
            <img src="${item.img}" width="150" height="180" alt="${item.name}" />
        </div>
        <div>${item.name}</div>
        <div>From &#8377; ${item.price}</div>
    `;

    electronicsItems.appendChild(divElement);
});


othersItems.map((item) => {
    const beautyitems = document.getElementsByClassName("beautyitems")[0];
    const newElement = document.createElement('div');
    newElement.classList.add('ele-items');

    newElement.innerHTML = `<div>
                               <img src="${item.img}" width='150' height="180" alt="${item.name}" />
                            </div>
                            <div>${item.name}</div>
                            <div>${item.price}</div>`;

    beautyitems.appendChild(newElement);
});


function handleButtonClick(direction) {
    const electronicsItems = document.getElementById('electronics-items');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (direction === 'next') {
        electronicsItems.style.transform = 'translateX(-50%)';

        nextButton.style.display = 'none';
        prevButton.style.display = 'block';
    } else if (direction === 'prev') {
        electronicsItems.style.transform = 'translateX(0%)';

        prevButton.style.display = 'none';
        nextButton.style.display = 'block';
    }
}

document.querySelector('.next').addEventListener('click', () => {

    handleButtonClick('next');
});

document.querySelector('.prev').addEventListener('click', () => {
    console.log('Prev button clicked');
    handleButtonClick('prev');
});


const containers = document.getElementById('container');
console.log(containers)
collections.map((collection) => {
    container.innerHTML += `
            <div class="maindiv">
                <h2 class="topheading">${collection.title}</h2>
                <div class="grid">
                    ${collection.items.map(item => `
                        <div class="item">
                            <div class="content">
                                <img src="${item.imgSrc}" alt="${item.heading}">
                                <div class="heading">
                                    <h4>${item.heading}</h4>
                                    <h3 class="green-color">${item.offer}</h3>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
});
;


const str = "JavaScript is fun and programming is fun"
str.split()