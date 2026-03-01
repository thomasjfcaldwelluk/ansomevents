import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function AboutTeam({ id, title, members }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<h2>{title}</h2>
			<div style={{ display: 'flex', gap: '20px' }}>
				{members.map((member, index) => (
					<div key={index}>
						{/* <img
							src={member.photo}
							alt={`${member.name}'s photo`}
							style={{ width: '100%' }}
						/> */}
						<h3>{member.name}</h3>
						<p>
							<strong>{member.role}</strong>
						</p>
						<p>{member.bio}</p>
					</div>
				))}
			</div>
		</SectionWrapper>
	);
}
