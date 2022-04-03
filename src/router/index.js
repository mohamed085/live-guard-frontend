import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Register from "@/views/Register";
import VerifyAccount from "@/views/VerifyAccount";
import Dashboard from "@/views/Dashboard";
import Main from "@/views/dashboard/Main";
import CheckEmail from "@/views/CheckEmail";
import ForgotPassword from "@/views/ForgotPassword";
import ResetPassword from "@/views/ResetPassword";
import ChipVersions from "@/views/dashboard/chip-verions/ChipVersions";
import AddNewChipVersion from "@/views/dashboard/chip-verions/AddNewChipVersion";
import ChipVersion from "@/views/dashboard/chip-verions/ChipVersion";
import EditChipVersion from "@/views/dashboard/chip-verions/EditChipVersion";
import Chips from "@/views/dashboard/chips/Chips";
import AddNewChip from "@/views/dashboard/chips/AddNewChip";
import Users from "@/views/dashboard/users/Users";
import AddNewUser from "@/views/dashboard/users/AddNewUser";

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
      { path: '/', component: Main },
      { path: '/chip-versions', component: ChipVersions },
      { path: '/add-new-chip-version', component: AddNewChipVersion },
      { path: '/chip-version/:id', component: ChipVersion },
      { path: '/edit-chip-version/:id', component: EditChipVersion },
      { path: '/chips', component: Chips },
      { path: '/add-new-chip', component: AddNewChip },
      { path: '/users', component: Users },
      { path: '/add-new-user', component: AddNewUser },
    ]},

  { path: '/:notFound(.*)', component: NotFound }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
