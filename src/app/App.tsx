import { RouterProvider } from './providers/router/RouterProvider';
import { AppRouter } from './providers/router/AppRouter';

export default function App() {
  return (
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  );
}
