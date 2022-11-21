import { reactive } from "vue";
export const store = reactive({
    navList: [{
        link: 'Home',
        url: '#',
    },
    {
        link: 'Pages',
        url: '#',
    },
    {
        link: 'Courses',
        url: '#',
    },
    {
        link: 'Features',
        url: '#',
    },
    {
        link: 'Blog',
        url: '#',
    },
    {
        link: 'Shop',
        url: '#',
    }],
    cartCounter: [],

    courses: [{
        price: 40,
        text: 'Learning to Write as a Professional Author',
        lessons: 20,
        students: 50,
        img: '/public/images/course-02-480x298.jpg'
    },
    {
        price: 0,
        text: 'Customer-centric Info-Tech stragies',
        lessons: 24,
        students: 769,
        img: '/public/images/stock-full-hd-03-480x298.jpg'
    },
    {
        price: 19,
        text: 'Open Programming Courses for Everyone: Python',
        lessons: 17,
        students: 62,
        img: '/public/images/stock-full-hd-04-480x298.jpg'
    },
],
})