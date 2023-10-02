import React from 'react';
import { Avatar, Box, Button, Grid, LinearProgress, Paper, Typography, styled } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import skills from './constant';

interface SkillsProps {}

const SlowLinearProgress = styled(LinearProgress)({
	'& .MuiLinearProgress-bar': {
		animationDuration: '8s',
	},
});
console.log(SlowLinearProgress);

const Skills: ReactFCC<SkillsProps> = () => {
	const [showAll, setShowAll] = React.useState(false);
	const [skillsToShow, setSkillsToShow] = React.useState(skills.slice(0, 6));

	React.useEffect(() => {
		if (showAll) {
			setSkillsToShow(skills);
		} else {
			setSkillsToShow(skills.filter((skill) => skill.isTopSkill));
		}
	}, [showAll]);

	const onShowSkillsClick = () => {
		setShowAll(!showAll);

		document.getElementById('skills')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<Paper
			sx={{
				py: {
					xs: 6,
					sm: 8,
					md: 10,
				},
				px: {
					xs: 1,
					sm: 4,
					md: 6,
				},
				backgroundColor: '#fff',
				borderRadius: 5,
				// backgroundImage:
				// 	'url(https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=960&q=80)',
				backgroundSize: 'cover',
				backgroundPosition: 'center bottom',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: {
					xs: 'scroll',
					sm: 'fixed',
					md: 'fixed',
				},
			}}
			elevation={1}
			id="skills"
		>
			<Typography
				variant="h4"
				component="h2"
				fontWeight={300}
				mb={{
					xs: 4,
					sm: 6,
					md: 8,
				}}
				sx={{
					textAlign: 'center',
					// color: '#fff',
				}}
			>
				Tech Exposure
			</Typography>
			<Grid
				container
				maxWidth="lg"
				spacing={0}
				sx={{
					gap: {
						xs: 1,
						sm: 2,
						// md: 4,
					},
					justifyContent: 'center',
					mx: 'auto',
					textAlign: 'center',
				}}
			>
				{skillsToShow.map((skill) => (
					<Box
						key={skill.slug}
						sx={{
							backgroundColor: 'rgba(255,255,255,0.5)',
							borderRadius: 2,
							border: '1px solid rgba(255,255,255,0.1)',
							// textShadow: '0 0 10px rgba(0,0,0,0.5)',
							height: '100%',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
							p: 1,
							width: {
								xs: '72px',
								sm: '80px',
								// md: '96px',
							},
						}}
					>
						<Avatar
							variant="square"
							sx={{
								width: {
									xs: '32px',
									sm: '48px',
									md: '64px',
								},
								maxWidth: '100%',
								height: {
									xs: '32px',
									sm: '48px',
									md: '64px',
								},
								backgroundColor: 'transparent',
								mx: 'auto',
								mb: 1,
								fontSize: '3rem',
							}}
							component="span"
						>
							{skill.type === 'image' ? (
								<img
									src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-${
										skill.variant || 'plain'
									}.svg`}
									alt={skill.slug}
									width="100%"
									height="100%"
									style={{
										maxWidth: '100%',
									}}
								/>
							) : (
								<i className={`devicon-${skill.slug}-${skill.variant || 'plain'} colored`} />
							)}
						</Avatar>
						<Typography
							variant="caption"
							component="p"
							fontWeight={400}
							sx={{
								// textShadow: '0 0 10px rgba(0,0,0,0.5)',
								color: '#000',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
						>
							{skill.name}
						</Typography>
						{skill.expertise && (
							<SlowLinearProgress
								variant="determinate"
								value={skill.expertise}
								sx={{
									borderRadius: 2,
									height: '3px',
								}}
							/>
						)}
					</Box>
				))}
			</Grid>
			<Box
				sx={{
					textAlign: 'center',
				}}
			>
				<Button
					size="small"
					variant="contained"
					sx={{
						textAlign: 'center',
						mt: {
							xs: 5,
							sm: 7,
							md: 10,
						},
					}}
					onClick={onShowSkillsClick}
				>
					<Typography variant="button" component="h3" fontWeight={300}>
						{showAll ? 'Show Top' : 'Show All'}
					</Typography>
				</Button>
			</Box>
		</Paper>
	);
};

export default Skills;
