import styles from './../styles/Illustration.module.css';

function Illustration({image, altText}){
    return(
        <div className={styles.illustration}>
            <img src={image} alt={altText} />
        </div>
    )
}

export default Illustration;