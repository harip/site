const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/';

const getResume = async () => {
  const url = `${corsAnyWhere}https://github.com/harip/Resume/blob/master/format1/HARI_Resume.pdf?raw=true`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('error getting resume');
  } 
  
  let resumeText =   await response.text();

  debugger

  let binaryString = btoa(encodeURIComponent(resumeText).replace(/%([0-9A-F]{2})/g,
  function toSolidBytes(match, p1) {
    // debugger
    return String.fromCharCode('0x' + p1);
  }));

  // let binaryString = window.atob(resumeText);

  // binaryString = decodeURIComponent(escape(window.atob( binaryString )));
  
  // const binaryString = window.atob(resumeText.replace(/[\n\r]/g, ''));

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

  // return file;
};

export default getResume; 