const RightSidebar = () => {
	return (
		<div className='main wrapper__main'>
			<section className='about main__about'>
				<h2 className='title about__title'>About</h2>
				<p className='about__text'>
					I have a background in information technology, with a focus on
					frontend development and Ul design. I am the type of person who seizes
					every opportunity to learn something new. That is why I enjoy
					challenges. From there, Im under pressure to learn quickly and gain a
					lot of new experience.
				</p>
			</section>
			<section className='experience main__experience'>
				<h2 className='title experience__title'>Experience</h2>
				<div className='experience__list'>
					<div className='experience__list-item'>
						<div className='experience__list-content'>
							<div className='experience__list-story'>
								<div className='experience__list-period'>
									Dec 2021 - <span className='present list__period'>Present</span>
								</div>
								<div className='experience__list-location'>Lviv, Ukraine</div>
							</div>
							<div className='experience__list-role'>
								<div className='experience__list-icon'>
									<img
										className='experience__list-ico'
										src='./img/main/experience/TTN_BTM_Logo.svg'
										alt='Company logo'
									/>
								</div>
								<div className='experience__list-body'>
									<div className='experience__list-company'>
										Tickets support and service
									</div>
									<div className='experience__list-position'>
										Functional Billing Analysis Agent
									</div>
								</div>
							</div>
						</div>
						<ul className='experience__list-description'>
							<li className='list-description__item'>
								Submission of requests for the return of air tickets in the
								system of mutual settlements between the agency/airline company
							</li>
							<li className='list-description__item'>
								Monthly reporting. Documentation and summary Google tables on
								the number of issued tickets, processed requests.
							</li>
							<li className='list-description__item'>
								Summary reporting on fines received from the airline Reporting
								on fines issued by airlines for improper work in reservation
								systems. Conducting disputes with airlines regarding illegally
								issued fines.
							</li>
						</ul>
					</div>
					<div className='experience__list-item'>
						<div className='experience__list-content'>
							<div className='experience__list-story'>
								<div className='experience__list-period'>Jun 2021 - Feb 2022</div>
								<div className='experience__list-location'>Lviv, Ukraine</div>
							</div>
							<div className='experience__list-role'>
								<div className='experience__list-icon'>
									<img
										className='experience__list-ico'
										src='./img/main/experience/TTN_BTM_Logo.svg'
										alt='Company logo'
									/>
								</div>
								<div className='experience__list-body'>
									<div className='experience__list-company'>
										Tickets support and service
									</div>
									<div className='experience__list-position'>Freelance</div>
								</div>
							</div>
						</div>
						<ul className='experience__list-description'>
							<li className='list-description__item'>
								Creating of website for calculation for refund of partly used
								tickets. With information about airlines rules for involuntary
								reissue/refund of the tickets. Also there are information about
								contacts of airlines
							</li>
						</ul>
					</div>
					<div className='experience__list-item'>
						<div className='experience__list-content'>
							<div className='experience__list-story'>
								<div className='experience__list-period'>Feb 2017 - Dec 2021</div>
								<div className='experience__list-location'>Lviv, Ukraine</div>
							</div>
							<div className='experience__list-role'>
								<div className='experience__list-icon'>
									<img
										className='experience__list-ico'
										src='./img/main/experience/TTN_BTM_Logo.svg'
										alt='Company logo'
									/>
								</div>
								<div className='experience__list-body'>
									<div className='experience__list-company'>
										Tickets support and service
									</div>
									<div className='experience__list-position'>
										Involuntary Issues Support Agent
									</div>
								</div>
							</div>
						</div>
						<ul className='experience__list-description'>
							<li className='list-description__item'>
								Handling queuing in global booking systems (Amadeus, Saber,
								Gabriel S7, Altea UIA, Firelogix, Sirena, Saber Interact B2,
								Troy)
							</li>
							<li className='list-description__item'>
								Informing clients about changes by admin panel / OTRS mailing
								about involuntary changes in date / time / route / flight /
								Search and selection of alternatives, according to the airlines
								rules / due to telephone/mail requests of passengers
							</li>
							<li className='list-description__item'>
								Processing of requests for passengers on OTRS(mail) /
								Consultation of representatives of other markets colleagues with
								the help of the corporate portal / cooperation with other
								departments of the company, other organizations and airlines for
								solving questions on requests for change of date / time / route
								/ flight
							</li>
							<li className='list-description__item'>
								Processing of requests for MCO(passengers requests) / processing
								of requests confirmed by written requests / Formation and
								sending of requests to the airline related to the processing of
								requests by the MCO to certain statuses / mail processing /
								processing of requests received from the airline
							</li>
							<li className='list-description__item'>
								Reissue and / or refund of the ticket according to the required
								changes in the date / route / flight / Update / Adjust / add
								updated bookings to the administrative panel
							</li>
							<li className='list-description__item'>
								Reporting about done work for the day(KPI screens)
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='projects main__projects'>
				<h2 className='title projects__title'>Latest projects</h2>
				<div className='projects__list'>
					<div className='projects__list-item'>
						<div className='projects__list-image'>
							<img
								className='projects__list-img'
								src='./img/main/projects/02.jpg'
								alt='Project image'
							/>
						</div>
						<h3 className='projects__list-subject'>Involuntary squad</h3>
						<p className='projects__list-text'>
							VUE project for TTN involuntary team, which allow to make
							calculation of partly used tickets(used part of fare and taxes).
							Web application also have necessary information about airlines,
							mail templates
						</p>
						<div className='projects__list-content'>
							<div className='projects__list-icon'>
								<img
									className='projects__list-ico'
									src='./img/main/projects/item_link.svg'
									alt='Link icon'
								/>
							</div>
							<a
								className='projects__list-link'
								href='https://involuntary-squad.web.app/'
							>
								involuntary-squad.web.app/
							</a>
						</div>
					</div>
					<div className='projects__list-item'>
						<div className='projects__list-image'>
							<img
								className='projects__list-img'
								src='./img/main/projects/01.jpg'
								alt='Project image'
							/>
						</div>
						<h3 className='projects__list-subject'>
							Kuzyk - Psychological Help Center
						</h3>
						<p className='projects__list-text'>
							You do not have to be happy. Just to be enough.
						</p>
						<div className='projects__list-content'>
							<div className='projects__list-icon'>
								<img
									className='projects__list-ico'
									src='./img/main/projects/item_link.svg'
									alt='Link icon'
								/>
							</div>
							<a
								className='projects__list-link'
								href='https://dmytro-lubenchenko.github.io/Kuzyk/'
							>
								Kuzyk / Github Pages
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className='education main__education'>
				<h2 className='title education__title'>Education</h2>
				<div className='education__list'>
					<div className='education__list-item'>
						<div className='education__list-content'>
							<div className='education__list-icon'>
								<img
									className='education__list-ico'
									src='./img/main/education/eu_logo.svg'
									alt='EU logo'
								/>
							</div>
							<div className='education__list-subject'>European University</div>
						</div>
						<div className='education__list-profession'>
							Information systems and technologies
						</div>
						<div className='education__list-story'>
							<div className='education__list-period'>Sep 2005 - Jun 2011</div>
							<div className='education__list-location'>Lviv, Ukraine</div>
						</div>
					</div>
				</div>
			</section>
			<section className='courses main__courses'>
				<h2 className='title courses__title'>Courses</h2>
				<div className='courses__list'>
					<div className='courses__list-item'>
						<div className='courses__list-role'>
							<div className='courses__list-icon soft-serve'>
								<img
									className='courses__list-ico'
									src='./img/main/courses/SoftServe_University.png'
									alt='Company logo'
								/>
							</div>
							<div className='courses__list-body'>
								<div className='courses__list-theme'>
									App Development Fundamentals HTML5/CSS3/JavaScript
								</div>
								<div className='courses__list-company'>SoftServe</div>
							</div>
						</div>
						<div className='courses__list-story'>
							<div className='courses__list-period'>Oct 16 - Nov 16</div>
							<div className='courses__list-location'>Lviv, Ukraine</div>
						</div>
					</div>
					<div className='courses__list-item'>
						<div className='courses__list-role'>
							<div className='courses__list-icon epam'>
								<img
									className='courses__list-ico'
									src='./img/main/courses/epam-logo.svg'
									alt='Company logo'
								/>
								<img
									className='courses__list-ico'
									src='./img/main/courses/epam-university-program-logo.svg'
									alt='Company logo'
								/>
							</div>
							<div className='courses__list-body'>
								<div className='courses__list-theme'>
									Frontend Self-paced Course Autumn 2021
								</div>
								<div className='courses__list-company'>EPAM University</div>
							</div>
						</div>
						<div className='courses__list-story'>
							<div className='courses__list-period'>Sep 21 - Dec 21</div>
							<div className='courses__list-location'>Lviv, Ukraine</div>
						</div>
					</div>
					<div className='courses__list-item'>
						<div className='courses__list-role'>
							<div className='courses__list-icon go-it'>
								<img
									className='courses__list-ico'
									src='./img/main/courses/goit_logo.png'
									alt='Company logo'
								/>
							</div>
							<div className='courses__list-body'>
								<div className='courses__list-theme'>HTML/CSS Marathon</div>
								<div className='courses__list-company'>GO IT</div>
							</div>
						</div>
						<div className='courses__list-story'>
							<div className='courses__list-period'>Nov 22 - Nov 22</div>
							<div className='courses__list-location'>Lviv, Ukraine</div>
						</div>
					</div>
				</div>
			</section>
			<section className='skills main__skills'>
				<h2 className='title skills__title'>Skills</h2>
				<div className='skills__column column-skills'>
					<div className='skills__column-header'>
						<div className='skills__column-icon'>
							<img
								className='skills__column-ico'
								src='./img/main/skills/development.svg'
								alt='Development icon'
							/>
						</div>
						<h3 className='skills__column-subject'>Development</h3>
					</div>
					<div className='skills__column-list'>
						<ul className='skills__column-item'>
							<li className='skills__column-skill'>VueJS</li>
						</ul>
						<ul className='skills__column-item'>
							<li className='skills__column-skill'>WebPack</li>
						</ul>
						<ul className='skills__column-item skills__column-second-grid'>
							<li className='skills__column-skill skills__column-span'>SASS</li>
							<span className='skills__column-vertical skills__column-span'></span>
							<li className='skills__column-skill skills__column-span'>LESS</li>
						</ul>
						<ul className='skills__column-item skills__column-grid'>
							<li className='skills__column-skill skills__column-span'>HTML</li>
							<span className='skills__column-vertical skills__column-span'></span>
							<li className='skills__column-skill'>CSS</li>
							<span className='skills__column-horizontal'></span>
							<li className='skills__column-skill'>JS</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='tools main__tools'>
				<h2 className='title tools__title'>Tools</h2>
				<div className='tools__list'>
					<div className='tools__list-column'>
						<div className='tools__column-header'>
							<div className='tools__column-icon'>
								<img
									className='tools__column-ico'
									src='./img/main/tools/soft-skills.svg'
									alt='Development icon'
								/>
							</div>
							<h3 className='tools__column-subject'>Soft skills</h3>
						</div>
						<div className='tools__column-items'>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/scrum.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Scrum</div>
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/teamwork.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Teamwork</div>
								{/* <p className="tools__list-description">UI Design, prototyping</p> */}
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/self-study.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Ability to self study</div>
								{/* <p className="tools__list-description">UI Design, prototyping</p> */}
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/problem-solving.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Problem-solving</div>
								{/* <p className="tools__list-description">UI Design, prototyping</p> */}
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/communication.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Communication</div>
								{/* <p className="tools__list-description">UI Design, prototyping</p> */}
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/work-ethic.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Work ethic</div>
								{/* <p className="tools__list-description">UI Design, prototyping</p> */}
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/adaptability.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Adaptability</div>
								{/* <!-- <p className="tools__list-description">UI Design, prototyping</p> --> */}
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon'>
									<img
										className='tools__list-ico'
										src='./img/main/tools/soft skills/attention-to-detail.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Attention to detail</div>
								{/* <!-- <p className="tools__list-description">UI Design, prototyping</p> --> */}
							</div>
						</div>
					</div>
					<div className='tools__list-column'>
						<div className='tools__column-header'>
							<div className='tools__column-icon'>
								<img
									className='tools__column-ico'
									src='./img/main/tools/tech-skills.svg'
									alt='Development icon'
								/>
							</div>
							<h3 className='tools__column-subject'>Tools Skills</h3>
						</div>
						<div className='tools__column-items-second'>
							<div className='tools__list-item'>
								<div className='tools__list-icon tools__list-icon-rounded'>
									<img
										className='tools__list-ico tools__list-ico-rounded'
										src='./img/main/tools/tech skills/figma.svg'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Figma</div>
								<p className='tools__list-description'>UI Design, prototyping</p>
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon tools__list-icon-rounded'>
									<img
										className='tools__list-ico tools__list-ico-rounded'
										src='./img/main/tools/tech skills/Visual_Studio_Code.png'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>VS Code</div>
								<p className='tools__list-description'>Code, source-code editor</p>
							</div>
							<div className='tools__list-item'>
								<div className='tools__list-icon tools__list-icon-rounded'>
									<img
										className='tools__list-ico tools__list-ico-rounded'
										src='./img/main/tools/tech skills/Github.png'
										alt='Tools icon'
									/>
								</div>
								<div className='tools__list-subject'>Github Desktop</div>
								<p className='tools__list-description'>Hosting, hosting service</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RightSidebar
