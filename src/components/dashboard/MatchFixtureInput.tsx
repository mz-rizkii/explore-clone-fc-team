export const MatchFixtureInput = () => {
  return <div>
    <form>
      <label htmlFor="date">Date</label>
      <input type="text" name="date" />
      <label htmlFor="opponent">Opponent</label>
      <input type="text" name="opponent" />
      <label htmlFor="isHomeGame">Home Game</label>
      <input type="text" name="isHomeGame" />
      <label htmlFor="status">Status</label>
      <input type="text" name="status" />
      <label htmlFor="venue">Away</label>
      <input type="text" name="venue" />
      <label htmlFor="started_at">Started at</label>
      <input type="text" name="started_at" />
    </form>
  </div>
}