/* eslint-disable react/display-name */
export default () => (
  <div className="flex-container">
    <div>
      RSVP *{' '}
      <select name="choice">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
    <input type="text"></input>
  </div>
);
