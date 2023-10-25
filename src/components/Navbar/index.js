import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from 'components/Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const iconeProps = {
  color: 'white',
  size: 24
}


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const totalDeItensNoCarrinho = useSelector(state => {
    const  totalDeItensNoCarrinho= state.carrinho.reduce((preVal, elem)=> preVal + elem.quantidade,0)
    return totalDeItensNoCarrinho;
  
  });
  // const totalDeItensNoCarrinho = useSelector(state =>{
  //   let total = 0;

  //   const contaItensNoCarrinho = state.carrinho.reduce((numero, item)=>numero, total)

  //   return contaItensNoCarrinho;
  
  // });

  console.log(totalDeItensNoCarrinho);


return (
  <nav className={styles.nav}>
    <Logo className={styles.logo} onClick={() => navigate('/')} />
    <div className={styles.links}>
      <div>
        <Link to='/' className={classNames(styles.link, {
          [styles.selected]: window.location.pathname === '/'
        })}>
          Página inicial
        </Link>
      </div>
    </div>
    <div className={styles.busca}>
      <Busca />
    </div>
    <div className={styles.icones}>
      <Link to="/carrinho">
        {location.pathname === '/carrinho'
          ? <RiShoppingCartFill {...iconeProps} />

          : <RiShoppingCart2Line {...iconeProps} />
        }
      </Link>

      {totalDeItensNoCarrinho !==0 &&
        <span className={styles.dot}>{totalDeItensNoCarrinho}</span>
      }


    </div>
  </nav>
)
}