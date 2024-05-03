import { Fragment } from "react"
import { LastGamePreview } from "./LastGamePreview"
import { MatchSubmenu } from "./MatchSubmenu"
import { CommentaryList } from "../commentary/CommentaryList"

export const MatchDetail = () => {
  return <Fragment>
    <LastGamePreview />
    <MatchSubmenu />
    <CommentaryList />
  </Fragment>
}