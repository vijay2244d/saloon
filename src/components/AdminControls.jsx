import { updateSalonStatus } from '../store';

export default function AdminControls() {

  return (
    <div class="admin-controls">
      <button class="button open-btn" onClick={() => updateSalonStatus(true)}>
        <i class="fa-solid fa-door-open"></i>
        Set to Open
      </button>
      <button class="button closed-btn" onClick={() => updateSalonStatus(false)}>
        <i class="fa-solid fa-door-closed"></i>
        Set to Closed
      </button>
    </div>
  );
}
