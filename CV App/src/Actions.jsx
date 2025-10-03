

export function Actions({ handleLoadExample, handleResetPreview }) {
  return (
    <span className="actions-card">
      <button onClick={() => handleLoadExample()}>Load example</button>
      <button className='reset' onClick={() => handleResetPreview()}> <i class="fa-solid fa-trash"></i> Reset preview</button>
    </span>
  );
}
