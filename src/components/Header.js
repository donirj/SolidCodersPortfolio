import React from 'react';
import "./headerStyle.css";

const Header = (props)=>{
    let resumeData = props.resumeData;
    return (
      <div style={{textAlign:"center"}}>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav" style={{justifyContent:"center"}}>
               <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
               <li><a className="smoothscroll" href="#about">Nosotros</a></li>
             <li><a className="smoothscroll" href="#skills">Habilidades</a></li>
               <li><a className="smoothscroll" href="#projects">Proyectos</a></li>
               <li><a className="smoothscroll" href="#connect">Contactanos</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Que onda doni, que fuente le podemos poner al titulo?{resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </div>
    );
  }
  export default Header
