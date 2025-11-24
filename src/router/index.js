import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const routes = [ 
    {
        path: "/Main",
        name: "MainPage",
        component: MainPage,  
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
});

export default router;