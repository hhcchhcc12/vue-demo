/**
 * Created by Administrator on 2017/1/6.
 */
import Favlist from './components/Favlist.vue'
import Favlist2 from './components/Favlist2.vue'
import Favlist3 from './components/Favlist2.vue'
import App from './App.vue'

var routes = [
    {
      path: '/main',
      component: App,
      children: [
        {path: '/home', component: Favlist},
      {path: '/favorite', component: Favlist2},
      {path: '/me', component: Favlist3}],
    }
  ]
  ;

export default routes;
