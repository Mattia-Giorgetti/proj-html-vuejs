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
})