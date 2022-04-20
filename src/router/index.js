import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Register from "@/views/Register";
import VerifyAccount from "@/views/VerifyAccount";
import Dashboard from "@/views/Dashboard";
import CheckEmail from "@/views/CheckEmail";
import ForgotPassword from "@/views/ForgotPassword";
import ResetPassword from "@/views/ResetPassword";

Vue.use(VueRouter)

let Chip;
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/check-mail', component: CheckEmail },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/reset-password/:resetPasswordToken', component: ResetPassword },
  { path: '/verify/:code', component: VerifyAccount },
  { path: '/dashboard', component: Dashboard,
    children: [

    ]},

  { path: '/:notFound(.*)', component: NotFound }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
