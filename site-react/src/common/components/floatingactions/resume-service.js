import axiosCfg from '../../../apis/axiosConfig';

const getResume = async () => {  
  try { 
    const response = await axiosCfg.get('/resume');   
    let resumeText =   response.data; 
    const binaryString = window.atob(resumeText);
  
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    const b = new Uint8Array(binaryString.length);
    let bytes;
    if (isIEOrEdge) {
      for (var i = 0, len = b.length; i < len; i++) {
        b[i] = binaryString.charCodeAt(i);
      }
      bytes = b;
    } else {
      bytes = b.map((byte, i) => binaryString.charCodeAt(i));
    }
    const file= new Blob([bytes], { type: 'application/pdf' });
  
    if (window.navigator.msSaveOrOpenBlob) {
      // IE11
      window.navigator.msSaveOrOpenBlob(file, `hari.pdf`);
    } else {
      window.open(URL.createObjectURL(file), '_blank');
    } 
    return true;
  } catch(err) {
    return false;
  } 
}

export default getResume;