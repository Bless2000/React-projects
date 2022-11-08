import React from 'react'
import '../css/footer.css';

export default function Footer() {
  return (
    <div>
        
	<footer>
		<div className="foot">
				<div className="logo_bottom"><h3>Stash<span>Movie</span></h3></div>

					<div className="fcontent">

					
			<div className="flist">
				<div className="fHeads"><h4>Categories</h4></div>
				<div className="flist">
					<ul>
						<li>Anime</li>
						<li>Movies</li>
							<li>Series</li>
								<li>Comics</li>
				</ul>
				</div>
					</div>

			<div className="flist">
				<div className="fHeads"><h4>Need Us?</h4></div>
				<div className="flist">
					<ul>
						<li>Cantact Us</li>
							<li>About Us</li>
							<li>Location</li>
								<li>Donate</li>
				</ul>
				</div>
					</div>

					<div className="flist">
				<div className="fHeads"><h4>Also Check</h4></div>
				<div className="flist">
					<ul>
						<li>Ecommerce</li>
						<li>Resturant</li>
						<li>Login</li>
						<li>Sign Up</li>
					</ul>
					</div>
				</div>
			</div>
		</div>

		<h2 className="media_head">Social Media</h2>

		<div className="media">
			
		</div>

	</footer>

    </div>
  )
}
