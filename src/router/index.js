import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Register from "@/views/Register";
import VerifyAccount from "@/views/VerifyAccount";
import Index from "@/views/Dashboard";
import Main from "@/views/dashboard/Main";
import Vendors from "@/views/dashboard/Vendors";
import Customers from "@/views/dashboard/Customers";
import ChipTypes from "@/views/dashboard/ChipTypes";
import Chips from "@/views/dashboard/Chips";
import Orders from "@/views/dashboard/Orders";
import Setting from "@/views/dashboard/Setting";
import AddNewChipType from "@/views/dashboard/AddNewChipType";
import AddNewChip from "@/views/dashboard/AddNewChip";
import ChipType from "@/views/dashboard/ChipType";
import EditChipType from "@/views/dashboard/EditChipType";
import Chip from "@/views/dashboard/Chip";
import AddNewVendor from "@/views/dashboard/AddNewVendor";
import User from "@/views/dashboard/User";
import Store from "@/views/dashboard/Store";
import CheckEmail from "@/views/CheckEmail";
import ForgotPassword from "@/views/ForgotPassword";
import ResetPassword from "@/views/ResetPassword";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/check-mail', component: CheckEmail },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/reset-password/:resetPasswordToken', component: ResetPassword },
  { path: '/verify/:code', component: VerifyAccount },
  { path: '/dashboard', component: Index,
    children: [
      { path: '/', component: Main },
      { path: '/vendors', component: Vendors },
      { path: '/add-new-vendor', component: AddNewVendor },
      { path: '/customers', component: Customers },
      { path: '/user/:id', component: User },
      { path: '/stores', component: Store },
      { path: '/chip-types', component: ChipTypes },
      { path: '/add-new-chip-type', component: AddNewChipType },
      { path: '/chip-type/:id', component: ChipType },
      { path: '/edit-chip-type/:id', component: EditChipType },
      { path: '/chips', component: Chips },
      { path: '/chip/:id', component: Chip },
      { path: '/add-new-chip', component: AddNewChip },
      { path: '/orders', component: Orders },
      { path: '/setting', component: Setting },
    ]},

  { path: '/:notFound(.*)', component: NotFound }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
