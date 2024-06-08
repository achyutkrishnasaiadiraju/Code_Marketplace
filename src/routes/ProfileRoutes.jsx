import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes'
import {
	ProfilePageLayout,
	ProfilePage,
	ProfileFollowersPage,
	ProfileFollowingPage,
	ProfileFollowingTopicPage,
	ProfileSubscribedCodePage,
} from '../pages/profile'
import { NotFoundPage } from '../pages'

const ProfileRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<ProtectedRoute>
						<ProfilePageLayout />
					</ProtectedRoute>
				}
			>
				<Route path='/' element={<ProfilePage />} />
				<Route path='/followers' element={<ProfileFollowersPage />} />
				<Route path='/following' element={<ProfileFollowingPage />} />
				<Route
					path='/following-topic'
					element={<ProfileFollowingTopicPage />}
				/>
				<Route
					path='/subscribed-code'
					element={<ProfileSubscribedCodePage />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default ProfileRoutes
