import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Box } from '@mui/material';
import { events } from '../../../Data/Events/eventsMap';

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

export default function Map() {
	return (
		<Box style={{ height: 500, width: '100%' }}>
			<MapContainer
				center={[50.4097, -4.225]}
				zoom={8.5}
				style={{ height: '100%', width: '100%' }}>
				<TileLayer
					attribution='&copy; OpenStreetMap contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{events.map((event) => (
					<Marker key={event.id} position={[event.lat, event.lng]}>
						<Popup>
							<strong>{event.title}</strong>
							<br />
							{event.venue}
							<br />
							{event.location}
							<br />
							{event.type}
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</Box>
	);
}
