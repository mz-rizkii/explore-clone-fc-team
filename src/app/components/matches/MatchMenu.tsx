import Link from "next/link"

export const MatchMenu = () => {
  const submenus = [
    { label:'Fixtures', page: 'fixtures'}, 
    { label:'Results', page: 'matches' }
  ]

  return <div className="bg-slate-700 px-4">
    <h3 className="text-white font-bold">Matches</h3>
    <div>
      <ul className="flex flex-row">
        {submenus.map((submenu) => <li key={submenu.label} className="text-white mx-2"><Link href={submenu.page}>{submenu.label}</Link></li>)}
      </ul>
    </div>
  </div>
}