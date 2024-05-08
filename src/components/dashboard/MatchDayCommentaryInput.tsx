export const MatchDayCommentaryInput = () => {
  return <div>
    <form>
      <div>
        <label htmlFor="minute">Minute</label>
        <input type="text" id="minute" name="minute" placeholder="Minute"/>
        <input type="text" id="additional_minute" name="additional_minute" placeholder="Additional Minute" />
        </div>
      <div>
        <label htmlFor="tag">Tag</label>
        <input type="text" id="tag" name="tag" placeholder="Tag" />
        </div>
      <div>
        <label htmlFor="header">Header</label>
      <input type="text" id="header" name="header" placeholder="Header" />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
      <textarea id="comment" name="comment" placeholder="Comment" rows={5}/>
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
};