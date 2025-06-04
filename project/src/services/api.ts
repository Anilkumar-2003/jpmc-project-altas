// services/api.ts
import axios from 'axios';
import { Candidate, JobRole } from '../types';

const API_URL = 'http://localhost:5000/api';

export const api = {
  candidates: {
    getAll: async () => {
      const response = await axios.get(`${API_URL}/candidates`);
      return response.data;
    },
    getById: async (id: string) => {
      const response = await axios.get(`${API_URL}/candidates/${id}`);
      return response.data;
    },
    add: async (candidate: Omit<Candidate, 'id'>) => {
      const response = await axios.post(`${API_URL}/candidates`, candidate);
      return response.data;
    },
    jobRoles: {
    getAll: async (): Promise<JobRole[]> => {
      const response = await axios.get(`${API_URL}/jobroles/`);
      return response.data;
    },
    getById: async (id: string): Promise<JobRole> => {
      const response = await axios.get(`${API_URL}/jobroles/${id}`);
      return response.data;
    }
    },
  }
};
