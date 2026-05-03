import React from 'react'
import styles from './Button.module.css'   // ✅ fixed typo

const Button = () => {
    return (
        <div>
            <button className={styles.btn}>Click me</button>  {/* ✅ lowercase */}
        </div>
    )
}

export default Button