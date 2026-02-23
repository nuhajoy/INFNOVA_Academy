async function handleResponse(response) {
  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      errorText || `Request failed with status ${response.status}`,
    );
  }
  return response.json();
}


const API_BASE = import.meta.env.VITE_API_URL 

export async function fetchCourses() {
  const res = await fetch(`${API_BASE}/courses`);
  return handleResponse(res);
}

export async function fetchCourse(id) {
  const res = await fetch(`${API_BASE}/courses/${id}`);
  return handleResponse(res);
}