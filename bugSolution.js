This solution uses `AbortController` to cancel the `fetch` request if the component unmounts before the request completes.

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setController(controller);

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data', { signal: controller.signal });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default MyComponent;
```