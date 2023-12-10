import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue'; // Adjust the path according to your components' structure
import AboutPage from '../components/AboutPage.vue'; // Adjust the path according to your components' structure
import ResourcesPage from '../components/ResourcesPage.vue';
import SkillsPage from '../components/SkillsPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ContactPage from '../components/ContactPage.vue';
import ResumePage from '../components/ResumePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage,
        },
        {
            path: '/skills',
            name: 'SkillsPage',
            component: SkillsPage,
        },
        {
            path: '/projects',
            name: 'ProjectsPage',
            component: ProjectsPage,
        },
        {
            path: '/resume',
            name: 'ResumePage',
            component: ResumePage,
        },
        {
            path: '/resources',
            name: 'ResourcesPage',
            component: ResourcesPage,
        },
        {
            path: '/contact',
            name: 'ContactPage',
            component: ContactPage,
        },
    ],
});

export default router;
