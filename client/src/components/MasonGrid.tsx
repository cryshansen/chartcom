
import './grid-mason.css';

export default function MasonGrid() {
  const items = Array.from({ length: 50 }, (_, i) => {
    const index = i + 1;
    let spanClass = '';

    if ([3, 5, 10, 13, 17, 21, 26, 40, 45].includes(index)) {
      spanClass = 'span-3';
    } else if ([5, 10, 13, 21].includes(index)) {
      spanClass = 'span-2';
    }

    return (
      <div key={index} className={`grid-item grid-item-${index} ${spanClass}`}>
        item {index}
      </div>
    );
  });

  return (
    <>
      <h4>Grid Mason</h4>
      <div className="grid-layout">
        {items}
      </div>
    </>
  );
}
