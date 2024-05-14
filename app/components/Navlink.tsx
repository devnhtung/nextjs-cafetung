import Link from "next/link"

interface NavLinkProps { href: string, title: string }
function Navlink({ href, title }: NavLinkProps) {
  return (
    <li>
      <Link href={href} scroll={false}>{title}</Link>
    </li>
  )
}

export default Navlink