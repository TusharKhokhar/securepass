import { QueryClient } from "@tanstack/react-query";

// Simplified QueryClient for frontend-only app
// No API calls needed since all functionality is client-side
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
