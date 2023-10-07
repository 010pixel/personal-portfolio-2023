import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';

interface ProjectAreasProps {}

const ProjectAreas: ReactFCC<ProjectAreasProps> = () => {
	return (
		<Paper
			id="project-areas"
			sx={{
				p: {
					xs: 5,
					sm: 8,
					md: 10,
				},
				backgroundColor: '#fff',
				borderRadius: 5,
				display: 'flex',
				flexDirection: {
					xs: 'column',
					sm: 'row',
				},
				gap: {
					xs: 1,
					sm: 5,
				},
				justifyContent: 'center',
				alignItems: 'center',
			}}
			elevation={0}
		>
			<Typography
				variant="h4"
				component="h2"
				fontWeight={300}
				mt={2}
				mb={{
					xs: 2,
					sm: 4,
					md: 4,
				}}
				sx={{
					textAlign: 'center',
				}}
			>
				P<TypeWhenInView text="roject Areas" once />
			</Typography>
			<Box>
				<Typography
					variant="body1"
					component="div"
					gutterBottom
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<ul>
						<li>Web Applications</li>
						<li>
							Browser Extensions <small>(Google Chrome, Mozilla Firefox, Microsoft Edge)</small>
						</li>
						<li>WordPress Plugins</li>
						<li>
							Cloud Computing <small>(AWS, GCP)</small>
						</li>
						<li>
							Artificial Intelligence <small>(experimenting)</small>
						</li>
					</ul>
				</Typography>
			</Box>
		</Paper>
	);
};

export default ProjectAreas;
