import { useEffect, useState } from 'react';

export function useRecommendations(mood, occasion) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    setRecommendations([
      `${mood} look for ${occasion}: neutral blazer + tapered trousers`,
      `${mood} look for ${occasion}: monochrome shirt + clean sneakers`,
      `${mood} look for ${occasion}: pastel layering + subtle accessories`,
    ]);
  }, [mood, occasion]);

  return recommendations;
}
