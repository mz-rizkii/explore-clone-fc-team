import Link from "next/link"

export const MatchSubmenu = () => {
  const menus = [
    { label: 'news & video', url: '#'},
    { label: 'commentary', url: '#' },
    { label: 'teams', url: '#' },
    { label: 'stats', url: '#' },
  ]

  return <div>
    <ul>
    {menus.map((menu) => <li>
      <Link href={menu.url}>{menu.label}</Link>
    </li>)}
  </ul>
  </div>
}