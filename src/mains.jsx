

function Mains({ colors }) {
    return (
      <>
     
      <div className='container'>
      <> 
        {colors.map((color, index) => (
           
          <div key={index} className="color-card" >
            <div className="divs" style={{ backgroundColor: color.background, color: color.colorname }}>  </div>
        
              <h1 className='content'>{color.colorCode}</h1>
              <p className='content-name' style={{ color: color.colorname }}>{color.colorname}</p>
         
            </div>
           
        ))}
        </>
      </div>
       
      </>
    );
  }
  
  export default Mains;