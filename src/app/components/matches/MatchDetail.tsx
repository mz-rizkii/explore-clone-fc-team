import { Fragment, useState } from "react"
import { LastGamePreview } from "./LastGamePreview"
import { MatchSubmenu } from "./MatchSubmenu"
import { CommentaryList } from "../commentary/CommentaryList"
import { MatchStats } from "./MatchStats"

export const MatchDetail = () => {
  const [currentTab, setCurrentTab] = useState('');

  return <Fragment>
    <LastGamePreview />
    <MatchSubmenu />
    {currentTab === 'commentary' && <CommentaryList />}
    {currentTab === 'stats' && <MatchStats />}
  </Fragment>
}