import { useState } from 'react';

interface RatingProps {
  initialRating?: number;
  totalStars?: number;
  onRate?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initialRating = 0, totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRate) onRate(index);
  };

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
