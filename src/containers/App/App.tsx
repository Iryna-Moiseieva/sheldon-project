import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLoaderStatus } from '../../redux/selectors';
import { setIsLoading } from '../../redux/loaderSlice';
import Loader from '../../components/Loader';

interface AppProps {
  absolute: boolean;
  status: boolean
}
const App: React.FC<AppProps> = ({ absolute = false, status }) => {
  const isLoading = useSelector(getLoaderStatus);
  const dispatch = useDispatch();
  const handleChange = (value: boolean) => dispatch(setIsLoading(value));

  return (
        <div>
          <button type="button" onClick={() => handleChange(false)}>
            Loader Test Text
          </button>
          <button type="button" onClick={() => handleChange(true)}>
            Is loading
          </button>

      {isLoading
        ? <Loader
            absolute={absolute}
            status={status}/>
        : <h1>Loader Test Text</h1>
      }
    </div>

    // <>
    //   <h1 className="app">Sheldon Project</h1>;
    //   <Loader
    //     absolute={absolute}
    //     status={status}/>
    // </>
  );
};

export default App;
