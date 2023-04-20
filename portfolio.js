
// -----------Animation Card----------------

const cardAll = document.querySelectorAll('.card');

cardAll.forEach(value => {
    value.addEventListener('mousemove', event => {
        const rect = value.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = (event.clientX - centerX) / rect.width;
        const offsetY = (event.clientY - centerY) / rect.height;
        const rotationY = offsetX * 30;
        const rotationX = offsetY * -30;
    
        value.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
    value.addEventListener('mouseleave', () => {
        value.style.transform = 'rotateX(0) rotateY(0)';
    });
})

// -----------Animation Card----------------
const body = document.body;
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-content');
const modalTitle = modalContainer.querySelector('.modal-title');
const modalText = modalContainer.querySelector('.modal-text');
const modalImagesMain = modalContainer.querySelector('.modal-images_main');
const modalImagesCollum = modalContainer.querySelector('.modal-images_collum')
const modalImagesContainer = modalContainer.querySelectorAll('.modal-images-container');
const modalLeftAll = modalContainer.querySelectorAll('.modal-left');
const modalRightAll = modalContainer.querySelectorAll('.modal-right');
const modalClose = modalContainer.querySelector('.modal-close');




const modalData = [
    {
        title: "Title 1", 
        description: "Voluptate proident commodo deserunt consectetur. Esse nostrud eu sint eu exercitation aliquip est dolore dolor est. Eiusmod laboris officia ea occaecat. Velit ipsum eiusmod nisi reprehenderit eiusmod ad ex et ex ut esse officia sit ipsum. Aliqua ut reprehenderit veniam laborum in qui voluptate. Aliquip pariatur qui non mollit aliqua.",
        images: [
            "https://fakeimg.pl/300x300/?text=1",
            "https://fakeimg.pl/300x300/?text=2",
            "https://fakeimg.pl/300x300/?text=3",
            "https://fakeimg.pl/300x300/?text=4",
        ]
    },
    {
        title: "Title 2",
        description: "Voluptate proident commodo deserunt consectetur. Esse nostrud eu sint eu exercitation aliquip est dolore dolor est. Eiusmod laboris officia ea occaecat. Velit ipsum eiusmod nisi reprehenderit eiusmod ad ex et ex ut esse officia sit ipsum. Aliqua ut reprehenderit veniam laborum in qui voluptate. Aliquip pariatur qui non mollit aliqua.",
        images: [
            "https://fakeimg.pl/300x300/?text=1",
            "https://fakeimg.pl/300x300/?text=2",
            "https://fakeimg.pl/300x300/?text=3",
        ]
    },
    {
        title: "Title 3",
        description: "Voluptate proident commodo deserunt consectetur. Esse nostrud eu sint eu exercitation aliquip est dolore dolor est. Eiusmod laboris officia ea occaecat. Velit ipsum eiusmod nisi reprehenderit eiusmod ad ex et ex ut esse officia sit ipsum. Aliqua ut reprehenderit veniam laborum in qui voluptate. Aliquip pariatur qui non mollit aliqua.",
        images: [
            "https://fakeimg.pl/300x300/?text=1",
        ]
    },
    {
        title: "Title 4",
        description: "Voluptate proident commodo deserunt consectetur. Esse nostrud eu sint eu exercitation aliquip est dolore dolor est. Eiusmod laboris officia ea occaecat. Velit ipsum eiusmod nisi reprehenderit eiusmod ad ex et ex ut esse officia sit ipsum. Aliqua ut reprehenderit veniam laborum in qui voluptate. Aliquip pariatur qui non mollit aliqua.",
        images: [
            "https://fakeimg.pl/300x300/?text=1",
            "https://fakeimg.pl/300x300/?text=2",
            "https://fakeimg.pl/300x300/?text=3",
            "https://fakeimg.pl/300x300/?text=4",
        ]
    },
    {
        title: "Title 5",
        description: "Voluptate proident commodo deserunt consectetur. Esse nostrud eu sint eu exercitation aliquip est dolore dolor est. Eiusmod laboris officia ea occaecat. Velit ipsum eiusmod nisi reprehenderit eiusmod ad ex et ex ut esse officia sit ipsum. Aliqua ut reprehenderit veniam laborum in qui voluptate. Aliquip pariatur qui non mollit aliqua.",
        images: [
            "https://fakeimg.pl/300x300/?text=1",
            "https://fakeimg.pl/300x300/?text=2",
        ]
    },
    {
        title: "Title 6",
        description: "Voluptate proident commodo deserunt consectetur. Esse nostrud eu sint eu exercitation aliquip est dolore dolor est. Eiusmod laboris officia ea occaecat. Velit ipsum eiusmod nisi reprehenderit eiusmod ad ex et ex ut esse officia sit ipsum. Aliqua ut reprehenderit veniam laborum in qui voluptate. Aliquip pariatur qui non mollit aliqua.",
        images: [
            "https://fakeimg.pl/300x300/?text=1",
            "https://fakeimg.pl/300x300/?text=2",
            "https://fakeimg.pl/300x300/?text=3",
            "https://fakeimg.pl/300x300/?text=4",
            "https://fakeimg.pl/300x300/?text=5",
        ]
    },
];
const defaultModalData = JSON.parse(JSON.stringify(modalData))
let counter = 0;

cardAll.forEach((value, index) => {
    const title = value.querySelector('h2').innerHTML;
    const readMore = value.querySelector('.btn')
    readMore.addEventListener('click', () => {
        modal.classList.add('active');
        body.style.overflow = 'hidden'
        getModalData(index)
    })
    modalData[index]['title'] = title;
})

modalClose.addEventListener('click', () => clearModal())

modalLeftAll.forEach((value) => {
    value.addEventListener('click', () => {
        modalData[counter].images = moveArr(modalData[counter].images, 'left');
        getImagesModal(modalData[counter].images)
    });
})

modalRightAll.forEach((value) => {
    value.addEventListener('click', () => {
        modalData[counter].images = moveArr(modalData[counter].images, 'right');
        getImagesModal(modalData[counter].images)
    });
})

function getModalData(index) {
    const { title, description } = modalData[index];
    counter = index
    modalTitle.innerHTML = title;
    modalText.innerHTML = description;
    getImagesModal(modalData[index].images);
}

const moveArr = (arr, type) => {
    let tempArr;
    switch (type) {
        case 'right':
            tempArr = arr.pop()
            return [ tempArr, ...arr ]
            break;
        case 'left':
            tempArr = arr.shift()
            return [ ...arr, tempArr ]
            break;
        case 'none':
            return arr;
            break;
        default:
            console.error('Invalid type');
            break;
    }
}

function getImagesModal(images) {
    const currentWidth = window.innerWidth
    if (currentWidth < 768 || images.length <= 1) {
        modalImagesMain.style.backgroundImage = `url('${images[0]}')`
        modalImagesCollum.style.display = "none";
        return;
    }
    let limit = currentWidth >= 1280
        ? 4
        : 3
    limit = images.length - 1 < limit
        ? images.length
        : limit
    modalImagesMain.style.backgroundImage = `url('${images[0]}')`
    for (let i = 1; i < limit; i++) {
        modalImagesContainer[i - 1].style.backgroundImage = `url('${images[i]}')
        `
        modalImagesContainer[i - 1].style.display = 'block';
    }
    for (let j = 2; j > limit - 2; j--) {
        modalImagesContainer[j].style.display = 'none';
    }
    return;
}

function clearModal() {
    modal.classList.remove('active');
    body.style.overflow = 'visible'
    setTimeout(() => { 
        modalImagesContainer.forEach((value) => value.style.display = 'block')
        modalImagesCollum.style.display = "flex";
    }, 500)

}


