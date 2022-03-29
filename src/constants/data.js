
import images from './images';



const juice = [
    {
        title: 'Banana milk',
        price: '$20',
        tags: 'AU | 400ml',
    },
    {
        title: 'Manggo cream',
        price: '$30',
        tags: 'AU | 300ml',
    },
    {
        title: 'Berry Apple',
        price: '$15',
        tags: 'CA | 400ml',

    },
    {
        title: 'Lemon Ice',
        price: '$20',
        tags: 'IE | 200ml',
    },
]

const dessert = [
    {
        title: 'Manggo Pudding',
        price: '$10',
        tags: 'Pudding | Manggo | Cream',
    },
    {
        title: 'Banana Cake',
        price : '$5',
        tags: 'Sweet Cake | Banana',
    },
    {
        title: 'Klepon',
        price: '$10',
        tags: 'Banana leaves | Coconut'
    },
    {
        title: 'Es Campur',
        price: '$20',
        tags: 'Fruits | Sugar | Ice',
    },
    {
        title: 'Pandan Cake',
        price: '$12',
        tags: 'Pandan | Cake',
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: 'Valrose',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award01,
      title: 'Rising Star',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award05,
      title: 'AA Hospitality',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award03,
      title: 'Outstanding Chef',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
];

export default { juice, dessert, awards}