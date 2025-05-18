import { countries } from "../../data/countries";
import styles from './Form.module.css';

export default function Form() {
  return (
    <form className={styles.form}>

      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input 
          id="city"
          type="text"
          name="city"
          placeholder="Ciudad"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="pais">Pais:</label>
        <select id="pais">
          <option value="">-- Seleccione --</option>

          {countries.map( country => (
            <option
              key={country.code}
              value={country.code}
            > {country.name}
            </option>
          ))}
        </select>
      </div>

      <input
        className={styles.submit}
        type="submit"
        value='Consultar Clima'
      />

    </form>
  )
}
