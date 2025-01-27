interface FooterTitleProps {
  children: React.ReactNode
}
const FooterTitle = ({ children }: FooterTitleProps) => {
  return (
    <h4 className="text-[#e8e8e8] text-[18px] mb-2 font-semibold">
      {children}
    </h4>
  )
}

export default FooterTitle