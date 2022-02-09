import { createWebHistory, createRouter } from "vue-router";
import Form from "@/components/Form";
import Preview from "@/components/Preview";

const routes = [
    {
        path:'/',
        name:'Form',
        component:Form
    },
    {
        path:'/preview',
        name:"Preview",
        component:Preview
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;