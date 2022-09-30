import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';

import Header from './components/Header';
import Switch from './components/Switch';
import CategoryList from './components/CategoryList';
import PiceData from './data/PiceData';
import HranaData from './data/HranaData';
import ContentList from './components/ContentList';
import Footer from './components/Footer';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

function App() {
	let controls = useAnimationControls();

	useEffect(() => {
		setTimeout(() => {
			/* TODO
			 * Preload images
			 */

			/* NOTE Loading animation set*/
			controls.set({
				clipPath: 'circle(100% at 50% 50%)',
				transition: { duration: 1 },
			});

			/* NOTE Start loading animation (make circle smaller) */
			controls.start({
				clipPath: 'circle(0% at 50% 50%)',
			});
			// 4000
		}, 4000);
	}, []);

	const svgVariants = {
		hidden: {
			fillopacity: 0,
		},
		shown: {
			fillopacity: 1,
			transition: {
				delay: 0.3,
				duration: 2,
				ease: 'easInOut',
			},
		},
	};

	const pathVariants = {
		hidden: {
			pathLength: 0,
		},
		shown: {
			pathLength: 1,
			transition: {
				delay: 0.4,
				duration: 2.8,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<AppContextProvider>
			<Router>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						className="top"
						key="foreground"
						animate={controls}
						transition={{ duration: 0.9, type: 'ease' }}
					>
						<motion.svg
							variant={svgVariants}
							initial="hidden"
							animate="shown"
							className="logoSvg"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1266 768"
						>
							<motion.g id="otline">
								<motion.path
									variants={pathVariants}
									initial="hidden"
									animate="shown"
									id="rr"
									d="M494.6,326.4v24.9c0,3.52,0.13,6.07,0.4,7.65c0.27,1.59,0.67,2.78,1.21,3.59
                c0.54,0.81,1.27,1.46,2.2,1.98c0.93,0.51,2.51,1.09,4.76,1.72v3.59h-30.91v-3.59c3.03-0.78,5.05-1.65,6.08-2.6s1.7-2.31,2.01-4.06
                c0.32-1.76,0.48-4.44,0.48-8.06v-63.35c0-3.37-0.12-5.82-0.37-7.36c-0.25-1.54-0.65-2.73-1.21-3.59c-0.56-0.85-1.31-1.54-2.23-2.05
                c-0.93-0.51-2.52-1.09-4.76-1.72v-3.59h36.25c11.43,0,19.97,2.08,25.63,6.23c5.66,4.15,8.5,10.6,8.5,19.34
                c0,6.69-1.84,12.38-5.53,17.07c-3.69,4.69-9.22,8.35-16.59,10.99v0.59c2.98,1.22,5.53,2.97,7.65,5.24s4.48,5.8,7.07,10.58
                l6.59,12.01c1.9,3.52,3.54,6.2,4.91,8.06c1.37,1.86,2.76,3.27,4.17,4.25c1.42,0.98,3.3,1.66,5.64,2.05v3.59h-20.29
                c-1.86-2.59-3.61-5.37-5.27-8.35c-1.66-2.98-3.3-6.01-4.91-9.08l-6.45-12.23c-1.95-3.71-3.55-6.45-4.8-8.2s-2.39-2.99-3.44-3.7
                c-1.05-0.71-2.17-1.2-3.37-1.46c-1.2-0.27-2.99-0.4-5.38-0.4H494.6z M494.6,276.6v43.51h8.28c4.25,0,7.69-0.3,10.33-0.92
                c2.64-0.61,5.08-1.77,7.32-3.48c2.25-1.71,4.04-4.09,5.38-7.14c1.34-3.05,2.01-6.8,2.01-11.24c0-4.64-0.79-8.5-2.38-11.57
                c-1.59-3.08-3.99-5.42-7.21-7.03s-7.57-2.42-13.04-2.42C500.9,276.31,497.33,276.41,494.6,276.6z"
								/>
								<motion.path
									variants={pathVariants}
									initial="hidden"
									animate="shown"
									id="i"
									d="M563.66,366.25c1.9-0.59,3.26-1.1,4.06-1.54s1.49-1.05,2.05-1.83c0.56-0.78,1-1.98,1.32-3.59
                c0.32-1.61,0.48-4.13,0.48-7.54v-31.93c0-3.12-0.05-5.64-0.15-7.54c-0.1-1.9-0.44-3.43-1.03-4.58c-0.59-1.15-1.48-2-2.67-2.56
                c-1.2-0.56-2.89-1.04-5.09-1.43v-3.88l17.07-0.66h4.47v52.37c0,4.2,0.19,7.12,0.59,8.75c0.39,1.64,1.14,2.88,2.23,3.74
                c1.1,0.85,2.89,1.6,5.38,2.23v3.59h-28.71V366.25z M584.61,271.11v14.21h-13.48v-14.21H584.61z"
								/>
								<motion.path
									variants={pathVariants}
									initial="hidden"
									animate="shown"
									id="vv"
									d="M626.51,299.82v3.59c-2.25,0.54-3.83,1.05-4.76,1.54c-0.93,0.49-1.62,1.12-2.09,1.9
                c-0.46,0.78-0.7,1.83-0.7,3.15s0.16,2.7,0.48,4.14c0.32,1.44,0.82,3.11,1.5,5.02l12.74,37.06l14.94-35.52
                c0.98-2.34,1.66-4.27,2.05-5.79c0.39-1.51,0.59-2.93,0.59-4.25c0-2.05-0.55-3.61-1.65-4.69c-1.1-1.07-3.11-1.93-6.04-2.56v-3.59
                h27.39v3.59c-1.9,0.39-3.37,0.99-4.39,1.79s-2.05,2.08-3.08,3.81c-1.03,1.73-2.25,4.16-3.66,7.29l-24.68,54.27h-8.64l-19.85-54.71
                c-1.37-3.76-2.45-6.34-3.26-7.73s-1.68-2.43-2.64-3.11c-0.95-0.68-2.33-1.22-4.14-1.61v-3.59H626.51z"
								/>
								<motion.path
									variants={pathVariants}
									initial="hidden"
									animate="shown"
									id="e"
									d="M733.51,357.39c-3.13,3.27-6,5.84-8.61,7.69c-2.61,1.86-5.48,3.31-8.61,4.36
                c-3.13,1.05-6.57,1.57-10.33,1.57c-10.06,0-17.65-3.01-22.78-9.05c-5.13-6.03-7.69-14.93-7.69-26.7c0-7.27,1.31-13.7,3.92-19.26
                c2.61-5.57,6.34-9.86,11.17-12.89c4.83-3.03,10.4-4.54,16.7-4.54c4.93,0,9.13,0.78,12.6,2.34c3.47,1.56,6.24,3.7,8.31,6.41
                c2.08,2.71,3.69,6.13,4.83,10.25c1.15,4.13,1.79,9.51,1.94,16.15h-46.14v1.32c0,5.76,0.65,10.61,1.94,14.54
                c1.29,3.93,3.42,7.01,6.37,9.23c2.95,2.22,6.8,3.33,11.54,3.33c4,0,7.6-0.74,10.8-2.23c3.2-1.49,6.38-3.92,9.56-7.29L733.51,357.39
                z M721.21,327.65c-0.29-5.27-0.95-9.58-1.98-12.93c-1.03-3.34-2.56-5.91-4.61-7.69c-2.05-1.78-4.74-2.67-8.06-2.67
                c-5.03,0-9.05,2.01-12.05,6.04s-4.77,9.78-5.31,17.25H721.21z"
								/>
								<motion.path
									variants={pathVariants}
									initial="hidden"
									animate="shown"
									id="r"
									d="M767.94,311.98l1.03,0.22c2.68-3.27,5.17-5.85,7.47-7.73c2.29-1.88,4.77-3.33,7.43-4.36
                c2.66-1.03,5.68-1.54,9.05-1.54c2.83,0,5.39,0.15,7.69,0.44v16.85h-8.28c-1.17-2.64-2.42-4.55-3.74-5.75
                c-1.32-1.2-3.13-1.79-5.42-1.79c-1.76,0-3.5,0.51-5.24,1.54c-1.73,1.03-3.41,2.52-5.02,4.47c-1.61,1.95-2.72,3.78-3.33,5.49
                c-0.61,1.71-0.92,3.74-0.92,6.08v25.63c0,4.44,0.27,7.51,0.81,9.19c0.54,1.68,1.43,2.92,2.67,3.7c1.25,0.78,3.11,1.39,5.6,1.83
                v3.59h-29.52v-3.59c1.85-0.59,3.19-1.1,3.99-1.54s1.5-1.05,2.09-1.83c0.59-0.78,1.03-1.98,1.32-3.59s0.44-4.13,0.44-7.54v-31.93
                c0-3.12-0.05-5.64-0.15-7.54c-0.1-1.9-0.44-3.43-1.03-4.58c-0.59-1.15-1.48-2-2.67-2.56c-1.2-0.56-2.89-1.04-5.09-1.43v-3.81
                l17.14-0.73h4.47L767.94,311.98z"
								/>
							</motion.g>
						</motion.svg>
					</motion.div>
					<motion.div className="container-main">
						<Routes>
							<Route
								exact
								path="/"
								element={
									<>
										<Header />
										<Switch />
										<CategoryList />
										<div className="filler" />
										<Footer />
									</>
								}
							></Route>
							<Route
								path="/hrana"
								element={
									<>
										<Header />
										<Switch />
										<CategoryList />
										<div className="filler" />
										<Footer />
									</>
								}
							/>

							{PiceData.map((pice) => {
								return (
									/* NOTE Get id with url params and check piceData array with that id in component */
									<Route
										key={pice.id}
										path={`/pice/:id`}
										element={<ContentList />}
									></Route>
								);
							})}

							{HranaData.map((hrana) => {
								return (
									/* NOTE Get id with url params and check hranaData array with that id in component */
									<Route
										key={hrana.id}
										path={`/hrana/:id`}
										element={<ContentList />}
									></Route>
								);
							})}
						</Routes>
					</motion.div>
				</AnimatePresence>
			</Router>
		</AppContextProvider>
	);
}

export default App;
