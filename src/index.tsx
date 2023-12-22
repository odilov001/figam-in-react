import ReactDOM from 'react-dom/client';
import Main from './todo-list';

import 'assets/style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<Main />);
