import React, { useEffect, useState } from 'react';

const Activities = ({ userId }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`http://localhost:5007/api/activities/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }

        const data = await response.json();
        setActivities(data);
      } catch (err) {
        setError('Failed to fetch activities');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [userId]);

  if (loading) return <div>Loading activities...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>User Activities</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              <strong>Activity:</strong> {activity.activity}
              <br />
              <strong>Points:</strong> {activity.points}
              <br />
              <strong>Details:</strong> {activity.details ? JSON.stringify(activity.details) : 'No details'}
            </li>
          ))}
        </ul>
      ) : (
        <div>No activities found for this user.</div>
      )}
    </div>
  );
};

export default Activities;
