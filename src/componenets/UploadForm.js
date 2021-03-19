import React , {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error , setError] = useState(null);

    const allwoedtypes = ['image/png' , 'image/jpeg' , 'image/jpg'];

    const changeHandler = (e) => {
        e.preventDefault();
        let selected = e.target.files[0];

        if(selected && allwoedtypes.includes(selected.type)){
            setFile(selected);
            setError(' ');
        }else{
            setFile(null);
            setError('Please use a valid file type --> png or jpeg or jpg');
        }
    }

    return(
     <form>
        <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
        </label>
         <div className="output">
             { error && <div className="error">{ error }</div>}
             { file && <div>{file.name}</div>}
             { file && <ProgressBar file={file} setFile={setFile} />}
         </div>
     </form>   
    )
}

export default UploadForm;