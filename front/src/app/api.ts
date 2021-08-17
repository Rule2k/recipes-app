export const fetchRequest = async <T>(
  endpoint: string,
  payload?: any
): Promise<T> => {
  let result;
  try {
    const response = await fetch(`http://localhost:6060/${endpoint}`, {
      method: 'GET',
      body: payload ?? null,
    });
    if (response.ok) {
      const data = await response.json();
      result = data;
    } else {
      throw new Error('response not ok');
    }
  } catch (e) {
    throw new Error(e);
  }
  return result;
};
