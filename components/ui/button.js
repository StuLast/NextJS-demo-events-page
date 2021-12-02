import Link from 'next/link'
import styles from './button.module.css'

const Button = ({ link = undefined, children, onClick = undefined }) => {

  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  };

  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  )

}

export default Button