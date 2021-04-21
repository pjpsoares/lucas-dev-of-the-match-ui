import axios from 'axios';

const API_BASE_ENDPOINT = 'http://localhost:5000';

async function getPoints(id: number): Promise<number> {
  const result: { status: number; data: any } = await axios.get(
    `${API_BASE_ENDPOINT}/team-points/${id}`,
  );

  return result.data.points;
}

export const api = {
  getPoints,
};
