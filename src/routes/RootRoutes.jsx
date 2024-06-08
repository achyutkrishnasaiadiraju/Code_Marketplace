import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
	LoginPage,
	RegisterPage,
	HomePage,
	CodeDetailPage,
	CodeUploadPage,
	CollaborationPage,
	DocumentationPage,
	SubscriptionPage,
	NotFoundPage,
} from '../pages'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileRoutes from './ProfileRoutes'
import TopicRoutes from './TopicRoutes'

const RootRoutes = () => {
	const location = useLocation()
	const hideHeaderFooter = ['/login', '/register'].includes(location.pathname)

	return (
		<>
			{!hideHeaderFooter && <Header />}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/code/:id' element={<CodeDetailPage />} />
				<Route path='/upload' element={<CodeUploadPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/profile/*' element={<ProfileRoutes />} />
				<Route path='/topics/*' element={<TopicRoutes />} />
				<Route path='/collaboration' element={<CollaborationPage />} />
				<Route path='/documentation' element={<DocumentationPage />} />
				<Route path='/subscription' element={<SubscriptionPage />} />
				<Route path='*' exact={true} element={<NotFoundPage />} />
			</Routes>
			{!hideHeaderFooter && <Footer />}
		</>
	)
}

export default RootRoutes
