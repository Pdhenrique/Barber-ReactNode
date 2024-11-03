import { useMemo } from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  const headerComponent = useMemo(() => (
    <header className="bg-background text-foreground p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-primary">PetShop</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
          <li><Link to="/services" className="hover:text-primary-foreground">Serviços</Link></li>
          <li><Link to="/products" className="hover:text-primary-foreground">Produtos</Link></li>
          <li><Link to="/contact" className="hover:text-primary-foreground">Contato</Link></li>
        </ul>
      </nav>
      <button 
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all">
        Alternar Tema
      </button>
    </header>
  ), []);

  return headerComponent;
}