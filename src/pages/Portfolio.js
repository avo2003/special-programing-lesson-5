import React from 'react';
import{Link} from 'react-router-dom'


export default function Portfolio() {
    return(
     <div>
         <h1>portfolio</h1>
         <Link className='Links' to='portfolio/1'>Portfolio Item One</Link>
			<Link className='Links' to='portfolio/2'>Portfolio Item Two</Link>
     </div>
    );
}