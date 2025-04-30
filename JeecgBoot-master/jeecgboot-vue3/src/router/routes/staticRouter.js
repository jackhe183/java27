import { LAYOUT } from '/@/router/constant';
export const AI_ROUTE = {
    path: '',
    name: 'ai-parent',
    component: LAYOUT,
    meta: {
        title: 'ai',
    },
    children: [
        {
            path: '/ai',
            name: 'ai',
            component: () => import('/@/views/dashboard/ai/index.vue'),
            meta: {
                title: 'AI助手',
            },
        },
    ],
};
export const staticRoutesList = [AI_ROUTE];
//# sourceMappingURL=staticRouter.js.map