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
  const res = await fetch("https://infnova-course-api.vercel.app/courses");
  return handleResponse(res);
}

export async function fetchCourse(id) {
  const res = await fetch(`https://infnova-course-api.vercel.app/courses/${id}`);
  return handleResponse(res);
}
