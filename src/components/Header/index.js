import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

export default function Header({ titulo, descricao, className = '', imagem}) {
  return (
    <header className={`${styles.header}`}>
      {titulo && !imagem &&
      <TituloSemImagem 
      titulo={titulo}
      descricao={titulo}
      />
      }
      {titulo && imagem &&
      <TituloComImagem 
      titulo={titulo}
      descricao={titulo}
      imagem={imagem}
      className={className}
      />
      }
     
    </header>
  )
}