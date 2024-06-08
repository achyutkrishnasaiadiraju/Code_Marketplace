import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes'
import { TopicsPageLayout, TopicsPage } from '../pages/topics'
import { NotFoundPage } from '../pages'

const TopicRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<TopicsPageLayout />}>
				<Route path='/' element={<TopicsPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default TopicRoutes
