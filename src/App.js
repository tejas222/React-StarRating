import { useState } from "react";
import Star from "./Stars";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <Star totalStars={5} initialRating={rating} />
    </div>
  );
}
