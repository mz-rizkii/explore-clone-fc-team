import { OnSelectSubmenu } from "@/app/types"
import Link from "next/link"

export const MatchSubmenu = (props: OnSelectSubmenu) => {
  const {
    onSelectSubmenu
  } = props;
  
  const menus = [
    { label: 'News & Video', url: '#news', value: 'news'},
    { label: 'Commentary', url: '#commentary', value: 'commentary' },
    { label: 'Teams', url: '#teams', value: 'teams' },
    { label: 'Stats', url: '#stats', value: 'stats' },
  ]

  return <div>
    <ul className="flex flex-row">
    {menus.map((menu, index) => <li key={index} className="mx-4">
      <Link href={menu.url} onClick={() => onSelectSubmenu(menu.value)}>{menu.label}</Link>
    </li>)}
  </ul>
  </div>
}