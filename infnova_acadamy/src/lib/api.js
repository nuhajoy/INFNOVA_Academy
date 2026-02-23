// src/lib/api.js

const BASE_URL = import.meta.env.VITE_API_URL;

async function handleResponse(response) {
  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      errorText || `Request failed with status ${response.status}`,
    );
  }
  return response.json();
}

export async function fetchCourses() {
  const res = await fetch(`${BASE_URL}/courses`);
  return handleResponse(res);
}

export async function fetchCourse(id) {
  const res = await fetch(`${BASE_URL}/courses/${id}`);
  return handleResponse(res);
}
