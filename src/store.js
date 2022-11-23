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
        h4: '$40.00',
        p: 'Learning to Write as a Professional Author',
        span1: '20 Lessons',
        span2: '50 Students',
        img: '/images/course-02-480x298.jpg',
        color: true
    },
    {
        h4: '$0.00',
        p: 'Customer-centric Info-Tech stragies',
        span1: '24 Lessons',
        span2: '769 Students',
        img: '/images/stock-full-hd-03-480x298.jpg',
        color: true
    },
    {
        h4: '$19.00',
        p: 'Open Programming Courses for Everyone: Python',
        span1: '17 Lessons',
        span2: '62 Students',
        img: '/images/stock-full-hd-04-480x298.jpg',
        color: true
    },
    {
        h4: '$37.00',
        p: 'Personal Finance: Finalcial Security Thinking & Principles',
        span1: '2 Lessons',
        span2: '216 Students',
        img: '/images/course-featured-image-01-480x298.jpg',
        color: true
    },
    {
        h4: '$26.00',
        p: 'Academic Listening and Note-taking',
        span1: '14 Lessons',
        span2: '68 Students',
        img: '/images/stock-full-hd-06-480x298.jpg',
        color: true
    },
    {
        h4: '$0.00',
        p: 'Customer-centric Info-Tech stragies',
        span1: '24 Lessons',
        span2: '769 Students',
        img: '/images/stock-full-hd-03-480x298.jpg',
        color: true
    },
],
Address: {
    title: 'Address',
    text: [{
        content: '382 NE 191st St # 87394 Miami, FL 33179 - 3899',
        url: '#'
    },
    {
        content: '+1(305)547-9909(9am - 5pm EST, Monday - Friday)',
        url: '#'
    },
    {
        content: 'support@maxcoach.com',
        url: '#'
    }]
},
footerlinks: [
    {
        title: 'Explore',
        text: [{
            content: 'Start here',
            url: '#'
        },
        {
            content: 'Blog',
            url: '#'
        },
        {
            content: 'About us',
            url: '#'
        }]
    },
    {
    title: '',
    text: [{
        content: 'Success story',
        url: '#'
    },
    {
        content: 'Courses',
        url: '#'
    },
    {
        content: 'Contact us',
        url: '#'
    }]
},
{
    title: 'Information',
    text: [{
        content: 'Membership',
        url: '#'
    },
    {
        content: 'Purchase guide',
        url: '#'
    },
    {
        content: 'Privacy policy',
        url: '#'
    },
    {
        content: 'Terms of service',
        url: '#'
    },]
},
],
blogs: [{
    h4: 'ARTIST',
    p: 'Brush Strokes Energize Trees in Paintings',
    span1: 'May 15,2020',
    span2: '688 views',
    img: '/images/artist-blog-03-480x325.jpeg'
},
{
    h4: 'ARTIST',
    p: 'Pocket-Sized Notebooks Hold Miniature Paintings',
    span1: 'May 15,2020',
    span2: '603 views',
    img: '/images/artist-blog-01-480x325.jpg'
},
{
    h4: 'ARTIST',
    p: 'Connection Between Self-Portraits and Identify',
    span1: 'May 15,2020',
    span2: '397 views',
    img: '/images/artist-blog-02-480x325.jpg'
},
],
testimonials: [
    {
        title: 'Professional team of specialists and passionate mentors at reach',
        text: 'I need to get a certification for English prociciency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        name: 'Madley Pondor',
        role: '/ IT Specialist',
        img: '/images/testimonial-avata-01.jpg'
    },
    {
        title: 'High level of efficiency and scientific teaching methods',
        text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        name: 'Mina Hollace',
        role: '/ Freelancer',
        img: '/images/testimonial-avata-02.jpg'
    },
    {
        title: 'The MaxCoach team works really hard to ensure high level of quality',
        text: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt.',
        name: 'Luvic Dubble',
        role: '/ Private Tutor',
        img: '/images/testimonial-avata-03.jpg'
    }],



})