import { HttpResponse, http } from "msw";

// Mock Data
export const MOCK_POSTS = [
  {
    userId: 1,
    id: 1,
    title: "test1",
    body: "test1",
  },
  {
    userId: 2,
    id: 5,
    title: "test23232",
    body: "SOCARSOCAR",
  },
  {
    userId: 3,
    id: 6,
    title: "third post title",
    body: "third post body",
  },
  {
    userId: 3,
    id: 1232,
    title: "되라 얍얍",
    body: "third post body",
  },
];

export const handlers = [
  http.get("http://arnold-socar.com/posts", ({ request, params, cookies }) => {
    return HttpResponse.json(MOCK_POSTS, { status: 200 });
  }),
];
