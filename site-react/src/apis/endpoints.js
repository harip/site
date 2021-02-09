const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'; 
 
const getResume = async () => {
  const url = `https://github.com/harip/Resume/blob/master/format1/Hari_Resume_Base64.txt?raw=true`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('error getting resume');
  }  
  let resumeText =   await response.text(); 
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
};

export default getResume; 