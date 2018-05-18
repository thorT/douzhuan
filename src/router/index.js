import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Cash from '@/components/cash/index'
import Record from '@/components/cash/record'
import MyIncome from '@/components/cash/myincome'
import Apply from '@/components/cash/apply'
import Limit from '@/components/task/limit'
import High from '@/components/task/high'
import Game from '@/components/task/game'
import Comment from '@/components/task/comment'

Vue.use(Router);

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
                    path: 'myincome',
                    component: MyIncome
                },
                {
                    path: 'apply',
                    component: Apply,
                    children: [
                        {
                            path: 'record',
                            component: Record
                        }
                    ]
                }
            ]
        },
        {
            path: '/limit',
            component: Limit
        },
        {
            path: '/high',
            component: High
        },
        {
            path: '/game',
            component: Game
        },
        {
            path: '/comment',
            component: Comment
        },

    ]
})
