/* istanbul ignore file */
import universal from 'react-universal-component';
export default universal(({ name }) => import(`./components/${name}/${name}`));