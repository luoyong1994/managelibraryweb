import router from './index';
import store from '../store/index';
router.beforeEach(function(to,from,next){
    if(to.meta.requireAuth==true){
        if(store.state.user){
            next();
        }else{
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }

    }else{
        next();
    }
});
export default router;