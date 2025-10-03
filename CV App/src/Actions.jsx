

export function Actions({ handleLoadExample, setConfirmModal  }) {
  return (
    <span className="actions-card">
      <button onClick={() => handleLoadExample()}>Load example</button>
      <button className='reset' onClick={() => setConfirmModal(true)}> <i class="fa-solid fa-trash"></i> Reset preview</button>
    </span>
  );
}
