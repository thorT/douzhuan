import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Cash from '@/components/cash/index'
import Record from '@/components/cash/record'
import TaskIncome from '@/components/cash/taskincome'
import FriendPlus from '@/components/cash/friendplus'
import OtherIncome from '@/components/cash/otherincome'
import Apply from '@/components/cash/apply'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },

        {
            path: '/cash',
            component: Cash,
            children: [
                {
                    path: 'record',
                    component: Record
                },
                {
                    path: 'taskincome',
                    component: TaskIncome
                },
                {
                    path: 'friendplus',
                    component: FriendPlus
                },
                {
                    path: 'otherincome',
                    component: OtherIncome
                },
                {
                    path: 'apply',
                    component: Apply
                }
                ]
        },

    ]
})
