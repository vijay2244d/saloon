import { useStore } from '@nanostores/solid';
import { isSalonOpen } from '../store';

export default function StatusIndicator() {
  const open = useStore(isSalonOpen);

  return (
    <div class={`status-indicator ${open() ? 'open' : 'closed'}`}>
      <i class={`fa-solid ${open() ? 'fa-door-open' : 'fa-door-closed'}`}></i>
      <span>{open() ? 'Open' : 'Closed'}</span>
    </div>
  );
}
