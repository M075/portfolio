const nav = document.getElementById('nav');
nav.innerHTML = `
  <header>
		<!-- Logo -->
		<a href="index.html" class="logo">
			<img src="img/m075logo.png">
		</a>
		<!-- Menu -->
		<div class="menu">
			<span></span>
			<span></span>
		</div>
	</header>
		
`

document.body.appendChild(nav.content);

const rightMenu = document.getElementById('right-menu');
rightMenu.innerHTML = `
        <div class="right-menu">
		<div class="menu-close"></div>
		<div class="page-menu">
			<ul>
				<li><a data-type="ajax-load" href="index.html">Home</a></li>
				<li><a data-type="ajax-load" href="about.html">About</a></li>
				<li><a data-type="ajax-load" href="all-projects.html">Projects</a></li>
                <li><a data-type="ajax-load" href="contact.html">Contact</a></li>
            </ul>
    </div>
    </div>
		
`


document.body.appendChild(rightMenu.content);
