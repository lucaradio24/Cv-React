export function Modal({ onConfirm, onCancel }) {
  return (
    <div className="modal">
      Are you sure?
      <div>
        <button onClick={onConfirm}>Confirm</button>
        <button className='cancel' onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
