import Link from "next/link"

export const MatchSubmenu = () => {
  const menus = [
    { label: 'News & Video', url: '#news'},
    { label: 'Commentary', url: '#commentary' },
    { label: 'Teams', url: '#teams' },
    { label: 'Stats', url: '#stats' },
  ]

  return <div>
    <ul className="flex flex-row">
    {menus.map((menu) => <li className="mx-4">
      <Link href={menu.url}>{menu.label}</Link>
    </li>)}
  </ul>
  </div>
}