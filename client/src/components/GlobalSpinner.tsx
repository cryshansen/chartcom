// components/GlobalSpinner.tsx
import { useLoading } from '../context/LoadingContext';
import './global-spinner.css'; // Ensure this exists or adapt

export default function GlobalSpinner() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="global-spinner-overlay">
      <div className="spinner" />
    </div>
  );
}
