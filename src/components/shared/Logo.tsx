import { Link } from 'react-router-dom';

/**
 * Componente Logo
 *
 * Este componente exibe o logo da aplicação como uma imagem dentro de um link. 
 * Ao clicar no logo, o usuário é redirecionado para a página inicial.
 */
const Logo = () => {
  return (
    <Link to="/" className="w-[60%]">
      <img src="images/logo.png" alt="Company logo" className="w-full" />
    </Link>
  );
};

export default Logo;
