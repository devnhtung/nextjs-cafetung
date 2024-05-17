import Homepage from "@/app/sections/home";
import OurMenu from "@/app/sections/menu";
import Dessert from "@/app/sections/dessert";
import About from "@/app/sections/about";
import Footer from "@/app/sections/footer";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ Cafe Tùng',
  applicationName: 'Cafe Tùng',
  referrer: 'origin-when-cross-origin',
  creator: 'cafetung.vn',
  keywords: [
    'Cafe đặc sản',
    'cà phê đặc sản', 'Quán cà phê ở Huế', 'Quán cà phê đặc sản huế',
    'Fine Robusta'
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/images/banner.jpg',
  },
  robots: {
    index: false,
    follow: true,
  },

}
export default function Home() {
  return (
    <>

      <Homepage />
      <OurMenu />
      <Dessert />
      <About />
      <Footer />
    </>
  );
}
