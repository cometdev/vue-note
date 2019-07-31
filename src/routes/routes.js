let router = [
	{
		path: '/',
		redirect: 'login',
	},
	{
		path: '/signup',
		component: () => import('../views/SignupView.vue'),
	},
	{
		path: '/login',
		component: () => import('../views/LoginView.vue'),
	},
	// TODO: 게시글 조회 페이지, 게시글 생성 페이지 제작
];

export default router;
