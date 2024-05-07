import { Fragment, useState } from "react"
import { LastGamePreview } from "./LastGamePreview"
import { MatchSubmenu } from "./MatchSubmenu"
import { CommentaryList } from "../commentary/CommentaryList"
import { MatchStats } from "./MatchStats"
import { TeamSheetView } from "../lineups/TeamSheetView"

export const MatchDetail = () => {
  const [currentTab, setCurrentTab] = useState('stats');

  const onSelectSubmenu = (menu: string) => {
    setCurrentTab(menu);
  }
  return <Fragment>
    <LastGamePreview />
    <MatchSubmenu onSelectSubmenu={onSelectSubmenu} />
    {currentTab === 'commentary' && <CommentaryList />}
    {currentTab === 'stats' && <MatchStats />}
    {currentTab === 'teams' && <TeamSheetView />}
  </Fragment>
}