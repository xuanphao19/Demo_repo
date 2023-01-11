//Tạo component (Component riêng cho các Đường dẫn riêng)
import { HeaderOnly } from '@/components/Layout';

import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Contact from '@/pages/Contact';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/contact', component: Contact, layout: HeaderOnly },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: null },
  { path: '/search', component: Search, layout: null },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
