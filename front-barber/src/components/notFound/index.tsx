import { Link } from 'react-router-dom';
import './index.css'

export const NotFound = () =>  {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-red-50 text-red-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Página Não Encontrada</h2>
      <p className="text-lg mb-8">Oops! Parece que esta página ainda não está disponível.</p>
      <Link to="/">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all">
          Voltar para a Página Inicial
        </button>
      </Link>
    </div>
  );
}