import FormPage from "../page/FormPage.vue";
import PreviewPage from "../page/PreviewPage.vue";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: FormPage
    },
    {
        path: '/preview',
        name: 'preview',
        component: PreviewPage
    }
]