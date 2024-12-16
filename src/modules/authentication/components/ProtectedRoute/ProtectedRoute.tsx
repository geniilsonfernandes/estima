import { Navigate, Outlet } from 'react-router';
import { Center, Loader } from '@mantine/core';
import { useAuth } from '@/shared/hooks/useAuth';

export const ProtectedRoute = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    ); // Tela de loading
  }

  if (!session) {
    return <Navigate to="/sign-up" replace />; // Redireciona para sign-up
  }

  return <Outlet />; // Renderiza as rotas protegidas
};
