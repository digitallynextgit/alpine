'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import react-leaflet components with no SSR
const MapContainer = dynamic(
	() => import('react-leaflet').then((mod) => mod.MapContainer),
	{ ssr: false }
)
const TileLayer = dynamic(
	() => import('react-leaflet').then((mod) => mod.TileLayer),
	{ ssr: false }
)
const Marker = dynamic(
	() => import('react-leaflet').then((mod) => mod.Marker),
	{ ssr: false }
)
const Popup = dynamic(
	() => import('react-leaflet').then((mod) => mod.Popup),
	{ ssr: false }
)

const Map: React.FC = () => {
	const position: [number, number] = [34.0522, -118.2437] // Los Angeles coordinates
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		// Import Leaflet dynamically only on client side
		import('leaflet').then((L) => {
			// Fix Leaflet marker icons
			delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl
			L.Icon.Default.mergeOptions({
				iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
				iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
				shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
			})
		})
	}, [])

	if (!isMounted) {
		return <div style={{ height: '400px', width: '100%' }} />
	}

	return (
		<div style={{ height: '400px', width: '100%' }}>
			<link
				rel="stylesheet"
				href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
				integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
				crossOrigin=""
			/>
			<MapContainer
				center={position}
				zoom={13}
				style={{ height: '100%', width: '100%' }}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						Alpine Talent <br /> Los Angeles Office
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}
export default Map
