import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Cash from '@/components/cash/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },

        {
            path: '/cash',
            component: Cash
        },

    ]
})
