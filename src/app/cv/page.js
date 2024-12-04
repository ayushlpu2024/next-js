const DownloadCVButton = () => {
    return  (
        <div style={{backgroundColor :"#2c2a2a"}}>
      <a 
        href="/resume.pdf" 
        download="Resume.pdf" // This sets the download filename
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#e66042',
          color: '#12ccd3',
          textDecoration: 'none',
          borderRadius: '20px',
          fontWeight:'bold',
          textAlign:'center',
          marginLeft:'1.5cm'
        }}
      >
        Download CV
      </a>
     </div>
    );
  };
  
  export default DownloadCVButton;
