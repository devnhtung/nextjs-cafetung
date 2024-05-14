import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi"
import FooterTitle from "@/app/components/FooterTitle"
import Section from "@/app/components/Section"

const Footer = () => {
    const date = new Date()

    return (
        <Section id="contact">
            <div className="grid grid-cols-2 mt-12">
                <div>
                    <FooterTitle>Liên hệ</FooterTitle>
                    <div className="flex items-center text-[#e8e8e8] opacity-90">
                        <HiOutlineMail />
                        <p className="ml-2">dev.nhtung@gmail.com</p>
                    </div>
                    <div className="flex items-center text-[#e8e8e8] opacity-90">
                        <HiOutlineLocationMarker />
                        <p className="ml-2">22 Hoàng Lanh - Xuân phú - TP.Huế - TT Huế</p>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <FooterTitle>Social media</FooterTitle>
                        <a href="https://www.facebook.com/cafetung.vn" className="text-[#e8e8e8] opacity-90">Instagram</a>
                        <a href="https://www.facebook.com/cafetung.vn" className="text-[#e8e8e8] opacity-90">Facebook</a>
                        <a href="https://www.tiktok.com/@cafetunghue" className="text-[#e8e8e8] opacity-90">Tiktok</a>
                    </div>
                    <div>
                        <FooterTitle>Sản phẩm</FooterTitle>
                        <p className="text-[#e8e8e8] opacity-90">Coffee</p>
                        <p className="text-[#e8e8e8] opacity-90">Desserts</p>
                        <p className="text-[#e8e8e8] opacity-90">Beverages</p>
                    </div>
                    <div>
                        <FooterTitle>Cơ sở</FooterTitle>
                        <p className="text-[#e8e8e8] opacity-90">Wifi</p>
                        <p className="text-[#e8e8e8] opacity-90">Comfy place</p>
                        <p className="text-[#e8e8e8] opacity-90">Musical instrument</p>
                        <p className="text-[#e8e8e8] opacity-90">Custom room</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1.5px] bg-[#e8e8e8] opacity-90 mt-20" />
            <p className="text-[#e8e8e8] opacity-90 text-xs font-light tracking-wider text-center mt-2">&copy;{date.getFullYear()} Café Tùng. All rights reserved</p>
        </Section>
    )
}

export default Footer