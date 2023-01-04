import React from 'react';
import './App.css';
import logo from'./assets/1.jpeg'

function App() {
	return (
		<div>
			<nav class="navbar background">



			<div class="logo">
			<img src= {logo} alt="2.jpeg"/>
		</div>



				<ul class="nav-list">
					
					<li><a href="#projects">Projects</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contacts">Contacts</a></li>
					<li><a href='#explore'>Varsity Life</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Hi,
						</h1>
						<p class="text-small">
						My name is Samuel Tepanyega, 22, still a student but a final year one,
						 looking for a part time job I can do while still at school and that will depend if i decide to continue with my studies
						 , ideally working remotely.
						 And if not, i do prefer an internship.
						 
           
			  

						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Why...
						</h1>
						<p class="text-small">
						... company is one of the best software development company 
						in the industry, so finding myself in this company will be of great honour.
						
							
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="thirdHalf">
						<h1 class="text-big" id="program">
							Programming Languages
						</h1>
						<p class="text-small">
						Over the past four years ive been working my butt off
						trying to learn as many programming languages as possible
						only to find out am cheating myself, i don't wanna lie, i am familiar with
						 more that 6 programming languages, but tell you what, all that was just a waste of time.
						 until i come across this say <strong> "Jack of all trades, master none"</strong>
						 i went back to the drawing board and <strong>javascript was a way for me</strong>

						</p>
					</div>
				</div>
			</section>
										
						
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App
