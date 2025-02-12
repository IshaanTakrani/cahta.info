import React, { useState } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

function Counter() {
	const [open, setOpen] = React.useState(false);

	return (
		<Tabs defaultValue="top">
			<TabList underlinePlacement="bottom">
				<Tab value="top" indicatorPlacement="bottom">
					Top
				</Tab>
				<Tab value="right" indicatorPlacement="bottom">
					Right
				</Tab>
				<Tab value="bottom" indicatorPlacement="bottom">
					Bottom
				</Tab>
				<Tab value="left" indicatorPlacement="bottom">
					Left
				</Tab>
			</TabList>
			<TabPanel value="top">
				IndicatorPlacement <b>Top</b>
			</TabPanel>
			<TabPanel value="right">
				IndicatorPlacement <b>Right</b>
			</TabPanel>
			<TabPanel value="bottom">
				IndicatorPlacement <b>Bottom</b>
			</TabPanel>
			<TabPanel value="left">
				IndicatorPlacement <b>Left</b>
			</TabPanel>
		</Tabs>
	);
}

export default Counter;
