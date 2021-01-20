import React, { useEffect } from 'react'; 
import 'custom-elements';

const PythonDs = () =>{ 
  useEffect(() => {
    document.title="Python Web Tree";
  }, []);
 
  return(   
    <div>
      <custom-pythonds></custom-pythonds> 
    </div>
  );
};

export default PythonDs;